"use client"

import { useState, useEffect } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative h-[100vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover" style={{ pointerEvents: "none" }}>
          <source src="cover.mp4" type="video/mp4" />
          {/* Fallback background */}
          <div className="h-full w-full bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100"></div>
        </video>
      </div>

      {/* Main Overlay */}
      <div className="absolute inset-0 z-10 bg-white/20 backdrop-blur-sm"></div>

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div
          className={`text-center max-w-5xl mx-auto transition-all duration-800 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{
            animationDelay: "0.3s",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 lg:mb-6 leading-tight">
            <span className="bg-gradient-to-br from-orange-700 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Stronger
            </span>{" "}
            <span className="bg-gradient-to-br from-green-400 via-green-500 to-green-900 bg-clip-text text-transparent">
              Together
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="w-16 sm:w-20 lg:w-28 h-1 lg:h-1.5 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-700 mb-4 lg:mb-6 rounded-full shadow-lg mx-auto"></div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8 max-w-4xl mx-auto">
            <span className="bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-800 bg-clip-text text-transparent">
              Fostering{" "}
              <span className="font-semibold bg-gradient-to-br from-amber-700 to-orange-800 bg-clip-text text-transparent">
                interfaith dialogue
              </span>{" "}
              and celebrating India's rich tapestry of faiths. Join us in building bridges of{" "}
              <span className="font-semibold bg-gradient-to-br from-yellow-700 to-amber-800 bg-clip-text text-transparent">
                mutual respect
              </span>{" "}
              and{" "}
              <span className="font-semibold bg-gradient-to-br from-orange-700 to-red-800 bg-clip-text text-transparent">
                understanding
              </span>
              .
            </span>
          </p>

          {/* Mission Statement */}
          <div
            className={`bg-gradient-to-br from-slate-50/25 via-gray-50/20 to-zinc-50/25 backdrop-blur-lg rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 shadow-2xl border border-white/20 transition-all duration-700 ease-out max-w-4xl mx-auto ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            style={{
              animationDelay: "0.5s",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              <span className="bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 bg-clip-text text-transparent">
                "Within India's rich tapestry of faiths, threads of commonality are interwoven. We learn to embrace our{" "}
                <span className="font-semibold bg-gradient-to-br from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  diversity
                </span>
                , appreciate our{" "}
                <span className="font-semibold bg-gradient-to-br from-green-700 to-emerald-800 bg-clip-text text-transparent">
                  commonalities
                </span>
                , and celebrate our{" "}
                <span className="font-semibold bg-gradient-to-br from-purple-700 to-violet-800 bg-clip-text text-transparent">
                  unique identity
                </span>
                ."
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center transition-all duration-800 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animationDelay: "0.7s",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <button className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-700 text-white font-bold text-base sm:text-lg lg:text-xl rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-400 ease-out overflow-hidden border border-white/20 hover:scale-105 active:scale-95 w-full sm:w-auto">
              <span className="relative z-10 transition-all duration-300 ease-out"><a href="/about">Explore Our Mission</a></span>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out"></div>
              <div
                className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                style={{
                  backdropFilter: "blur(10px)",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              ></div>
            </button>

            <button className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-br from-slate-100/30 via-gray-100/25 to-zinc-100/30 backdrop-blur-lg font-bold text-base sm:text-lg lg:text-xl rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-3xl border-2 border-white/30 transition-all duration-400 ease-out overflow-hidden hover:scale-105 active:scale-95 w-full sm:w-auto">
              <span className="relative z-10 bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:via-orange-800 group-hover:to-yellow-900 transition-all duration-400 ease-out">
                <a href="/joinus">Join Our Journey</a>
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-orange-50/15 to-yellow-50/20 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-slate-200/40 via-gray-100/20 to-transparent z-15 transition-all duration-500 ease-out"></div>
    </div>
  )
}
