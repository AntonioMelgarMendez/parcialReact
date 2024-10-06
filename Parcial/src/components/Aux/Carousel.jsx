import { useState } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-text">
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
