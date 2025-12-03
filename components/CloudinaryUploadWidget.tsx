"use client"

import { CldUploadWidget } from 'next-cloudinary'
import type { CloudinaryUploadWidgetResults } from '@cloudinary-util/types'
import { Upload, Image as ImageIcon } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface CloudinaryUploadWidgetInfo {
  public_id: string
  secure_url: string
  width: number
  height: number
  format: string
  resource_type: string
}

interface UploadedImageData {
  publicId: string
  url: string
  width: number
  height: number
  format: string
  resourceType: string
}

interface CloudinaryUploadWidgetProps {
  onUploadSuccess?: (result: UploadedImageData) => void
  folder?: string
  uploadPreset?: string
  multiple?: boolean
  maxFiles?: number
}

/**
 * Upload widget for Cloudinary images
 * Perfect for admin panel to upload project images
 */
export default function CloudinaryUploadWidget({
  onUploadSuccess,
  folder = 'eleven-star',
  uploadPreset,
  multiple = true,
  maxFiles = 10,
}: CloudinaryUploadWidgetProps) {
  const [uploadedImages, setUploadedImages] = useState<UploadedImageData[]>([])

  const handleUploadSuccess = (result: CloudinaryUploadWidgetResults) => {
    // Check if info exists and is an object (not a string)
    if (!result.info || typeof result.info === 'string') {
      return
    }

    const info = result.info as CloudinaryUploadWidgetInfo
    
    const imageData: UploadedImageData = {
      publicId: info.public_id,
      url: info.secure_url,
      width: info.width,
      height: info.height,
      format: info.format,
      resourceType: info.resource_type,
    }
    
    setUploadedImages(prev => [...prev, imageData])
    
    if (onUploadSuccess) {
      onUploadSuccess(imageData)
    }
  }

  return (
    <div className="space-y-4">
      <CldUploadWidget
        uploadPreset={uploadPreset || process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'ml_default'}
        options={{
          folder: folder,
          multiple: multiple,
          maxFiles: maxFiles,
          resourceType: 'image',
          clientAllowedFormats: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
          maxFileSize: 10000000, // 10MB
          sources: ['local', 'url', 'camera'],
          styles: {
            palette: {
              window: '#FFFFFF',
              windowBorder: '#00A651',
              tabIcon: '#00A651',
              menuIcons: '#5A616A',
              textDark: '#000000',
              textLight: '#FFFFFF',
              link: '#00A651',
              action: '#00A651',
              inactiveTabIcon: '#9CA3AF',
              error: '#EF4444',
              inProgress: '#00A651',
              complete: '#10B981',
              sourceBg: '#F9FAFB',
            },
          },
        }}
        onSuccess={handleUploadSuccess}
      >
        {({ open }) => (
          <button
            onClick={() => open()}
            type="button"
            className="flex items-center gap-3 bg-brand-green text-white px-6 py-3 rounded-lg hover:bg-brand-green-light transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
          >
            <Upload className="w-5 h-5" strokeWidth={2} />
            Upload Images to Cloudinary
          </button>
        )}
      </CldUploadWidget>

      {/* Display uploaded images */}
      {uploadedImages.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
            <ImageIcon className="w-5 h-5 text-brand-green" strokeWidth={2} />
            Uploaded Images ({uploadedImages.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {uploadedImages.map((image, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden border-2 border-gray-200 hover:border-brand-green transition-colors duration-300 h-32"
              >
                <Image
                  src={image.url}
                  alt={`Uploaded ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-xs text-center px-2">
                    <p className="font-semibold truncate">{image.publicId}</p>
                    <p className="text-gray-300">{image.width}x{image.height}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Display public IDs for easy copying */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">Public IDs (for use in code):</p>
            <div className="space-y-1">
              {uploadedImages.map((image, index) => (
                <code key={index} className="block text-xs text-gray-600 bg-white p-2 rounded border border-gray-200">
                  {image.publicId}
                </code>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


