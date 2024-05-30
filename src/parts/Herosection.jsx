import React, { useState, useEffect } from 'react';
import "./Herosections.css";

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlideIndex = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlideIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const handlePrevSlide = () => {
    const prevSlideIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlideIndex);
  };

  const handleNextSlide = () => {
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlideIndex);
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
          }}
        >
          <div className="overlay" style={{ opacity: isHovered ? 0.5 : 0 }}></div>
          <div className={`content ${isHovered ? 'show' : ''}`}>
            <h1>{slide.heading}</h1>
            <p>{slide.description}</p>
            {slide.cta && <p className="cta">{slide.cta}</p>}
          </div>
        </div>
      ))}
      <button className="prev-button" onClick={handlePrevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
          <path
            fillRule="evenodd"
            d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button className="next-button" onClick={handleNextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
          <path
            fillRule="evenodd"
            d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeroSlider;
