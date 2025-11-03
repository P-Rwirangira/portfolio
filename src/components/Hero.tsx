"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ShimmerButton } from "./ui/ShimmerButton"
import { motion, easeOut, useScroll, useTransform } from "framer-motion"
import { FaCode, FaCogs, FaLightbulb } from "react-icons/fa"
import TypewriterText from "./ui/TypewriterText"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const Hero = () => {
  const shimmerColor = "rgba(255, 255, 255, 0.5)"
  const [buttonText] = useState("Contact Me")
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
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
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-500/20 dark:bg-blue-400/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />

      <motion.div
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        style={{ opacity }}
      >
        <motion.div className="max-w-4xl w-full" variants={itemVariants}>
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white font-bold mb-4" variants={itemVariants}>
            Hey, I'm <span className="text-gradient">Patrick Rwirangira</span>.
          </motion.h1>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200 font-medium mb-6" variants={itemVariants}>
            <TypewriterText 
              texts={["A Software Developer", "A Full-Stack Engineer", "A Problem Solver", "A Creative Thinker"]}
              speed={100}
              deleteSpeed={50}
              delayBetweenTexts={2000}
            />
          </motion.h2>
          <motion.p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-12" variants={itemVariants}>
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
            <motion.a 
              href="mailto:your-email@example.com"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0],
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ShimmerButton
                className="px-8 py-4 text-lg bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-colors relative overflow-hidden group"
                shimmerColor={shimmerColor}
              >
                <span className="relative z-10">{buttonText}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </ShimmerButton>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-gray-800/50 opacity-50 z-0"></div>
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

