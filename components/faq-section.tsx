"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What IT services do you offer?",
    answer:
      "We provide comprehensive IT support, software development, networking solutions, cybersecurity services, hardware repair, graphic design, and cyber services including HELB/HEF, KUCCPS, KRA, NTSA, and TSC applications.",
  },
  {
    question: "How quickly can you respond to IT emergencies?",
    answer:
      "We offer 24/7 emergency support with response times within 2 hours for critical issues. Our emergency hotline ensures you get immediate assistance when your business operations are at risk.",
  },
  {
    question: "Do you provide remote IT support?",
    answer:
      "Yes, we offer both remote and on-site IT support. Many issues can be resolved remotely, which saves time and reduces costs. For hardware issues or complex setups, we provide on-site visits in Thika and surrounding areas.",
  },
  {
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing including monthly retainer packages (KSh 5,000-12,000), project-based pricing, and hourly rates. Contact us for a customized quote based on your specific needs.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We implement industry-standard security protocols including data encryption, secure backup solutions, firewall configuration, and regular security audits. Your data protection is our top priority.",
  },
  {
    question: "Can you help with government application processes?",
    answer:
      "We specialize in cyber services including HELB/HEF loan applications, KUCCPS university applications, KRA tax compliance, NTSA driving license services, and TSC teacher applications.",
  },
  {
    question: "Do you offer training for staff?",
    answer:
      "Yes, we provide comprehensive IT training for your staff including software usage, cybersecurity awareness, and best practices to maximize your technology investments.",
  },
  {
    question: "What is your experience in software development?",
    answer:
      "With 3+ years of experience, I specialize in web applications, mobile apps, e-commerce platforms, and custom business solutions using modern technologies like React, Next.js, and various databases.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our IT services and support
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background border border-border rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="https://wa.me/254768299985?text=I have a question about your IT services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg font-medium transition-colors"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
