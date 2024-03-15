import React from 'react'
import "./OrderConfirm.css"

const OrderConfirm = () => {
    return (
        <>
            {/* <section class="order-confirm my-5">
                <div class="container">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="col-span-1 md:col-span-1">
                            <h3 class="text-xl font-bold mb-4">Your Trusted SEXTOY Store</h3>
                            <div class="flex items-center mb-4">
                                <div class="icon mr-2">
                                    <i class="far fa-circle-check"></i>
                                </div>
                                <div class="content">
                                    <p>Order #78994HF</p>
                                    <strong>Thank You Tanishq</strong>
                                </div>
                            </div>

                            <div class="border border-gray-300 rounded p-4 mb-4">
                                <h4 class="text-lg font-semibold mb-2">Your Order is Confirmed</h4>
                                <p class="text-gray-700">You'll receive a confirmation email with your order number shortly.</p>
                            </div>
                            <div class="border border-gray-300 rounded p-4">
                                <h4 class="text-lg font-semibold mb-2">Customer Information</h4>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <div class="font-semibold">Contact Information</div>
                                        <p>customer@example.com</p>
                                    </div>
                                    <div>
                                        <div class="font-semibold">Payment method</div>
                                        <p>COD</p>
                                    </div>
                                    <div>
                                        <div class="font-semibold">Shipping address</div>
                                        <p>Customer Name</p>
                                        <p>Address Rohini -21, New Delhi</p>
                                        <p>Delhi, India</p>
                                    </div>
                                    <div>
                                        <div class="font-semibold">Billing address</div>
                                        <p>Customer Name</p>
                                        <p>Address Rohini -21, New Delhi</p>
                                        <p>Delhi, India</p>
                                    </div>
                                    <div>
                                        <div class="font-semibold">Shipping method</div>
                                        <p>First Class Package</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-1 md:col-span-1">
                            <div class="border border-gray-300 rounded p-4">
                                <div class="font-semibold mb-2">Cart Subtotal</div>
                                <ul>
                                    <li class="flex justify-between mb-1"><span>Sub-Total:</span>₹1161.00</li>
                                    <li class="flex justify-between mb-1"><span>Tax (-4.00):</span>₹11.00</li>
                                    <li class="flex justify-between mb-1"><span>Shipping Cost:</span>₹00.00</li>
                                    <li class="flex justify-between"><span>TOTAL:</span>₹1172.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section class="order-confirm my-5">
                <div class="container">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="col-span-1 md:col-span-1">
                            <h3 class="text-xl font-bold mb-4">Your Trusted SEXTOY Store</h3>
                            <div class="flex items-center mb-4">
                                <div class="icon mr-2">
                                    <i class="far fa-circle-check text-yellow-500 text-2xl"></i>
                                </div>
                                <div class="content text-lg">
                                    <p>Order #78994HF</p>
                                    <strong>Thank You Tanishq</strong>
                                </div>
                            </div>

                            <div class="bordered-box p-4 mb-4">
                                <h4 class="text-lg font-semibold mb-2">Your Order is Confirmed</h4>
                                <p class="text">You'll receive a confirmation email with your order number shortly.</p>
                            </div>
                            <div class="bordered-box p-4">
                                <h4 class="text-lg font-semibold mb-2">Customer Information</h4>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <div class="strong font-semibold">Contact Information</div>
                                        <p>customer@example.com</p>
                                    </div>
                                    <div>
                                        <div class="strong font-semibold">Payment method</div>
                                        <p>COD</p>
                                    </div>
                                    <div>
                                        <div class="strong font-semibold">Shipping address</div>
                                        <p>Customer Name</p>
                                        <p>Address Rohini -21, New Delhi</p>
                                        <p>Delhi, India</p>
                                    </div>
                                    <div>
                                        <div class="strong font-semibold">Billing address</div>
                                        <p>Customer Name</p>
                                        <p>Address Rohini -21, New Delhi</p>
                                        <p>Delhi, India</p>
                                    </div>
                                    <div>
                                        <div class="strong font-semibold">Shipping method</div>
                                        <p>First Class Package</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-1 md:col-span-1">
                            <div class="bordered-box p-4">
                                <div class="font-semibold mb-2">Cart Subtotal</div>
                                <ul>
                                    <li class="flex justify-between mb-1"><span>Sub-Total:</span>₹1161.00</li>
                                    <li class="flex justify-between mb-1"><span>Tax (-4.00):</span>₹11.00</li>
                                    <li class="flex justify-between mb-1"><span>Shipping Cost:</span>₹00.00</li>
                                    <li class="flex justify-between"><span>TOTAL:</span>₹1172.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OrderConfirm