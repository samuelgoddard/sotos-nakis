import React, { Component } from 'react'
import EmblaCarouselReact from 'embla-carousel-react'

class ProjectCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
                <div className="embla__slide embla__slide--project">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/720/320?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm uppercase text-gray-600">Video Name</span>
                </div>
                <div className="embla__slide embla__slide--project">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/720/320?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm uppercase text-gray-600">Video Name</span>
                </div>
                <div className="embla__slide embla__slide--project">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/720/320?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm uppercase text-gray-600">Video Name</span>
                </div>
                <div className="embla__slide embla__slide--project">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/720/320?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm uppercase text-gray-600">Video Name</span>
                </div>
                <div className="embla__slide embla__slide--project">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/720/320?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm uppercase text-gray-600">Video Name</span>
                </div>
              </div>
            </EmblaCarouselReact>
            <button 
              className="absolute top-0 left-0 mt-48 -ml-6 p-3 font-bold text-xl"
              onClick={() => this.embla.scrollPrev()}>
                &larr;
            </button>
            <button
              className="absolute top-0 right-0 mt-48 -mr-6 p-3 font-bold text-xl"
              onClick={() => this.embla.scrollNext()}>
                &rarr;
            </button>
          </div>
        ) : (
          <p>Loading Reviews&hellip;</p>
        )}
      </>
    )
  }
}

export default ProjectCarousel