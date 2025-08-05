"use client"
import React, { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"

// Types
interface NavItem {
  title: string
  href: string
  description?: string
}

interface DropdownProps {
  title: string
  items: readonly NavItem[]
  isActive: boolean
  onToggle: () => void
  onClose: () => void
  id: string
}

// Navigation data
const NAV_DATA = {
  about: [
    {
      title: "What We Do",
      href: "/about#whatdowedo",
      description: "Learn about our mission and activities",
    },
    {
      title: "Our Vision",
      href: "/about#vision",
      description: "Discover our vision for the future",
    },
    {
      title: "Our Purpose",
      href: "/about#purpose",
      description: "Understand our core purpose and values",
    },
    {
      title: "Our Partners",
      href: "/about#partnership",
      description: "Meet our collaborative partners",
    },
    {
      title: "Call To Action",
      href: "/about#calltoaction",
      description: "Join our movement for change",
    },
  ],
} as const

// Main navigation items
const MAIN_NAV_ITEMS: readonly (NavItem & { shortcut?: string })[] = [
  {
    title: "HOME",
    href: "/",
    shortcut: "Alt+H",
    description: "Go to homepage",
  },
  {
    title: "TEAM",
    href: "/team",
    shortcut: "Alt+T",
    description: "Meet our team members",
  },
  {
    title: "PROJECTS",
    href: "/projects",
    shortcut: "Alt+P",
    description: "View our projects and initiatives",
  },
  {
    title: "INTERFAITH",
    href: "/interfaith",
    shortcut: "Alt+I",
    description: "Explore interfaith dialogue programs",
  },
] as const

// Skip Link Component
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Skip to main content
    </a>
  )
}

// Desktop Dropdown Component
function DesktopDropdown({ title, items, isActive, onToggle, onClose, id }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Handle keyboard navigation within dropdown
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (!isActive) return

      switch (event.key) {
        case "Escape":
          event.preventDefault()
          onClose()
          buttonRef.current?.focus()
          break
        case "ArrowDown":
          event.preventDefault()
          const firstLink = dropdownRef.current?.querySelector("a")
          firstLink?.focus()
          break
        case "ArrowUp":
          event.preventDefault()
          const links = dropdownRef.current?.querySelectorAll("a")
          const lastLink = links?.[links.length - 1] as HTMLElement
          lastLink?.focus()
          break
      }
    },
    [isActive, onClose],
  )

  // Handle dropdown item navigation
  const handleItemKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number) => {
      const links = dropdownRef.current?.querySelectorAll("a")
      if (!links) return

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault()
          const nextIndex = (index + 1) % links.length
          ;(links[nextIndex] as HTMLElement).focus()
          break
        case "ArrowUp":
          event.preventDefault()
          const prevIndex = index === 0 ? links.length - 1 : index - 1
          ;(links[prevIndex] as HTMLElement).focus()
          break
        case "Escape":
          event.preventDefault()
          onClose()
          buttonRef.current?.focus()
          break
        case "Tab":
          if (!event.shiftKey && index === links.length - 1) {
            onClose()
          }
          break
      }
    },
    [onClose],
  )

  return (
    <div className="relative" onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        onClick={onToggle}
        className="flex items-center px-2 sm:px-3 lg:px-4 xl:px-5 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-md transition-all duration-200 font-medium tracking-wide text-xs sm:text-sm lg:text-base"
        aria-expanded={isActive}
        aria-haspopup="true"
        aria-controls={`${id}-dropdown`}
        aria-describedby={`${id}-description`}
      >
        <span className="sr-only">Navigate to </span>
        <span className="truncate">{title}</span>
        <svg
          className={`ml-1 lg:ml-2 h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-200 flex-shrink-0 ${
            isActive ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div id={`${id}-description`} className="sr-only">
        Press Enter or Space to open {title} submenu, use arrow keys to navigate
      </div>
      {isActive && (
        <>
          {/* Backdrop for mobile and tablet */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <div
            ref={dropdownRef}
            id={`${id}-dropdown`}
            role="menu"
            aria-labelledby={`${id}-button`}
            className="absolute top-full left-0 mt-1 w-56 sm:w-64 lg:w-72 xl:w-80 bg-white shadow-xl border border-slate-200 rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50 max-h-[70vh] sm:max-h-[80vh] overflow-y-auto custom-scrollbar"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                role="menuitem"
                onClick={onClose}
                onKeyDown={(e) => handleItemKeyDown(e, index)}
                className="block px-3 sm:px-4 lg:px-6 py-3 lg:py-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 focus:bg-slate-100 focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-150 text-xs sm:text-sm font-medium border-b border-slate-100 last:border-b-0"
                aria-describedby={item.description ? `${id}-item-${index}-desc` : undefined}
              >
                <span className="block">{item.title.toUpperCase()}</span>
                {item.description && (
                  <span id={`${id}-item-${index}-desc`} className="block text-xs text-slate-500 mt-1">
                    {item.description}
                  </span>
                )}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// Mobile Menu Component
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const menuRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)

  // Handle body scroll lock and focus management
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      // Focus first item when menu opens
      setTimeout(() => {
        firstFocusableRef.current?.focus()
      }, 100)
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Focus trapping
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (!isOpen) return

      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
      }

      // Simple focus trapping
      if (event.key === "Tab") {
        const focusableElements = menuRef.current?.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
        if (!focusableElements) return

        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    },
    [isOpen, onClose],
  )

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} aria-hidden="true" />
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation menu"
        onKeyDown={handleKeyDown}
        className="fixed top-12 xs:top-14 sm:top-16 left-0 right-0 bottom-0 bg-white z-50 lg:hidden overflow-y-auto custom-scrollbar"
      >
        <nav
          className="px-3 xs:px-4 py-4 xs:py-6 space-y-1 safe-area-inset"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {MAIN_NAV_ITEMS.map((item, index) => (
            <a
              key={item.href}
              ref={index === 0 ? firstFocusableRef : undefined}
              href={item.href}
              onClick={onClose}
              className="block px-3 xs:px-4 py-3 xs:py-4 text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 active:bg-slate-200 transition-all duration-150 font-medium tracking-wide border-b border-slate-100 text-sm xs:text-base rounded-md"
              aria-describedby={item.description ? `${item.href.replace(/[^a-zA-Z0-9]/g, "")}-desc` : undefined}
            >
              <span>{item.title}</span>
              {item.description && (
                <span className="sr-only" id={`${item.href.replace(/[^a-zA-Z0-9]/g, "")}-desc`}>
                  , {item.description}
                </span>
              )}
            </a>
          ))}

          {/* About Section */}
          <div className="py-2" role="group" aria-labelledby="mobile-about-heading">
            <div
              id="mobile-about-heading"
              className="px-3 xs:px-4 py-2 xs:py-3 text-slate-900 font-bold text-xs xs:text-sm tracking-wider border-b border-slate-200 bg-slate-50 rounded-t-md"
            >
              ABOUT
            </div>
            <div className="bg-slate-25 rounded-b-md" role="group" aria-labelledby="mobile-about-heading">
              {NAV_DATA.about.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-6 xs:px-8 py-2 xs:py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 active:bg-slate-200 transition-colors duration-150 text-xs xs:text-sm tracking-wide border-b border-slate-50 last:border-b-0"
                  onClick={onClose}
                  aria-describedby={item.description ? `mobile-about-${index}-desc` : undefined}
                >
                  <span className="block">{item.title.toUpperCase()}</span>
                  {item.description && (
                    <span id={`mobile-about-${index}-desc`} className="block text-xs text-slate-500 mt-1">
                      {item.description}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="pt-6 xs:pt-8 pb-safe space-y-3 xs:space-y-4 px-2 xs:px-4"
            role="group"
            aria-label="Action buttons"
          >
            <a
              href="/contribute"
              onClick={onClose}
              className="block w-full px-4 xs:px-6 py-3 xs:py-4 rounded-lg text-base xs:text-lg bg-amber-600 hover:bg-amber-700 focus:bg-amber-700 active:bg-amber-800 text-white text-center transition-all duration-200 font-semibold tracking-wide shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 active:shadow-sm transform active:scale-95"
              aria-describedby="contribute-action-desc"
            >
              <span>CONTRIBUTE</span>
              <span className="sr-only" id="contribute-action-desc">
                , Support our cause
              </span>
            </a>
            <a
              href="/joinus"
              onClick={onClose}
              className="block w-full px-4 xs:px-6 py-3 xs:py-4 rounded-lg text-base xs:text-lg bg-green-900 hover:bg-green-800 focus:bg-green-800 active:bg-green-950 text-white text-center transition-all duration-200 font-semibold tracking-wide shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 active:shadow-sm transform active:scale-95"
              aria-describedby="join-action-desc"
            >
              <span>JOIN US</span>
              <span className="sr-only" id="join-action-desc">
                , Become a member
              </span>
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

// Enhanced NavLink Component
const NavLink = React.forwardRef<
  HTMLAnchorElement,
  {
    href: string
    onClick?: () => void
    children: React.ReactNode
    description?: string
  }
>(({ href, onClick, children, description }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className="px-2 sm:px-3 lg:px-4 xl:px-5 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-md transition-all duration-200 font-medium tracking-wide text-xs sm:text-sm lg:text-base whitespace-nowrap"
      aria-describedby={description ? `${href.replace(/[^a-zA-Z0-9]/g, "")}-desc` : undefined}
    >
      <span className="truncate">{children}</span>
      {description && (
        <span className="sr-only" id={`${href.replace(/[^a-zA-Z0-9]/g, "")}-desc`}>
          , {description}
        </span>
      )}
    </a>
  )
})
NavLink.displayName = "NavLink"

// Enhanced ActionButton Component
function ActionButton({
  href,
  className,
  onClick,
  children,
  description,
}: {
  href: string
  className: string
  onClick?: () => void
  children: React.ReactNode
  description?: string
}) {
  const baseClasses =
    "px-3 sm:px-4 lg:px-6 py-2 rounded-md text-xs sm:text-sm lg:text-base whitespace-nowrap text-white text-center transition-all duration-200 font-semibold tracking-wide shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 active:shadow-sm transform active:scale-95"

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      aria-describedby={description ? `${href.replace(/[^a-zA-Z0-9]/g, "")}-action-desc` : undefined}
    >
      <span className="truncate">{children}</span>
      {description && (
        <span className="sr-only" id={`${href.replace(/[^a-zA-Z0-9]/g, "")}-action-desc`}>
          , {description}
        </span>
      )}
    </a>
  )
}

// Main Navbar Component
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [announceMessage, setAnnounceMessage] = useState("")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) {
        switch (event.key.toLowerCase()) {
          case "h":
            event.preventDefault()
            window.location.href = "/"
            setAnnounceMessage("Navigating to Home")
            break
          case "t":
            event.preventDefault()
            window.location.href = "/team"
            setAnnounceMessage("Navigating to Team")
            break
          case "p":
            event.preventDefault()
            window.location.href = "/projects"
            setAnnounceMessage("Navigating to Projects")
            break
          case "i":
            event.preventDefault()
            window.location.href = "/interfaith"
            setAnnounceMessage("Navigating to Interfaith")
            break
          case "m":
            event.preventDefault()
            setIsMenuOpen((prev) => !prev)
            setAnnounceMessage(isMenuOpen ? "Menu closed" : "Menu opened")
            break
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isMenuOpen])

  // Handle orientation change and resize
  useEffect(() => {
    const handleOrientationChange = () => {
      setIsMenuOpen(false)
      setActiveDropdown(null)
      setAnnounceMessage("Menu closed due to orientation change")
    }

    const handleResize = () => {
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
      // Close dropdown when resizing to mobile
      if (window.innerWidth < 1024) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("orientationchange", handleOrientationChange)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest("[data-dropdown]")) {
        setActiveDropdown(null)
      }
    }

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [activeDropdown])

  // Clear announce message after delay
  useEffect(() => {
    if (announceMessage) {
      const timer = setTimeout(() => setAnnounceMessage(""), 1000)
      return () => clearTimeout(timer)
    }
  }, [announceMessage])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      const newState = !prev
      setAnnounceMessage(newState ? "Menu opened" : "Menu closed")
      return newState
    })
    setActiveDropdown(null)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
    setAnnounceMessage("Menu closed")
  }, [])

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown((prev) => {
      const newState = prev === dropdown ? null : dropdown
      setAnnounceMessage(newState ? `${dropdown} menu opened` : `${dropdown} menu closed`)
      return newState
    })
    setIsMenuOpen(false)
  }, [])

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null)
    setAnnounceMessage("Dropdown closed")
  }, [])

  return (
    <>
      <SkipLink />
      {/* Screen reader announcements */}
      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {announceMessage}
      </div>

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b safe-area-inset-top ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-slate-200" : "bg-white shadow-sm border-slate-100"
        }`}
      >
        <div className="max-w-full mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 xs:h-14 sm:h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 min-w-0 flex-1 lg:flex-none">
              <a
                href="/"
                className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
                aria-label="Indian Pluralism Foundation - Go to homepage"
              >
                <div className="flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/logo-only.svg"
                    alt=""
                    height={64}
                    width={64}
                    className="object-contain xs:h-10 xs:w-10 sm:h-12 sm:w-12"
                    priority
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-orange-500 tracking-tight uppercase hidden sm:block truncate">
                    Indian Pluralism Foundation
                  </span>
                  <span className="text-sm xs:text-base font-bold text-orange-500 tracking-tight uppercase sm:hidden">
                    Indian Pluralism Foundation
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-1 xl:space-x-2"
              role="navigation"
              aria-label="Main navigation"
            >
              <NavLink href="/interfaith" description="Explore interfaith dialogue programs">
                INTERFAITH
              </NavLink>
              <NavLink href="/" description="Go to homepage">
                HOME
              </NavLink>
              <div data-dropdown>
                <DesktopDropdown
                  title="ABOUT"
                  items={NAV_DATA.about}
                  isActive={activeDropdown === "about"}
                  onToggle={() => toggleDropdown("about")}
                  onClose={closeDropdown}
                  id="about"
                />
              </div>
              <NavLink href="/team" description="Meet our team members">
                TEAM
              </NavLink>
              <NavLink href="/projects" description="View our projects and initiatives">
                PROJECTS
              </NavLink>

              {/* Action Buttons */}
              <div
                className="flex items-center space-x-1 xl:space-x-2 ml-2 xl:ml-4"
                role="group"
                aria-label="Action buttons"
              >
                <ActionButton
                  href="/contribute"
                  className="bg-amber-600 hover:bg-amber-700 focus:bg-amber-700"
                  description="Support our cause"
                >
                  CONTRIBUTE
                </ActionButton>
                <ActionButton
                  href="/joinus"
                  className="bg-green-900 hover:bg-green-800 focus:bg-green-800"
                  description="Become a member"
                >
                  JOIN US
                </ActionButton>
              </div>
            </nav>

            {/* Tablet Navigation (md to lg breakpoint) */}
            <nav
              className="hidden md:flex lg:hidden items-center space-x-1"
              role="navigation"
              aria-label="Tablet navigation"
            >
              <NavLink href="/interfaith" description="Explore interfaith dialogue programs">
                INTERFAITH
              </NavLink>
              <NavLink href="/" description="Go to homepage">
                HOME
              </NavLink>
              <NavLink href="/about" description="Learn about our organization">
                ABOUT
              </NavLink>
              <NavLink href="/team" description="Meet our team members">
                TEAM
              </NavLink>
              <NavLink href="/projects" description="View our projects and initiatives">
                PROJECTS
              </NavLink>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-1.5 xs:p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 active:bg-slate-200 rounded-md transition-all duration-200 touch-manipulation"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-describedby="mobile-menu-shortcut"
            >
              {isMenuOpen ? (
                <svg
                  className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            <div id="mobile-menu-shortcut" className="sr-only">
              Press Alt+M to toggle menu
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </div>

        {/* Keyboard shortcuts help (hidden by default, shown on focus) */}
        <div className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:top-full focus-within:left-4 focus-within:bg-white focus-within:border focus-within:border-slate-200 focus-within:rounded-md focus-within:p-4 focus-within:shadow-lg focus-within:z-50">
          <h3 className="font-semibold mb-2 text-sm">Keyboard Shortcuts:</h3>
          <ul className="text-xs space-y-1">
            <li>Alt+H: Home</li>
            <li>Alt+T: Team</li>
            <li>Alt+P: Projects</li>
            <li>Alt+I: Interfaith</li>
            <li>Alt+M: Toggle Menu</li>
          </ul>
        </div>
      </header>

      <style jsx global>{`
        /* Custom breakpoint for extra small screens */
        @media (min-width: 475px) {
          .xs\\:h-10 {
            height: 2.5rem;
          }
          .xs\\:w-10 {
            width: 2.5rem;
          }
          .xs\\:h-14 {
            height: 3.5rem;
          }
          .xs\\:text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
          .xs\\:text-base {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .xs\\:text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
          .xs\\:px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .xs\\:px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          .xs\\:px-8 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .xs\\:py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }
          .xs\\:py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .xs\\:py-6 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          .xs\\:py-8 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .xs\\:pt-8 {
            padding-top: 2rem;
          }
          .xs\\:p-2 {
            padding: 0.5rem;
          }
          .xs\\:h-5 {
            height: 1.25rem;
          }
          .xs\\:w-5 {
            width: 1.25rem;
          }
          .xs\\:space-y-4 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 1rem;
          }
          .xs\\:top-14 {
            top: 3.5rem;
          }
        }

        /* Screen reader only utilities */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        /* Safe area utilities for mobile devices */
        .safe-area-inset {
          padding-left: env(safe-area-inset-left);
          padding-right: env(safe-area-inset-right);
        }

        .safe-area-inset-top {
          padding-top: env(safe-area-inset-top);
        }

        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom);
        }

        /* Touch optimization */
        .touch-manipulation {
          touch-action: manipulation;
        }

        /* Custom scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgb(148 163 184) transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgb(148 163 184);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgb(100 116 139);
        }

        /* Focus indicators for keyboard navigation */
        :focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Ensure minimum touch target size */
        @media (pointer: coarse) {
          button,
          a {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Prevent zoom on input focus for iOS */
        @media screen and (max-width: 768px) {
          input,
          select,
          textarea {
            font-size: 16px !important;
          }
        }

        /* Handle landscape orientation on mobile */
        @media screen and (max-height: 500px) and (orientation: landscape) {
          .mobile-landscape-adjust {
            height: calc(100vh - 48px);
            overflow-y: auto;
          }
        }

        /* Very small screens (< 375px) */
        @media screen and (max-width: 374px) {
          .navbar-compact {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }

          .navbar-compact .logo-text {
            font-size: 0.75rem;
          }

          .navbar-compact .nav-button {
            padding: 0.25rem;
          }
        }

        /* Windows High Contrast Mode */
        @media (prefers-contrast: high) {
          .border-slate-100 {
            border-color: ButtonText;
          }
          .bg-white {
            background-color: ButtonFace;
          }
          .text-slate-700 {
            color: ButtonText;
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  )
}
