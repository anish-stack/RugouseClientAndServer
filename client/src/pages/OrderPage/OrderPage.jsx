import React, { useEffect, useState } from 'react';
import { useSelector,useLocation } from 'react-redux';
import axios from 'axios';
import './orderpage.css';
import bg from './orderformbg.png'
import {useParams} from 'react-router-dom';
const OrderPage = () => {
    const state = JSON.parse(sessionStorage.getItem('cart'));
    const location = window.location;
const queryParams = new URLSearchParams(location.search);
const totalAmount = queryParams.get('totalAmount');
const cart = sessionStorage.getItem('cartFinal')
const CartItems = JSON.parse(cart)
console.log(CartItems);

    // const totalAmount = queryParams.get('totalAmount');
    const Token = sessionStorage.getItem('Token');

    if(!Token){
        window.location.href="/signin"
    }
    //   console.log("asta",states)
    const ProductsArray = state && state.map((item) => ({
       
        id: item.payload._id,

    }));
    if (!ProductsArray || ProductsArray.length === 0) {
        alert("Please add products");
      }
      if (ProductsArray === undefined) {
        alert("ProductsArray is undefined. Please add products.");
      }
    // console.log("ProductsArray", ProductsArray)

    const [formData, setFormData] = useState({
        cartItems: CartItems,
        address: {
            street: '',
            city: '',
            state: '',
            pincode: '',
            landmark: '',
        },
    });



    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            address: {
                ...prevData.address,
                [name]: value,
            },
        }));
    };
    function generateMerchantTransactionId() {
        const allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const idLength = 25;
        let transactionId = '';

        for (let i = 0; i < idLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
            transactionId += allowedCharacters.charAt(randomIndex);
        }

        return transactionId;
    }

    function MerchenatId() {
        const allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const idLength = 25;
        let MerchenatIds = '';

        for (let i = 0; i < idLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
            MerchenatIds += allowedCharacters.charAt(randomIndex);
        }

        return MerchenatIds;
    }

    const merchantTransactionId = generateMerchantTransactionId();
    const MerchenatIds = MerchenatId();



    const [PayData, setPayData] = useState({
        amount: totalAmount,
        Merchenat: MerchenatIds,
        transactionId: merchantTransactionId,
    });


    const handlePaySubmit = async () => {
        try {
            const response = await axios.post('https://www.api.rughouzz.in/api/v2/payment-create', PayData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            console.log(response);

            const redirectUrl = response.data.paydata.data.instrumentResponse.redirectInfo.url;

            if (redirectUrl) {
                window.location.href = redirectUrl;
            } else {
                alert('Something went wrong while creating the payment');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handlePaySubmit();

        console.log(formData);
        try {
            const response = await axios.post('https://www.api.rughouzz.in/api/v1/create-order', formData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            console.log('Order creation response:', response.data);


        } catch (error) {
            console.error('Order creation Error:', error);
        }
    };

    return (
        <div className='orderform-main-section'>
            <div className='orderform-container-main'>
                <div className='heading'>
                    <span>Address</span>
                </div>

                <div className='orderform-detail'>
                    <div className='orderform-detail-bg'>
                        <img src={bg} alt="" />
                    </div>
                    <div className='orderform-detail-form'>
                        <form className="order-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <input type="text" id="street" name="street" value={formData.address.street} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" name="city" value={formData.address.city} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" name="state" value={formData.address.state} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pincode">Pincode</label>
                                <input type="text" id="pincode" name="pincode" value={formData.address.pincode} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="landmark">Landmark</label>
                                <input type="text" id="landmark" name="landmark" value={formData.address.landmark} onChange={handleChange} />
                            </div>
                            <button className='pink-btn' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
