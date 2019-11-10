import { Link } from "gatsby"
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

const IndexPage = ({ data: { home } }) => {
  return (
    <>
      <SEO title={home.title} />
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
    </>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      title
      featuredCollection {
        title
        slug
        featuredImage {
          fluid(maxWidth: 900, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
      }
    }
  }
`