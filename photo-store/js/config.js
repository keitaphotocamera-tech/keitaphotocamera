// window.CONFIG = {
//   SUPABASE_URL: "https://ctmlmiiylgttbehyfjjd.supabase.co",

//   SUPABASE_ANON_KEY:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0bWxtaWl5bGd0dGJlaHlmampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NTc5NjAsImV4cCI6MjA5NDQzMzk2MH0.O1EUG0MOGUZEL5WOVlZYS_hfUgSsGEzTUL69Nm1PWgo",

//   LIFF_ID: "2007608963-OaN6K1n7",

//   DEFAULT_PHOTO_PRICE: 50,

//   STORAGE_BUCKETS: {
//     SLIPS: "slips"
//   }
// };

// /************************************************
//  * Global Supabase
//  ************************************************/

// window.sb = window.supabase.createClient(
//   CONFIG.SUPABASE_URL,
//   CONFIG.SUPABASE_ANON_KEY
// );

// /************************************************
//  * รองรับ code เดิม
//  ************************************************/

// window.supabaseClient = window.sb;


window.CONFIG = {
  SUPABASE_URL: "https://ctmlmiiylgttbehyfjjd.supabase.co",

  SUPABASE_ANON_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdWIiLCJyZWYiOiJjdG1sbWlpeWxnHR0YmVoeWZqamQiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc3ODg1Nzk2MCwiZXhwIjoyMDk0NDMzOTYwfQ.O1EUG0MOGUZEL5WOVlZYS_hfUgSsGEzTUL69Nm1PWgo",

  LIFF_ID: "2007608963-OaN6K1n7",

  DEFAULT_PHOTO_PRICE: 50,

  R2_ENABLED: true,
  R2_WORKER_URL: "https://keita-r2-upload.keitaphotocamera.workers.dev",
  R2_PUBLIC_BASE_URL: "https://pub-897300534774433b18d20c62be9f282.r2.dev",

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
