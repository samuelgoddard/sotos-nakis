import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="bg-gray-300 h-screen w-full flex items-center justify-center -mt-24 md:-mt-32">
      <div className="text-center max-w-md">
        <h1>404 - PAGE NOT FOUND</h1>
        <p>Unfortunately, that page does not exist... Please return home.</p>
      </div>
    </div>

    <Footer siteTitle="Sotos Nakis" />
  </>
)

export default NotFoundPage
