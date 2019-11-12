import React, { Component } from 'react'
import PropTypes from "prop-types"
import EmblaCarouselReact from 'embla-carousel-react'
import { motion } from 'framer-motion'

const duration = 1

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
}

class ProjectCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: props.projects,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <motion.section
            variants={container}
            initial="hidden" 
            animate="visible"
          >
            <div className="relative">
              <EmblaCarouselReact
                emblaRef={c => (this.embla = c)}
                htmlTagName={`div`}
                options={{ 
                  align: 'start',
                  slidesToScroll: 1,
                  draggable: true,
                  loop: true,
                  speed: 8
                }}
                className="embla"
              >
                <div className="embla__container embla__container--project max-w-full">
                  {this.state.projects.map((project, index) =>
                    <motion.div
                      key={index}
                      variants={item}
                      transition="easeInOut"
                      className="embla__slide--project w-full"
                    >
                      <div className="embed-container w-full mb-2">
                        <div
                          dangerouslySetInnerHTML={{ __html: project.node.embedCode }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 uppercase">{ project.node.title}</span>
                    </motion.div>
                  )}
                </div>
              </EmblaCarouselReact>
              <motion.button
                variants={item}
                transition="easeInOut"
                className="absolute top-0 left-0 mt-32 md:mt-64 -ml-6 p-3 font-bold text-xl font-serif"
                onClick={() => this.embla.scrollPrev()}
              >
                &larr;
              </motion.button>
              <motion.button
                variants={item}
                transition="easeInOut"
                className="absolute top-0 right-0 mt-32 md:mt-64 -mr-6 p-3 font-bold text-xl"
                onClick={() => this.embla.scrollNext()}
              >
                &rarr;
              </motion.button>
            </div>
          </motion.section>
        ) : (
          <p>Loading Reviews&hellip;</p>
        )}
      </>
    )
  }
}

ProjectCarousel.propTypes = {
  projects: PropTypes.array,
}

ProjectCarousel.defaultProps = {
  projects: [],
}

export default ProjectCarousel