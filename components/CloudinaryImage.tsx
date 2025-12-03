"use client"

import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import { isCloudinaryEnabled, getCloudinaryPublicId, isCloudinaryPublicId } from '@/lib/cloudinary'

interface CloudinaryImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number | string
  crop?: string
  gravity?: string
  [key: string]: unknown
}

/**
 * Smart image component that uses Cloudinary if configured,
 * otherwise falls back to Next.js Image with local paths.
 * 
 * Handles both:
 * - Cloudinary public IDs (e.g., "eleven-star/projects/residential/luxury-1")
 * - Local paths (e.g., "/images/projects/residential/luxury-1.webp")
 */
export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes,
  quality = 'auto',
  crop = 'fill',
  gravity = 'auto',
  ...props
}: CloudinaryImageProps) {
  const cloudinaryEnabled = isCloudinaryEnabled()
  const isCloudinaryPath = isCloudinaryPublicId(src)

  // If Cloudinary is enabled, use CldImage
  if (cloudinaryEnabled) {
    const publicId = getCloudinaryPublicId(src)

    if (fill) {
      return (
        <CldImage
          src={publicId}
          alt={alt}
          fill
          priority={priority}
          className={className}
          sizes={sizes}
          crop={crop}
          gravity={gravity}
          quality={quality}
          {...props}
        />
      )
    }

    return (
      <CldImage
        src={publicId}
        alt={alt}
        width={width || 800}
        height={height || 600}
        priority={priority}
        className={className}
        sizes={sizes}
        crop={crop}
        gravity={gravity}
        quality={quality}
        {...props}
      />
    )
  }

  // Cloudinary not enabled - use local images
  // If src is a Cloudinary public ID, convert it back to local path
  let localSrc = src
  if (isCloudinaryPath) {
    // Convert "eleven-star/projects/road-construction/driveway-1" to "/images/projects/road-construction/driveway-1.webp"
    localSrc = src.replace('eleven-star/', '/images/') + '.webp'
  }

  return (
    <Image
      src={localSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      className={className}
      sizes={sizes}
      quality={typeof quality === 'number' ? quality : 90}
      {...props}
    />
  )
}
