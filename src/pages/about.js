import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import BackgroundImage from 'gatsby-background-image'
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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const AboutPage = ({ data: { about } }) => {
  return (
    <>
      <SEO meta={about.seoMetaTags} />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
      >
        <motion.div 
          variants={item}
          transition="easeInOut"
        >
          <BackgroundImage
            Tag="div"
            className="bg-gray-300 h-screen w-full flex items-center justify-center -mt-24 md:-mt-32"
            fluid={about.backgroundImage.fluid}
          >
            <div className="text-center max-w-md px-8">
              <span dangerouslySetInnerHTML={{__html:about.text}}></span>
            </div>
          </BackgroundImage>
        </motion.div>
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

export default AboutPage

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      text
      backgroundImage {
        fluid(maxWidth: 1200, imgixParams: { fm: "png" }) {
          ...GatsbyDatoCmsSizes_noBase64
        }
      }
    }
  }
`