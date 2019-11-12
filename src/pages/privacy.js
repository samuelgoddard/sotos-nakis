import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
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

const PrivacyPage = ({ data: { privacy } }) => {
  return (
    <>
      <SEO meta={privacy.seoMetaTags} />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
      >
        <div className="flex flex-wrap justify-center py-8 md:py-12">
          <div className="container">
            <div className="max-w-2xl content">
              <motion.div 
                variants={item}
                transition="easeInOut"
              >
                <h1>Privacy Policy</h1>
              </motion.div>

              <motion.div 
                variants={item}
                transition="easeInOut"
              >
                <div dangerouslySetInnerHTML={{__html:privacy.content}}></div>
              </motion.div>
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

export default PrivacyPage

export const query = graphql`
  query PrivacyQuery {
    privacy: datoCmsPrivacy {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      content
    }
  }
`