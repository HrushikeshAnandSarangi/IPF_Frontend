"use client"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Footer() {
  const [isTranslateLoaded, setIsTranslateLoaded] = useState(false)

  const quickLinks = [
    { title: "About Us", href: "/about" },
    { title: "Interfaith", href: "/interfaith" },
    { title: "Projects", href: "/projects" },
    { title: "Our Team", href: "/team" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  ]

  const contactInfo = [
    { icon: Mail, text: "info@indianpluralismfoundation.org", href: "mailto:info@indianpluralismfoundation.org" },
    { icon: MapPin, text: "New Delhi, India", href: "#location" },
  ]

  // Google Translate functionality
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script")) return

      const script = document.createElement("script")
      script.id = "google-translate-script"
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.body.appendChild(script)
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,bn,te,ta,gu,kn,ml,mr,pa,ur,as,or",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element",
      )
      setIsTranslateLoaded(true)
    }

    addGoogleTranslateScript()

    const style = document.createElement("style")
    style.textContent = `
      .goog-te-gadget {
        font-family: inherit !important;
        font-size: 11px !important;
      }
      .goog-te-gadget-simple {
        background-color: rgb(30 41 59) !important;
        border: 1px solid rgb(71 85 105) !important;
        border-radius: 4px !important;
        padding: 4px 8px !important;
        font-size: 11px !important;
        color: rgb(203 213 225) !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
      }
      .goog-te-gadget-simple:hover {
        background-color: rgb(51 65 85) !important;
        border-color: rgb(251 146 60) !important;
      }
      .goog-te-gadget-simple .goog-te-menu-value {
        color: rgb(203 213 225) !important;
      }
      .goog-te-gadget-simple .goog-te-menu-value:hover {
        color: rgb(251 146 60) !important;
      }
      .goog-te-gadget-icon {
        display: none !important;
      }
      .goog-te-gadget-simple .goog-te-menu-value span {
        color: inherit !important;
      }
      .goog-te-menu-frame {
        max-height: 300px !important;
        overflow-y: auto !important;
      }
      .goog-te-banner-frame {
        display: none !important;
      }
      body {
        top: 0 !important;
      }
      .skiptranslate > iframe {
        height: 0 !important;
        border-style: none !important;
        box-shadow: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      const script = document.getElementById("google-translate-script")
      if (script) {
        document.body.removeChild(script)
      }
      document.head.removeChild(style)
    }
  }, [])

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-full mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center flex-shrink-0">
                <Image src="/logo-only.svg" alt="" height={32} width={32} className="object-contain" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-orange-500 tracking-tight uppercase leading-tight">
                  Indian Pluralism Foundation
                </h3>
                <p className="text-slate-400 text-xs tracking-wide uppercase">Building Bridges, Fostering Unity</p>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Promoting interfaith dialogue, cultural understanding, and social harmony through inclusive community
              engagement.
            </p>

            {/* Contact Information */}
            <div className="space-y-1">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-2 text-slate-300 hover:text-orange-400 transition-colors duration-200 group text-xs"
                  >
                    <IconComponent className="h-3 w-3 text-slate-400 group-hover:text-orange-400 flex-shrink-0" />
                    <span>{contact.text}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h4>
            <nav className="space-y-1">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-slate-300 hover:text-orange-400 transition-colors duration-200 text-xs font-medium"
                >
                  {link.title.toUpperCase()}
                </a>
              ))}
              <a
                href="/contribute"
                className="block text-slate-300 hover:text-amber-400 transition-colors duration-200 text-xs font-medium"
              >
                CONTRIBUTE
              </a>
              <a
                href="/joinus"
                className="block text-slate-300 hover:text-green-400 transition-colors duration-200 text-xs font-medium"
              >
                JOIN US
              </a>
            </nav>
          </div>

          {/* Column 3: Call to Action */}
          <div className="space-y-3">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-4 rounded-md shadow-lg">
              <h4 className="text-white font-bold text-sm mb-2 tracking-wider uppercase">Get Involved</h4>
              <p className="text-orange-100 text-xs mb-3 leading-relaxed">
                Join our mission to build inclusive communities.
              </p>
              <div className="space-y-2">
                <a
                  href="/joinus"
                  className="block w-full bg-white text-orange-700 font-semibold py-2 px-3 rounded text-xs text-center hover:bg-orange-50 transition-colors duration-200 uppercase tracking-wide"
                >
                  Join Now
                </a>
                <a
                  href="/contribute"
                  className="block w-full bg-amber-600 text-white font-semibold py-2 px-3 rounded text-xs text-center hover:bg-amber-700 transition-colors duration-200 uppercase tracking-wide"
                >
                  Contribute
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Follow Us</h4>
            <div className="grid grid-cols-4 gap-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={`Follow us on ${social.label}`}
                    className="flex items-center justify-center h-8 bg-slate-800 hover:bg-orange-600 transition-all duration-200 rounded shadow-sm hover:shadow-md group"
                  >
                    <IconComponent className="h-4 w-4 text-slate-300 group-hover:text-white transition-colors duration-200" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-full mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-xs text-center sm:text-left">
              <span>© 2025 Indian Pluralism Foundation. All rights reserved.</span>
            </div>

            {/* Google Translate */}
            <div className="flex items-center space-x-2">
              <Globe className="h-3 w-3 text-slate-400" />
              <div
                id="google_translate_element"
                className={`transition-opacity duration-300 ${isTranslateLoaded ? "opacity-100" : "opacity-0"}`}
              />
              {!isTranslateLoaded && <span className="text-slate-400 text-xs">Loading...</span>}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Type declaration to prevent TS errors
declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: any
  }
}
