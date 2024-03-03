// src/App.js
import React from 'react';
import SignupForm from './components/Signupform';
import SigninForm from './components/Signin';
import UserProfile from './components/Userprofile';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Ways() {
    return (
        <Router>
                {/* Define routes within the Switch */}
                <Routes>
                    <Route path="/signin" element={<SigninForm/>} />
                    <Route path="/signup" element={<SignupForm/>} />
                    <Route path="/user" element={<UserProfile/>} />
                    <Route path="" element={<Home/>}/>
                </Routes>
        </Router>
    );
}

export default Ways;
