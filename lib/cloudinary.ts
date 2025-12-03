// Cloudinary configuration and helper functions

export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_API_KEY || '',
  apiSecret: process.env.CLOUDINARY_API_SECRET || '',
  uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'ml_default',
}

/**
 * Converts a local image path to a Cloudinary public ID
 * OR returns the path as-is if it's already a Cloudinary public ID
 * 
 * Examples:
 * - "/images/hero/hero-1.webp" -> "eleven-star/hero/hero-1"
 * - "eleven-star/hero/hero-1" -> "eleven-star/hero/hero-1" (unchanged)
 */
export function getCloudinaryPublicId(path: string): string {
  // If it's already a Cloudinary public ID (starts with eleven-star/ or doesn't start with /)
  if (path.startsWith('eleven-star/') || (!path.startsWith('/') && !path.startsWith('http'))) {
    // Remove file extension if present
    return path.replace(/\.(webp|jpg|jpeg|png|gif)$/i, '')
  }
  
  // Convert local path to Cloudinary public ID
  // Remove /images/ prefix and file extension
  const withoutPrefix = path.replace('/images/', '')
  const withoutExtension = withoutPrefix.replace(/\.(webp|jpg|jpeg|png|gif)$/i, '')
  
  // Add project prefix for organization
  return `eleven-star/${withoutExtension}`
}

/**
 * Check if a path is a Cloudinary public ID
 */
export function isCloudinaryPublicId(path: string): boolean {
  return !path.startsWith('/') && !path.startsWith('http') && !path.startsWith('blob:')
}

/**
 * Check if using Cloudinary or local images
 */
export function isCloudinaryEnabled(): boolean {
  return Boolean(cloudinaryConfig.cloudName)
}

/**
 * Get image source - returns Cloudinary URL if enabled, otherwise local path
 */
export function getImageSrc(localPath: string): string {
  if (isCloudinaryEnabled()) {
    return getCloudinaryPublicId(localPath)
  }
  return localPath
}

// Image transformation presets
export const imagePresets = {
  hero: {
    width: 1920,
    height: 1080,
    crop: 'fill',
    quality: 'auto:good',
    format: 'auto',
  },
  projectCard: {
    width: 800,
    height: 600,
    crop: 'fill',
    quality: 'auto:good',
    format: 'auto',
  },
  projectThumbnail: {
    width: 400,
    height: 300,
    crop: 'fill',
    quality: 'auto:good',
    format: 'auto',
  },
  projectFull: {
    width: 1600,
    height: 1200,
    crop: 'limit',
    quality: 'auto:best',
    format: 'auto',
  },
}


