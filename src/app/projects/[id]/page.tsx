'use client'
import { BentoGallery } from "../../../components/BentoGallery"
import { projectsData } from "@/components/data/ProjectData"
import sampleImages from "@/components/gallery/data"
import { useParams } from "next/navigation"

export default function GalleryPage() {
  const params = useParams();
  const projectId = Number(params.id);

  // Find the matching project
  const project = projectsData.find(p => Number(p.id) === projectId);

  // Filter images where projectId matches
  const filteredImages = sampleImages.filter(
    (img) => img.projectId === projectId
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-500">Project not found.</p>
      </main>
    );
  }

  return (
    <section className="min-h-screen bg-white ">
      <div className="container mx-auto py-24">
        <div className="text-center mb-12 ">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-5xl mx-auto justify-evenly">
            {project.description}
          </p>
        </div >
        <div className=" px-24">
        <BentoGallery media={filteredImages} autoDetectLayout={true} className="max-w-7xl mx-auto"/>
        </div>
      </div>
    </section>
  );
}
