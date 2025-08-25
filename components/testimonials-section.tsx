"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Wanjiku",
    company: "Nairobi Tech Solutions",
    role: "CEO",
    image: "/testimonial-sarah-wanjiku.png",
    rating: 5,
    text: "CyberWave IT transformed our entire network infrastructure. Gilbert's expertise in cybersecurity gave us peace of mind, and their 24/7 support has been invaluable for our growing business.",
  },
  {
    name: "David Kimani",
    company: "Mombasa Trading Co.",
    role: "Operations Manager",
    image: "/testimonial-david-kimani.png",
    rating: 5,
    text: "The custom software solution they developed for our inventory management has increased our efficiency by 40%. Professional service and excellent communication throughout the project.",
  },
  {
    name: "Grace Achieng",
    company: "Kisumu Medical Center",
    role: "IT Director",
    image: "/testimonial-grace-achieng.png",
    rating: 5,
    text: "Outstanding IT support and network setup. Gilbert's team migrated our entire system to the cloud seamlessly with zero downtime. Highly recommend their services.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it - hear from businesses across Kenya who trust CyberWave IT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
