import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"

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

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact" />
      <div className="h-screen w-full flex items-center justify-center -mt-24 md:-mt-32">
        <div className="flex flex-wrap justify-center items-center w-full container">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
            <span className="uppercase font-bold block text-lg">General Enquiries</span>
            <a className="link" href="mailto:info@sotosnakis.com">info@sotosnakis.com</a>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
            <span className="uppercase font-bold block text-lg">Wholesale Enquiries</span>
            <a className="link" href="mailto:sales@sotosnakis.com">sales@sotosnakis.com</a>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
            <span className="uppercase font-bold block text-lg">Press Enquiries</span>
            <a className="link" href="mailto:press@sotosnakis.com">press@sotosnakis.com</a>
          </div>
        </div>
      </div>

      <Footer siteTitle="Sotos Nakis" />
    </>
  )
}

export default ContactPage