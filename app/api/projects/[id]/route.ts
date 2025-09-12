import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const PROJECTS_FILE = path.join(process.cwd(), 'data', 'projects.json')

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(PROJECTS_FILE)
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true })
  }
}

// Read projects from file
async function readProjects(): Promise<Project[]> {
  try {
    await ensureDataDir()
    if (!existsSync(PROJECTS_FILE)) {
      return []
    }
    const data = await readFile(PROJECTS_FILE, 'utf-8')
    return JSON.parse(data) as Project[]
  } catch (error) {
    console.error('Error reading projects:', error)
    return []
  }
}

// Write projects to file
async function writeProjects(projects: Project[]) {
  try {
    await ensureDataDir()
    await writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2))
  } catch (error) {
    console.error('Error writing projects:', error)
    throw error
  }
}

// Project interface
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  completion: string;
  details: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
}


export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const projects = await readProjects()
    const project = projects.find((p: Project) => p.id === params.id)
    
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
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { title, category, description, completion, details, images } = body

    // Validate required fields
    if (!title || !category || !description || !completion) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const projects = await readProjects()
    const projectIndex = projects.findIndex((p: Project) => p.id === params.id)
    
    if (projectIndex === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    // Check if another project with same title exists (excluding current project)
    const existingProject = projects.find((p: Project) => p.title.toLowerCase() === title.toLowerCase() && p.id !== params.id)
    if (existingProject) {
      return NextResponse.json({ error: 'Project with this title already exists' }, { status: 400 })
    }

    const updatedProject = {
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
    await writeProjects(projects)

    return NextResponse.json(updatedProject)
  } catch (error) {
    console.error('Error updating project:', error)
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const projects = await readProjects()
    const projectIndex = projects.findIndex((p: Project) => p.id === params.id)
    
    if (projectIndex === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    projects.splice(projectIndex, 1)
    await writeProjects(projects)

    return NextResponse.json({ message: 'Project deleted successfully' })
  } catch (err) {
    console.error('Error deleting project:', err)
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
