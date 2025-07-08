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

const createReminderEmail = (teamName: string, player1: string, player2: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Beerpong-Turnier Reminder</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
    <h1 style="color: white; margin: 0; font-size: 28px;">⏰ Nur noch 7 Tage!</h1>
    <p style="color: white; margin: 10px 0 0 0; font-size: 18px;">BEERPONG-TURNIER 2025</p>
  </div>
  
  <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
    <h2 style="color: #2c3e50; margin-top: 0;">Hallo Team ${teamName}! 👋</h2>
    <p>In genau einer Woche ist es soweit - das Beerpong-Turnier beim Dorffest Külte 2025 steht vor der Tür!</p>
    
    <div style="background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #ff6b6b;">
      <h3 style="margin-top: 0; color: #2c3e50;">Euer Team:</h3>
      <ul style="list-style: none; padding: 0;">
        <li style="padding: 5px 0;"><strong>Team-Name:</strong> ${teamName}</li>
        <li style="padding: 5px 0;"><strong>Spieler 1:</strong> ${player1}</li>
        <li style="padding: 5px 0;"><strong>Spieler 2:</strong> ${player2}</li>
      </ul>
    </div>
  </div>
  
  <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
    <h3 style="color: #856404; margin-top: 0;">🎯 Noch einmal alle wichtigen Infos:</h3>
    <ul style="color: #856404;">
      <li><strong>Datum:</strong> Sonntag, 24. August 2025</li>
      <li><strong>Uhrzeit:</strong> 13:00 Uhr (bitte 30 Min früher da sein)</li>
      <li><strong>Ort:</strong> Dorffest Külte 2025</li>
      <li><strong>Startgebühr:</strong> 15€ pro Team (bar vor Ort)</li>
      <li><strong>Mitzubringen:</strong> Personalausweise, gute Laune!</li>
    </ul>
  </div>
  
  <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
    <h3 style="color: #0c5460; margin-top: 0;">🏆 Das erwartet euch:</h3>
    <ul style="color: #0c5460;">
      <li>Spannendes Turnier mit fairen Gegnern</li>
      <li>Tolle Preise im Wert von 250€</li>
      <li>Professionelle Turnier-Organisation</li>
      <li>Jede Menge Spaß und gute Stimmung</li>
      <li>Verpflegung und Getränke vor Ort</li>
    </ul>
  </div>
  
  <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
    <h3 style="color: #2d5016; margin-top: 0;">💪 Bereitet euch vor:</h3>
    <p style="color: #2d5016;">Nutzt die nächsten Tage noch für ein paar Trainingsrunden! Checkt eure Wurftechnik und spielt euch als Team ein. Wir freuen uns auf packende Spiele!</p>
  </div>
  
  <div style="text-align: center; margin-bottom: 25px; padding: 20px; background: #f0f0f0; border-radius: 8px;">
    <h3 style="color: #333; margin-top: 0;">Habt ihr noch Fragen?</h3>
    <p style="color: #666; margin-bottom: 15px;">Meldet euch gerne bei uns:</p>
    <p><strong>E-Mail:</strong> info@kuelte-events.de</p>
    <p><strong>Instagram:</strong> @DORFFEST_KULTE_2025</p>
  </div>
  
  <div style="border-top: 2px solid #eee; padding-top: 20px; text-align: center;">
    <h2 style="color: #ff6b6b; margin-bottom: 10px;">Wir sehen uns in einer Woche! 🎉</h2>
    <p style="color: #666; font-size: 14px;">Team ${teamName}, macht euch bereit für ein unvergessliches Turnier!</p>
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
    console.log('Starting event reminder check...');
    
    // Calculate date 7 days before event (24.08.2025)
    const eventDate = new Date('2025-08-24');
    const reminderDate = new Date(eventDate);
    reminderDate.setDate(reminderDate.getDate() - 7);
    
    const today = new Date();
    const isReminderDay = today.toDateString() === reminderDate.toDateString();
    
    console.log(`Today: ${today.toDateString()}, Reminder Date: ${reminderDate.toDateString()}, Is Reminder Day: ${isReminderDay}`);
    
    if (!isReminderDay) {
      console.log('Not reminder day yet, skipping...');
      return new Response(JSON.stringify({ 
        message: 'Not reminder day yet',
        reminderDate: reminderDate.toDateString(),
        today: today.toDateString()
      }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Get all registrations that haven't received reminder yet
    const { data: registrations, error: fetchError } = await supabase
      .from('beerpong_registrations')
      .select('*')
      .eq('reminder_sent', false);

    if (fetchError) {
      throw new Error(`Error fetching registrations: ${fetchError.message}`);
    }

    console.log(`Found ${registrations?.length || 0} registrations needing reminders`);

    let successCount = 0;
    let errorCount = 0;

    // Send reminder emails
    for (const registration of registrations || []) {
      try {
        console.log(`Sending reminder to team: ${registration.team_name}`);

        const emailResponse = await resend.emails.send({
          from: "DORFFEST KÜLTE 2025 <info@kuelte-events.de>",
          to: [registration.email],
          subject: `⏰ Nur noch 7 Tage bis zum Beerpong-Turnier - Team ${registration.team_name}`,
          html: createReminderEmail(registration.team_name, registration.player1, registration.player2),
        });

        console.log(`Email sent to ${registration.email}:`, emailResponse);

        // Update database to mark reminder as sent
        const { error: updateError } = await supabase
          .from('beerpong_registrations')
          .update({
            reminder_sent: true,
            reminder_sent_at: new Date().toISOString()
          })
          .eq('id', registration.id);

        if (updateError) {
          console.error(`Error updating reminder status for ${registration.id}:`, updateError);
        }

        successCount++;
      } catch (emailError: any) {
        console.error(`Error sending reminder to ${registration.email}:`, emailError);
        errorCount++;
      }
    }

    return new Response(JSON.stringify({
      success: true,
      message: `Reminders processed: ${successCount} sent, ${errorCount} failed`,
      successCount,
      errorCount,
      totalProcessed: registrations?.length || 0
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-event-reminder function:", error);
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