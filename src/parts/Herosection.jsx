import React, { useState, useEffect } from 'react';
import "./Herosections.css"
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
  className="relative main h-[500px] overflow-hidden mt-5"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{ cursor: 'pointer' }}
>
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-100 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="absolute inset-0 bg-black" style={{ opacity: isHovered ? 0.5 : 0 }}></div>
      <div className={`container mx-auto px-4 text-center z-20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {slide.heading}
        </h1>
        <p className="text-xl text-gray-200 mt-4 md:text-2xl lg:text-3xl">
          {slide.description}
        </p>
        {slide.cta && (
          <p className="text-xl text-gray-200 mt-4 md:text-1xl lg:text-1xl underline ">
            {slide.cta}
          </p>
        )}
      </div>
    </div>
  ))}
  <button className="absolute top-1/2 left-0 ml-1 transform -translate-y-1/2 text-white bg-black bg-opacity-35 p-2 rounded-full" onClick={handlePrevSlide}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path fillRule="evenodd" d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z" clipRule="evenodd" />
    </svg>
  </button>
  <button className="absolute top-1/2 right-0 mr-1 transform -translate-y-1/2 text-white bg-black bg-opacity-35 p-2 rounded-full" onClick={handleNextSlide}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 ">
      <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
    </svg>
  </button>
</div>

    );
};

export default HeroSlider;
