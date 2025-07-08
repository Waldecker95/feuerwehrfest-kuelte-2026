-- Add email tracking columns to beerpong_registrations table
ALTER TABLE public.beerpong_registrations 
ADD COLUMN confirmation_sent BOOLEAN DEFAULT false,
ADD COLUMN reminder_sent BOOLEAN DEFAULT false,
ADD COLUMN confirmation_sent_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN reminder_sent_at TIMESTAMP WITH TIME ZONE;

-- Add index for efficient querying of reminder candidates
CREATE INDEX idx_beerpong_registrations_reminder_status ON public.beerpong_registrations(reminder_sent, created_at);

-- Enable pg_cron extension for automated reminders
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Create cron job to send reminders 7 days before event (runs daily at 9 AM)
SELECT cron.schedule(
  'beerpong-event-reminder',
  '0 9 * * *', -- Daily at 9 AM
  $$
  select
    net.http_post(
        url:='https://ocvsjzwzjyjyfybytpld.supabase.co/functions/v1/send-event-reminder',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jdnNqend6anlqeWZ5Ynl0cGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MDM5NDgsImV4cCI6MjA2NzM3OTk0OH0.8jQQDos3ibDYMX1ui22F2K_Nd9yM7YF2EdobtGtKMC4"}'::jsonb,
        body:='{"scheduled": true}'::jsonb
    ) as request_id;
  $$
);