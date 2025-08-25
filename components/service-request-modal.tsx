"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Send } from "lucide-react"

interface ServiceRequestModalProps {
  isOpen: boolean
  onClose: () => void
  serviceType: string
}

export function ServiceRequestModal({ isOpen, onClose, serviceType }: ServiceRequestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    urgency: "normal",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `*Service Request: ${serviceType}*

*Client Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Urgency: ${formData.urgency}

*Description:*
${formData.description}

Please contact me to discuss this ${serviceType} request.`

    const whatsappUrl = `https://wa.me/254768299985?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-background rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="font-heading font-bold text-xl">Request {serviceType}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Company/Organization</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Urgency Level</label>
            <select
              value={formData.urgency}
              onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="low">Low - Within a week</option>
              <option value="normal">Normal - Within 2-3 days</option>
              <option value="high">High - Within 24 hours</option>
              <option value="urgent">Urgent - Immediate attention</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Describe Your Requirements *</label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder={`Please describe your ${serviceType} requirements in detail...`}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              <Send className="h-4 w-4 mr-2" />
              Send Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
