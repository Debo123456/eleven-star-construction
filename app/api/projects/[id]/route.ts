import { NextRequest, NextResponse } from 'next/server'
import { supabase, formatProject } from '@/lib/supabase'
import { readProjectsFromJSON, writeProjectsToJSON, type Project } from '@/lib/projects-json'

// Type guard to ensure supabase is available
const getSupabase = () => {
  if (!supabase) {
    return null
  }
  return supabase
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Try Supabase first (if configured)
    const client = getSupabase()
    if (client) {
      try {
        const { data, error } = await client
          .from('projects')
          .select('*')
          .eq('id', id)
          .single()

        if (!error && data) {
          return NextResponse.json(formatProject(data))
        }
        
        console.warn('Supabase fetch failed, falling back to JSON:', error?.message)
      } catch (supabaseError) {
        console.warn('Supabase connection error, falling back to JSON:', supabaseError)
      }
    } else {
      console.warn('Supabase not configured, using JSON fallback')
    }

    // Fallback to JSON file
    const projects = await readProjectsFromJSON()
    const project = projects.find((p: Project) => p.id === id)
    
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    return NextResponse.json(project)
  } catch (err) {
    console.error('Error fetching project:', err)
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { title, category, description, completion, details, images } = body

    // Validate required fields
    if (!title || !category || !description || !completion) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Try Supabase first (if configured)
    const client = getSupabase()
    if (client) {
      try {
        // Check if project exists
        const { data: existingProject, error: fetchError } = await client
          .from('projects')
          .select('id')
          .eq('id', id)
          .single()

        if (!fetchError && existingProject) {
          // Check if another project with same title exists (excluding current project)
          const { data: duplicateProjects, error: checkError } = await client
            .from('projects')
            .select('id')
            .ilike('title', title)
            .neq('id', id)

          if (!checkError) {
            if (duplicateProjects && duplicateProjects.length > 0) {
              return NextResponse.json({ error: 'Project with this title already exists' }, { status: 400 })
            }

            // Update project
            const { data: updatedProject, error: updateError } = await client
              .from('projects')
              .update({
                title,
                category,
                description,
                completion,
                details: details.filter((detail: string) => detail.trim() !== ''),
                images: images || []
                // updated_at is automatically updated by the trigger
              })
              .eq('id', id)
              .select()
              .single()

            if (!updateError && updatedProject) {
              return NextResponse.json(formatProject(updatedProject))
            }
          }
        }
        
        console.warn('Supabase update failed, falling back to JSON:', fetchError?.message || 'Unknown error')
      } catch (supabaseError) {
        console.warn('Supabase connection error, falling back to JSON:', supabaseError)
      }
    } else {
      console.warn('Supabase not configured, using JSON fallback')
    }

    // Fallback to JSON file
    const projects = await readProjectsFromJSON()
    const projectIndex = projects.findIndex((p: Project) => p.id === id)
    
    if (projectIndex === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    // Check if another project with same title exists (excluding current project)
    const existingProject = projects.find((p: Project) => p.title.toLowerCase() === title.toLowerCase() && p.id !== id)
    if (existingProject) {
      return NextResponse.json({ error: 'Project with this title already exists' }, { status: 400 })
    }

    const updatedProject: Project = {
      ...projects[projectIndex],
      title,
      category,
      description,
      completion,
      details: details.filter((detail: string) => detail.trim() !== ''),
      images: images || [],
      updatedAt: new Date().toISOString()
    }

    projects[projectIndex] = updatedProject
    await writeProjectsToJSON(projects)

    return NextResponse.json(updatedProject)
  } catch (error) {
    console.error('Error updating project:', error)
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Try Supabase first (if configured)
    const client = getSupabase()
    if (client) {
      try {
        const { error } = await client
          .from('projects')
          .delete()
          .eq('id', id)

        if (!error) {
          return NextResponse.json({ message: 'Project deleted successfully' })
        }
        
        console.warn('Supabase delete failed, falling back to JSON:', error.message)
      } catch (supabaseError) {
        console.warn('Supabase connection error, falling back to JSON:', supabaseError)
      }
    } else {
      console.warn('Supabase not configured, using JSON fallback')
    }

    // Fallback to JSON file
    const projects = await readProjectsFromJSON()
    const projectIndex = projects.findIndex((p: Project) => p.id === id)
    
    if (projectIndex === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    projects.splice(projectIndex, 1)
    await writeProjectsToJSON(projects)

    return NextResponse.json({ message: 'Project deleted successfully' })
  } catch (err) {
    console.error('Error deleting project:', err)
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
