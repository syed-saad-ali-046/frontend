import React, { useState } from 'react';

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!menuHidden);
  };

  return (
  <div>
        <nav>
        <div class="p-2 border border-slate-400 bg-slate-100">
            <div class="container mx-auto">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <select class="outline-0 bg-slate-100" name="lang" id="lang">
                            <option value="EN-US">EN-US</option>
                        </select>
                        <div class="font-semibold mx-7"><a href="#">info@somedomain.com</a></div>
                        <div class="hidden md:block">
                            <div class="flex items-center ">
                                <img class="w-4 h-4 mr-2" src="/static_files/svgs/phone-yellow.svg" alt="phone"/>
                                1-800-123-1234
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block">
                        <div class="flex">
                            <div class="flex items-center mr-6">
                                <img class="w-4 h-4 mr-2" src="/static_files/svgs/truck-solid.svg" alt="truck"/>
                                <a href="#" class="font-semibold underline">Shipping</a>
                            </div>
                            <div class="flex items-center">
                                <img class="w-4 h-4 mr-2" src="/static_files/svgs/file-lines-solid.svg" alt="file"/>
                                <a href="#" class="font-semibold underline">Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="bg-white border">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <div class="flex items-center uppercase bg-center">
                        <img class="w-5 h-5 mr-3" src="/static_files/svgs/house-chimney-solid.svg" alt="home"/>
                        <strong class="text-lg">Gear shop</strong>
                    </div>

                    <div class="flex flex-wrap items-center md:gap-4 ">
                        <div class="flex items-center my-3 border border-yellow-400 rounded-lg ">
                            <button type="button" class="p-3 bg-yellow-400 rounded-l-lg hover:bg-yellow-500">
                                <img class="w-5 h-4" src="/static_files/svgs/magnifying-glass-white.svg" alt="search"/>
                            </button>
                            <input type="text" class="w-40 px-3 py-2 outline-none md:w-60"/>
                            <button
                                class="px-4 py-2 text-white bg-yellow-400 rounded-r-lg hover:bg-yellow-500">Search</button>
                        </div>
                        <div>
                            <img id="menu-button" class="w-6 h-6 m-2 lg:hidden" src="/static_files/svgs/bars-black.svg"
                                alt="menu-icon"/>
                        </div>
                    </div>
                    <div class="hidden lg:block" id="menu">
                        <div class="gap-10 lg:flex ">

                            <ul class="gap-10 mr-5 uppercase lg:flex">
                                <li class="p-2 py-3 font-bold "><a href="#">Offers</a></li>
                                <li class="p-2 py-3 font-medium text-slate-600 hover:text-black"><a
                                        href="#">Products</a>
                                </li>
                                <li class="p-2 py-3 font-medium text-slate-600 hover:text-black"><a href="#">catalog</a>
                                </li>
                                <li class="p-2 py-3 font-medium text-slate-600 hover:text-black"><a
                                        href="#">services</a>
                                </li>
                                <li class="p-2 py-3 font-medium text-slate-600 hover:text-black"><a href="#">about</a>
                                </li>
                            </ul>
                            <div class="lg:flex">
                                <div class="flex items-center w-screen p-2 py-3 mr-6 lg:w-auto ">
                                    <img class="w-5 h-5 mr-2" src="/static_files/svgs/cart-shopping-solid.svg" alt="cart"/>
                                    <a href="#" class="font-semibold underline">cart</a>
                                </div>
                                <div class="flex items-center p-2 py-3">
                                    <img class="w-5 h-5 mr-2" src="/static_files/svgs/circle-user-solid.svg" alt="account"/>
                                    <a href="#" class="font-semibold underline">account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  </div>

    );
};

export default Navbar;