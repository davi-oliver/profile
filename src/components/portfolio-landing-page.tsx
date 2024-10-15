'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa'

export function PortfolioLandingPageComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Databases', icon: <FaDatabase /> },
  ]

  const careerTimeline = [
    { year: '2018', title: 'Started Coding Journey' },
    { year: '2019', title: 'First Developer Job' },
    { year: '2021', title: 'Senior Developer' },
    { year: '2023', title: 'Tech Lead' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white overflow-hidden">
      {/* Animated background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, transparent 10%)`,
        }}
      />

      {/* Header */}
      <header className="p-6">
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-xl">Full Stack Developer</p>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-12">
        {/* Animated cards */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-lg">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Career timeline */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Career Progress</h2>
          <div className="relative">
            {careerTimeline.map((event, index) => (
              <motion.div
                key={event.year}
                className="mb-8 flex"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-24 text-right mr-4">
                  <div className="text-lg font-semibold">{event.year}</div>
                </div>
                <div className="flex-grow pl-4 border-l-2 border-white">
                  <div className="text-xl font-semibold">{event.title}</div>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 mt-12">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}