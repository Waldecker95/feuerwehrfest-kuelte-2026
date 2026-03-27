-- ============================================================
-- Feuerwehrfest Külte 2026 – Initiale Datenbankstruktur
-- ============================================================

-- Tabelle für BeerPong-Anmeldungen
CREATE TABLE public.beerpong_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  team_name TEXT NOT NULL,
  player1 TEXT NOT NULL,
  player2 TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  newsletter_subscription BOOLEAN NOT NULL DEFAULT false,
  confirmation_sent BOOLEAN DEFAULT false,
  confirmation_sent_at TIMESTAMP WITH TIME ZONE,
  reminder_sent BOOLEAN DEFAULT false,
  reminder_sent_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Row Level Security aktivieren
ALTER TABLE public.beerpong_registrations ENABLE ROW LEVEL SECURITY;

-- Öffentliche Anmeldung erlauben (kein Login nötig)
CREATE POLICY "Jeder kann sich anmelden"
  ON public.beerpong_registrations
  FOR INSERT
  WITH CHECK (true);

-- Nur Admins dürfen Anmeldungen lesen (über Service Role Key in Edge Functions)
CREATE POLICY "Nur Admins können Anmeldungen lesen"
  ON public.beerpong_registrations
  FOR SELECT
  USING (false);

-- Trigger für automatische updated_at Aktualisierung
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_beerpong_registrations_updated_at
  BEFORE UPDATE ON public.beerpong_registrations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Indizes für Performance
CREATE INDEX idx_beerpong_registrations_email ON public.beerpong_registrations(email);
CREATE INDEX idx_beerpong_registrations_created_at ON public.beerpong_registrations(created_at DESC);
CREATE INDEX idx_beerpong_registrations_team_name ON public.beerpong_registrations(team_name);

-- Benutzerrollen (für Admin-Bereich falls benötigt)
CREATE TYPE public.app_role AS ENUM ('admin', 'organizer', 'user');

CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Nutzer sehen eigene Rollen"
  ON public.user_roles
  FOR SELECT
  USING (auth.uid() = user_id);

-- Hilfsfunktion: Hat Nutzer eine bestimmte Rolle?
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- Hilfsfunktion: Ist Nutzer Turnier-Admin?
CREATE OR REPLACE FUNCTION public.is_tournament_admin(_user_id UUID)
RETURNS BOOLEAN AS $$
  SELECT public.has_role(_user_id, 'admin') OR public.has_role(_user_id, 'organizer');
$$ LANGUAGE sql STABLE SECURITY DEFINER;
