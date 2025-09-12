"use client"

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { X, Upload, Plus, Trash2 } from 'lucide-react'
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
  
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    setIsUploading(true)
    try {
      // In a real application, you would upload to a cloud service like AWS S3, Cloudinary, etc.
      // For now, we'll simulate the upload and use placeholder URLs
      const uploadedImages = Array.from(files).map(file => {
        // Create a preview URL for the uploaded file
        const previewUrl = URL.createObjectURL(file)
        return previewUrl
      })

      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...uploadedImages]
      }))
    } catch (error) {
      console.error('Error uploading images:', error)
    } finally {
      setIsUploading(false)
    }
  }

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
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">
            {isUploading ? 'Uploading...' : 'Click to upload images or drag and drop'}
          </p>
          <p className="text-sm text-gray-500">PNG, JPG, WEBP up to 10MB each</p>
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="mt-4"
          >
            {isUploading ? 'Uploading...' : 'Choose Images'}
          </Button>
        </div>

        {/* Image Preview */}
        {formData.images.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Images</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {formData.images.map((image, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={image}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-600 hover:text-red-700 p-1 h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
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
        <Button type="submit" disabled={!isFormValid || isUploading}>
          {project ? 'Update Project' : 'Create Project'}
        </Button>
      </div>
    </form>
  )
}
