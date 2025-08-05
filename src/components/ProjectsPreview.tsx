"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
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
      image: "/placeholder.svg?height=400&width=600&text=Youth Leadership",
      icon: Users,
      category: "Leadership",
      gradient: "from-blue-500 to-purple-500",
      size: "large", // Takes up 2x2 grid space
    },
    {
      id: "2",
      title: "Building Bridges Program",
      description: "Creating sustainable pathways to peace through interfaith dialogue",
      image: "/placeholder.svg?height=300&width=400&text=Building Bridges",
      icon: Heart,
      category: "Dialogue",
      gradient: "from-orange-500 to-red-500",
      size: "medium", // Takes up 1x2 grid space
    },
    {
      id: "3",
      title: "Youth Essay Contest",
      description: "Inspiring creative expression on interfaith harmony",
      image: "/placeholder.svg?height=300&width=400&text=Essay Contest",
      icon: BookOpen,
      category: "Education",
      gradient: "from-green-500 to-teal-500",
      size: "small", // Takes up 1x1 grid space
    },
    {
      id: "4",
      title: "Community Service",
      description: "Uniting faiths through charitable initiatives",
      image: "/placeholder.svg?height=300&width=400&text=Community Service",
      icon: Globe,
      category: "Service",
      gradient: "from-purple-500 to-pink-500",
      size: "small", // Takes up 1x1 grid space
    },
  ]

  return (
    <section className={`py-20 bg-gradient-to-b from-gray-50 to-white ${className}`}>
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
                    <span className="font-medium mr-2">Learn More</span>
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
                    <span className="text-sm font-medium mr-2">Explore</span>
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
                    <span className="text-sm font-medium mr-1">View</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Small Card - Community Service (spans 1x1) */}
          <Card className="group lg:col-span-2 hover:shadow-xl transition-all duration-500 border-0 overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="relative h-full min-h-[240px]">
                <Image
                  src={featuredProjects[3].image || "/placeholder.svg"}
                  alt={featuredProjects[3].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <Badge className={`bg-gradient-to-r ${featuredProjects[3].gradient} text-white border-0 mb-2 w-fit`}>
                    {React.createElement(featuredProjects[3].icon, { className: "w-4 h-4 mr-1" })}
                    {featuredProjects[3].category}
                  </Badge>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                    {featuredProjects[3].title}
                  </h3>

                  <p className="text-white/90 text-sm mb-3">{featuredProjects[3].description}</p>

                  <div className="flex items-center text-white/80 group-hover:text-purple-200 transition-colors duration-300">
                    <span className="text-sm font-medium mr-1">Discover</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Explore All Our Projects</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover the full range of our interfaith initiatives and see how we're building bridges between
              communities across India.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
