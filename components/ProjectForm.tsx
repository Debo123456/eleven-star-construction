"use client"

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { X, Plus, Trash2, Cloud, AlertCircle } from 'lucide-react'
import { CldUploadWidget } from 'next-cloudinary'
import type { CloudinaryUploadWidgetResults } from '@cloudinary-util/types'
import CloudinaryImage from '@/components/CloudinaryImage'
import { isCloudinaryEnabled } from '@/lib/cloudinary'
import Image from 'next/image'

interface Project {
  id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
  completion: string;
  details: string[];
  createdAt: string;
  updatedAt: string;
}

interface ProjectFormProps {
  project?: Project | null;
  onSubmit: (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onCancel: () => void;
}

const CATEGORIES = [
  'Residential Construction',
  'Commercial Construction',
  'Renovations & Remodeling',
  'Land Subdivision',
  'Road Construction',
  'Landscaping & Outdoor Living'
]

export default function ProjectForm({ project, onSubmit, onCancel }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    category: project?.category || '',
    description: project?.description || '',
    completion: project?.completion || '',
    details: project?.details || [''],
    images: project?.images || []
  })
  
  const cloudinaryEnabled = isCloudinaryEnabled()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleDetailChange = (index: number, value: string) => {
    const newDetails = [...formData.details]
    newDetails[index] = value
    setFormData(prev => ({
      ...prev,
      details: newDetails
    }))
  }

  const addDetail = () => {
    setFormData(prev => ({
      ...prev,
      details: [...prev.details, '']
    }))
  }

  const removeDetail = (index: number) => {
    if (formData.details.length > 1) {
      const newDetails = formData.details.filter((_, i) => i !== index)
      setFormData(prev => ({
        ...prev,
        details: newDetails
      }))
    }
  }

  // Handle Cloudinary upload success
  const handleCloudinaryUpload = useCallback((result: CloudinaryUploadWidgetResults) => {
    // Check if event is success and info exists and is an object
    if (result.event === 'success' && result.info && typeof result.info === 'object' && !Array.isArray(result.info)) {
      const info = result.info as { public_id: string; [key: string]: unknown }
      const publicId = info.public_id
      if (publicId) {
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, publicId]
        }))
      }
    }
  }, [])

  const removeImage = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index)
    setFormData(prev => ({
      ...prev,
      images: newImages
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Filter out empty details
    const filteredDetails = formData.details.filter(detail => detail.trim() !== '')
    
    onSubmit({
      title: formData.title,
      category: formData.category,
      description: formData.description,
      completion: formData.completion,
      details: filteredDetails,
      images: formData.images
    })
  }

  const isFormValid = formData.title && formData.category && formData.description && formData.completion

  // Check if an image is a Cloudinary public ID or a local path
  const isCloudinaryImage = (src: string) => {
    return !src.startsWith('/') && !src.startsWith('http') && !src.startsWith('blob:')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Project Title *
          </label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="Enter project title"
            required
          />
        </div>
        
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category *
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Description *
        </label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          placeholder="Enter project description"
          rows={4}
          required
        />
      </div>

      <div>
        <label htmlFor="completion" className="block text-sm font-medium text-gray-700 mb-2">
          Completion Year *
        </label>
        <Input
          id="completion"
          type="text"
          value={formData.completion}
          onChange={(e) => handleInputChange('completion', e.target.value)}
          placeholder="e.g., 2023"
          required
        />
      </div>

      {/* Project Details */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Key Features
        </label>
        <div className="space-y-2">
          {formData.details.map((detail, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                value={detail}
                onChange={(e) => handleDetailChange(index, e.target.value)}
                placeholder={`Feature ${index + 1}`}
                className="flex-1"
              />
              {formData.details.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeDetail(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={addDetail}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Feature
          </Button>
        </div>
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Images
        </label>
        
        {/* Cloudinary Upload Widget */}
        {cloudinaryEnabled ? (
          <CldUploadWidget
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'ml_default'}
            options={{
              sources: ['local', 'url', 'camera'],
              multiple: true,
              folder: 'eleven-star/projects',
              clientAllowedFormats: ['png', 'jpeg', 'jpg', 'webp'],
              maxFileSize: 10000000, // 10MB
              // Use inline mode to avoid z-index issues with dialogs
              showAdvancedOptions: false,
              singleUploadAutoClose: false,
              styles: {
                palette: {
                  window: "#FFFFFF",
                  windowBorder: "#90A0B3",
                  tabIcon: "#00A651",
                  menuIcons: "#5A616A",
                  textDark: "#000000",
                  textLight: "#FFFFFF",
                  link: "#00A651",
                  action: "#00A651",
                  inactiveTabIcon: "#0E2F5A",
                  error: "#F44235",
                  inProgress: "#00A651",
                  complete: "#20B832",
                  sourceBg: "#E4EBF1"
                },
                frame: {
                  background: "rgba(0,0,0,0.8)"
                }
              }
            }}
            onSuccess={handleCloudinaryUpload}
            onOpen={() => {
              // Add class to body to increase z-index of Cloudinary widget
              document.body.classList.add('cloudinary-widget-open')
            }}
            onClose={() => {
              document.body.classList.remove('cloudinary-widget-open')
            }}
          >
            {({ open }) => (
              <div 
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  open()
                }}
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-brand-green hover:bg-gray-50 transition-colors"
              >
                <Cloud className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <p className="text-gray-600 mb-2 font-medium">
                  Click to upload images to Cloudinary
                </p>
                <p className="text-sm text-gray-500">PNG, JPG, WEBP up to 10MB each</p>
                <p className="text-xs text-emerald-600 mt-2">
                  ✓ Images stored securely in the cloud
                </p>
              </div>
            )}
          </CldUploadWidget>
        ) : (
          <div className="border-2 border-dashed border-amber-300 bg-amber-50 rounded-lg p-6 text-center">
            <AlertCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <p className="text-amber-800 font-medium mb-2">
              Cloudinary Not Configured
            </p>
            <p className="text-sm text-amber-700">
              Please set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in your environment variables to enable image uploads.
            </p>
            <p className="text-xs text-amber-600 mt-2">
              See documentation for setup instructions.
            </p>
          </div>
        )}

        {/* Image Preview */}
        {formData.images.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Uploaded Images ({formData.images.length})
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {formData.images.map((image, index) => (
                <Card key={index} className="relative overflow-hidden group">
                  <div className="aspect-square relative">
                    {isCloudinaryImage(image) ? (
                      <CloudinaryImage
                        src={image}
                        alt={`Project image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                    ) : (
                      <Image
                        src={image}
                        alt={`Project image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white text-red-600 hover:text-red-700 p-1 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    {isCloudinaryImage(image) && (
                      <div className="absolute bottom-2 left-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded flex items-center">
                        <Cloud className="h-3 w-3 mr-1" />
                        Cloud
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-4 pt-6 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={!isFormValid}>
          {project ? 'Update Project' : 'Create Project'}
        </Button>
      </div>
    </form>
  )
}
