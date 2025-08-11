"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { projectsData } from "./data/ProjectData"
import type { Project } from "./data/ProjectData"

interface ProjectsSectionProps {
  className?: string
}

export default function ProjectsSection({ className = "" }: ProjectsSectionProps) {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const toggleExpanded = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  const truncateText = (text: string, maxLength = 200) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  // Sort projects - ones with images first
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (a.hasImage && !b.hasImage) return -1
    if (!a.hasImage && b.hasImage) return 1
    return 0
  })

  return (
    <section className={`py-20 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building bridges between communities through meaningful initiatives that promote understanding, harmony, and
            positive social change.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {sortedProjects.map((project: Project, index) => {
            const isExpanded = expandedProject === project.id
            const isEven = index % 2 === 0

            return (
              <div
                key={project.id}
                className={`group transition-all duration-700 ${
                  project.hasImage && project.image
                    ? "bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100"
                    : "bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl border border-orange-100"
                } overflow-hidden`}
              >
                {project.hasImage && project.image ? (
                  // Layout for projects with images
                  <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[400px]`}>
                    {/* Image Section */}
                    <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        {project.sdg && (
                          <Badge className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 text-sm font-medium rounded-full w-fit">
                            {project.sdg}
                          </Badge>
                        )}


                        <h3 className="text-3xl font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                          {project.title}
                        </h3>

                        <div className="prose prose-gray max-w-none">
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {isExpanded ? project.description : truncateText(project.description)}
                          </p>
                        </div>

                        {project.description.length > 200 && (
                          <Button
                            onClick={() => toggleExpanded(project.id)}
                            variant="ghost"
                            className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 h-auto font-semibold text-base group/btn"
                          >
                            <span className="mr-2">{isExpanded ? "Show less" : "Read more"}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 group-hover/btn:translate-y-[-2px] transition-transform" />
                            ) : (
                              <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-[2px] transition-transform" />
                            )}
                          </Button>
                        )}
                          {project.link && (
                            <a href={project.link}>
                            <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-medium rounded-full mb-4">
                              Check it out!
                            </Badge></a>
                          )}
                      </div>
                          {project.redirectLink && (
                            <a href={project.redirectLink}>
                            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-xl font-light  mb-4 ">
                              Explore
                            </Badge></a>
                          )}
                    </div>
                  </div>
                ) : (
                  // Layout for projects without images
                  <div className="p-8 lg:p-12">
                    <div className="max-w-4xl mx-auto space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          {project.sdg && (
                            <Badge className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 text-sm font-medium rounded-full mb-4">
                              {project.sdg}
                            </Badge>
                          )}


                          <h3 className="text-3xl font-bold text-gray-900 leading-tight mb-6 group-hover:text-green-600 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>

                        {/* Decorative element */}
                        <div className="hidden lg:block w-16 h-16 bg-gradient-to-br from-orange-400 to-green-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      </div>

                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {isExpanded ? project.description : truncateText(project.description)}
                        </p>
                      </div>


                      {project.description.length > 200 && (
                        <Button
                          onClick={() => toggleExpanded(project.id)}
                          variant="ghost"
                          className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 h-auto font-semibold text-base group/btn"
                        >
                          <span className="mr-2">{isExpanded ? "Show less" : "Read more"}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 group-hover/btn:translate-y-[-2px] transition-transform" />
                          ) : (
                            <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-[2px] transition-transform" />
                          )}
                        </Button>
                      )}
                          {project.link && (
                            <a href={project.link}>
                            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-sm font-medium rounded-full mb-4">
                              Check it out!
                            </Badge></a>
                          )}

                    </div>

                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in creating positive change and building stronger, more inclusive communities.
            </p>
            <a href="/joinus"><Button className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Involved Today
            </Button></a>
          </div>
        </div>
      </div>
    </section>
  )
}
