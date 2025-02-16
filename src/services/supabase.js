import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qzjvzvfpowwkozekfczq.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6anZ6dmZwb3d3a296ZWtmY3pxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNDMzNjE0MCwiZXhwIjoyMDQ5OTEyMTQwfQ.5FN_MDO3G-fUenwaEZYnCvaGm5qUXUzAQEhwXmj5D6o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
