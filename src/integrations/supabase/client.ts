// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zmoyhocbaiddcalvvfcb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inptb3lob2NiYWlkZGNhbHZ2ZmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NDUwODIsImV4cCI6MjA1OTQyMTA4Mn0.Mg9-uk-hHXDCijoUBtXTVo5DQ5HreAEuiFrjmclMJZI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);