"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

interface InterfaithPageProps {
  className?: string
}

export default function InterfaithPage({ className = "" }: InterfaithPageProps) {
  const [isLoading, setIsLoading] = useState(false)

  const pdfDocument = {
    title: "Interfaith Dialogue: Building Bridges Across Communities",
    pdfUrl: "interfaith.pdf",
    downloadUrl: "interfaith.pdf",
  }

  const handleDownload = () => {
    setIsLoading(true)
    setTimeout(() => {
      const link = document.createElement("a")
      link.href = pdfDocument.downloadUrl
      link.download = `${pdfDocument.title}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className={`py-20 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Interfaith</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
          {/* PDF Title and Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-900">{pdfDocument.title}</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                onClick={() => window.open(pdfDocument.pdfUrl, "_blank")}
                className="border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                <Eye className="w-4 h-4 mr-2" />
                Full Screen
              </Button>
              <Button
                onClick={handleDownload}
                disabled={isLoading}
                className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                {isLoading ? "Downloading..." : "Download"}
              </Button>
            </div>
          </div>

          {/* PDF Viewer Frame */}
          <div className="bg-gray-100 rounded-2xl p-4">
            <div className="bg-white rounded-xl shadow-inner" style={{ height: "800px" }}>
              <iframe
                src={`${pdfDocument.pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&page=1&zoom=100`}
                className="w-full h-full rounded-xl border-0"
                title={pdfDocument.title}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
