import { createClient } from "@supabase/supabase-js";

// 🔹 ใส่ค่า URL และ KEY ของโปรเจ็กต์คุณจาก https://app.supabase.com
const SUPABASE_URL = "https://rkfnljzdcqpusfqgwewl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZm5sanpkY3FwdXNmcWd3ZXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNDk0MjcsImV4cCI6MjA3NjYyNTQyN30.tXCvcE22Nu9xEFuuoOP6DGZ1DvLijLsPKvyi64orydM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
