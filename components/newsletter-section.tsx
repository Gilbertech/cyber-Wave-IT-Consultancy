"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Submit to Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "newsletter",
          email: email,
        }).toString(),
      })

      if (response.ok) {
        setIsSubscribed(true)
        setEmail("")
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubscribed(false), 5000)
      } else {
        throw new Error("Subscription failed")
      }
    } catch (err) {
      setError("Failed to subscribe. Please try again.")
      // Clear error after 5 seconds
      setTimeout(() => setError(""), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-6">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-primary-foreground mb-4">
            Stay Updated with IT Insights
          </h2>

          <p className="text-primary-foreground/80 mb-8 text-lg">
            Get weekly IT tips, cybersecurity updates, and industry insights delivered to your inbox
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center text-primary-foreground">
              <CheckCircle className="h-6 w-6 mr-2" />
              <span className="text-lg font-medium">Thank you for subscribing! Check your email for confirmation.</span>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center text-red-200 mb-4">
              <AlertCircle className="h-6 w-6 mr-2" />
              <span className="text-lg font-medium">{error}</span>
            </div>
          ) : null}

          {!isSubscribed && (
            <>
              <form name="newsletter" netlify="true" hidden>
                <input type="email" name="email" />
              </form>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-3 disabled:opacity-50"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </>
          )}

          <p className="text-primary-foreground/60 text-sm mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
