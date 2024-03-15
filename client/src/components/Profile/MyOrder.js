import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    const token = sessionStorage.getItem('Token');
    const [orders, setOrders] = useState([]);

    const fetchUserDetails = async () => {
        try {
            const res = await axios.get('https://www.api.rughouzz.in/api/v1/my-order', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setOrders(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserDetails();
    }, [token]);

    return (
        <div className="max-w-screen-xl overflow-scroll mx-auto p-8">
            <h2 className="text-3xl font-bold mb-4">My Orders</h2>

            {orders.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center">
                    <img
                        src="https://i.ibb.co/xjF2ngL/image.png"
                        alt="No Orders"
                        className="w-48 h-48 mb-4"
                    />
                    <p className="text-lg font-semibold mb-4">
                        No orders found. Order now and shop!
                    </p>
                    <Link to="/Shop" className="bg-blue-500 text-white py-2 px-4 rounded">
                        Shop Now
                    </Link>
                </div>
            ) : (
                <table className="table-auto w-full border border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">S.No</th>
                            <th className="border p-2">Product Information</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2">
                                    {order.product.map((product) => (
                                        <div key={product._id} className="flex items-center space-x-2">
                                            <img
                                                src={product.image[0]}
                                                onError={(e) => {
                                                    e.target.src = "https://i.ibb.co/bdQrjwT/image.png";
                                                    e.target.onError = null; // To prevent infinite loop
                                                }}
                                                alt="Product"
                                                className="w-10 h-10 object-cover rounded"
                                            />
                                            <div>
                                                <div className="font-semibold">{product.name}</div>
                                                <div>Quantity: {product.quantity}</div>
                                            </div>
                                        </div>
                                    ))}
                                </td>
                                <td className="border p-2">{order.orderStatus}</td>
                                <td className="border p-2">{new Date(order.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyOrder;
