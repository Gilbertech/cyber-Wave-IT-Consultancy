import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">CW</span>
              </div>
              <span className="font-heading font-bold text-lg">CyberWave IT</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner in digital transformation. We deliver reliable IT solutions and custom software
              development that empower businesses to thrive in the digital era.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/gilbert-ngaruiya-a08762375/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/hightechysol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/gilbert.niccur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:gilbertngaruiya@gmail.com"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
                <li>
                <a
                  href="#about-owner"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Meet Me
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#cta"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                 Emergency
                </a>
              </li>
               <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                 Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  IT Support
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Networking
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Cybersecurity
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Software Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Hardware Repair
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Cyber Services & Applications
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  SEO & Online Services
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Subscribe to our newsletter for the latest tech insights and project updates.
            </p>
            <form name="newsletter" method="POST" data-netlify="true" className="space-y-2">
              <input type="hidden" name="form-name" value="newsletter" />
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">© 2025 CyberWave IT Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
