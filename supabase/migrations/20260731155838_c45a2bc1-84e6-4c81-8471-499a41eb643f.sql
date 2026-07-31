DELETE FROM public.scout_applications WHERE full_name ILIKE 'TEST-AUDIT%' OR email ILIKE 'test-audit%@example.com';

CREATE UNIQUE INDEX IF NOT EXISTS scout_applications_email_unique
  ON public.scout_applications (lower(email));