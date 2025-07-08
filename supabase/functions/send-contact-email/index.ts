import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email from:", email, "to: info@kuelte-events.de");

    // Send email to the organization
    const emailResponse = await resend.emails.send({
      from: "KÜLTE Event Contact <onboarding@resend.dev>",
      to: ["info@kuelte-events.de"],
      subject: `Kontaktanfrage: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="de">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Kontaktanfrage KÜLTE Event 2025</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #16a085, #1abc9c); color: white; padding: 20px; margin: -30px -30px 30px -30px; border-radius: 10px 10px 0 0; text-align: center; }
            .contact-info { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a085; }
            .info-row { display: flex; margin: 10px 0; align-items: flex-start; }
            .info-label { font-weight: bold; color: #16a085; min-width: 100px; margin-right: 15px; }
            .info-value { flex: 1; background: white; padding: 8px 12px; border-radius: 4px; border: 1px solid #e9ecef; }
            .message-box { background: white; padding: 15px; border-radius: 4px; border: 1px solid #e9ecef; white-space: pre-wrap; font-family: Georgia, serif; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e9ecef; text-align: center; color: #666; font-size: 14px; }
            .event-badge { background: #16a085; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; display: inline-block; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">🏆 KÜLTE Event 2025</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">Neue Kontaktanfrage eingegangen</p>
            </div>
            
            <div class="contact-info">
              <h3 style="margin-top: 0; color: #16a085;">📧 Kontaktdaten</h3>
              
              <div class="info-row">
                <div class="info-label">👤 Name:</div>
                <div class="info-value">${name}</div>
              </div>
              
              <div class="info-row">
                <div class="info-label">📬 E-Mail:</div>
                <div class="info-value"><a href="mailto:${email}" style="color: #16a085; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="info-row">
                <div class="info-label">📋 Betreff:</div>
                <div class="info-value">${subject}</div>
              </div>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #16a085; margin-bottom: 10px;">💬 Nachricht</h3>
              <div class="message-box">${message.replace(/\n/g, '\n')}</div>
            </div>
            
            <div class="footer">
              <div class="event-badge">KÜLTE Event 2025 • 23.-24. August</div>
              <p style="margin: 15px 0 5px 0;">Diese Nachricht wurde über das offizielle Kontaktformular gesendet.</p>
              <p style="margin: 0; font-size: 12px;">Zeitstempel: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);