"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toaster, toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  projectDetails: z.string().min(10, "Please provide more details about your project"),
})

type FormData = z.infer<typeof formSchema>

export default function QuoteButton({ 
  trigger,
  initialService
}: { 
  trigger?: React.ReactNode,
  initialService?: string 
}) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: initialService || ""
    }
  })

  useEffect(() => {
    if (open && initialService) {
      setValue("service", initialService)
    }
  }, [open, initialService, setValue])

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
      console.log(response);
      if (!response.ok) throw new Error("Failed to submit quote request")

      toast.success("Quote request submitted successfully!")
      reset()
      setOpen(false)
    } catch (error) {
      console.error("Quote submission error:", error)
      toast.error("Failed to submit quote request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Toaster position="bottom-right" />
      {trigger ? (
        <div onClick={() => setOpen(true)}>
          {trigger}
        </div>
      ) : (
        <Button
          onClick={() => setOpen(true)}
          className="fixed bottom-8 right-8 z-50 bg-black text-white hover:bg-gray-800 shadow-lg"
          size="lg"
        >
          Request a Quote
        </Button>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request a Quote</DialogTitle>
            <DialogDescription>
              Fill out the form below and our team will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                {...register("phone")}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <select
                {...register("service")}
                className={`w-full rounded-md border ${errors.service ? "border-red-500" : "border-gray-300"} px-3 py-2`}
                defaultValue=""
              >
                <option value="" disabled>Select a Service</option>
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
              <Textarea
                placeholder="Project Details"
                {...register("projectDetails")}
                className={errors.projectDetails ? "border-red-500" : ""}
              />
              {errors.projectDetails && (
                <p className="text-red-500 text-sm mt-1">{errors.projectDetails.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
} 