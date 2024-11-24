import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bdvqblackbzvpyhopbtr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdnFibGFja2J6dnB5aG9wYnRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTM0ODUsImV4cCI6MjA0NzU4OTQ4NX0.pv-id8nCjS__u1ah48sX_yDYQZO5dIhtuVIxUS8Ts60";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://bdvqblackbzvpyhopbtr.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdnFibGFja2J6dnB5aG9wYnRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTM0ODUsImV4cCI6MjA0NzU4OTQ4NX0.pv-id8nCjS__u1ah48sX_yDYQZO5dIhtuVIxUS8Ts60";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;
