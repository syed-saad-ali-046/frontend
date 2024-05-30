import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SearchDropdown = ({ productsData, onFilterChange }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    updateFilteredProducts(inputValue);
  };

  const updateFilteredProducts = (inputValue) => {
    const filtered = productsData.filter(
      (product) =>
        product.Brand.toLowerCase().includes(inputValue.toLowerCase()) ||
        product.Name.toLowerCase().includes(inputValue.toLowerCase())
    );
    onFilterChange(filtered); // Call the callback function to update the filtered products
  };

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? <strong key={index}>{part}</strong> : part
    );
  };

  return (
    <div className="max-w-lg mx-auto mt-6">
      <div className="relative rounded-lg overflow-hidden border border-gray-300">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-none focus:ring-1 focus:ring-black focus:border-black dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
          placeholder="Enter the name of product to search.."
          value={searchInput}
          onChange={handleSearchChange}
          required
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-black rounded-r-lg hover:bg-black-500 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
      {/* Render filtered products only if there is search input */}
      {searchInput && (
        <ul className="mt-1 max-h-60 overflow-y-auto bg-gray-50 rounded-lg">
          {productsData.filter(product => 
            product.Brand.toLowerCase().includes(searchInput.toLowerCase()) || 
            product.Name.toLowerCase().includes(searchInput.toLowerCase())
          ).map((product, index) => (
            <li key={index} className="p-2 hover:bg-gray-100">
              <Link to={`/products/${product.id}`}> {/* Use Link for navigation */}
                {highlightText(product.Brand, searchInput)} - {highlightText(product.Name, searchInput)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchDropdown;
