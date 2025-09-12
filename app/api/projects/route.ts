import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const PROJECTS_FILE = path.join(process.cwd(), 'data', 'projects.json')

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

// Generate unique ID
function generateId(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export async function GET() {
  try {
    const projects = await readProjects()
    return NextResponse.json(projects)
  } catch {
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

    const projects = await readProjects()
    
    // Check if project with same title already exists
    const existingProject = projects.find((p: Project) => p.title.toLowerCase() === title.toLowerCase())
    if (existingProject) {
      return NextResponse.json({ error: 'Project with this title already exists' }, { status: 400 })
    }

    const newProject = {
      id: generateId(title),
      title,
      category,
      description,
      completion,
      details: details.filter((detail: string) => detail.trim() !== ''),
      images: images || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    projects.push(newProject)
    await writeProjects(projects)

    return NextResponse.json(newProject, { status: 201 })
  } catch (err) {
    console.error('Error creating project:', err)
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
