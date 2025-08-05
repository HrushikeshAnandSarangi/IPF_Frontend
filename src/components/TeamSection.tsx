"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { coreTeamData, executiveMembers, advisoryBoard } from "./data/TeamData"
import type { CoreTeamMember, TeamMember } from "./data/TeamData"

interface OurTeamSectionProps {
  className?: string
}

export default function OurTeamSection({ className = "" }: OurTeamSectionProps) {
  const [activeTab, setActiveTab] = useState<"core" | "executive" | "advisory">("core")

  return (
    <section className={`py-16 bg-gradient-to-br from-orange-50 via-white to-green-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals who drive our mission forward with expertise, dedication, and innovation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-100">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("core")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "core"
                    ? "bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                Core Team
              </button>
              <button
                onClick={() => setActiveTab("executive")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "executive"
                    ? "bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                Executive Members
              </button>
              <button
                onClick={() => setActiveTab("advisory")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "advisory"
                    ? "bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                Advisory Board
              </button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="min-h-[600px]">
          {/* Core Team Section */}
          {activeTab === "core" && (
            <div className="animate-in fade-in duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {coreTeamData.map((member: CoreTeamMember) => (
                  <Card
                    key={member.id}
                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        {/* Image Container */}
                        <div className="relative h-80 overflow-hidden">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          {/* Name and Designation Overlay */}
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                            <Badge className="bg-gradient-to-r from-orange-500 to-green-500 text-white border-0 hover:from-orange-600 hover:to-green-600">
                              {member.designation}
                            </Badge>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <p className="text-gray-600 leading-relaxed">{member.intro}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Executive Members Section */}
          {activeTab === "executive" && (
            <div className="animate-in fade-in duration-500">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Executive Members</h3>
                  <p className="text-gray-600">Dedicated professionals driving our organizational excellence</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {executiveMembers.map((member: TeamMember, index) => (
                    <div
                      key={member.id}
                      className="group p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-orange-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 text-center"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-orange-400 to-green-400 flex items-center justify-center text-white font-semibold text-lg">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <h4 className="font-medium text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-green-500 transition-all duration-300">
                        {member.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Advisory Board Section */}
          {activeTab === "advisory" && (
            <div className="animate-in fade-in duration-500">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Advisory Board</h3>
                  <p className="text-gray-600">Distinguished advisors providing strategic guidance and expertise</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {advisoryBoard.map((member: TeamMember, index) => (
                    <div
                      key={member.id}
                      className="group p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-green-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-orange-400 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-orange-500 transition-all duration-300">
                            {member.name}
                          </h4>
                          <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-orange-400 rounded-full mt-2 group-hover:w-20 transition-all duration-300"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
