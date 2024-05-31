import { Link, useLocation } from 'react-router-dom';
import "./Billing Nav.css";

function BNavbar() {
  const location = useLocation();

  return (
    <div className="text-center py-8 bnav">
      <div className="text-3xl font-bold heading">Check Out!</div>
      <div className="size flex flex-wrap justify-center space-x-4 mt-5">
        <Link
          to="/cart"
          className={`flex items-center font-semibold ${location.pathname === '/cart' ? 'text-black' : 'text-gray-500'}`}
        >
          Cart
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Link>
        <Link
          to="/information"
          className={`flex items-center font-semibold ${location.pathname === '/information' ? 'text-black' : 'text-gray-500'}`}
        >
          Information
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Link>
        <Link
          to="/shipping"
          className={`flex items-center font-semibold ${location.pathname === '/shipping' ? 'text-black' : 'text-gray-500'}`}
        >
          Shipping
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Link>
        <Link
          to="/payment"
          className={`flex items-center font-semibold ${location.pathname === '/payment' ? 'text-black' : 'text-gray-500'}`}
        >
          Confirmation
        </Link>
      </div>
    </div>
  );
}

export default BNavbar;
