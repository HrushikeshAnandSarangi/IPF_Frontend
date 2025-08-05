"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Eye, Target, Users } from "lucide-react"

interface AboutPreviewProps {
  className?: string
}

export default function AboutPreview({ className = "" }: AboutPreviewProps) {
  const previewSections = [
    {
      id: "vision",
      title: "Our Vision",
      icon: <Eye className="w-8 h-8" />,
      description:
        "Building bridges across India's rich tapestry of faiths, fostering mutual respect and celebrating our unique identity in diversity.",
      image: "/buildingbridges/P_2.jpeg",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
    },
    {
      id: "purpose",
      title: "Our Purpose",
      icon: <Target className="w-8 h-8" />,
      description:
        "Engaging youth in interfaith dialogue and activities while fostering UN Sustainable Development Goals through peacebuilding action.",
      image: "/twinning/P_1.jpeg",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      id: "partners",
      title: "Our Partners",
      icon: <Users className="w-8 h-8" />,
      description:
        "Collaborating with diverse organizations, educational institutions, and community groups to create meaningful interfaith impact.",
      image: "/buildingbridges/P_1.jpg",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
    },
  ]

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
              Our Foundation
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our mission to foster interfaith harmony and build bridges between communities through meaningful
            dialogue and collaborative action.
          </p>
        </div>

        {/* Preview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {previewSections.map((section, index) => (
            <Card
              key={section.id}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 overflow-hidden bg-gradient-to-br ${section.bgGradient}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {section.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3
                    className={`text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${section.gradient} group-hover:scale-105 transition-transform duration-300`}
                  >
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">{section.description}</p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    <span className="text-sm font-medium mr-2"><a href="/about">Learn More</a></span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl p-12 text-white mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-lg opacity-90">Interfaith Programs</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <div className="text-lg opacity-90">Youth Engaged</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
              <div className="text-lg opacity-90">Partner Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
