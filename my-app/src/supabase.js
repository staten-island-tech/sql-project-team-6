import { createClient } from '@supabase/supabase-js'

const VITE_SUPABASE_URL=https://your-project-ref.supabase.co;
const VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlkemlta3ZkdWVybGFuZmt3ZHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2NTE2NDQsImV4cCI6MTk5OTIyNzY0NH0.n8Y43N3HmFi5PbCFovhJYDbuOMIUhWVOv-UQx8uQcyc

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
