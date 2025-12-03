"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Toaster, toast } from 'sonner'
import { useState } from "react"
import CloudinaryImage from "@/components/CloudinaryImage"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  projectDetails: z.string().min(10, "Please provide more details about your project"),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to submit message")

      toast.success("Message sent successfully!")
      reset()
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Toaster position="bottom-right" />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <CloudinaryImage
          src="eleven-star/hero/hero-construction-2"
          alt="Contact Eleven Star Construction"
          fill
          priority
          className="object-cover z-0"
          sizes="100vw"
          quality="auto:good"
          crop="fill"
          gravity="center"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 z-[8]" />
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Partner with Eleven Star Construction for your next infrastructure project
          </p>
        </motion.div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-8 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight uppercase tracking-premium">
                  <span className="inline-block relative pb-3">
                    Get in Touch
                    <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-brand-green" />
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                  Whether you&apos;re looking to discuss a new project, explore partnership opportunities, 
                  or learn more about our services, our team is here to help.
                </p>
              </div>
              
              {/*
              <div className="flex items-start space-x-4">
                <Building2 className="w-6 h-6 text-brand-green" />
                <div>
                  <h3 className="font-semibold mb-1">Main Office</h3>
                  <p className="text-gray-600">Eleven Star Construction Headquarters</p>
                </div>
              </div>
              */}
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-7 h-7 text-brand-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Phone</h3>
                    <p className="text-gray-600">(876) 781-4420</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-7 h-7 text-brand-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Email</h3>
                    <p className="text-gray-600">elevenstarconstruction@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-7 h-7 text-brand-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Location</h3>
                    <p className="text-gray-600">
                      Runaway Bay<br />
                      St. Ann<br />
                      Jamaica
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-7 h-7 text-brand-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: By Appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  {/* WhatsApp Icon (SVG for brand accuracy) */}
                  <span className="w-7 h-7 text-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-7 h-7"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M12.04 2.003a9.94 9.94 0 0 0-8.89 14.36l-1.13 4.13a1 1 0 0 0 1.22 1.22l4.13-1.13a9.94 9.94 0 1 0 4.67-18.58zm0 2a7.94 7.94 0 1 1 0 15.88 7.94 7.94 0 0 1 0-15.88zm-6.13 14.1.7-2.56a1 1 0 0 0-.13-.86A7.94 7.94 0 1 1 12.04 20a7.94 7.94 0 0 1-6.13-1.87zm10.13-4.1c-.13-.07-.77-.38-1.1-.53-.29-.13-.5-.13-.7.13-.2.26-.8.93-.98 1.12-.18.2-.36.2-.66.07-.29-.13-1.23-.45-2.34-1.44-.86-.77-1.44-1.7-1.61-1.99-.17-.29-.02-.45.12-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.13-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.38-.29.3-1.1 1.08-1.1 2.63 0 1.55 1.1 3.05 2.1 4.13 1.01 1.08 2.36 2.13 3.8 2.13 1.44 0 2.13-.92 2.42-1.3.29-.38.29-.7.2-.92-.09-.22-.34-.35-.47-.42z"/>
                    </svg>
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-gray-900">WhatsApp</h3>
                    <a
                      href="https://wa.me/18767814420"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
                      aria-label="Chat with us on WhatsApp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        aria-hidden="true"
                      >
                        <path d="M12.04 2.003a9.94 9.94 0 0 0-8.89 14.36l-1.13 4.13a1 1 0 0 0 1.22 1.22l4.13-1.13a9.94 9.94 0 1 0 4.67-18.58zm0 2a7.94 7.94 0 1 1 0 15.88 7.94 7.94 0 0 1 0-15.88zm-6.13 14.1.7-2.56a1 1 0 0 0-.13-.86A7.94 7.94 0 1 1 12.04 20a7.94 7.94 0 0 1-6.13-1.87zm10.13-4.1c-.13-.07-.77-.38-1.1-.53-.29-.13-.5-.13-.7.13-.2.26-.8.93-.98 1.12-.18.2-.36.2-.66.07-.29-.13-1.23-.45-2.34-1.44-.86-.77-1.44-1.7-1.61-1.99-.17-.29-.02-.45.12-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.13-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.38-.29.3-1.1 1.08-1.1 2.63 0 1.55 1.1 3.05 2.1 4.13 1.01 1.08 2.36 2.13 3.8 2.13 1.44 0 2.13-.92 2.42-1.3.29-.38.29-.7.2-.92-.09-.22-.34-.35-.47-.42z"/>
                      </svg>
                      Message us on WhatsApp
                    </a>
                    <p className="text-gray-600 text-sm mt-2">+1 (876) 781-4420</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Updated Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent shadow-sm ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent shadow-sm ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent shadow-sm ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select 
                    id="service"
                    {...register("service")}
                    className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent shadow-sm ${
                      errors.service ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select project type</option>
                    <optgroup label="Residential & Commercial">
                      <option value="Residential Construction">Residential Construction</option>
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Renovations & Remodeling">Renovations & Remodeling</option>
                    </optgroup>
                    <optgroup label="Specialized Services">
                      <option value="Land Subdivision">Land Subdivision</option>
                      <option value="Road Construction">Road Construction</option>
                      <option value="Landscaping & Outdoor Living">Landscaping & Outdoor Living</option>
                    </optgroup>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="projectDetails"
                    {...register("projectDetails")}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent shadow-sm ${
                      errors.projectDetails ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us about your project"
                  ></textarea>
                  {errors.projectDetails && (
                    <p className="text-red-500 text-sm mt-1">{errors.projectDetails.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-green text-white py-3 rounded-xl font-semibold hover:bg-brand-green-light transition-all duration-300 disabled:bg-gray-400 shadow-[0_4px_10px_-2px_rgba(0,166,81,0.3)] hover:shadow-[0_6px_20px_-2px_rgba(0,166,81,0.4)]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Visit our office in Runaway Bay, St. Ann, Jamaica
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg shadow-black/10 border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=Runaway+Bay,+St.+Ann,+Jamaica&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Eleven Star Construction Location - Runaway Bay, St. Ann, Jamaica"
              aria-label="Google Maps showing Eleven Star Construction location in Runaway Bay, St. Ann, Jamaica"
            ></iframe>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/dir//Runaway+Bay,+St.+Ann,+Jamaica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-light font-medium transition-colors duration-200"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 