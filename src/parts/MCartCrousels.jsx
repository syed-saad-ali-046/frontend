import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./MCartCrousels.css"
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Redux-States/Cartslice';
const useMobileView = () => {
  const [isMobileView, setIsMobileView] = React.useState(window.innerWidth < 1024);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <=764);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileView;
};

const MultiCardCarousel = ({ productData }) => {
  const dispatch=useDispatch();

 
  var settings={
    dots: true,
  };
  const isMobileView = useMobileView();

  return (
    <>
    <div className="bg-gray-100 w-70 py-16 px-4 standard">
      <h1 className="font-normal font-serif leading-relaxed text-center text-4xl mb-6"> Mens New Arrival</h1>
      {isMobileView ? (
        <Slider {...settings}>
          {productData.map((productdata) => (
            <div key={productdata.id}>
              <div className="mobilecontainer bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-8">
                <span className="top-0 left-0 right-100 bg-gray-200 text-grey text-md font-bold px-3 py-1 rounded">{productdata.price}</span>
                <img
                  alt="Nike Shoes"
                  className="w-full h-auto"
                  height="200"
                  src={productdata.image}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="pt-4 bg-gray-100 rounded-md">
                  <h3 className="text-lg font-semibold text-center">{productdata.name}</h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-md font-medium ml-9">SIZE:</span>
                    <div className="flex space-x-1 mr-9 rounded-md">
                      {productdata.sizes.map((size, index) => (
                        <button key={index} className="text-xs py-1 px-2 rounded-full bg-gray-200 text-gray-800">{size}</button>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-md font-medium ml-9">COLOR:</span>
                    <div className="flex space-x-1 mr-16">
                      {productdata.colors.map((colour, index) => (
                        <span key={index} className={`block w-4 h-4 bg-${colour}-500 rounded-full shadow`} />
                      ))}
                    </div>
                  </div>
                  <button onClick={() => dispatch(addtoCart({ id: productdata.id, image: productdata.image , name: productdata.name, price: productdata.price,colors: productdata.colors}))}  type="button" className="text-white gap-2 bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-3.5 ml-11 mt-2 py-2 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="max-w-6xl mx-auto flex xl:space-x-11 lg:space-x-0.5">
          {productData.map((productdata) => (
            <div key={productdata.id} className="bg-white p-4 w-64 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-8">
              <span className="top-0 left-0 right-100 bg-gray-200 text-grey text-md font-bold px-3 py-1 rounded">{productdata.price}</span>
              <img
                alt="Nike Shoes"
                className="w-full h-auto"
                height="200"
                src={productdata.image}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="pt-4 bg-gray-100 rounded-md">
                <h3 className="text-lg font-semibold text-center">{productdata.name}</h3>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-md font-medium ml-9">SIZE:</span>
                  <div className="flex space-x-1 mr-9 rounded-md">
                    {productdata.sizes.map((size, index) => (
                      <button key={index} className="text-xs py-1 px-2 rounded-full bg-gray-200 text-gray-800">{size}</button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-md font-medium ml-9">COLOR:</span>
                  <div className="flex space-x-1 mr-16">
                    {productdata.colors.map((colour, index) => (
                      <span key={index} className={`block w-4 h-4 bg-${colour}-500 rounded-full shadow`} />
                    ))}
                  </div>
                </div>
                <button onClick={() => dispatch(addtoCart({id: productdata.id, image: productdata.image , name: productdata.name, price: productdata.price,colors: productdata.colors }))}  type="button"  className="text-white gap-2 bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-3.5 ml-11 mt-2 py-2 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <a className='move' href='./male-collection'>
        <span className="font-normal font-serif fancy-button text-2xl text-center uppercase tracking-wide underline"><p>Explore More&nbsp;→</p></span>
      </a>
    </div>
   
    </>
  );
};

export default MultiCardCarousel;
