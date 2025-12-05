import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Get Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a single supabase client for interacting with your database
// If credentials are missing, create a dummy client that will fail gracefully
export const supabase: SupabaseClient | null = 
  supabaseUrl && supabaseAnonKey 
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

// Helper to check if Supabase is configured
export const isSupabaseConfigured = (): boolean => {
  return supabase !== null && !!supabaseUrl && !!supabaseAnonKey
}

// Database types (matching your projects table structure)
export interface DatabaseProject {
  id: string
  title: string
  category: string
  description: string
  completion: string
  details: string[]
  images: string[]
  created_at: string
  updated_at: string
}

// Helper function to convert database project to API format
export const formatProject = (project: DatabaseProject) => ({
  id: project.id,
  title: project.title,
  category: project.category,
  description: project.description,
  completion: project.completion,
  details: project.details,
  images: project.images,
  createdAt: project.created_at,
  updatedAt: project.updated_at
})

