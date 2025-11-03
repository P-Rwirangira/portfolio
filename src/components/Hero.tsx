"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ShimmerButton } from "./ui/ShimmerButton"
import { motion, easeOut } from "framer-motion"
import { FaCode, FaCogs, FaLightbulb } from "react-icons/fa"

const Hero = () => {
  const shimmerColor = "rgba(255, 255, 255, 0.5)"
  const [buttonText] = useState("Contact Me")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-background to-highlight relative overflow-hidden">
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="max-w-4xl w-full" variants={itemVariants}>
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl text-primary font-bold mb-4" variants={itemVariants}>
            Hey, I'm Patrick Rwirangira.
          </motion.h1>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-medium mb-6" variants={itemVariants}>
            A Software Engineer
          </motion.h2>
          <motion.p className="text-primary text-lg sm:text-xl max-w-2xl mx-auto mb-12" variants={itemVariants}>
            Designer, developer, and architect of beautifully simple things with care. Passionate about creating
            innovative and user-centric digital experiences.
          </motion.p>
          <motion.div
            className="w-40 h-40 rounded-full overflow-hidden mb-12 border-4 border-accent mx-auto"
            variants={itemVariants}
          >
            <Image
              src="/media/profile.jpeg"
              alt="Profile"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div className="flex justify-center space-x-4 mb-16" variants={itemVariants}>
            <a href="mailto:rwpatrick001@gmail.com">
              <ShimmerButton
                className="px-6 py-3 text-lg bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
                shimmerColor={shimmerColor}
              >
                {buttonText}
              </ShimmerButton>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      <PortfolioIntro />
    </div>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactElement
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-center items-center mb-4">
        {React.cloneElement(icon, { className: "text-4xl text-primary" })}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </motion.div>
  )
}

const PortfolioIntro = () => {
  return (
    <section className="text-center p-8 bg-gray-50">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <FeatureCard
          icon={<FaCode />}
          title="Web Development"
          description="Building responsive and high-performance websites that deliver exceptional user experiences across all devices."
        />
        <FeatureCard
          icon={<FaCogs />}
          title="Software Solutions"
          description="Creating efficient and scalable software solutions tailored to meet the unique needs of businesses and organizations."
        />
        <FeatureCard
          icon={<FaLightbulb />}
          title="Innovation"
          description="Employing innovative approaches and cutting-edge technologies to solve complex challenges and drive digital transformation."
        />
      </motion.div>
    </section>
  )
}

export default Hero

