import { createClient } from "@supabase/supabase-js";

// 🔹 ใส่ค่า URL และ KEY ของโปรเจ็กต์คุณจาก https://app.supabase.com
const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
