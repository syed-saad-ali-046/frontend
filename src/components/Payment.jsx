import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "../parts/Navbars";
import BNavbar from "../parts/Billing Nav";
import Footer from "../parts/Footer";
import Order from "../assets/Order.png";

function Payment() {
  const [userOrders, setUserOrders] = useState([]);
  const userEmail = localStorage.getItem('userEmail');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/getOrder');
      const userOrders = response.data.orders.filter(order => order.email === userEmail);
      setUserOrders(userOrders);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar/>
      <BNavbar/>
      <div className="flex justify-center mt-5 mb-20">
        <img className="h-auto max-w-sm rounded-lg " src={Order} alt="image description"/>
        {userOrders.map((order) => (
          <p key={order._id}>{order._id}</p>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Payment;
