import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../parts/Navbars";
import Advance from "../parts/Advance Filter";
import SearchDropdown from "../parts/Search FIlter";
import "./MaleCollection.css";

const Mcollection = ({ productsData }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [sortByPrice, setSortByPrice] = useState("");
  const [sortByCategory, setSortByCategory] = useState("");

  const handlePriceSortChange = (event) => {
    const sortOption = event.target.value;
    setSortByPrice(sortOption);
    sortProducts(sortOption, sortByCategory);
  };

  const handleCategorySortChange = (event) => {
    const sortOption = event.target.value;
    setSortByCategory(sortOption);
    sortProducts(sortByPrice, sortOption);
  };

  const sortProducts = (priceSort, categorySort) => {
    let sortedProducts = [...productsData];

    if (priceSort === "lowToHigh") {
      sortedProducts.sort((a, b) => a.Price - b.Price);
    } else if (priceSort === "highToLow") {
      sortedProducts.sort((a, b) => b.Price - a.Price);
    }

    if (categorySort === "shoes") {
      sortedProducts = sortedProducts.filter(
        (product) => product.Category === "Shoes"
      );
    } else if (categorySort === "loferz") {
      sortedProducts = sortedProducts.filter(
        (product) => product.Category === "Loferz"
      );
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <Navbar />
      <Advance
        onPriceSortChange={handlePriceSortChange}
        onCategorySortChange={handleCategorySortChange}
      />
      <SearchDropdown productsData={productsData} onFilterChange={setFilteredProducts} />
      <h1 className="font-normal font-serif leading-relaxed text-center text-4xl mt-4">
        Male Collection
      </h1>
      <div className="container mx-auto mt-10 bg-slate-50 border border-gray-300 rounded-lg shadow-lg shadow-gray-300/100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <Link to={`/products/${product.id}`} className="block w-full">
                <img
                  src={product.Image}
                  alt={product.Name}
                  className="rounded-lg shadow-lg shadow-gray-400/100 w-full object-cover"
                  style={{ maxHeight: "250px" }}
                />
              </Link>
              <div className="flex flex-col mt-2 w-full text-center">
                <p className="p-2 font-normal font-serif leading-6">
                  Brand: {product.Brand}
                </p>
                <p className="p-2 font-normal font-serif leading-6 text-gray-600">
                  {product.Name}
                </p>
                <p className="p-2 font-normal font-serif leading-6 text-gray-600">
                  Rs.{product.Price}
                </p>
                <Link
                  to={`/products/${product.id}`}
                  className="p-2 font-normal font-serif leading-6 text-gray-600"
                >
                  || Explore ||
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mcollection;
