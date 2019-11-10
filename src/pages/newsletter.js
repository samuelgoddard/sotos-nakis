import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
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
  hidden: { y:20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const NewsletterPage = () => {
  return (
    <>
      <SEO title="Newsletter" />
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
                <h1>Newsletter</h1>
              </motion.div>

              <motion.div 
                variants={item}
                transition="easeInOut"
              >
                <p>Sign up for content</p>
              </motion.div>

              <motion.div 
                variants={item}
                transition="easeInOut"
              >
                <form className="">
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-1/2 px-2 mb-6">
                      <label className="block">
                        <span className="uppercase text-sm">First Name</span>
                        <input type="input" className="form-input mt-1 block w-full" placeholder="First Name" required />
                      </label>
                    </div>
                    <div className="w-1/2 px-2 mb-6">
                      <label className="block">
                        <span className="uppercase text-sm">Last Name</span>
                        <input type="input" className="form-input mt-1 block w-full" placeholder="Second Name" required />
                      </label>
                    </div>

                    <div className="w-full px-2 mb-6">
                      <label className="block">
                        <span className="uppercase text-sm">Email</span>
                        <input type="email" className="form-input mt-1 block w-full" placeholder="Email" required />
                      </label>
                    </div>
                    
                    <div className="w-full px-2 mb-6">
                      <label className="block">
                        <span className="uppercase text-sm">Enquiry</span>
                        <textarea className="form-textarea mt-1 block w-full" rows="5" placeholder="Your enquiry..."></textarea>
                      </label>
                    </div>
                  </div>

                  <button className="bg-black hover:bg-gray-800 text-white py-3 px-10 uppercase" type="submit">
                    Submit
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer siteTitle="Sotos Nakis" />
    </>
  )
}

export default NewsletterPage