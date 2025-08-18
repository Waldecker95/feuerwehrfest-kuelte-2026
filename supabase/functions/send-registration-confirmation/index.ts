import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.3';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface RegistrationConfirmationRequest {
  teamId: string;
  teamName: string;
  player1: string;
  player2: string;
  email: string;
}

const createConfirmationEmail = (teamName: string, player1: string, player2: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Beerpong-Anmeldung bestätigt</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
    <h1 style="color: white; margin: 0; font-size: 28px;">🏆 Anmeldung bestätigt!</h1>
    <p style="color: white; margin: 10px 0 0 0; font-size: 18px;">DORFFEST KÜLTE 2025</p>
  </div>
  
  <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
    <h2 style="color: #2c3e50; margin-top: 0;">Herzlichen Glückwunsch, Team ${teamName}!</h2>
    <p>Eure Anmeldung für das Beerpong-Turnier beim Dorffest Külte 2025 ist erfolgreich eingegangen.</p>
    
    <div style="background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea;">
      <h3 style="margin-top: 0; color: #2c3e50;">Team-Details:</h3>
      <ul style="list-style: none; padding: 0;">
        <li style="padding: 5px 0;"><strong>Team-Name:</strong> ${teamName}</li>
        <li style="padding: 5px 0;"><strong>Spieler 1:</strong> ${player1}</li>
        <li style="padding: 5px 0;"><strong>Spieler 2:</strong> ${player2}</li>
      </ul>
    </div>
  </div>
  
  <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
    <h3 style="color: #2d5016; margin-top: 0;">📅 Wichtige Turnier-Informationen:</h3>
    <ul style="color: #2d5016;">
      <li><strong>Datum:</strong> Sonntag, 24. August 2025</li>
      <li><strong>Uhrzeit:</strong> Turnierbeginn um 14:30 Uhr</li>
      <li><strong>Treffpunkt:</strong> Bitte seid 30 Minuten vor Turnierbeginn da</li>
      <li><strong>Startgebühr:</strong> 15€ (bitte vor Ort bezahlen)</li>
      <li><strong>Preise:</strong> Tolle Preise im Wert von 250€ warten auf euch!</li>
    </ul>
  </div>
  
  <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
    <h3 style="color: #856404; margin-top: 0;">💡 Was ihr mitbringen solltet:</h3>
    <ul style="color: #856404;">
      <li>Gute Laune und Teamgeist</li>
      <li>Die Startgebühr von 15€</li>
      <li>Personalausweise zur Verifikation</li>
      <li>Optional: Eigene Getränke (alkoholfrei für das Turnier empfohlen)</li>
    </ul>
  </div>
  
  <div style="text-align: center; margin-bottom: 25px;">
    <p style="color: #666;">Wir senden euch 7 Tage vor dem Event noch einen Reminder mit allen wichtigen Details!</p>
  </div>
  
  <div style="border-top: 2px solid #eee; padding-top: 20px; text-align: center; color: #666;">
    <p>Bei Fragen könnt ihr uns jederzeit kontaktieren:</p>
    <p><strong>E-Mail:</strong> info@kuelte-events.de</p>
    <p><strong>Instagram:</strong> @DORFFEST_KULTE_2025</p>
    <p style="margin-top: 20px; font-size: 14px;">Wir freuen uns auf euch beim Dorffest Külte 2025! 🎉</p>
  </div>
</body>
</html>
`;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { teamId, teamName, player1, player2, email }: RegistrationConfirmationRequest = await req.json();

    console.log(`Sending confirmation email for team: ${teamName} (ID: ${teamId})`);

    // Send confirmation email
    const emailResponse = await resend.emails.send({
      from: "DORFFEST KÜLTE 2025 <info@kuelte-events.de>",
      to: [email],
      subject: `✅ Beerpong-Anmeldung bestätigt - Team ${teamName}`,
      html: createConfirmationEmail(teamName, player1, player2),
    });

    console.log("Email sent successfully:", emailResponse);

    // Update database to mark confirmation as sent
    const { error: updateError } = await supabase
      .from('beerpong_registrations')
      .update({
        confirmation_sent: true,
        confirmation_sent_at: new Date().toISOString()
      })
      .eq('id', teamId);

    if (updateError) {
      console.error('Error updating confirmation status:', updateError);
      // Don't fail the request if email was sent successfully
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Confirmation email sent successfully',
      emailId: emailResponse.data?.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-registration-confirmation function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);