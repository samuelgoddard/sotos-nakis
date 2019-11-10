import React from "react"
import SEO from "../components/seo"
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

const PrivacyPage = () => {
  return (
    <>
      <SEO title="Newsletter" />
      <div className="flex flex-wrap justify-center py-8 md:py-12">
        <div className="container">
          <div className="max-w-2xl content">
            <h1>Newsletter</h1>
            <p>Sign up for content</p>

            <form className="">
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 px-2 mb-6">
                  <label class="block">
                    <span className="uppercase text-sm">First Name</span>
                    <input type="input" class="form-input mt-1 block w-full" placeholder="First Name" required />
                  </label>
                </div>
                <div className="w-1/2 px-2 mb-6">
                  <label class="block">
                    <span className="uppercase text-sm">Last Name</span>
                    <input type="input" class="form-input mt-1 block w-full" placeholder="Second Name" required />
                  </label>
                </div>

                <div className="w-full px-2 mb-6">
                  <label class="block">
                    <span className="uppercase text-sm">Email</span>
                    <input type="email" class="form-input mt-1 block w-full" placeholder="Email" required />
                  </label>
                </div>
                
                <div className="w-full px-2 mb-6">
                  <label class="block">
                    <span className="uppercase text-sm">Enquiry</span>
                    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="Your enquiry..."></textarea>
                  </label>
                </div>
              </div>

              <button className="bg-black hover:bg-gray-800 text-white py-3 px-10 uppercase" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPage