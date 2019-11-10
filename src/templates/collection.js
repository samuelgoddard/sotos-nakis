import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import CollectionCarousel from "../components/collectionCarousel"
import Img from "gatsby-image"
import { motion } from 'framer-motion'

const duration = 0.5

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

const CollectionPage = ({ data: { collection } }) => {
  return (
    <>
      <SEO title={collection.title} />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
      >
        <div className="container">
          <motion.span
            variants={item}
            transition="easeInOut"
            className="text-gray-600 uppercase block mb-2"
          >
            {collection.title}
          </motion.span>
          
          <div className="mb-12 md:mb-32">
            <motion.div 
              variants={item}
              transition="easeInOut"
            >
              <CollectionCarousel 
                images={collection.carouselImages}
              />
            </motion.div>
          </div>
          
          <div className="overflow-hidden mb-8 md:mb-12">
            <div className="flex flex-wrap md:-mx-6">
              <div className="w-full md:w-1/2 md:px-6 mb-8 md:mb-0">
                <motion.div 
                  variants={item}
                  transition="easeInOut"
                >
                  <Img fluid={collection.contentImage1.fluid} alt={collection.contentImage1.alt} className="w-full block pb-6 md:pb-0" />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 md:px-6">
                <div className="flex flex-wrap lg:-mx-6">
                  <motion.div 
                    variants={item}
                    transition="easeInOut"
                    className="w-full lg:w-1/2 lg:px-6 flex flex-wrap"
                  >
                    <span className="w-full pb-6 lg:mb-12" dangerouslySetInnerHTML={{__html:collection.aboutTextColumn1}}></span>
                    
                    <Img fluid={collection.contentImage2.fluid} alt={collection.contentImage2.alt} className="w-full block mt-auto mb-6" />
                  </motion.div>
                  <motion.div 
                    variants={item}
                    transition="easeInOut"
                    className="w-full lg:w-1/2 lg:px-6 flex flex-wrap"
                  >
                    <span className="w-full pb-6" dangerouslySetInnerHTML={{__html:collection.aboutTextColumn2}}></span>
                    
                    <Img fluid={collection.contentImage3.fluid} alt={collection.contentImage3.alt} className="w-full block mt-auto mb-6" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer siteTitle="Sotos Nakis" />
    </>
  )
}

export default CollectionPage

export const query = graphql`
  query CollectionPostQuery($slug: String!) {
    collection: datoCmsCollection(slug: { eq: $slug }) {
      title
      contentImage1 {
        fluid(maxWidth: 900, imgixParams: { fm: "jpg", auto: "compress", maxW: 640, maxH: 900}) {
          ...GatsbyDatoCmsSizes
        }
      }
      aboutTextColumn1
      contentImage2 {
        fluid(maxWidth: 900, imgixParams: { fm: "jpg", auto: "compress", maxW: 520, maxH: 640}) {
          ...GatsbyDatoCmsSizes
        }
      }
      aboutTextColumn2
      contentImage3 {
        fluid(maxWidth: 900, imgixParams: { fm: "jpg", auto: "compress", maxW: 520, maxH: 640}) {
          ...GatsbyDatoCmsSizes
        }
      }
      carouselImages {
        fluid(imgixParams: { fm: "jpg", auto: "compress", maxW: 520, maxH: 740}) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
