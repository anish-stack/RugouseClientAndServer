import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/Slices/AddToCartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [final, setFinal] = useState(false);
  const [error,setError]= useState(false)
  const state = useSelector(state => state.cart)
  useEffect(() => {
    // Fetch or update products here
    const ProductsList = state.map((product) => product.payload);
    setProducts(ProductsList);
    const CartItems = ProductsList.map((product) => ({
      id: product._id,
      name: product.ProductName,
      price: product.size?.adjustedPrice,
      quantity: product.quantity,
      image: product.image, // Define image as an array of strings
      sizes: product.size?.SizeNumber
      
      // Use optional chaining in case size is undefined
    }));
    setFinal(CartItems)
      sessionStorage.setItem('cartFinal',JSON.stringify(CartItems))
   
   
  }, [state]); 
  
  // Add the dependencies that trigger the effect
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

  return (
    <div className='w-full'>
      <div className='breadcrumbs'>
        <div className='w-full text-center text-pretty mt-3 bg-[#F0F0F0] min-h-40 px-5 py-5'>
          <h1 className='text-xl mt-5 mb-2 md:text-4xl'>Shopping Cart</h1>
          <span>
            Home <span><i className="ri-arrow-left-s-line"></i></span> Products{' '}
            <i className="ri-arrow-left-s-line"></i> Cart{' '}
          </span>
        </div>
      </div>
      <div className='carttable p-4 min-h-[70vh]'>
        {error ? (
          <div className="text-center mt-10">
            <p className="text-2xl font-bold mb-4 text-gray-600">Your cart is empty.</p>
            <img
              src="https://i.ibb.co/KzQW8QL/image.png"
              className="w-80 rounded-[50%] mx-auto"
              alt="Empty cart"
            />
          </div>
        ) : (
          products.map((item, index) => (
            <div className='border border-gray-300 p-4 my-4 flex flex-col md:flex-row md:items-center justify-between' key={index}>
              <div className='flex flex-col md:flex-row  md:items-center space-x-4'>
                <img src={item.image[0]} className="md:w-24 lg:w-24 lg:h-24 w-full h-[200px] object-cover md:h-24" alt='' />
                <div>
                  <p className="font-bold">{item.ProductName}</p>
                  <p className="text-gray-500">{item.size.SizeNumber}</p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center space-x-4'>
                <p className="font-bold">Quantity: {item.quantity}</p>
                <p><i className="ri-money-rupee-circle-fill"></i>{item.size.adjustedPrice
}</p>
              </div>
              <button
            onClick={() => handleRemove(item._id, index)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Remove
        </button>
            </div>
            
          ))
          
        )}
     {products.length > 0 && (
  <div className='max-w-5xl mx-auto total'>
    <div className="price w-full text-right">
      <p className='text-xl mb-5 md:text-2xl'><b>Total</b> : <i className="ri-money-rupee-circle-fill"></i> {calculateTotal()}</p>
      <Link to={{
        pathname: "/Payment",
        search: `?totalAmount=${totalAmount}`,
      }}
        className="bg-red-500 mt-20 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Pay
      </Link>
    </div>
  </div>
)}

      </div>
    </div>


  );
};

export default Cart;
