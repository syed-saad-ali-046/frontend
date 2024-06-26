import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer=()=>{
    return(
      <footer className="bg-gray-950 text-gray-50 p-6 dad md:p-10">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <div className="text-2xl font-bold">Farhang</div>
          <nav className="grid gap-2">
            <Link className="hover:underline" href="#">
              Home
            </Link>
            <Link className="hover:underline" href="#">
              Shop
            </Link>
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Categories</h3>
          <nav className="grid gap-2">
            <Link className="hover:underline" href="#">
              Clothing
            </Link>
            <Link className="hover:underline" href="#">
              Accessories
            </Link>
            <Link className="hover:underline" href="#">
              Home
            </Link>
            <Link className="hover:underline" href="#">
              Beauty
            </Link>
            <Link className="hover:underline" href="#">
              Electronics
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Customer Service</h3>
          <nav className="grid gap-2">
            <Link className="hover:underline" href="#">
              Shipping
            </Link>
            <Link className="hover:underline" href="#">
              Returns
            </Link>
            <Link className="hover:underline" href="#">
              FAQ
            </Link>
            <Link className="hover:underline" href="#">
              Support
            </Link>
            <Link className="hover:underline" href="#">
              Careers
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <Link className="hover:text-gray-300" href="#">
              <FacebookIcon className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="hover:text-gray-300" href="#">
              <TwitterIcon className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="hover:text-gray-300" href="#">
              <InstagramIcon className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link className="hover:text-gray-300" href="#">
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-400 text-center">
        © 2024 Farhang. All rights reserved.
      </div>
    </footer>
    )
}

function FacebookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
  
  function InstagramIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  
  function LinkedinIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
  
  
  function TwitterIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }
export default Footer;