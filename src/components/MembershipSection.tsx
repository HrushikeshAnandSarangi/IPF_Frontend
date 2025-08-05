"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Loader2, User, Phone, Mail, Heart } from "lucide-react"

interface MembershipPageProps {
  className?: string
}

interface FormData {
  name: string
  phoneNumber: string
  email: string
  religion: string
  whyJoin: string
  address: string
  state: string
  district: string
  pincode: string
}

export default function MembershipPage({ className = "" }: MembershipPageProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    religion: "",
    whyJoin: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("http://localhost:5000/membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          religion: "",
          whyJoin: "",
          address: "",
          state: "",
          district: "",
          pincode: "",
        })
      } else {
        throw new Error("Failed to submit membership application")
      }
    } catch (err) {
      setError("Failed to submit membership application. Please try again.")
      console.error("Error submitting membership form:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid =
    formData.name &&
    formData.phoneNumber &&
    formData.email &&
    formData.religion &&
    formData.whyJoin &&
    formData.address &&
    formData.state &&
    formData.district &&
    formData.pincode

  if (isSubmitted) {
    return (
      <section className={`py-20 bg-gradient-to-b from-gray-50 to-white ${className}`}>
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Application Received!</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your membership application. We will review your membership and contact you shortly.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white px-8 py-3"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-20 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Membership</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Become a member of our interfaith community and help us build bridges between diverse religious traditions.
            Join us in promoting understanding, harmony, and positive change.
          </p>
        </div>

        {/* Form Card */}
        <Card className="bg-white shadow-xl border-0 rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Religion Field */}
              <div>
                <label htmlFor="religion" className="block text-sm font-semibold text-gray-700 mb-2">
                  Religion *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Heart className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="religion"
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                  >
                    <option value="">Select your religion</option>
                    <option value="Hinduism">Hinduism</option>
                    <option value="Islam">Islam</option>
                    <option value="Christianity">Christianity</option>
                    <option value="Sikhism">Sikhism</option>
                    <option value="Buddhism">Buddhism</option>
                    <option value="Jainism">Jainism</option>
                    <option value="Judaism">Judaism</option>
                    <option value="Zoroastrianism">Zoroastrianism</option>
                    <option value="Bahá'í Faith">Bahá'í Faith</option>
                    <option value="Other">Other</option>
                    <option value="No Religion">No Religion</option>
                  </select>
                </div>
              </div>

              {/* Why Do You Want to Join Field */}
              <div>
                <label htmlFor="whyJoin" className="block text-sm font-semibold text-gray-700 mb-2">
                  Why Do You Want to Join? *
                </label>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Tell us why you're interested in joining our interfaith community..."
                />
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-start pt-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Enter your complete address"
                  />
                </div>
              </div>

              {/* State and District Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* State Field */}
                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your state"
                  />
                </div>

                {/* District Field */}
                <div>
                  <label htmlFor="district" className="block text-sm font-semibold text-gray-700 mb-2">
                    District *
                  </label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    required
                    className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your district"
                  />
                </div>
              </div>

              {/* Pincode Field */}
              <div>
                <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">
                  Pincode *
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{6}"
                  maxLength={6}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter 6-digit pincode"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 disabled:from-gray-300 disabled:to-gray-400 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    "Apply for Membership"
                  )}
                </Button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl border border-orange-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Membership Benefits</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Access to exclusive interfaith events and workshops</li>
                <li>• Networking opportunities with community leaders</li>
                <li>• Priority registration for programs and initiatives</li>
                <li>• Monthly newsletter with updates and resources</li>
                <li>• Opportunity to contribute to interfaith dialogue</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
