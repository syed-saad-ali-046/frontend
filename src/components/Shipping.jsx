import React, {useState, useEffect } from "react";
import BNavbar from "../parts/Billing Nav";
import { calculateTotal,updateCart,removefromCart } from "../Redux-States/Cartslice";
import {useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../parts/Navbars";
import Footer from "../parts/Footer";
function Shipping() {
  const [formData, setFormData] = useState({
    email: "",
    country: "Pakistan",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("shippingInfo", JSON.stringify(formData));
  };

    //cart item: 
    const dispatch = useDispatch();
    const updatedCart = useSelector((state) => state.cart.cart);
    const cartItems = useSelector(state => state.cart.cart);
    const totalItems = updatedCart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = useSelector((state) => state.cart.total); // Get the total price from the state

    useEffect(() => {
        dispatch(calculateTotal());
      }, [dispatch, updatedCart]);
      
    const handleUpdateCart = (updatedCart) => {
        dispatch(updateCart(updatedCart));
    };
  return (
<div className="nutshell">
<Navbar/>  
<div className="flex flex-col md:flex-row mb-20 md:space-x-8 justify-center">
<div className="w-auto md:w-1/2">
    <BNavbar/>
    <div className="px-8 py-4 ">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Contact</h2>
              <a href="#" className="text-sm text-blue-600">
                Already have an account? Log in
              </a>
            </div>
            <input
              className="mb-4 w-full max-w-md px-4 py-2 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email or mobile phone number"
              type="text"
            />
            <div className="flex items-center mb-6">
              <input
                id="news-offers"
                type="checkbox"
                className="mr-2"
                checked={formData.saveInfo}
                onChange={handleChange}
                name="saveInfo"
              />
              <label htmlFor="news-offers" className="text-sm">
                Email me with news and offers
              </label>
            </div>
            <div className="mb-6 max-w-md">
              <select
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md"
                value={formData.country}
                onChange={handleChange}
                name="country"
              >
                <option value="pakistan">Pakistan</option>
                {/* Add other countries */}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4 max-w-md ">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                placeholder="First name (optional)"
              />
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                placeholder="Last name"
              />
            </div>
            <input
              className="mb-4 w-full max-w-md px-4 py-2 border border-gray-300 rounded-md"
              value={formData.address}
              onChange={handleChange}
              name="address"
              placeholder="Address"
            />
            <input
              className="mb-4 w-full max-w-md px-4 py-2 border border-gray-300 rounded-md"
              value={formData.apartment}
              onChange={handleChange}
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
            />
            <div className="grid grid-cols-2 gap-4 mb-4 max-w-md">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.city}
                onChange={handleChange}
                name="city"
                placeholder="City"
              />
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.postalCode}
                onChange={handleChange}
                name="postalCode"
                placeholder="Postal code"
              />
            </div>
            <input
              className="mb-4 w-full max-w-md px-4 py-2 border border-gray-300 rounded-md"
              value={formData.phone}
              onChange={handleChange}
              name="phone"
              placeholder="Phone"
            />
            <div className="flex items-center mb-8">
              <input
                id="save-info"
                type="checkbox"
                className="mr-2"
                checked={formData.saveInfo}
                onChange={handleChange}
                name="saveInfo"
              />
              <label htmlFor="save-info" className="text-sm">
                Save this information for next time
              </label>
            </div>
            <Link
              to="/cart"
              className="text-md text-black-600"
              onClick={handleUpdateCart}
            >
              ← Return to cart
            </Link>
          </div>
        </div>
    
   
  <div className="mr-4 border border-gray-400 border-1 mt-10 hidden lg:block" style={{height: 650}}></div>

  <div className="w-full md:w-1/3  mt-20">

    <div className="flex flex-col space-y-4">
    {updatedCart.map((item, index) => (
     <div key={index} className="flex gap-5 justify-between items-start text-sm max-md:flex-wrap ml-7 border border-gray-200 mb-3">
     <div className="flex gap-5 justify-between self-stretch font-semibold leading-6 text-zinc-800 mt-3 ml-5">
       <img
         loading="lazy"
         src={item.image}
         className="shrink-0 my-auto w-32 max-w-full aspect-[1.02]"
         alt={item.name}
       />
       <div className="flex flex-col">
         <div className="text-base leading-6">{item.name}</div>
         <div className="mt-1 text-neutral-500">Cloth ID: {item.id}</div>
         <div className="justify-center px-2 py-1 mt-4 text-center rounded bg-neutral-100">
           Qty: {item.quantity}
         </div>
         <div className="mt-4 text-center text-stone-900 mb-2">
           Rs. {item.price * item.quantity} {/* Calculate total price */}
         </div>
       </div>
     </div>
     <a href="#">
     <img
       onClick={()=>dispatch(removefromCart({id:item.id, color: item.color,size: item.size,image: item.image}))}
       loading="lazy"
       src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9e7625736ac4e7743e9e529ae41f9eb40f158116d150923ce43367fe708b57c?apiKey=797f5151b0a645b2aee21ee1c2971527&"
       className="shrink-0 w-3 aspect-square mr-2 mt-2" 
       alt="Cancel Order"
     />
     </a>
   </div>
       ))}
      <div className="flex flex-col space-y-4 p-4 bg-white">
        <div className="text-lg font-semibold">PRICE DETAILS({totalItems} ITEMS)</div>
        <div className="flex justify-between">
          <div>Total</div>
          <div>Rs.{totalPrice}</div>
        </div>
        <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
              <div className="text-neutral-500">Discount </div>
              <div className="text-slate-600 text-opacity-20">-Rs.0</div>
        </div>
        <div className="flex justify-between">
          <div>Coupon Discount</div>
          <div>Rs. 0</div>
        </div>
        <div className="flex justify-between">
          <div>Delivery Charge</div>
          <div className="text-green-600">Free</div>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <div>Total Amount</div>
          <div>Rs.{totalPrice}</div>
        </div>
      </div>
      <Link
  to={{
    pathname: "/Address",
    state: formData, // Pass formData as state
  }}
  className="text-md text-black-600"
  onClick={handleSaveToLocalStorage}
>
  <div className="flex justify-center items-center px-16 py-3 mt-8 text-base font-semibold leading-6 text-center text-white rounded-lg bg-zinc-800 max-md:px-5 max-md:max-w-full">
    <div className="flex gap-4">
      <div onClick={() => {
        handleSaveToLocalStorage();
        handleUpdateCart(cartItems);
      }}>Continue Shipping</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3d0673f997987ad7107e50688cf5a936cbb06c5b7d56023662ff6f9c4e12895?apiKey=797f5151b0a645b2aee21ee1c2971527&"
        className="shrink-0 w-6 aspect-square"
        alt="Continue Icon"
      />
    </div>
  </div>
</Link>

    </div>
   
  </div>
</div>
<Footer/>
</div>



  );
}


export default Shipping;