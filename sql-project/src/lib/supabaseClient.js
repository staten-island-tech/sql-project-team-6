import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://<Sql Project>idzimkvduerlanfkwdse.supabase.co',
  '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlkemlta3ZkdWVybGFuZmt3ZHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2NTE2NDQsImV4cCI6MTk5OTIyNzY0NH0.n8Y43N3HmFi5PbCFovhJYDbuOMIUhWVOv-UQx8uQcyc>'
)
