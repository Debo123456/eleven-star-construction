import { NextRequest, NextResponse } from 'next/server'
import { supabase, formatProject } from '@/lib/supabase'
import { readProjectsFromJSON, writeProjectsToJSON, generateId, type Project } from '@/lib/projects-json'

// Type guard to ensure supabase is available
const getSupabase = () => {
  if (!supabase) {
    return null
  }
  return supabase
}

export async function GET() {
  try {
    // Try Supabase first (if configured)
    const client = getSupabase()
    if (client) {
      try {
        const { data, error } = await client
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })

        if (!error && data) {
          // Format projects to match API response format
          const formattedProjects = data.map(formatProject)
          return NextResponse.json(formattedProjects)
        }
        
        // If error, log and fall through to JSON fallback
        console.warn('Supabase fetch failed, falling back to JSON:', error?.message)
      } catch (supabaseError) {
        console.warn('Supabase connection error, falling back to JSON:', supabaseError)
      }
    } else {
      console.warn('Supabase not configured, using JSON fallback')
    }

    // Fallback to JSON file
    const projects = await readProjectsFromJSON()
    return NextResponse.json(projects)
  } catch (err) {
    console.error('Error fetching projects:', err)
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, category, description, completion, details, images } = body

    // Validate required fields
    if (!title || !category || !description || !completion) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const projectId = generateId(title)
    const now = new Date().toISOString()

    const newProject: Project = {
      id: projectId,
      title,
      category,
      description,
      completion,
      details: details.filter((detail: string) => detail.trim() !== ''),
      images: images || [],
      createdAt: now,
      updatedAt: now
    }

    // Try Supabase first (if configured)
    const client = getSupabase()
    if (client) {
      try {
        // Check if project with same title already exists
        const { data: existingProjects, error: checkError } = await client
          .from('projects')
          .select('id')
          .ilike('title', title)

        if (!checkError) {
          if (existingProjects && existingProjects.length > 0) {
            return NextResponse.json({ error: 'Project with this title already exists' }, { status: 400 })
          }

          // Insert into Supabase
          const supabaseProject = {
            id: projectId,
            title,
            category,
            description,
            completion,
            details: details.filter((detail: string) => detail.trim() !== ''),
            images: images || [],
            created_at: now,
            updated_at: now
          }

          const { data: insertedProject, error: insertError } = await client
            .from('projects')
            .insert(supabaseProject)
            .select()
            .single()

          if (!insertError && insertedProject) {
            return NextResponse.json(formatProject(insertedProject), { status: 201 })
          }
        }
        
        console.warn('Supabase insert failed, falling back to JSON:', checkError?.message || 'Unknown error')
      } catch (supabaseError) {
        console.warn('Supabase connection error, falling back to JSON:', supabaseError)
      }
    } else {
      console.warn('Supabase not configured, using JSON fallback')
    }

    // Fallback to JSON file
    const projects = await readProjectsFromJSON()
    
    // Check if project with same title already exists
    const existingProject = projects.find((p: Project) => p.title.toLowerCase() === title.toLowerCase())
    if (existingProject) {
      return NextResponse.json({ error: 'Project with this title already exists' }, { status: 400 })
    }

    projects.push(newProject)
    await writeProjectsToJSON(projects)

    return NextResponse.json(newProject, { status: 201 })
  } catch (err) {
    console.error('Error creating project:', err)
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
