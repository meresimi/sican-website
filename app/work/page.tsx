'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function WorkPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const areasOfWork = [
    { title: 'Advocacy and Awareness', pijin: 'Tokbaot mo Mekem Pipol Save' },
    { title: 'Campaigning', pijin: 'Waka fo Jenis' },
    { title: 'Collaboration', pijin: 'Waka Tugeda' },
    { title: 'Influencing', pijin: 'Mekem Jenis Long Tingting' },
    { title: 'Networking', pijin: 'Mekem Network' },
    { title: 'Research and Knowledge Brokering', pijin: 'Risej mo Serem Save' },
    { title: 'Empowerment and Gender Inclusivity', pijin: 'Strongim Pipol mo Woman Raets' },
    { title: 'Policy Dialogue', pijin: 'Tok Abaotem Polisi' },
    { title: 'Woman Empowerment', pijin: 'Strongim Woman' },
    { title: 'Climate Financing', pijin: 'Klaemet Mane' }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest via-emerald-600 to-green-700 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Work (Waka Mifala Duim)
          </h1>
          <p className="text-xl text-green-100 max-w-3xl">
            SICAN's work spans ten key areas of climate action across Solomon Islands. 
            Together, we're building resilience, demanding justice, and protecting our islands.
          </p>
        </div>
      </section>

      {/* 10 Areas of Work - Accordion */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Our 10 Areas of Work
          </h2>
          
          <div className="space-y-3">
            {areasOfWork.map((area, index) => (
              <div key={index} className="mb-2">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg px-6 py-4 flex justify-between items-center transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <div className="text-left">
                    <div className="font-bold text-lg text-gray-900">
                      {index + 1}. {area.title}
                    </div>
                    <div className="text-sm text-gray-600 italic mt-1">
                      {area.pijin}
                    </div>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-ocean transition-transform duration-200 flex-shrink-0 ml-4 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion Content - Dropdown */}
                {openIndex === index && (
                  <div className="bg-blue-25 bg-opacity-50 border border-blue-100 rounded-b-lg px-6 py-4 mt-1 animate-fadeIn" style={{ backgroundColor: '#F0F9FF' }}>
                    <div className="text-gray-600 text-center py-4">
                      <p className="italic">Nothing to display yet</p>
                      <p className="text-sm mt-2">Content will be added by admin</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <div className="flex items-start">
              <span className="text-2xl mr-3">ℹ️</span>
              <div>
                <h3 className="font-bold mb-2">Content Being Updated</h3>
                <p className="text-gray-700 text-sm">
                  Detailed descriptions for each area of work will be added through the content 
                  management system. Click each area above to see when content becomes available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-ocean to-lagoon text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Support Our Work?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in our mission to protect Solomon Islands and fight for climate justice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary bg-white text-ocean hover:bg-gray-100">
              Join Us (Kam Joinim Mifala) →
            </Link>
            <Link href="/support" className="btn-outline border-white text-white hover:bg-white hover:text-ocean">
              Support Us (Helpem Mifala) →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
