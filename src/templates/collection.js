import React from "react"
import SEO from "../components/seo"
import CollectionCarousel from "../components/collectionCarousel"
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

const CollectionPage = ({ data: { collection } }) => {
  return (
    <>
      <SEO title={collection.title} />
      <div className="container">
        <span className="text-gray-600 uppercase block mb-2">{collection.title}</span>
        
        <div className="mb-12 md:mb-32">
          <CollectionCarousel />
        </div>
        
        <div className="overflow-hidden mb-8 md:mb-12">
          <div class="flex flex-wrap md:-mx-6">
            <div class="w-full md:w-1/2 md:px-6 mb-8 md:mb-0">
              <img src="https://picsum.photos/400/490?grayscale" className="w-full block" alt="Temp Image" />
            </div>
            <div className="w-full md:w-1/2 md:px-6">
              <div className="flex flex-wrap lg:-mx-6">
                <div className="w-full lg:w-1/2 lg:px-6 flex flex-wrap">
                  <p className="pb-6 w-full">Venmo shoreditch church-key beard shaman, humblebrag poutine synth edison bulb tilde. Cred kinfolk disrupt VHS food truck artisan gentrify. Fashion axe lumbersexual ennui hammock etsy adaptogen deep v drinking vinegar green juice unicorn literally skateboard. Literally godard asymmetrical everyday carry, trust fund cronut.</p>
                  
                  <img src="https://picsum.photos/400/490?grayscale" className="w-full block mt-auto pb-6" alt="Temp Image" />
                </div>
                <div className="w-full lg:w-1/2 lg:px-6 flex flex-wrap">
                  <p className="pb-6 w-full">Live-edge 90's cold-pressed artisan, art party selfies venmo fam messenger bag iPhone literally. Flannel vegan slow-carb DIY mumblecore etsy edison bulb cray cronut vice street art cold-pressed seitan sustainable. Helvetica wolf air plant salvia. Fashion axe lumbersexual ennui hammock etsy adaptog.</p>
                  
                  <img src="https://picsum.photos/400/490?grayscale" className="w-full block mt-auto pb-6" alt="Temp Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CollectionPage

export const query = graphql`
  query CollectionPostQuery($slug: String!) {
    collection: datoCmsCollection(slug: { eq: $slug }) {
      title
    }
  }
`
