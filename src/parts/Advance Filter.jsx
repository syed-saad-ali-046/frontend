import React, { useState } from "react";
import "./Advance Filter.css"

const Advance = ({ onPriceSortChange, onCategorySortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute filter right-5 text-left mt-6 z-10">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-md font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-black focus:border-black-500"
        >
          Filter
          {/* Heroicon name: solid/chevron-down */}
          <svg
            className="mt-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-6-6H4a2 2 0 110-4h12a2 2 0 110 4h0l-2 2h0l-6 6h0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown panel */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <div className="px-4 py-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  Sort By Price
                </span>
              </div>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="priceSortOption"
                    value="lowToHigh"
                    onChange={onPriceSortChange}
                  />
                  <span className="ml-2">Low to High</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="radio"
                    className="form-radio"
                    name="priceSortOption"
                    value="highToLow"
                    onChange={onPriceSortChange}
                  />
                  <span className="ml-2">High to Low</span>
                </label>
              </div>
            </div>
            <div className="px-4 py-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  Sort By Category
                </span>
              </div>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="categorySortOption"
                    value="shoes"
                    onChange={onCategorySortChange}
                  />
                  <span className="ml-2">Shoes options</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="radio"
                    className="form-radio"
                    name="categorySortOption"
                    value="loferz"
                    onChange={onCategorySortChange}
                  />
                  <span className="ml-2">Loferz options</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advance;
