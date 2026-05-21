window.CONFIG = {
  SUPABASE_URL: "https://ctmlmiiylgttbehyfjjd.supabase.co",

  SUPABASE_ANON_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0bWxtaWl5bGd0dGJlaHlmampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NTc5NjAsImV4cCI6MjA5NDQzMzk2MH0.O1EUG0MOGUZEL5WOVlZYS_hfUgSsGEzTUL69Nm1PWgo",

  LIFF_ID: "2007608963-OaN6K1n7",

  DEFAULT_PHOTO_PRICE: 50,

  STORAGE_BUCKETS: {
    SLIPS: "slips"
  }
};

/************************************************
 * Global Supabase
 ************************************************/

window.sb = window.supabase.createClient(
  CONFIG.SUPABASE_URL,
  CONFIG.SUPABASE_ANON_KEY
);

/************************************************
 * รองรับ code เดิม
 ************************************************/

window.supabaseClient = window.sb;
