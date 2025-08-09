CREATE TABLE public.agents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  license_number VARCHAR(50),
  experience_years INTEGER,
  specialties TEXT[],
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Optional: Add RLS policies if you have them enabled
-- For example, to allow public read access (adjust as needed for your security model)
ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable read access for all users" ON public.agents FOR SELECT USING (TRUE);