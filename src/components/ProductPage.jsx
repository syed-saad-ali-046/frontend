import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../parts/Navbars";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux-States/Cartslice";
import { Link } from "react-router-dom";

export default function Component({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

  const [mainImage, setMainImage] = useState(product?.Image || "");
  const [selectedColor, setSelectedColor] = useState(""); 
  const [selectedSize, setSelectedSize] = useState(""); 
  const dispatch = useDispatch();

  if (!product) return <div>Product not found</div>;

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  // Function to handle color selection
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Function to handle size selection
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Function to handle Add to Cart click
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      // Check if color and size are selected
      alert("Please select color and size");
      return;
    }
    // Dispatch action with product details
    dispatch(
      addtoCart({
        id: product.id,
        image: mainImage,
        name: product.Name,
        price: product.Price,
        color: selectedColor,
        size: selectedSize,
      })
    );
  };

  return (
    <div>
      <Navbar />
      <h1 className="font-normal font-serif leading-relaxed text-center text-4xl ">
        {product.Brand}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-12">
        <div className="grid gap-4">
          <img
            alt="Product Image"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            src={mainImage}
          />
          <div className="flex space-x-8 justify-center">
            <div className="cursor-pointer" onClick={() => handleThumbnailClick(product?.Image || "")}>
              <img
                alt="Product Thumbnail 1"
                src={product?.Image || ""}
                className="w-20 h-20 object-cover rounded-lg border border-gray-300 bg-gray-200  hover:opacity-50 transition duration-300"
              />
            </div>
            <div className="cursor-pointer" onClick={() => handleThumbnailClick(product?.Image2 || "")}>
              <img
                alt="Product Thumbnail 2"
                src={product?.Image2 || ""}
                className="w-20 h-20 object-cover rounded-lg border border-gray-300  hover:opacity-50 transition duration-300"
              />
            </div>
            <div className="cursor-pointer" onClick={() => handleThumbnailClick(product?.Image3 || "")}>
              <img
                alt="Product Thumbnail 3"
                src={product?.Image3 || ""}
                className="w-20 h-20 object-cover rounded-lg border border-gray-300  hover:opacity-50 transition duration-300"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold">{product.Name}</h1>
            <p className="text-gray-500 dark:text-gray-400">Brand: {product.Brand}</p>
            <p className="text-gray-500 dark:text-gray-400">Casual T-Shirt</p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-base" htmlFor="color">
                Color
              </label>
              <div className="flex gap-4">
                {product.Colors &&
                  product.Colors.map((color, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`color-${color}`}
                        type="radio"
                        value={color}
                        name="color"
                        onChange={() => handleColorChange(color)} // Handle color change
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`color-${color}`}
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {color}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base" htmlFor="size">
                Size
              </label>
              <div className="flex gap-4">
                {product.Sizes &&
                  product.Sizes.map((size, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`size-${size}`}
                        type="radio"
                        value={size}
                        name="size"
                        onChange={() => handleSizeChange(size)} // Handle size change
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`size-${size}`}
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">Rs.{product.Price}</h2>
            <button onClick={handleAddToCart} className="bg-black text-white font-bold py-2 px-4 rounded-lg">
             <a href="#"> Add to Cart</a>
            </button>
          </div>
          <div className="grid gap-4 text-sm leading-loose">
            <p>
              Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern individual. This
              tee is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester jersey,
              ensuring a soft and breathable fabric that feels gentle against the skin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
