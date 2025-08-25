"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, Calendar } from "lucide-react"

export function CTASection() {
  const handleEmergencySupport = () => {
    const message =
      "🚨 URGENT: I need immediate IT support for a critical issue. Please contact me as soon as possible."
    const whatsappUrl = `https://wa.me/254768299985?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleFreeConsultation = () => {
    const message =
      "Hi! I'd like to schedule a free IT consultation to discuss my business needs. When would be a good time to talk?"
    const whatsappUrl = `https://wa.me/254768299985?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCallNow = () => {
    window.location.href = "tel:+254768299985"
  }

  return (
    <section id="cta" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Don't let IT issues slow down your business. Get expert support and custom solutions today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/95 border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Call Now</h3>
                <p className="text-gray-600 text-sm mb-4">Speak directly with our IT experts</p>
                <Button onClick={handleCallNow} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  0768 299 985
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/95 border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-gray-900">WhatsApp Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Quick response via WhatsApp</p>
                <Button onClick={handleEmergencySupport} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/95 border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Free Consultation</h3>
                <p className="text-gray-600 text-sm mb-4">30-minute strategy session</p>
                <Button
                  onClick={handleFreeConsultation}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary-foreground/5 rounded-lg p-8 border border-primary-foreground/20">
            <h3 className="font-heading font-semibold text-2xl mb-4">🚨 Emergency IT Support Available</h3>
            <p className="text-primary-foreground/90 mb-6">
              Critical system down? Server crashed? We provide 24/7 emergency support to get your business back online
              fast.
            </p>
            <Button
              onClick={handleEmergencySupport}
              size="lg"
              variant="secondary"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Get Emergency Support Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
