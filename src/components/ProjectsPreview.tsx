"use client"

import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Heart, BookOpen, Globe } from "lucide-react"

interface ProjectsPreviewProps {
  className?: string
}

export default function ProjectsPreview({ className = "" }: ProjectsPreviewProps) {
  const featuredProjects = [
    {
      id: "1",
      title: "Interfaith Youth Leadership",
      description: "Empowering young leaders to foster understanding across diverse religious communities",
      image: "/interfaithyouth/P_1.jpg",
      icon: Users,
      category: "Interfaith",
      gradient: "from-orange-500 to-yellow-500",
      size: "large", // Takes up 2x2 grid space
    },
    {
      id: "2",
      title: "Building Bridges Program",
      description: "Creating sustainable pathways to peace through interfaith dialogue",
      image: "/buildingbridges/P_1.jpg",
      icon: Heart,
      category: "Community",
      gradient: "from-orange-500 to-red-500",
      size: "medium", // Takes up 1x2 grid space
    },
    {
      id: "3",
      title: "Yoga",
      description: "Inspiring inner peace through the practice of yoga",
      image: "/yoga/P_2.jpeg",
      icon: BookOpen,
      category: "Health",
      gradient: "from-green-500 to-teal-500",
      size: "small", // Takes up 1x1 grid space
    },
  ]

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our impactful initiatives that bring communities together and foster interfaith understanding
            across diverse populations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Large Card - Youth Leadership (spans 2x2) */}
          <Card className="group lg:col-span-2 lg:row-span-2 hover:shadow-2xl transition-all duration-700 border-0 overflow-hidden bg-white">
            <CardContent className="p-0 h-full">
              <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                <Image
                  src={featuredProjects[0].image || "/placeholder.svg"}
                  alt={featuredProjects[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4">
                    <Badge className={`bg-gradient-to-r ${featuredProjects[0].gradient} text-white border-0 mb-3`}>
                      {React.createElement(featuredProjects[0].icon, { className: "w-4 h-4 mr-2" })}
                      {featuredProjects[0].category}
                    </Badge>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors duration-300">
                    {featuredProjects[0].title}
                  </h3>

                  <p className="text-white/90 text-lg mb-6 leading-relaxed">{featuredProjects[0].description}</p>

                  <div className="flex items-center text-white group-hover:text-orange-200 transition-colors duration-300">
                    <span className="font-medium mr-2"><a href="/projects">Learn More</a></span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medium Card - Building Bridges (spans 2x1) */}
          <Card className="group lg:col-span-2 hover:shadow-xl transition-all duration-500 border-0 overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="flex h-full min-h-[240px]">
                <div className="relative w-1/2">
                  <Image
                    src={featuredProjects[1].image || "/placeholder.svg"}
                    alt={featuredProjects[1].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="w-1/2 p-6 flex flex-col justify-center bg-gradient-to-br from-orange-50 to-red-50">
                  <Badge className={`bg-gradient-to-r ${featuredProjects[1].gradient} text-white border-0 mb-3 w-fit`}>
                    {React.createElement(featuredProjects[1].icon, { className: "w-4 h-4 mr-2" })}
                    {featuredProjects[1].category}
                  </Badge>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {featuredProjects[1].title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{featuredProjects[1].description}</p>

                  <div className="flex items-center text-gray-500 group-hover:text-orange-600 transition-colors duration-300">
                    <span className="text-sm font-medium mr-2"><a href="/projects">Explore</a></span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Small Card - Essay Contest (spans 1x1) */}
          <Card className="group lg:col-span-2 hover:shadow-xl transition-all duration-500 border-0 overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="relative h-full min-h-[240px]">
                <Image
                  src={featuredProjects[2].image || "/placeholder.svg"}
                  alt={featuredProjects[2].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <Badge className={`bg-gradient-to-r ${featuredProjects[2].gradient} text-white border-0 mb-2 w-fit`}>
                    {React.createElement(featuredProjects[2].icon, { className: "w-4 h-4 mr-1" })}
                    {featuredProjects[2].category}
                  </Badge>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-200 transition-colors duration-300">
                    {featuredProjects[2].title}
                  </h3>

                  <p className="text-white/90 text-sm mb-3">{featuredProjects[2].description}</p>

                  <div className="flex items-center text-white/80 group-hover:text-green-200 transition-colors duration-300">
                    <span className="text-sm font-medium mr-1"><a href="/projects">View</a></span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
