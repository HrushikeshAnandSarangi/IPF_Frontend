"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout)
      }
    }
  }, [dropdownTimeout])

  const aboutItems = [
    { title: "What We Do", href: "/about#whatdowedo" },
    { title: "Our Vision", href: "/about#vision" },
    { title: "Our Partners", href: "/about#partnership" },
    { title: "Call To Action", href: "/about#calltoaction" },
  ]

  const projectItems = [
    { title: "Education Initiative", href: "/projects#education" },
    { title: "Healthcare Program", href: "/projects#healthcare" },
    { title: "Environmental Project", href: "/projects#environment" },
    { title: "Community Development", href: "/projects#community" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
    setDropdownTimeout(timeout)
  }

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleItemClick = () => {
    setActiveDropdown(null)
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
  }

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled
          ? "bg-slate-50/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-slate-200/60"
          : "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="  flex items-center justify-center">
              <Image src="logo-only.svg" alt="Organization Logo" className="object-cover" height={80} width={80}/>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight uppercase letter-spacing-wide">
              Indian Pluralism Foundation
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="/"
              className="px-5 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 ease-in-out font-medium tracking-wide"
            >
              HOME
            </a>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("about")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => handleDropdownClick("about")}
                className="flex items-center px-5 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 ease-in-out font-medium tracking-wide"
              >
                ABOUT
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "about" && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200 animate-in fade-in slide-in-from-top-1 duration-200"
                  onMouseEnter={() => handleDropdownEnter("about")}
                  onMouseLeave={handleDropdownLeave}
                >
                  {aboutItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={handleItemClick}
                      className="block px-6 py-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150 text-sm font-medium cursor-pointer tracking-wide border-b border-slate-100 last:border-b-0"
                    >
                      {item.title.toUpperCase()}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/team"
              className="px-5 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 ease-in-out font-medium tracking-wide"
            >
              TEAM
            </a>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("projects")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => handleDropdownClick("projects")}
                className="flex items-center px-5 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 ease-in-out font-medium tracking-wide"
              >
                PROJECTS
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${activeDropdown === "projects" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "projects" && (
                <div
                  className="absolute top-full left-0 mt-1 w-72 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200 animate-in fade-in slide-in-from-top-1 duration-200"
                  onMouseEnter={() => handleDropdownEnter("projects")}
                  onMouseLeave={handleDropdownLeave}
                >
                  {projectItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={handleItemClick}
                      className="block px-6 py-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150 text-sm font-medium cursor-pointer tracking-wide border-b border-slate-100 last:border-b-0"
                    >
                      {item.title.toUpperCase()}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Highlighted Buttons */}
            <a
              href="/contribute"
              className="px-8 py-2 bg-amber-600 text-white hover:bg-amber-700 transition-all duration-200 ease-in-out font-semibold tracking-wide shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] ml-4"
            >
              CONTRIBUTE
            </a>
            <a
              href="#join"
              className="px-8 py-2 bg-green-900 text-white hover:bg-green-800 transition-all duration-200 ease-in-out font-semibold tracking-wide shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            >
              JOIN US
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 ease-in-out"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] animate-in slide-in-from-top duration-200">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <a
                href="#home"
                className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150 font-medium tracking-wide border-b border-slate-100"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </a>

              {/* Mobile About Section */}
              <div className="space-y-1">
                <div className="px-4 py-3 text-slate-900 font-bold text-sm tracking-wider border-b border-slate-200">
                  ABOUT
                </div>
                {aboutItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-8 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150 text-sm tracking-wide border-b border-slate-50 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title.toUpperCase()}
                  </a>
                ))}
              </div>

              <a
                href="#team"
                className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150 font-medium tracking-wide border-b border-slate-100"
                onClick={() => setIsMenuOpen(false)}
              >
                TEAM
              </a>

              {/* Mobile Projects Section */}
              <div className="space-y-1">
                <div className="px-4 py-3 text-slate-900 font-bold text-sm tracking-wider border-b border-slate-200">
                  PROJECTS
                </div>
                {projectItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-8 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150 text-sm tracking-wide border-b border-slate-50 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title.toUpperCase()}
                  </a>
                ))}
              </div>

              {/* Mobile Highlighted Buttons */}
              <div className="pt-6 space-y-3">
                <a
                  href="#donate"
                  className="block w-full px-6 py-4 bg-amber-600 text-white text-center hover:bg-amber-700 transition-colors duration-150 font-semibold tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTRIBUTE
                </a>
                <a
                  href="/joinus"
                  className="block w-full px-6 py-4 bg-slate-800 text-white text-center hover:bg-slate-900 transition-colors duration-150 font-semibold tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  JOIN US
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
