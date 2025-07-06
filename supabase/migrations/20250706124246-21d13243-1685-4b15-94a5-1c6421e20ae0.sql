-- Create table for Beerpong team registrations
CREATE TABLE public.beerpong_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  team_name TEXT NOT NULL,
  player1 TEXT NOT NULL,
  player2 TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.beerpong_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no authentication required)
CREATE POLICY "Anyone can view registrations" 
ON public.beerpong_registrations 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create registrations" 
ON public.beerpong_registrations 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_beerpong_registrations_updated_at
BEFORE UPDATE ON public.beerpong_registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add email validation constraint
ALTER TABLE public.beerpong_registrations 
ADD CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$');

-- Add index for faster queries
CREATE INDEX idx_beerpong_registrations_created_at ON public.beerpong_registrations(created_at);
CREATE INDEX idx_beerpong_registrations_team_name ON public.beerpong_registrations(team_name);