import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/outline';
import logo2 from "../assets/logo2.png";

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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                    </svg>
                    1-800-123-1234
                  </div>
                </div>
              </div>
              <div class="hidden lg:block">
                <div class="flex">
                  <div class="flex items-center mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                    <a href="#" class="font-semibold underline">Shipping</a>
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>
                    <a href="#" class="font-semibold underline">Policy</a>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
        <div class="flex lg:hidden justify-end">
      <div class="block">
        <button onClick={toggleMenu} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        </button>
      </div>
    </div>
        
        <div class="bg-white border">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div class="container flex flex-wrap items-center justify-center mx-auto">
      <div class="flex flex-col items-center justify-center w-full lg:w-auto">
        <img src={logo2} alt="Logo" class="object-contain h-30" style={{ height: "138px" }} />
        <ul class="flex uppercase gap-10 mr-5">
          <li class="p-2 py-3 font-bold ">
            <a href="#">Offers</a>
            </li>
          <li class="p-2 py-3 font-bold  text-slate-600 hover:text-black"><a href="#">Products</a></li>
          <li class="p-2 py-3 font-bold  text-slate-600 hover:text-black"><a href="#">Catalog</a></li>
          <li class="hidden lg:flex p-2 py-3 font-bold text-slate-600 hover:text-black"><a href="#">Cart</a></li>
          <li class="hidden lg:flex p-2 py-3 font-bold  text-slate-600 hover:text-black"><a href="/signup">Account</a></li>
        </ul>
      </div>
    </div>
    
  </div>
</div>
<div class={`block lg:hidden ${menuHidden ? 'hidden' : ''}`}>
  <ul class="text-center">
    <li class="py-3 font-bold text-slate-600"><a href="#">Cart</a></li>
    <li class="py-3 font-bold text-slate-600"><a href="/signup">Account</a></li>
  </ul>
</div>

      </nav>
    </div>
  );
};

export default Navbar;
