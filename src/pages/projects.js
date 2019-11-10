import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import ProjectsCarousel from "../components/projectsCarousel"
// import { motion } from 'framer-motion'

// const duration = 0.35

// const container = {
//   visible: {
//     transition: {
//       when: 'beforeChildren',
//       staggerChildren: 0.2,
//       delayChildren: duration,
//     },
//   },
// }
// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// }

const ProjectsPage = (embla) => {
  return (
    <>
      <SEO title="Projects" />
      <div className="container">
        <span className="text-gray-600 uppercase block mb-2">Projects</span>
        
        <div className="mb-12 md:mb-32">
          <ProjectsCarousel />
        </div>
      </div>

      <Footer siteTitle="Sotos Nakis" />
    </>
  )
}

export default ProjectsPage