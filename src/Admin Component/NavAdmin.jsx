import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <header className="flex flex-col items-center justify-center w-full border-b bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-950">
      <Link href="#" className="flex items-center mb-5 gap-2 transition-colors hover:text-gray-900 dark:hover:text-gray-50">
        <MountainIcon className="h-6 w-6" />
        <span className="font-semibold text-xl ">Farhang Admin Pannel</span>
      </Link>
      <nav className="flex items-center gap-6 mt-4">
        <Link href="#" className="text-sm font-medium transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Dashboard</Link>
        <Link href="#" className="text-sm font-medium transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Products</Link>
        <Link href="#" className="text-sm font-medium transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Orders</Link>
        <Link href="#" className="text-sm font-medium transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Customers</Link>
        <Link href="#" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50">Settings</Link>
      </nav>
      
    </header>
  );
}

function MountainIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" viewBox="0 0 24 24">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
