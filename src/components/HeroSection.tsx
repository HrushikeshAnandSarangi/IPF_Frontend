"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

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

      {/* Mobile Layout */}
      <div className="relative z-20 h-full flex flex-col lg:hidden">
        {/* Mobile Logo Section */}
        <div className="flex-shrink-0 flex justify-center pt-8 pb-6">
          <div
            className={`bg-gradient-to-br from-slate-50/40 via-gray-50/35 to-zinc-50/40 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/30 transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animationDelay: "0.3s",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >

          </div>
        </div>

        {/* Mobile Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
          <div
            className={`text-center max-w-lg transition-all duration-800 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{
              animationDelay: "0.5s",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* Mobile Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 bg-clip-text text-transparent">
                Harmony
              </span>{" "}
              <span className="bg-gradient-to-br from-amber-600 via-orange-700 to-yellow-800 bg-clip-text text-transparent">
                in
              </span>{" "}
              <span className="bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 bg-clip-text text-transparent">
                Diversity
              </span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-700 mb-4 rounded-full shadow-lg mx-auto"></div>

            <p className="text-base sm:text-lg leading-relaxed mb-6">
              <span className="bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-800 bg-clip-text text-transparent">
                Fostering{" "}
                <span className="font-semibold bg-gradient-to-br from-amber-700 to-orange-800 bg-clip-text text-transparent">
                  interfaith dialogue
                </span>{" "}
                and celebrating India's rich tapestry of faiths.
              </span>
            </p>

            {/* Mobile Mission Statement */}
            <div
              className={`bg-gradient-to-br from-slate-50/25 via-gray-50/20 to-zinc-50/25 backdrop-blur-lg rounded-xl p-4 mb-6 shadow-2xl border border-white/20 transition-all duration-700 ease-out ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
              style={{
                animationDelay: "0.7s",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <p className="text-sm sm:text-base leading-relaxed">
                <span className="bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 bg-clip-text text-transparent">
                  "We learn to embrace our{" "}
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

            {/* Mobile Buttons */}
            <div
              className={`flex flex-col gap-4 transition-all duration-800 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                animationDelay: "0.9s",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <button className="group relative px-6 py-3 bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-700 text-white font-bold text-base rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-400 ease-out overflow-hidden border border-white/20 hover:scale-105 active:scale-95">
                <span className="relative z-10 transition-all duration-300 ease-out">Explore Our Mission</span>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out"></div>
              </button>

              <button className="group relative px-6 py-3 bg-gradient-to-br from-slate-100/30 via-gray-100/25 to-zinc-100/30 backdrop-blur-lg font-bold text-base rounded-xl shadow-2xl hover:shadow-3xl border-2 border-white/30 transition-all duration-400 ease-out overflow-hidden hover:scale-105 active:scale-95">
                <span className="relative z-10 bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:via-orange-800 group-hover:to-yellow-900 transition-all duration-400 ease-out">
                  Join Our Journey
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-orange-50/15 to-yellow-50/20 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative z-20 h-full hidden lg:flex">
        <div className="w-full flex">
          {/* Desktop Logo Strip */}
          <div className="w-72 xl:w-80 flex items-center justify-center bg-gradient-to-b from-slate-200/30 via-gray-100/25 to-zinc-200/30 backdrop-blur-md border-r border-white/20 shadow-2xl">
            <div
              className={`relative bg-gradient-to-br from-slate-50/40 via-gray-50/35 to-zinc-50/40 backdrop-blur-lg rounded-3xl p-10 xl:p-12 shadow-2xl border border-white/30 transition-all duration-700 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                animationDelay: "0.3s",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="text-center">
                <div className="relative mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-orange-300/50 rounded-full blur-xl transition-all duration-500 ease-out"></div>
                  <Image
                    src="logo-only.svg"
                    alt="Indian Pluralism Foundation Logo"
                    width={120}
                    height={120}
                    className="relative mx-auto rounded-full shadow-2xl border-4 border-white/40 transition-transform duration-500 ease-out hover:scale-105"
                    style={{
                      filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                    }}
                  />
                </div>
                <h3 className="text-xl xl:text-2xl font-bold bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-900 bg-clip-text text-transparent leading-tight">
                  Indian Pluralism
                  <br />
                  Foundation
                </h3>
                <div className="mt-3 h-1 w-14 mx-auto bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-600 rounded-full shadow-lg transition-all duration-500 ease-out"></div>
              </div>
            </div>
          </div>

          {/* Desktop Content */}
          <div className="flex-1 flex items-center px-8 xl:px-14 2xl:px-20">
            <div
              className={`max-w-4xl transition-all duration-800 ease-out ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              }`}
              style={{
                animationDelay: "0.5s",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Desktop Heading */}
              <div className="mb-8 xl:mb-10">
                <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 bg-clip-text text-transparent transition-all duration-500 ease-out">
                    Harmony
                  </span>{" "}
                  <span className="bg-gradient-to-br from-amber-600 via-orange-700 to-yellow-800 bg-clip-text text-transparent transition-all duration-500 ease-out">
                    in
                  </span>{" "}
                  <span className="bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 bg-clip-text text-transparent transition-all duration-500 ease-out">
                    Diversity
                  </span>
                </h1>

                <div className="w-28 h-1.5 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-700 mb-6 rounded-full shadow-lg transition-all duration-600 ease-out"></div>

                <p className="text-xl xl:text-2xl leading-relaxed max-w-3xl">
                  <span className="bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-800 bg-clip-text text-transparent transition-all duration-500 ease-out">
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
              </div>

              {/* Desktop Mission Statement */}
              <div
                className={`bg-gradient-to-br from-slate-50/25 via-gray-50/20 to-zinc-50/25 backdrop-blur-lg rounded-2xl p-6 xl:p-8 mb-8 shadow-2xl border border-white/20 transition-all duration-700 ease-out ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{
                  animationDelay: "0.7s",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <p className="text-lg xl:text-xl leading-relaxed">
                  <span className="bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 bg-clip-text text-transparent">
                    "Within India's rich tapestry of faiths, threads of commonality are interwoven. We learn to embrace
                    our{" "}
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

              {/* Desktop Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-5 xl:gap-6 transition-all duration-800 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  animationDelay: "0.9s",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <button className="group relative px-8 xl:px-10 py-4 xl:py-5 bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-700 text-white font-bold text-lg xl:text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-400 ease-out overflow-hidden border border-white/20 hover:scale-105">
                  <span className="relative z-10 transition-all duration-300 ease-out">Explore Our Mission</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out"></div>
                  <div
                    className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                    style={{
                      backdropFilter: "blur(10px)",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  ></div>
                </button>

                <button className="group relative px-8 xl:px-10 py-4 xl:py-5 bg-gradient-to-br from-slate-100/30 via-gray-100/25 to-zinc-100/30 backdrop-blur-lg font-bold text-lg xl:text-xl rounded-2xl shadow-2xl hover:shadow-3xl border-2 border-white/30 transition-all duration-400 ease-out overflow-hidden hover:scale-105">
                  <span className="relative z-10 bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:via-orange-800 group-hover:to-yellow-900 transition-all duration-400 ease-out">
                    Join Our Journey
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-orange-50/15 to-yellow-50/20 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-slate-200/40 via-gray-100/20 to-transparent z-15 transition-all duration-500 ease-out"></div>
    </div>
  )
}
