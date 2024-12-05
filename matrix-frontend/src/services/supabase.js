import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://subunodbrqvnbdmvypkw.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1YnVub2RicnF2bmJkbXZ5cGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMzI5OTQsImV4cCI6MjA0ODkwODk5NH0.B8BSxSZLR1yjZzKgG9v2M2_TSAZonZi8nNnkVdZrSk8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
