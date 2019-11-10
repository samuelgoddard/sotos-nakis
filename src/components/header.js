import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="h-24 md:h-32 flex flex-wrap items-center relative z-20">
    <div className="w-full">
    <div className="container w-full">
      <div className="flex flex-wrap items-center">
        <Link className="font-bold block uppercase text-xl md:text-2xl inline-block" to="/">
          {siteTitle}
        </Link>

        <nav className="ml-auto hidden md:block">
          <ul className="flex flex-wrap">
            <li>
              <Link
                activeClassName="is--active"
                className="link text-sm no-underline uppercase mr-8"
                to="/collection/spring-summer-2020">
                  Collections
              </Link>
            </li>
            <li>
              <Link
                activeClassName="is--active"
                className="link text-sm no-underline uppercase mr-8"
                to="/about">
                  About
              </Link>
            </li>
            <li>
              <Link
              activeClassName="is--active"
                className="link text-sm no-underline uppercase"
                to="/projects">
                  Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header