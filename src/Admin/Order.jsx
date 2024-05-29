import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNav from '../Admin Component/NavAdmin';

function AdminOrderList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/getOrder');
            setOrders(response.data.orders);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <AdminNav/>
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Pending Orders</h1>
            <div className="relative overflow-x-auto  border-gray-400 shadow-lg shadow-gray-400 sm:rounded-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="p-4 text-center font-normal font-serif font-semibold text-1xl">
                                Images
                            </th>
                            <th scope="col" className="px-6 py-3 text-center font-normal font-serif font-semibold text-1xl">
                                Product ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-center font-normal font-serif font-semibold text-1xl">
                                Product Info
                            </th>
                            <th scope="col" className="px-6 py-3 text-center font-normal font-serif font-semibold text-1xl ">
                                Customer Info
                            </th>
                            <th scope="col" className="px-6 py-3 text-center font-normal font-serif font-semiboldtext-1xl">
                                Price-Per Piece
                            </th>
                            <th scope="col" className="px-6 py-3 text-center font-normal font-serif font-semibold text-1xl ">
                                Total Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-center font-normal font-semibold font-serif text-1xl">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            order.products.map((product, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                    <td class="p-4">
                                        <img src={product.image} class="border-dotted border-2 sm:rounded-md w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>
                                    </td>
                                    <td className="font-sans px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                                    {order._id}
                                    </td>
                                    <td className="font-sans px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div>
                                            <p className="font-semibold">{product.name}</p>
                                            <div className="text-sm text-gray-500">
                                                <p>Color: {product.color}</p>
                                                <p>Quantity: {product.quantity}</p>
                                                <p>ID: {product.id}</p>
                                                {/* Add more product info as needed */}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-sans px-6 py-4 bg-gray-50">
                                    <div>
                                            <p className="font-semibold">Name:{order.firstName} {order.lastName}</p>
                                            <div className="text-sm text-gray-500">
                                                <p>Address: {order.address}</p>
                                                <p>Number: {order.phoneNumber}</p>
                                                <p>Appartment:{order.apartment}</p>
                                                {/* Add more product info as needed */}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-sans px-6 py-4  text-center">
                                     ${product.price}
                                    </td>
                                    <td className="font-sans px-6 py-4 bg-gray-50">
                                        ${order.totalPrice}
                                    </td>
                                    <td className="font-sans px-6 py-4">
                                        <a href="#" className="flex font-medium text-sm text-black dark:text-black hover:underline">Shipped?</a>
                                    </td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default AdminOrderList;
