# Admin Dashboard - Eleven Star Construction

## Overview
The admin dashboard allows you to manage projects that appear on the projects page. You can add, edit, and delete projects through a user-friendly interface.

## Access
- **URL**: `/admin`
- **Password**: `admin123` (change this in production)
- **Navigation**: Click "Admin" in the header menu

## Features

### Project Management
- **Add New Projects**: Create projects with title, category, description, completion year, key features, and images
- **Edit Existing Projects**: Modify any aspect of existing projects
- **Delete Projects**: Remove projects from the portfolio
- **View Projects**: Preview how projects will appear on the public site

### Project Categories
- Residential Construction
- Commercial Construction
- Renovations & Remodeling
- Land Subdivision
- Road Construction
- Landscaping & Outdoor Living

### Image Management
- Upload multiple images per project
- Preview uploaded images
- Remove unwanted images
- Images are displayed in a carousel on the projects page

## How to Use

### Adding a New Project
1. Navigate to `/admin`
2. Enter the admin password
3. Click "Add Project"
4. Fill in the required fields:
   - **Title**: Project name
   - **Category**: Select from dropdown
   - **Description**: Detailed project description
   - **Completion Year**: When the project was completed
   - **Key Features**: Add multiple features (click "Add Feature" for more)
   - **Images**: Upload project photos
5. Click "Create Project"

### Editing a Project
1. In the admin dashboard, find the project you want to edit
2. Click the "Edit" button
3. Modify any fields as needed
4. Click "Update Project"

### Deleting a Project
1. In the admin dashboard, find the project you want to delete
2. Click the red trash icon
3. Confirm the deletion

### Viewing Projects
- Click "View" to see how the project appears on the public projects page
- This opens the project in a new tab

## Data Storage
- Projects are stored in `data/projects.json`
- Images are currently stored as local file references
- In production, consider using a cloud storage service like AWS S3 or Cloudinary

## Security Notes
- Change the admin password in production
- Consider implementing proper authentication
- Add rate limiting for API endpoints
- Validate and sanitize all inputs

## API Endpoints
- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create a new project
- `GET /api/projects/[id]` - Fetch a specific project
- `PUT /api/projects/[id]` - Update a project
- `DELETE /api/projects/[id]` - Delete a project

## Technical Details
- Built with Next.js 14 and TypeScript
- Uses Tailwind CSS for styling
- Implements Framer Motion for animations
- File-based data storage (JSON)
- Responsive design for mobile and desktop

## Troubleshooting
- If projects don't appear, check that `data/projects.json` exists
- Ensure the data directory has proper write permissions
- Check browser console for any JavaScript errors
- Verify API endpoints are working by testing with curl or Postman
