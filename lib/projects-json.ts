import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const PROJECTS_FILE = path.join(process.cwd(), 'data', 'projects.json')

// Project interface matching the JSON structure
export interface Project {
  id: string
  title: string
  category: string
  description: string
  completion: string
  details: string[]
  images: string[]
  createdAt: string
  updatedAt: string
}

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(PROJECTS_FILE)
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true })
  }
}

// Read projects from JSON file
export async function readProjectsFromJSON(): Promise<Project[]> {
  try {
    await ensureDataDir()
    if (!existsSync(PROJECTS_FILE)) {
      return []
    }
    const data = await readFile(PROJECTS_FILE, 'utf-8')
    return JSON.parse(data) as Project[]
  } catch (error) {
    console.error('Error reading projects from JSON:', error)
    return []
  }
}

// Write projects to JSON file
export async function writeProjectsToJSON(projects: Project[]) {
  try {
    await ensureDataDir()
    await writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2))
  } catch (error) {
    console.error('Error writing projects to JSON:', error)
    throw error
  }
}

// Generate unique ID
export function generateId(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}



