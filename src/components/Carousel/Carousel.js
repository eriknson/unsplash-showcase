import React from 'react';
import ImageGallery from 'react-image-gallery';

function Carousel() {
  const images = [
    {
      original: require('../../assets/carousel/01.jpg'),
    },
    {
      original: require('../../assets/carousel/02.jpg'),
    },
    {
      original: require('../../assets/carousel/03.jpg'),
    },
    {
      original: require('../../assets/carousel/04.jpg'),
    },
    {
      original: require('../../assets/carousel/05.jpg'),
    },
  ];

  return (
    <>
      <div id="carousel" className="standard-component">
        <h2>Carousel</h2>
        <div className="carousel-container">
          <ImageGallery
            items={images}
            showIndex={true}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            slideDuration={200}
          />
        </div>
      </div>
    </>
  );
}
export default Carousel;
