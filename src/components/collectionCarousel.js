import React, { Component } from 'react'
import EmblaCarouselReact from 'embla-carousel-react'

class CollectionCarousel extends Component {
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
              <div className="embla__container max-w-full">
                <div className="embla__slide">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/400/500?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm text-gray-600">01</span>
                </div>
                <div className="embla__slide">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/400/500?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm text-gray-600">02</span>
                </div>
                <div className="embla__slide">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/400/500?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm text-gray-600">03</span>
                </div>
                <div className="embla__slide">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/400/500?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm text-gray-600">04</span>
                </div>
                <div className="embla__slide">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/400/500?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm text-gray-600">05</span>
                </div>
                <div className="embla__slide">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/400/500?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm text-gray-600">06</span>
                </div>
                <div className="embla__slide">
                  <img
                    className="w-full block mb-px"
                    src="https://picsum.photos/400/500?grayscale"
                    alt="Temp Image"
                  />
                  <span className="text-sm text-gray-600">07</span>
                </div>
              </div>
            </EmblaCarouselReact>
            <button 
              className="absolute top-0 left-0 mt-32 -ml-4 p-3 font-bold text-xl font-serid"
              onClick={() => this.embla.scrollPrev()}>
                &larr;
            </button>
            <button
              className="absolute top-0 right-0 mt-32 -mr-4 p-3 font-bold text-xl font-serid"
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

export default CollectionCarousel