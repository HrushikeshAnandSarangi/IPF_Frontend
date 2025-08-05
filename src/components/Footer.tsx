"use client"

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import GoogleTranslate from "./GoogleTranslate"
export default function Footer() {
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

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Main Footer Content - 3 Columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & Description */}
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-white flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Organization Logo"
                  className="h-6 w-6 object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight uppercase">OrganizationName</h3>
                <p className="text-slate-400 text-sm tracking-wide mt-1">BUILDING BETTER COMMUNITIES</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed tracking-wide">
              Dedicated to creating positive change through innovative projects and community engagement. Join us in
              making a difference in communities worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white tracking-wider uppercase border-b border-slate-700 pb-3">
              Quick Links
            </h4>
            <div className="grid grid-cols-1 gap-1">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm tracking-wide font-medium hover:bg-slate-800 px-2 py-1 block border-b border-slate-800 hover:border-slate-600"
                >
                  {link.title.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Custom Colored Div + Socials */}
          <div className="space-y-4">
            {/* Custom Colored Div */}
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <h4 className="text-white font-bold text-base mb-4 tracking-wider uppercase">Get Involved</h4>
              <p className="text-amber-100 text-sm mb-3 leading-relaxed">
                Ready to make a difference? Join our mission and help us build better communities.
              </p>
              <button className="w-full bg-white text-amber-700 font-semibold py-3 px-4 hover:bg-amber-50 transition-colors duration-200 tracking-wide uppercase text-sm shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                Join Now
              </button>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <h4 className="text-base font-bold text-white tracking-wider uppercase border-b border-slate-700 pb-3">
                Follow Us
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center h-8 bg-slate-800 hover:bg-slate-700 transition-colors duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                    >
                      <IconComponent className="h-5 w-5 text-slate-300 hover:text-white" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section - Simplified */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
  <div className="text-slate-400 text-sm tracking-wide">
    <span>INFO@ORGANIZATIONNAME.COM</span>
  </div>
  <div className="text-slate-400 text-sm tracking-wide text-center">
    <span>© 2025 ORGANIZATIONNAME. ALL RIGHTS RESERVED.</span>
  </div>
  <div className="mt-2 md:mt-0">
    <GoogleTranslate />
  </div>
</div>

    </footer>
  )
}
