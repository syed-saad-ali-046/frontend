import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Navbar from "../parts/Navbars";
import Footer from "../parts/Footer";
import "./Address.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { calculateTotal, updateCart, removefromCart } from "../Redux-States/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import BNavbar from "../parts/Billing Nav";
import CardPaymentModal from "../parts/CardPayment";


function AddressInfo() {
  const history =  useNavigate();
  const [showCardForm, setShowCardForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
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

  const [editMode, setEditMode] = useState(false); // State to track edit mode
 
  useEffect(() => {
    const savedShippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
    if (savedShippingInfo) {
      setShippingInfo(savedShippingInfo);
    }
  }, []);

  const handleContinuecard = () => {
    if (paymentMethod === "card_payment") {
      setShowCardForm(true);
    } else {
      // Handle cash on delivery
      alert("Your order has been confirmed!");
    }
  };

  const handleRemoveFromLocalStorage = () => {
    localStorage.removeItem("shippingInfo");
    setShippingInfo({
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
  };
  const location = useLocation();

  useEffect(() => {
    const savedShippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
    if (savedShippingInfo) {
      setShippingInfo(savedShippingInfo);
    } else if (location.state) { // Check if data passed from previous page
      setShippingInfo(location.state);
    }
  }, [location.state]);

  const handleEdit = () => {
    setEditMode(true); // Activate edit mode
  };

  const handleSave = () => {
    localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));
    setEditMode(false); // Deactivate edit mode
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevShippingInfo) => ({
      ...prevShippingInfo,
      [name]: value,
    }));
  };

  const handleContinueShipping = async () => {
    alert("Backend Not Connected So You Can Not Move Further."); // Temporary alert
    try {
      const products = updatedCart.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
        color:item.color
      }));

      const dataToSend = {
        ...shippingInfo,
        products: products,
        totalPrice: totalPrice, // Assuming you have totalPrice defined somewhere
      };
      console.log("Response from backend:", shippingInfo);
      await axios.post("http://localhost:8000/api/order", dataToSend);

      // Handle payment method
      if (paymentMethod === "card_payment") {
        setShowCardForm(true); // Show card form
      } else {
         // Cash on delivery
         history('/order-confirmation');
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

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
    <div>
      <Navbar />
      <BNavbar/>
      <div className="flex flex-col md:flex-row mb-20 md:space-x-8 justify-center">
      <div className="flex  items-center  min-h-screen ">
      <div className="w-full mb-10 mr-20 md:w-3/3">
        <div className="bg-gray-50 p-4 rounded-lg border-gray-300 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-sm text-gray-600">Email:</p>
                {editMode ? (
                  <input
                    type="text"
                    name="email"
                    value={shippingInfo.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
                  />
                ) : (
                  <p>{shippingInfo.email}</p>
                )}
              </div>
              <div className="flex">
                {editMode ? (
                  <button onClick={handleSave} className="text-gray-500  text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mr-3 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
                </button>
                ) : (
                  <Link to="#" onClick={handleEdit} className="text-gray-500 mr-2 text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </Link>
                )}
                <button onClick={handleRemoveFromLocalStorage} className="text-gray-500 mr-2 text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  </button>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-2">
              <p className="text-sm text-gray-600">Country:</p>
              {editMode ? (
                <select
                  name="country"
                  value={shippingInfo.country}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
                >
                  <option value="Pakistan">Pakistan</option>
                  {/* Add other countries if needed */}
                </select>
              ) : (
                <p>{shippingInfo.country}</p>
              )}
            </div>
            <div className="border-t border-gray-300 pt-2">
              <p className="text-sm text-gray-600">First Name:</p>
              {editMode ? (
                <input
                  type="text"
                  name="firstName"
                  value={shippingInfo.firstName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
                />
              ) : (
                <p>{shippingInfo.firstName}</p>
              )}
            </div>
            <div className="border-t border-gray-300 pt-2">
              <p className="text-sm text-gray-600">Last Name:</p>
              {editMode ? (
                <input
                  type="text"
                  name="lastName"
                  value={shippingInfo.lastName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
                />
              ) : (
                <p>{shippingInfo.lastName}</p>
              )}
            </div>
            <div className="border-t border-gray-300 pt-2">
              <p className="text-sm text-gray-600">Address:</p>
              {editMode ? (
                <input
                  type="text"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
                />
              ) : (
                <p>{shippingInfo.address}</p>
              )}
            </div>
            <div className="border-t border-gray-300 pt-2">
              <p className="text-sm text-gray-600">Apartment, suite, etc. (optional):</p>
              {editMode ? (
                <input
                  type="text"
                  name="apartment"
                  value={shippingInfo.apartment}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
                />
              ) : (
                <p>{shippingInfo.apartment}</p>
              )}
            </div>
            <div className="border-t border-gray-300 pt-2">
              <p className="text-sm text-gray-600">City:</p>
              {editMode ? (
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
                />
              ) : (
                <p>{shippingInfo.city}</p>
              )}
            </div>
            <div className="border-t border-gray-300 pt-2">
              <p className="text-sm text-gray-600">Postal Code:</p>
              {editMode ? (
                <input
                  type="text"
                  name="postalCode"
                  value={shippingInfo.postalCode}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
                />
              ) : (
                <p>{shippingInfo.postalCode}</p>
              )}
            </div>
            <div className="border-t border-gray-300 pt-2">
              <p className="text-sm text-gray-600">Phone:</p>
              {editMode ? (
                <input
                  type="text"
                  name="phone"
                  value={shippingInfo.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
                />
              ) : (
                <p>{shippingInfo.phone}</p>
              )}
            </div>
            <div className="border-t border-gray-300 pt-2">
              <div className="flex items-center">
                <input
                  id="save-info"
                  type="checkbox"
                  name="saveInfo"
                  checked={shippingInfo.saveInfo}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="save-info" className="text-sm">
                  Save this information for next time
                </label>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="mr-4 border border-gray-400 border-1 mt-10 hidden lg:block" style={{height: 650}}></div>

  <div className="w-full md:w-1/3  mt-20">

    <div className="flex flex-col space-y-4">
      <div className="flex flex-col pl-10  max-md:pl-5 max-md:max-w-full  ">
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
            </div>
    
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

      <div className="border-t border-gray-300 pt-4 mb-5">
        <p className="text-lg font-semibold">Payment Method</p>
        <div className="flex">
          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="cash_on_delivery"
              name="paymentMethod"
              value="cash_on_delivery"
              checked={paymentMethod === "cash_on_delivery"}
              onChange={() => setPaymentMethod("cash_on_delivery")}
              className="mr-2"
            />
            <label htmlFor="cash_on_delivery">Cash on Delivery</label>
          </div>
          <div className="flex items-center mt-2 ml-20">
            <input
              type="radio"
              id="card_payment"
              name="paymentMethod"
              value="card_payment"
              checked={paymentMethod === "card_payment"}
              onChange={() => setPaymentMethod("card_payment")}
              className="mr-2"
            />
            <label htmlFor="card_payment">Card Payment</label>
          </div>
        </div>
      </div>

{/* Card Form */}
      <CardPaymentModal isOpen={showCardForm} onClose={() => setShowCardForm(false)} />
      <div onClick={handleContinueShipping} className="flex justify-center items-center px-16 py-3 mt-20 text-base font-semibold leading-6 text-center text-white rounded-lg bg-zinc-800 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4">
            
                <div >Continue Shipping</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3d0673f997987ad7107e50688cf5a936cbb06c5b7d56023662ff6f9c4e12895?apiKey=797f5151b0a645b2aee21ee1c2971527&"
                  className="shrink-0 w-6 aspect-square"
                />
                
              </div>
        </div>
        
    </div>
   
  </div>
  </div>
      <Footer />

    </div>
  );
}

export default AddressInfo;
