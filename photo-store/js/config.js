const SUPABASE_URL = "https://ctmlmiiylgttbehyfjjd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0bWxtaWl5bGd0dGJlaHlmampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NTc5NjAsImV4cCI6MjA5NDQzMzk2MH0.O1EUG0MOGUZEL5WOVlZYS_hfUgSsGEzTUL69Nm1PWgo";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
