import './Carousel.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  };

  return (
    <div className="carousel_container">
      <button className="prev_button" onClick={prevImage}>
        <IoIosArrowBack />
      </button>
      <div className="carousel_image">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className='image_active' />
      </div>
      <button className="next_button" onClick={nextImage}>
        <IoIosArrowForward />
      </button>

      {/* Indicators */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
