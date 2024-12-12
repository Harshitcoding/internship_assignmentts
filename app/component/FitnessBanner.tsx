'use client'

import { ReactNode, useState } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface BannerSection {
  title: string
  image: string
  alt: string
  icon: ReactNode
}

const sections: BannerSection[] = [
  {
    title: 'STRENGTH',
    image: '/strenght.jpg',
    alt: 'Weightlifting equipment in a gym',
    icon: <ChevronRight />,
  },
  {
    title: 'MOBILITY',
    image: '/unsplash.avif',
    alt: 'People doing mobility exercises',
    icon: <ChevronRight />,
  },
  {
    title: 'DRILLS',
    image: '/drills.jpg',
    alt: 'Outdoor training path',
    icon: <ChevronRight />,
  },
]

export default function FitnessBanner() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null) // Start with no section hovered

  return (
    <div className="w-full h-[350px] flex rounded-2xl border border-black overflow-hidden flex-col sm:flex-row">
      {sections.map((section, index) => (
        <div
          key={section.title}
          className="relative flex-1 transition-all duration-500 ease-in-out"
          style={{
            flex: hoveredIndex === index || (hoveredIndex === null && index === 1) ? '2' : '1', // Default to middle section
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)} // Reset to no section hovered
        >
          <Image
            src={section.image}
            alt={section.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/30" />
          <h2 className="absolute top-4 left-4 right-4 flex justify-between items-center font-thin text-white text-2xl sm:text-3xl md:text-2xl">
            <span>{section.title}</span>
            {hoveredIndex === index && (
              <span className="border rounded-full bg-white text-black ">{section.icon}</span>
            )}
          </h2>
        </div>
      ))}
    </div>
  )
}
