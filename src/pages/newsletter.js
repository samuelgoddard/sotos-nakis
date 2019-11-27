import React from "react"
// import SEO from "../components/seo"
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
  hidden: { y:20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const NewsletterPage = () => {
  return (
    <>
      {/* <SEO title="Newsletter" /> */}
        <motion.section
          variants={container}
          initial="hidden" 
          animate="visible"
        >
        <div className="flex flex-wrap justify-center items-center min-h-screen lg:-mt-32">
          <div className="container w-full">
            <div className="max-w-2xl content mx-auto">
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
                <div id="mc_embed_signup" className="w-full">
                  <form action="https://sotosnakis.us5.list-manage.com/subscribe/post?u=a88839c8bc40d3ba72d83bb3a&amp;id=3eb474098b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">  
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-1/2 px-2 mb-6 mc-field-group">
                        <label className="text-sm uppercase" htmlFor="mce-LNAME">Last Name </label>
                        <input type="text" defaultValue="" name="LNAME" className="required form-input mt-1 block w-full" placeholder="First Name" id="mce-LNAME" required />
                      </div>
                      <div className="w-1/2 px-2 mb-6 mc-field-group">
                        <label className="text-sm uppercase" htmlFor="mce-FNAME">First Name </label>
                        <input type="text" defaultValue="" name="FNAME" className="required form-input mt-1 block w-full" placeholder="First Name" id="mce-FNAME" required />
                      </div>
                    </div>
                    <div className="mc-field-group mb-6">
                      <label className="text-sm uppercase" htmlFor="mce-EMAIL">Email Address </label>
                      <input type="email" defaultValue="" name="EMAIL" className="mt-1 block w-full required email form-input" id="mce-EMAIL" placeholder="Email Address" />
                    </div>
                    <div id="mce-responses" className="clear">
                      <div className="response hidden" id="mce-error-response"></div>
                      <div className="response hidden" id="mce-success-response"></div>
                    </div>
                      <div className="sr-only" aria-hidden="true">
                        <input type="text" name="b_a88839c8bc40d3ba72d83bb3a_3eb474098b" tabIndex="-1" defaultValue=""/>
                      </div>
                      <div className="clear">
                        <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="bg-black hover:bg-gray-800 text-white py-3 px-10 uppercase cursor-pointer" />
                      </div>
                    </div>
                  </form>
                </div>

                {/* <form className="">
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
                </form> */}
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

export default NewsletterPage