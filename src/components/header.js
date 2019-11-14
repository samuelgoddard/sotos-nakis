import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      trayOpen: false,
      siteTitle: props.siteTitle,
      collections: props.collections
    };

    this.toggleCollections = this.toggleCollections.bind(this);
    this.toggleTray = this.toggleTray.bind(this);
  }

  toggleCollections = () => {
    this.setState({
      active: !this.state.active
    });
  }

  toggleTray = () => {
    this.setState({
      trayOpen: !this.state.trayOpen
    });
  }
  
  toggleOff = () => {
    this.setState({
      active: false
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
                      onClick={this.toggleCollections}>
                        Collections ▾
                    </button>

                    {this.state.active &&
                      <ul className="absolute top-0 left-0 mt-10">
                      {this.state.collections.map(({node}, index) =>
                        <Link
                          key={index}
                          activeClassName="is--active"
                          className="link text-sm no-underline uppercase mb-2 block"
                          onClick={this.toggleOff}
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
                      onClick={this.toggleOff}
                      to="/about">
                        About
                    </Link>
                  </li>
                  <li>
                    <Link
                    activeClassName="is--active"
                      className="link text-sm no-underline uppercase"
                      onClick={this.toggleOff}
                      to="/projects">
                        Projects
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav className="ml-auto block md:hidden">
                <ul>
                  <li>
                    <button
                      className="link text-sm no-underline uppercase"
                      onClick={this.toggleTray}>
                        {this.state.trayOpen ? (
                          <span>
                            <svg width="17" height="17" className="mr-1 mt-1" version="1.1">
                              <g fill="#000" fill-rule="evenodd" stroke="none" stroke-width="1">
                                <path d="M.015 16.278L16.278.015l.707.707L.722 16.985z"/>
                                <path d="M.722.015l16.263 16.263-.707.707L.015.722z"/>
                              </g>
                            </svg>
                          </span>
                        ) : (
                          <span>
                            <svg width="23" height="13" version="1.1">
                              <g fill="#000" fill-rule="evenodd" stroke="none" stroke-width="1">
                                <path d="M0 0h23v1H0zM0 6h23v1H0zM0 12h23v1H0z"/>
                              </g>
                            </svg>
                          </span>
                        )}
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {this.state.trayOpen &&
          <div className="fixed top-0 left-0 right-0 bottom-0 z-40">
            <div className="container w-full h-24 md:h-32 flex flex-wrap items-center relative">
              <div className="flex flex-wrap items-center w-full">
                <Link className="font-bold block uppercase text-xl md:text-2xl inline-block" to="/" onClick={this.toggleTray}>
                  {this.state.siteTitle}
                </Link>

                <nav className="ml-auto text-right">
                  <ul>
                    <li>
                      <button
                        className="link text-sm no-underline uppercase"
                        onClick={this.toggleTray}>
                          {this.state.trayOpen ? (
                            <span>
                              <svg width="17" height="17" className="mr-1 mt-1" version="1.1">
                                <g fill="#000" fill-rule="evenodd" stroke="none" stroke-width="1">
                                  <path d="M.015 16.278L16.278.015l.707.707L.722 16.985z"/>
                                  <path d="M.722.015l16.263 16.263-.707.707L.015.722z"/>
                                </g>
                              </svg>
                            </span>
                          ) : (
                            <span>
                              <svg width="23" height="13" version="1.1">
                                <g fill="#000" fill-rule="evenodd" stroke="none" stroke-width="1">
                                  <path d="M0 0h23v1H0zM0 6h23v1H0zM0 12h23v1H0z"/>
                                </g>
                              </svg>
                            </span>
                          )}
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
            <div className="container mt-32">
              <nav className="w-full">
                <ul className="relative">
                  <li>
                    <button
                      className="link uppercase font-bold text-xl no-underline uppercase block mb-2"
                      onClick={this.toggleCollections}>
                        Collections ▾
                    </button>

                    {this.state.active &&
                      <ul className="my-2">
                      {this.state.collections.map(({node}, index) =>
                        <Link
                          key={index}
                          activeClassName="is--active"
                          className="link uppercase font-normal no-underline uppercase mb-2 block"
                          onClick={this.toggleTray}
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
                      className="link uppercase font-bold text-xl no-underline uppercase block mb-2"
                      onClick={this.toggleTray}
                      to="/about">
                        About
                    </Link>
                  </li>
                  <li>
                    <Link
                    activeClassName="is--active"
                      className="link uppercase font-bold text-xl no-underline uppercase block mb-2"
                      onClick={this.toggleTray}
                      to="/projects">
                        Projects
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        }
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