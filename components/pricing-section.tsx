"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic Support",
    price: "KSh 5,000",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Remote IT Support (Business Hours)",
      "Basic Security Setup",
      "Software Installation & Updates",
      "Email Support",
      "Monthly System Health Check",
    ],
    popular: false,
    whatsappMessage:
      "Hi! I'm interested in the Basic Support package (KSh 5,000/month). Could you provide more details about getting started?",
  },
  {
    name: "Professional",
    price: "KSh 12,000",
    period: "/month",
    description: "Comprehensive IT management for growing businesses",
    features: [
      "24/7 Remote Monitoring & Support",
      "Advanced Cybersecurity Solutions",
      "Network Management",
      "Priority Phone & Email Support",
      "Quarterly Security Audits",
      "Cloud Backup Solutions",
    ],
    popular: true,
    whatsappMessage:
      "Hi! I'm interested in the Professional package (KSh 12,000/month). This looks perfect for our growing business. Can we schedule a consultation?",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for large organizations",
    features: [
      "Dedicated IT Consultant",
      "Custom Software Development",
      "Enterprise Security Solutions",
      "On-site Support Available",
      "SLA Guarantees",
      "Compliance Management",
    ],
    popular: false,
    whatsappMessage:
      "Hi! I'm interested in Enterprise solutions with custom pricing. We're a large organization looking for comprehensive IT management. Can we discuss our specific needs?",
  },
]

export function PricingSection() {
  const handleGetStarted = (plan: (typeof pricingPlans)[0]) => {
    const whatsappUrl = `https://wa.me/254768299985?text=${encodeURIComponent(plan.whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-heading font-semibold text-xl text-foreground mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleGetStarted(plan)}
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We offer flexible pricing for unique requirements.
          </p>
          <Button
            onClick={() => {
              const message =
                "Hi! I need a custom IT solution for my business. Can we discuss my specific requirements and get a tailored quote?"
              const whatsappUrl = `https://wa.me/254768299985?text=${encodeURIComponent(message)}`
              window.open(whatsappUrl, "_blank")
            }}
            variant="outline"
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
