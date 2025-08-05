"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface AboutSectionProps {
  className?: string
}

export default function AboutSection({ className = "" }: AboutSectionProps) {
  const aboutProjectsData = [
    {
      id: "1",
      title: "Interfaith Youth Leadership",
      description:
        "Empowering young leaders to foster understanding and respect among diverse religious communities through interactive workshops and experiential learning.",
      image: "interfaithyouth/P_1.jpeg",
    },
    {
      id: "2",
      title: "Building Bridges Program",
      description:
        "Creating sustainable pathways to peace by bringing together interfaith leaders, scholars, and community representatives for meaningful dialogue.",
      image: "buildingbridges/P_1.jpg",
    },
    {
      id: "3",
      title: "Twinning",
      description:
        "Uniting people of all faiths through charitable initiatives during major religious festivals, promoting shared service and compassion.",
      image: "twinning/P_1.jpeg",
    },
    {
      id: "4",
      title: "Yoga",
      description:
        "Facilitating open conversations between different faith communities to address misconceptions and build lasting relationships rooted in trust.",
      image: "yoga/P_1.jpeg",
    },
  ]

  const partnersData = [
    "United Nations",
    "StudyGita.in",
    "Heather House",
    "Educational Institutions",
    "Religious Organizations",
    "Community Leaders",
    "Government Bodies",
    "Youth Organizations",
    "Cultural Centers",
    "Peace Foundations",
    "Interfaith Councils",
    "Social Welfare Groups",
  ]

  const aboutContent = {
    whatWeDo: {
      title: "What We Do",
      content: `The goal of Indian Pluralism Foundation is to prove the benefits of engaging the youth in Interfaith dialogue and Interfaith activities in a pluralist setting, whilst fostering the United Nations Sustainable Development Goals (UN SDGs). 

The primary objective of Indian Pluralism Foundation is to display that peacebuilding action and Interfaith conversations benefit us in exploring diversity, new traditions and the world around us. As we explore the various interfaith questions and curiosity and ingenuity, it is perfectly fine to not have answers to all the questions.

We estimate that Interfaith dialogue benefits the community in that it brings pluralism in our lives in a way that has never been done before. It supports our younger generations to engage with world religions in a tangible way and equips them for working towards harmony in diversity in a world around us.`,
    },
    ourPurpose: {
      title: "Our Purpose",
      content: `The Indian Pluralism Foundation exists to demonstrate that interfaith dialogue and collaborative action are not just idealistic concepts, but practical pathways to building stronger, more resilient communities. Our purpose is rooted in the belief that when people of different faiths come together in mutual respect and understanding, they create something greater than the sum of their individual traditions.

We are committed to proving that peacebuilding through interfaith engagement benefits everyone involved. By creating safe spaces for honest dialogue, we help participants explore diversity, learn about new traditions, and discover the interconnectedness of our shared human experience. Our purpose extends beyond mere tolerance—we aim to foster genuine appreciation and celebration of our differences.

Through our work, we demonstrate that interfaith collaboration is essential for addressing the complex challenges of our time. Whether it's promoting social justice, environmental stewardship, or community development, we show that diverse faith perspectives bring unique strengths and insights that make our collective efforts more effective and meaningful.

Our ultimate purpose is to create a model of interfaith cooperation that can be replicated and scaled, contributing to a world where religious diversity is seen not as a source of division, but as a wellspring of wisdom, creativity, and hope for building a more just and peaceful society.`,
    },
    ourVision: {
      title: "Our Vision",
      content: `Within India's rich coterie & tapestry of faiths, threads of commonality are interwoven. We must learn to highlight the importance of seeking common ground, to build mutual respect, mutual admiration and mutual appreciation for the beliefs of others, and the need to protect and expand our common spaces and safe spaces.

Join us on this journey of discovery as we learn to embrace our diversity, appreciate our commonalities, accept our differences, and above all, celebrate our unique identity - one that recognises that we all have a part to play to protect this precious legacy. Only then can harmony in diversity truly be possible.

We emphasize on how our faith communities have contributed in the common spirit of achieving common good for the common man and how everyone's cherished and most treasured values, ethics and practices are widely respected & honoured amongst people of all faiths or no faith. Identifying the importance of finding and emphasizing common ground is a key step to fostering mutual understanding and respect.`,
    },
  }

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fostering interfaith harmony and building bridges between communities through meaningful dialogue and
            collaborative action.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="mb-20" id="whatwedo">
          <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-3xl p-12 border border-orange-100">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">{aboutContent.whatWeDo.title}</h3>
            <div className="prose prose-lg prose-gray max-w-none">
              {aboutContent.whatWeDo.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Our Purpose Section */}
        <div className="mb-20" id="purpose">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Purpose</h3>
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                The Indian Pluralism Foundation exists to demonstrate that interfaith dialogue and collaborative action
                are not just idealistic concepts, but practical pathways to building stronger, more resilient
                communities. Our purpose is rooted in the belief that when people of different faiths come together in
                mutual respect and understanding, they create something greater than the sum of their individual
                traditions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                We are committed to proving that peacebuilding through interfaith engagement benefits everyone involved.
                By creating safe spaces for honest dialogue, we help participants explore diversity, learn about new
                traditions, and discover the interconnectedness of our shared human experience. Our purpose extends
                beyond mere tolerance—we aim to foster genuine appreciation and celebration of our differences.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Through our work, we demonstrate that interfaith collaboration is essential for addressing the complex
                challenges of our time. Whether it's promoting social justice, environmental stewardship, or community
                development, we show that diverse faith perspectives bring unique strengths and insights that make our
                collective efforts more effective and meaningful.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our ultimate purpose is to create a model of interfaith cooperation that can be replicated and scaled,
                contributing to a world where religious diversity is seen not as a source of division, but as a
                wellspring of wisdom, creativity, and hope for building a more just and peaceful society.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="mb-20" id="vision">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">{aboutContent.ourVision.title}</h3>
            <div className="prose prose-lg prose-gray max-w-none">
              {aboutContent.ourVision.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Showcase Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Action</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover some of our key initiatives that are making a difference in communities across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutProjectsData.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-20" id="partnership">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Working together with organizations and communities to create meaningful change and foster interfaith
              harmony.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-3xl p-12 border border-green-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {partnersData.map((partner, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <h4 className="text-lg font-medium text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-green-500 transition-all duration-300">
                    {partner}
                  </h4>
                </div>
              ))}
            </div>

            {/* Partnership Message */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We believe in the power of collaboration. Our partnerships with diverse organizations, educational
                institutions, and community groups enable us to reach more people and create greater impact in building
                interfaith understanding and harmony across communities.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center"id="calltoaction">
          <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Be part of a movement that celebrates diversity, builds understanding, and creates lasting positive change
              in our communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <a href="/projects">Learn More</a>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
                <a href="joinus">Get Involved</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
