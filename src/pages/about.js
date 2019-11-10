import React from "react"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'
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

const AboutPage = ({ data: { about } }) => {
  return (
    <>
      <SEO title="About" />
      <BackgroundImage
        Tag="div"
        className="bg-gray-300 h-screen w-full flex items-center justify-center -mt-24 md:-mt-32"
        fluid={about.backgroundImage.fluid}
      >
        <div className="text-center max-w-md">
          <span dangerouslySetInnerHTML={{__html:about.text}}></span>
        </div>
      </BackgroundImage>
    </>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      title
      text
      backgroundImage {
        fluid(maxWidth: 900, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`