import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Clock, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Users,
    title: "Trusted Experts",
    description: "Certified professionals with years of industry experience",
  },
  {
    icon: Shield,
    title: "Affordable Pricing",
    description: "Competitive rates without compromising on quality",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance when you need it most",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Cutting-edge technology tailored to your business needs",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">Who We Are</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CyberWave IT Consultancy is your trusted partner in digital transformation. We specialize in delivering
            comprehensive IT solutions that empower businesses to thrive in today's technology-driven landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
