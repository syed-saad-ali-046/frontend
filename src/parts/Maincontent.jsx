import React from "react";
import "./maincontent.css";

const MainContent = () => {
  return (
    <div className="grid grid-cols-2 gap-8 items-center justify-center min-h-screen px-4 py-8 bg-white sm:px-6 lg:px-8 main">
      <div className="max-w-md">
        <img
          alt="Fashion model"
          className="w-full h-auto"
          height="750"
          src="https://www.dynastyfabrics.com/cdn/shop/files/boski_6cb7f19e-ba01-4ee6-8ee7-e5d2ef562482_1024x1024.jpg?v=1707740923"
          style={{
            aspectRatio: "550/850",
            objectFit: "cover",
          }}
          width="580"
        />
        <div className="max-w-md">
          <h2 className="text-2xl font-normal font-serif leading-relaxed text-gray-900 text-center mt-6 mb-5">DEEP SEA</h2>
          <p className="text-sm text-gray-600 text-center italic font-normal font-serif leading-relaxed">
            Inquire Now Dive into “Deep Sea” by Dynasty, our dynamic craftsmen has put in everything to make this
            ostentatious fabric more appealing and remarkable. It is definitely one of the best and finest in the LA
            Finish collection with the bespoke colour palette that includes light, medium and dark hues.
          </p>
          <a href="./signup" className="font-normal font-serif fancy-button font-bold text-lg lg:text-2xl uppercase px-6 lg:px-8 py-3 lg:py-4 mt-6 lg:mt-6  text-center"><p>|| EXPLORE ||</p></a>
        </div>
      </div>
      <div className="max-w-md msec">
        <img
          alt="Fashion model"
          className="w-full h-auto"
          height="600"
          src="https://www.dynastyfabrics.com/cdn/shop/files/deep_sea_1024x1024.jpg?v=1707805522"
          style={{
            aspectRatio: "550/450",
            objectFit: "cover",
          }}
          width="580"
        />
        <div className="max-w-md">
          <h2 className="text-2xl font-normal font-serif leading-relaxed text-gray-900 text-center mt-5 mb-5">DEEP SEA</h2>
          <p className="text-sm text-gray-600 text-center italic font-normal font-serif leading-relaxed mt-5">
            Inquire Now Dive into “Deep Sea” by Dynasty, our dynamic craftsmen has put in everything to make this
            ostentatious fabric more appealing and remarkable. It is definitely one of the best and finest in the LA
            Finish collection with the bespoke colour palette that includes light, medium and dark hues.
          </p>
          <a href="./signup" className="font-normal font-serif fancy-button font-bold text-lg lg:text-2xl uppercase px-6 lg:px-8 py-3 lg:py-4 mt-6 lg:mt-6 text-center"><p>|| EXPLORE ||</p></a>
        </div>
      </div>
      <div className="max-w-md msec">
        <img
          alt="Fashion model"
          className="w-full h-auto"
          height="600"
          src="https://www.dynastyfabrics.com/cdn/shop/files/spark_ced4697a-f607-44d2-980a-94574d018033_1024x1024.jpg?v=1707740979"
          style={{
            aspectRatio: "550/450",
            objectFit: "cover",
          }}
          width="580"
        />
        <div className="max-w-md">
          <h2 className="text-2xl font-normal font-serif leading-relaxed text-gray-900 text-center mt-5 mb-5">DEEP SEA</h2>
          <p className="text-sm text-gray-600 text-center italic font-normal font-serif leading-relaxed mt-5">
            Inquire Now Dive into “Deep Sea” by Dynasty, our dynamic craftsmen has put in everything to make this
            ostentatious fabric more appealing and remarkable. It is definitely one of the best and finest in the LA
            Finish collection with the bespoke colour palette that includes light, medium and dark hues.
          </p>
          <a href="./signup" className="font-normal font-serif fancy-button font-bold text-lg lg:text-2xl uppercase px-6 lg:px-8 py-3 lg:py-4 mt-6 lg:mt-6 text-center"><p>|| EXPLORE ||</p></a>
        </div>
      </div>
      <div className="max-w-md submain">
        <img
          alt="Fashion model"
          className="w-full h-auto"
          height="750"
          src="https://www.dynastyfabrics.com/cdn/shop/files/shan_e_mughal_f7efd176-54cc-47ca-bdfd-c0683498348a_1024x1024.jpg?v=1707820578"
          style={{
            aspectRatio: "550/850",
            objectFit: "cover",
          }}
          width="580"
        />
        <div className="max-w-md">
          <h2 className="text-2xl font-normal font-serif leading-relaxed text-gray-900 text-center mt-6 mb-5">DEEP SEA</h2>
          <p className="text-sm text-gray-600 text-center italic font-normal font-serif leading-relaxed">
            Inquire Now Dive into “Deep Sea” by Dynasty, our dynamic craftsmen has put in everything to make this
            ostentatious fabric more appealing and remarkable. It is definitely one of the best and finest in the LA
            Finish collection with the bespoke colour palette that includes light, medium and dark hues.
          </p>
          <a href="./signup" className="font-normal font-serif fancy-button font-bold text-lg lg:text-2xl uppercase px-6 lg:px-8 py-3 lg:py-4 mt-6 lg:mt-6 text-center"><p>|| EXPLORE ||</p></a>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
