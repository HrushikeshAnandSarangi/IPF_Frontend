"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Search, Heart, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  const quickLinks = [
    {
      title: "About Us",
      description: "Learn about our mission and vision",
      icon: Heart,
      href: "#about",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Our Projects",
      description: "Explore our interfaith initiatives",
      icon: BookOpen,
      href: "#projects",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Our Team",
      description: "Meet our dedicated team members",
      icon: Users,
      href: "#team",
      gradient: "from-blue-500 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Visual */}
        <div className="mb-12">
          <div className="relative">
            {/* Large 404 Text */}
            <h1 className="text-[12rem] md:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-green-200 leading-none select-none">
              404
            </h1>

            {/* Floating Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Search className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-bounce"></div>
            <div
              className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            The page you're looking for seems to have wandered off. Just like our interfaith journey, sometimes we take
            different paths, but we always find our way back to unity and understanding.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/">
            <Button className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Or explore these sections:</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Card
                key={link.title}
                className="group hover:shadow-xl transition-all duration-500 border-0 overflow-hidden bg-white cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${link.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <link.icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-green-500 transition-all duration-300">
                    {link.title}
                  </h4>

                  <p className="text-gray-600 text-sm">{link.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl p-8 text-white">
          <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
            "In diversity there is beauty and there is strength."
          </blockquote>
          <p className="text-lg opacity-90">- Maya Angelou</p>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Lost? That's okay. Sometimes the most beautiful discoveries happen when we're exploring new paths.
            <br />
            Let's continue building bridges together.
          </p>
        </div>
      </div>
    </div>
  )
}
