import './topcart.css'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/Slices/AddToCartSlice';
import { Link } from 'react-router-dom';

const TopCart = ({ showCart }) => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const state = useSelector(state => state.cart)
    useEffect(() => {
        // Fetch or update products here
        const ProductsList = state.map((product) => product.payload);
        setProducts(ProductsList);
        const CartItems = ProductsList.map((product) => ({
            id: product._id,
            name: product.ProductName,
            price: product.discountPrice,
            quantity: product.quantity,
            image: product.image, // Define image as an array of strings
            sizes: product.size?.adjustedPrice
            // Use optional chaining in case size is undefined
        }));
        sessionStorage.setItem('cartFinal', JSON.stringify(CartItems))

        if (ProductsList.length === 0) {
            setError(true);
        }
    }, [state]); // Add the dependencies that trigger the effect
    const handleRemove = (id, index) => {
        dispatch(remove({ id, index }));
    };
    const calculateTotal = () => {
        return products.reduce((total, item) => {
            return total + item.quantity * item.size.adjustedPrice
            ;
        }, 0);
    };
    const totalAmount = calculateTotal();

    const handleViewCart = () => {
        window.location.href = "/cart"
    };


    return (
        <div className={`top-cart p-2 ${showCart ? ' showcart' : ''}`}>
            <div className='small-cart'>
                <div className='cart-headeing'>
                    <h3>Your Cart</h3>
                </div>
                <div className='cart-items'>

                    {products.length === 0 ? (
                        <div className="cart-message">
                            <img src="https://i.ibb.co/sVz1rFC/image.png" alt="No Products" />
                            <p>No products in the cart. Start shopping now!</p>
                        </div>
                    ) : products.length >= 5 ? (
                        <div className="cart-message">
                            <p>Please visit the cart page and do not add more products.</p>
                        </div>
                    ) : (
                        products.map((item, index) => (
                            <div key={index} className='items mb-2'>
                                <div className='item-img'>
                                    <img src={item.image[0]} alt="" />
                                </div>
                                <div className='prices'>
                                    <span>{item.size.adjustedPrice
}</span>
                                </div>
                                <div className='increase-dcrease-counter'>
                                    <div className='counters'>
                                        {/* <div className='increase'>
                        <button>+</button>
                    </div> */}
                                        <div className='screen'>
                                            <span>{item.quantity}</span>
                                        </div>
                                        {/* <div className='Dcrease'>
                        <button>-</button>
                    </div> */}
                                    </div>
                                </div>

                                <div onClick={() => handleRemove(item._id, index)} className="removebtn">
                                    <span><i className="ri-delete-bin-line"></i></span>
                                </div>
                            </div>
                        ))
                    )}


                </div>
                <p className='text-xl md:text-xl'><b>Total</b> : <i className="ri-money-rupee-circle-fill"></i> {calculateTotal()}</p>

            </div>

            <div className='CheckOut'>
                <Link to={{
                    pathname: "/Payment",
                    search: `?totalAmount=${totalAmount}`,
                }}
                    className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Checkout
                </Link>
                <Link onClick={handleViewCart}>View-Cart</Link>
            </div>
        </div>
    )
}

export default TopCart