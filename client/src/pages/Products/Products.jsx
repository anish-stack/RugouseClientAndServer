import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/Slices/ProductSlices';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './product.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Products = () => {
    const [slidesPerView, setSlidesPerView] = useState('5');

    const dispatch = useDispatch()
    const data = useSelector((state) => state.product.data.data);
    // console.log(data)
    const [showCarts, setShowCarts] = useState(false)
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    const handleMouseEnter = (id) => {
        setShowCarts((prev) => ({
            ...prev,
            [id]: true,
        }));
    };

    const handleResize = () => {
        const windowWidth = window.innerWidth;
    
        // Adjust slidesPerView based on window width
        if (windowWidth < 400) {
          setSlidesPerView(1);
        } else if (windowWidth >= 400 && windowWidth < 768) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(5);
        }
      };
    
      useEffect(() => {
      
        handleResize(); // Set initial slidesPerView value
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    
    const handleMouseExit = (id) => {
        setShowCarts((prev) => ({
            ...prev,
            [id]: false,
        }));
    };
    return (
        <div className='max-w-[1600px] mx-auto p-3'>
            <div className='w-full flex items-center flex-col text-center p-3'>
                <h2 className='text-xl text-center font-bold md:text-5xl'>New Arrival</h2>
                <hr className='my-4 w-20 text-center border-b-2 border-[#E55472]' />
            </div>

            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}

                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data && data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/SingleProducts/${item._id}`} className='categories-cards rounded-lg '>
                            <div onMouseEnter={() => handleMouseEnter(item._id)}
                                onMouseLeave={() => handleMouseExit(item._id)} className='categories-imgs card'>
                                {item.image.map((imgs, key) => (
                                    <img key={key} src={imgs} alt="" />
                                ))}
                                <div className='product-details'>
                                    <span>{item.ProductName}</span>

                                    <div className={`mb-5 absolute hover   ${showCarts[item._id] ? 'right-0' : 'right-[-92px]'}  top-[-30px]`}>
                                        <ul className='flex w-full items-end justify-end '>

                                            <li className='px-2 bg-gray-800 py-2'>
                                                <Link href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                                    <i className="ri-handbag-fill text-white"></i>
                                                </Link>
                                            </li>
                                            <li className='px-2 bg-gray-800 py-2'>
                                                <Link href="#" title="Add To Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                                    <i className="ri-heart-fill text-white "></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='tag'>
                                {item.tag}
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>)
}

export default Products