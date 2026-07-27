
CREATE TABLE public.scout_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  domain TEXT NOT NULL,
  message TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT false,
  locale TEXT NOT NULL DEFAULT 'fr',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.scout_applications TO anon;
GRANT INSERT ON public.scout_applications TO authenticated;
GRANT ALL ON public.scout_applications TO service_role;

ALTER TABLE public.scout_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a scout application"
  ON public.scout_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    consent = true
    AND length(full_name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND length(message) BETWEEN 1 AND 5000
  );
