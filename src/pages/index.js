import { Link } from "gatsby"
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

const IndexPage = ({ data: { home } }) => {
  return (
    <>
      <SEO meta={home.seoMetaTags} />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
      >
        <motion.div 
          className="w-full"
          variants={item}
          transition="easeInOut"
        >
          <BackgroundImage
            Tag="div"
            className="bg-gray-300 h-screen w-full flex items-center justify-center -mt-24 md:-mt-32"
            fluid={home.featuredCollection.featuredImage.fluid}
          >
            <div className="text-center max-w-md">
              <span className="uppercase font-bold block text-lg md:text-xl">{home.featuredCollection.title}</span>
              <Link
                className="link text-sm no-underline uppercase block"
                to={`/collection/${home.featuredCollection.slug}`}>
                  View the Collection
              </Link>
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

export default IndexPage

export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      featuredCollection {
        title
        slug
        featuredImage {
          fluid(maxWidth: 1200, imgixParams: { fm: "png", maxW: 960, maxH: 640}) {
            ...GatsbyDatoCmsSizes_noBase64
          }
        }
      }
    }
  }
`