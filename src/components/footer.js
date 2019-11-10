import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="py-8 md:pb-10 md:py-10 md:pb-12 bg-white">
    
    <div className="container">
      <Link className="font-bold block uppercase text-lg md:text-2xl block mb-2" to="/">
        {siteTitle}
      </Link>

      <div className="flex flex-wrap items-center">
        <nav className="md:mr-auto">
          <ul className="flex flex-wrap">
            <li>
              <Link
                activeClassName="is--active"
                className="link text-gray-600 text-xs md:text-sm no-underline uppercase mr-3 md:mr-8"
                to="/collection">
                  Collections
              </Link>
            </li>
            <li>
              <Link
                activeClassName="is--active"
                className="link text-gray-600 text-xs md:text-sm no-underline uppercase mr-3 md:mr-8"
                to="/about">
                  About
              </Link>
            </li>
            <li>
              <Link
                activeClassName="is--active"
                className="link text-gray-600 text-xs md:text-sm no-underline mr-3 md:mr-8 uppercase"
                to="/projects">
                  Projects
              </Link>
            </li>
            <li>
              <Link
                className="link text-gray-600 text-xs md:text-sm no-underline uppercase"
                to="/contact">
                  Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="md:ml-auto">
          <ul className="flex flex-wrap">
            <li>
              <Link
                activeClassName="is--active"
                className="link text-gray-600 text-xs md:text-sm no-underline uppercase mr-3 md:mr-8"
                to="/privacy">
                  Privacy
              </Link>
            </li>
            <li>
              <Link
                activeClassName="is--active"
                className="link text-gray-600 text-xs md:text-sm no-underline uppercase mr-3 md:mr-8"
                to="/newsletter">
                  Newsletter
              </Link>
            </li>
            <li>
              <a
                className="link text-gray-600 text-xs md:text-sm no-underline uppercase"
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/sotosnakis">
                  Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer