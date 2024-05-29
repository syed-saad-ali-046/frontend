// src/App.js
import React from 'react';
import SignupForm from './components/Signupform';
import SigninForm from './components/Signin';
import UserProfile from './components/Userprofile';
import Cart from './components/Cart';
import Home from './components/Home';
import Mcollection from './components/MaleCollection';
import productsData from './Data/Male Collection Data';
import ProductPage from './components/ProductPage';
import Toggle from './parts/Tooglecart';
import Shipping from './components/Shipping';
import AddressInfo from './components/Address';
import Payment from './components/Payment';
import AdminOrderList from './Admin/Order';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Ways() {
    return (
        <Router>
                {/* Define routes within the Switch */}
                <Routes>
                    <Route path="/signin" element={<SigninForm/>} />
                    <Route path="/signup" element={<SignupForm/>} />
                    <Route path="/user" element={<UserProfile/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path=""  element={<Home/>}/>
                    <Route path="/male-collection" element={<Mcollection productsData={productsData}/>} />
                    <Route path="/products/:id" element={<ProductPage products={productsData} />} />
                    <Route path="tcart" element={<Toggle/>}/>
                    <Route path="/Shipping-Info" element={<Shipping/>}/>
                    <Route path="/Address" element={<AddressInfo/>}/>
                    <Route path="/getorder" element={<AdminOrderList/>}/>
                    <Route path="/order-confirmation" element={<Payment/>}/>

                </Routes>
        </Router>
    );
}

export default Ways;
