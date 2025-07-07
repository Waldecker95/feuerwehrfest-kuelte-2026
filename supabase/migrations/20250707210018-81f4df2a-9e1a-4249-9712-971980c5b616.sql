-- Add newsletter subscription field to beerpong_registrations table
ALTER TABLE public.beerpong_registrations 
ADD COLUMN newsletter_subscription BOOLEAN DEFAULT false;