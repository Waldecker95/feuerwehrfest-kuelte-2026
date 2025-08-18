import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TeamRegistrationRequest {
  teamName: string;
  player1: string;
  player2: string;
  email: string;
  phone?: string;
  newsletterSubscription?: boolean;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Register team function called');
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { teamName, player1, player2, email, phone, newsletterSubscription } = await req.json() as TeamRegistrationRequest;

    console.log('Registration data:', { teamName, player1, player2, email, phone, newsletterSubscription });

    // Validate required fields
    if (!teamName || !player1 || !player2 || !email) {
      console.error('Missing required fields');
      return new Response(
        JSON.stringify({ error: 'Alle Pflichtfelder müssen ausgefüllt werden' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format');
      return new Response(
        JSON.stringify({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Check for existing registration
    const { data: existingRegistration, error: checkError } = await supabaseClient
      .from('beerpong_registrations')
      .select('id')
      .eq('email', email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing registration:', checkError);
      return new Response(
        JSON.stringify({ error: 'Fehler beim Überprüfen der Anmeldung' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    if (existingRegistration) {
      console.error('Team already registered');
      return new Response(
        JSON.stringify({ error: 'Ein Team mit dieser E-Mail-Adresse ist bereits angemeldet' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Insert new registration using service role key
    const { data: registration, error: insertError } = await supabaseClient
      .from('beerpong_registrations')
      .insert({
        team_name: teamName,
        player1,
        player2,
        email,
        phone,
        newsletter_subscription: newsletterSubscription || false
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting registration:', insertError);
      return new Response(
        JSON.stringify({ error: 'Fehler beim Speichern der Anmeldung' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Registration successful:', registration);

    // Send confirmation email
    try {
      const { error: emailError } = await supabaseClient.functions.invoke('send-registration-confirmation', {
        body: {
          teamId: registration.id,
          teamName,
          player1,
          player2,
          email
        }
      });

      if (emailError) {
        console.error('Error sending confirmation email:', emailError);
        // Don't fail the registration if email fails
      }
    } catch (emailError) {
      console.error('Error calling email function:', emailError);
      // Don't fail the registration if email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Anmeldung erfolgreich! Sie erhalten eine Bestätigungs-E-Mail.',
        teamId: registration.id
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Unexpected error in register-team function:', error);
    return new Response(
      JSON.stringify({ error: 'Ein unerwarteter Fehler ist aufgetreten' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});