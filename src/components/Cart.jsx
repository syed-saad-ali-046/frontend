import React, { useEffect } from "react";
import Navbar from "../parts/Navbars";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useSelector,useDispatch  } from "react-redux";
import { removefromCart,calculateTotal,updateCart } from "../Redux-States/Cartslice";
import BNavbar from "../parts/Billing Nav";
import Footer from "../parts/Footer";

const Cart = () => {
  const dispatch=useDispatch();
  const cartItems = useSelector(state => state.cart.cart);
  const updatedCart = useSelector((state) => state.cart.cart);
  const totalItems = updatedCart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = useSelector((state) => state.cart.total); // Get the total price from the state

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, updatedCart]);
  
  const handleUpdateCart = (updatedCart) => {
    dispatch(updateCart(updatedCart));
};

  console.log(totalPrice)
  return (
    <div>
      <Navbar />
      <BNavbar/>
      <h1 className="font-normal font-serif leading-relaxed text-center text-4xl mt-6"> Cart</h1>

      <div className="stan mt-5 flex gap-2 max-md:flex-col mb-20 max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-4 self-start font-semibold ml-2">
              <Link
               to={{
                pathname: "/",
               }}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/96bc2b7fe121208547dc87d3d0a587c3e3cf6cd706b59930fc51f95ddadda66b?apiKey=797f5151b0a645b2aee21ee1c2971527&"
                className="shrink-0 my-auto w-6 aspect-square "
              />
              </Link>
              <div className="flex flex-auto gap-4 items-center px-5">
                <div className="self-stretch text-2xl leading-8 text-center text-zinc-800">
                  ORDER SUMMARY
                </div>
                <div className="shrink-0 self-stretch my-auto w-2 h-2 rounded-full bg-stone-900" />
                <div className="self-stretch my-auto text-base leading-6 text-stone-900">
                  Items in Bucket: {totalItems}
                </div>
              </div>
            </div>

            <div className="flex flex-col pl-10 mt-11 max-md:pl-5 max-md:max-w-full  ">
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
          </div>
        </div>

        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch px-5 my-auto text-sm leading-6 max-md:mt-10 max-md:max-w-full">
            <div className="text-base font-semibold leading-6 text-zinc-800 max-md:max-w-full">
              PRICE DETAILS ({totalItems} ITEMS)
            </div>
            <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
              <div className="text-neutral-500">Total </div>
              <div className="text-zinc-800">Rs.{totalPrice}</div>
            </div>
            <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
              <div className="text-neutral-500">Discount </div>
              <div className="text-slate-600 text-opacity-20">-Rs.0</div>
            </div>
            <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
              <div className="text-neutral-500">Coupon Discount</div>
              <div className="text-zinc-800">Rs. 0</div>
            </div>
            <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
              <div className="text-neutral-500">Delivery Charge</div>
              <div className="text-slate-600 text-opacity-20">Free</div>
            </div>
            <div className="shrink-0 mt-6 h-px border border-solid bg-neutral-300 border-neutral-300 max-md:max-w-full" />
            <div className="flex gap-5 justify-between mt-6 text-base font-semibold leading-6 max-md:flex-wrap max-md:max-w-full">
              <div className="text-neutral-500">Total Amount</div>
              <div className="text-stone-900">Rs.{totalPrice}</div>
            </div>
            <Link
            to={{
              pathname: "/Shipping-Info",     
            }}
            >
            <div onClick={() => handleUpdateCart(cartItems)} className="flex justify-center items-center px-16 py-3 mt-8 text-base font-semibold leading-6 text-center text-white rounded-lg bg-zinc-800 max-md:px-5 max-md:max-w-full">
              <div>Place Order</div>
              <div className="flex gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3d0673f997987ad7107e50688cf5a936cbb06c5b7d56023662ff6f9c4e12895?apiKey=797f5151b0a645b2aee21ee1c2971527&"
                  className="shrink-0 w-6 aspect-square"
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
};

export default Cart;
