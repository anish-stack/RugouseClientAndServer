import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './single.css';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/Slices/AddToCartSlice';
import toast from 'react-hot-toast';
import ProductsCard from '../../pages/Products/Products';

const SingleProducts = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [id]);

    const [quantity, setQuantity] = useState(1);
    const [Products, setProducts] = useState(null);
    const dispatch = useDispatch();
    const [mainImage, setMainImage] = useState(null);
    const [activeSize, setActiveSize] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.post(`https://www.api.rughouzz.in/api/v1/single-product/${id}`);
            console.log(response.data.data);
            setProducts(response.data.data);

            setMainImage(response.data.data.image[0]);
            if (response.data.data.sizes && response.data.data.sizes.length > 0) {
                setActiveSize(response.data.data.sizes[0]);
            }
            setQuantity(1);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const handleSmallImageClick = (newImage) => {
        setMainImage(newImage);
    };

    const handleSizeClick = (size) => {
        setActiveSize(size);
    };

    const handleAddToCart = (product) => {
        if (activeSize === null || quantity <= 0) {
            toast.error('Select Size and Quantity is Greater Than Zero');
        } else {
            dispatch(add({ payload: { ...product, size: activeSize, quantity } }));
        }
    };

    return (
        <div className='w-full'>
            <div className='breadcrumbs'>
                <div className='w-full text-center text-pretty mt-3 bg-[#F0F0F0] min-h-40 px-5 py-5'>
                    <h1 className='text-xl mt-5 md:text-4xl'>Products</h1>
                    <span>
                        Home <span><i className='ri-arrow-left-s-line'></i></span> Products{' '}
                        <i className='ri-arrow-left-s-line'></i> {Products?.ProductName || 'N.A'}
                    </span>
                </div>
            </div>

            <div className='container flex md:flex-row xl:flex-row flex-col items-start gap-2 justify-start mx-auto min-h-[70vh] w-full p-5 '>
                <div className='Product-conatiner'>
                    <div className='small-images-conatiner'>
                        {Products?.image.map((item, index) => (
                            <div
                                className='small-imges cursor-pointer'
                                key={index}
                                onClick={() => handleSmallImageClick(item)}
                            >
                                <img src={item} className='w-16 h-16' alt='' />
                            </div>
                        ))}

                    </div>
                    <div className='Product-big-img'>
                        <img src={mainImage} alt="Product-img" />
                    </div>
                </div>
                <div className='Product-details'>
                    <div className='Product-Name'>
                        <h1>{Products?.ProductName || 'N.A'}</h1>
                    </div>
                    <div className='Product-Price'>
                        <p className='text-[#E55472]'>
                            <i className='ri-money-rupee-circle-line'></i>
                            {activeSize ? activeSize.adjustedPrice : '000.00'}
                        </p>
                        <del className='text-[#e55471a1] ml-2'>
                            {activeSize ? activeSize.StockPrice : '000.00'}
                        </del>

                    </div>
                    <div className='mt-3 element'>

                        <p className='text-xl ml-2'>{Products?.ProductDescription}</p>

                    </div>
                    <hr className='mt-5 border-[1px] border-gray-300' />
                    <div className='other-information mt-5'>
                        <p className='capitalize'>Categories : <span className="text-gray-500 font-bold">{Products?.category || 'N.A'}</span></p>
                        <p className='capitalize  mt-2'>Dimensions : <span className="font-bold">{Products?.sizes &&
                            Products.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={`text-white hover:bg-[#fd9d5dfa]  rounded ml-4 px-2 py-1 ${activeSize === size ? 'bg-[#E55472]' : 'bg-[#e55471b6]'
                                        }`}
                                    onClick={() => handleSizeClick(size)}
                                >
                                    {size.SizeNumber}
                                </button>
                            ))}
                        </span></p>



                    </div>
                    <div className='cart-side'>
                        <div className='counter'>
                            <div className='screen'>
                                <span>{quantity}</span>
                            </div>
                            <div className='buutons'>
                                <div onClick={() => setQuantity(Math.max(quantity - 1, 1))} >-</div>
                                <div onClick={() => setQuantity(quantity + 1)}>+</div>

                            </div>
                        </div>
                        <div className='mt-5'>
                            <button
                              onClick={() =>
                                handleAddToCart({
                                    ...Products,
                                    size: activeSize,
                                    quantity: quantity,
                                })
                            }

                            className="btn-53">
                                <div className="original">A</div>
                                <div className="letters">
                                    <span>A</span>
                                    <span>D</span>
                                    <span>D</span>
                                    <span>T</span>
                                    <span>O</span>
                                    <span>C</span>
                                    <span>A</span>
                                    <span>R</span>
                                    <span>T</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-5 border-[1px] border-gray-300' />

           <div className='px-5 py-9'>
           <ProductsCard /> 
           </div>
        </div>
    );
};

export default SingleProducts;
