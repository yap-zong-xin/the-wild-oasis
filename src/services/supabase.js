import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ngqnlzsnnbwsdszqxjpb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ncW5senNubmJ3c2RzenF4anBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwODk3MzAsImV4cCI6MjAzNzY2NTczMH0.-_EDfvMZ-dKL0D7SWwWl2EzilEiNY8ke19qeIxylFks";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
