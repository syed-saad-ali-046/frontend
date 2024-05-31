import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removefromCart, updateCart } from "../Redux-States/Cartslice";
import { Link } from "react-router-dom";
import "./Tooglecart.css"

const Toggle = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cart);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [prevCartItemsCount, setPrevCartItemsCount] = useState(cartItems.length);

    useEffect(() => {
        if (cartItems.length > prevCartItemsCount) {
            setIsDrawerOpen(true);
        }
        setPrevCartItemsCount(cartItems.length);
    }, [cartItems]);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleUpdateQuantity = (index, quantity) => {
        dispatch(updateQuantity({ index, quantity }));
    };

    const handleUpdateCart = (updatedCart) => {
        dispatch(updateCart(updatedCart));
    };

    return (
        <div>
            {isDrawerOpen && (
                <div className="fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-30" onClick={toggleDrawer} />
            )}
            <div className="flex items-center font-semibold" onClick={toggleDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <a href="#" className="font-semibold hover:font-bold">Cart<sup className="text-sm bold text-black-500 ml-1 ">{cartItems.length}</sup></a>
            </div>

            {isDrawerOpen && (
                <div className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-0 bg-white w-80 dark:bg-gray-800" tabIndex="-1">
                    <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        Your Shopping Cart!
                    </h5>
                    <button type="button" onClick={toggleDrawer} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    {cartItems.map((item, index) => (
                        <div key={index} className="w-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
                            <button className="absolute right-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none" onClick={() => dispatch(removefromCart({ id: item.id, color: item.color, size: item.size, image: item.image }))}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                                </svg>
                            </button>
                            <h4 className="absolute left-5 mx-2 font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h4>
                            <img className="rounded-t-md px-10" src={item.image} alt="product image" />
                            <div className="px-3 mb-10">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleUpdateQuantity(index, (item.quantity || 0) + 1)}>+</button>
                                        <span className="mx-2 font-semibold tracking-tight text-gray-900 dark:text-white">{item.quantity || 0}</span>
                                        <button className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={() => handleUpdateQuantity(index, (item.quantity || 0) - 1)} disabled={item.quantity <= 1}>-</button>
                                    </div>
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs:{(item.price || 0) * (item.quantity || 0)}</span>
                                </div>
                                <div className="flex">
                                    <p className="absolute left-6 mx-2 mt-2 font-semibold tracking-tight text-gray-900 dark:text-white">Size: {item.size}</p>
                                    <p className="absolute right-6 mx-2 mt-2 font-semibold tracking-tight text-gray-900 dark:text-white">Colour: {item.color}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {cartItems.length > 0 && (
                        <Link
                            to={{
                                pathname: "/cart",
                            }}
                        >
                            <button onClick={() => handleUpdateCart(cartItems)} className="bg-black text-white flex items-center justify-center px-4 py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition-colors mx-auto">Proceed To Checkout
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-4 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default Toggle;
