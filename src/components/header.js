import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      siteTitle: props.siteTitle,
      collections: props.collections
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <header className="h-24 md:h-32 flex flex-wrap items-center relative z-20">
        <div className="w-full">
        <div className="container w-full">
          <div className="flex flex-wrap items-center">
            <Link className="font-bold block uppercase text-xl md:text-2xl inline-block" to="/">
              {this.state.siteTitle}
            </Link>

            <nav className="ml-auto hidden md:block">
              <ul className="flex flex-wrap relative">
                <li>
                  <button
                    className="link text-sm no-underline uppercase mr-8"
                    onClick={this.handleClick}>
                      Collections ▾
                  </button>

                  {this.state.active &&
                    <ul className="absolute top-0 left-0 mt-10">
                    {this.state.collections.map(({node}, index) =>
                      <Link
                        key={index}
                        activeClassName="is--active"
                        className="link text-sm no-underline uppercase mb-2 block"
                        onClick={this.handleClick}
                        to={`/collection/${node.slug}`}
                      >
                        {node.title}
                      </Link>
                    )}
                    </ul>
                  }
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
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  collections: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  collections: [],
}

export default Header