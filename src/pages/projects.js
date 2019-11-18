import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import ProjectsCarousel from "../components/projectsCarousel"
import { motion } from 'framer-motion'

const duration = 0.75

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const ProjectsPage = ({ data: { projects, projectsPage } }) => {
  return (
    <>
      <SEO meta={projectsPage.seoMetaTags} />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
      >
        <div className="container">
          <div className="mt-12 md:mt-0 mb-12 items-center w-full">
            <div className="w-full">
              <motion.span 
                className="text-black uppercase block mb-2"
                variants={item}
                transition="easeInOut"
              >
                {projectsPage.title}
              </motion.span>
              <ProjectsCarousel projects={projects.edges}/>
            </div>
          </div>
        </div>
        <motion.div 
          variants={item}
          transition="easeInOut"
        >
          <Footer siteTitle="Sotos Nakis" />
        </motion.div>
      </motion.section>
    </>
  )
}

export default ProjectsPage

export const query = graphql`
  query ProjectsQuery {
    projectsPage: datoCmsProjectsPage {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    },
    projects: allDatoCmsProject {
      edges {
        node {
          title
          embedCode
        }
      }
    }
  }
`