"use client"

import CloudinaryUploadWidget from '@/components/CloudinaryUploadWidget'
import { useState } from 'react'
import { Upload, Image as ImageIcon, Copy, CheckCircle2 } from 'lucide-react'

export default function CloudinaryAdminPage() {
  const [uploadedImages, setUploadedImages] = useState<any[]>([])
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleUploadSuccess = (result: any) => {
    setUploadedImages(prev => [...prev, result])
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(text)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Upload className="w-8 h-8 text-brand-green" strokeWidth={2} />
            Cloudinary Image Manager
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Upload project images to Cloudinary for optimized delivery. Images will be automatically compressed, 
            converted to WebP, and served via CDN for maximum performance.
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Images</h2>
          <p className="text-gray-600 mb-6">
            Select a folder destination and upload your images. Supported formats: JPG, PNG, WebP, GIF (max 10MB per file)
          </p>
          
          <div className="space-y-6">
            {/* Folder Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Destination Folder
              </label>
              <select className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
                <option value="eleven-star/projects/residential-construction">
                  📁 Projects → Residential Construction
                </option>
                <option value="eleven-star/projects/commercial-construction">
                  📁 Projects → Commercial Construction
                </option>
                <option value="eleven-star/projects/road-construction">
                  📁 Projects → Road Construction
                </option>
                <option value="eleven-star/projects/landscaping">
                  📁 Projects → Landscaping
                </option>
                <option value="eleven-star/hero">
                  📁 Hero Images
                </option>
                <option value="eleven-star/team">
                  📁 Team Photos
                </option>
              </select>
            </div>

            {/* Upload Widget */}
            <CloudinaryUploadWidget
              onUploadSuccess={handleUploadSuccess}
              folder="eleven-star/projects"
              multiple={true}
              maxFiles={20}
            />
          </div>
        </div>

        {/* Recently Uploaded Images */}
        {uploadedImages.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <ImageIcon className="w-6 h-6 text-brand-green" strokeWidth={2} />
              Recently Uploaded ({uploadedImages.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uploadedImages.map((image, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-brand-green transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {/* Image Preview */}
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={image.url}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Image Info */}
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">
                        Public ID
                      </p>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 text-sm bg-gray-50 px-3 py-2 rounded border border-gray-200 text-gray-700 font-mono truncate">
                          {image.publicId}
                        </code>
                        <button
                          onClick={() => copyToClipboard(image.publicId)}
                          className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Copy to clipboard"
                        >
                          {copiedId === image.publicId ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={2} />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-600" strokeWidth={2} />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{image.width} × {image.height}</span>
                      <span className="uppercase font-semibold">{image.format}</span>
                    </div>

                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold">CDN URL:</span>
                      </p>
                      <a
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-brand-green hover:text-brand-green-light truncate block"
                      >
                        {image.url}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Usage Instructions */}
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                💡 How to Use These Images
              </h3>
              <div className="space-y-2 text-sm text-blue-800">
                <p>
                  <strong>In your code:</strong> Use the <code className="bg-blue-100 px-2 py-1 rounded">CloudinaryImage</code> component
                </p>
                <pre className="bg-blue-100 p-4 rounded-lg overflow-x-auto text-xs mt-2">
{`<CloudinaryImage 
  src="${uploadedImages[0]?.publicId || 'eleven-star/projects/example'}"
  alt="Project description"
  width={800}
  height={600}
  quality="auto:good"
/>`}
                </pre>
                <p className="mt-4">
                  <strong>In data/projects.json:</strong> Add the public ID to the images array
                </p>
                <pre className="bg-blue-100 p-4 rounded-lg overflow-x-auto text-xs mt-2">
{`"images": [
  "${uploadedImages[0]?.publicId || 'eleven-star/projects/example'}"
]`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-gradient-to-br from-brand-green/5 to-brand-green/10 rounded-xl p-8 border border-brand-green/20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📚 Need Help?
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Setup Guide:</strong> Check <code className="bg-white px-2 py-1 rounded">docs/CLOUDINARY_SETUP.md</code> for complete configuration steps
            </p>
            <p>
              <strong>Migration Guide:</strong> See <code className="bg-white px-2 py-1 rounded">docs/CLOUDINARY_MIGRATION.md</code> for uploading existing images
            </p>
            <p>
              <strong>Cloudinary Dashboard:</strong>{' '}
              <a
                href="https://console.cloudinary.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green hover:text-brand-green-light font-semibold underline"
              >
                Manage all your images →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


