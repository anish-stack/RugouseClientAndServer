import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Categorey.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const CategoriesSlider = () => {
    const [slidesPerView, setSlidesPerView] = useState('4');

    const data = [
        {
            id: 1,
            CategoreyName: "DIAMOND",
            ImageUrl: "https://i.ibb.co/rHHyTNF/image.png",
        },
        {
            id: 2,
            CategoreyName: "ETERNAL",
            ImageUrl: "https://i.ibb.co/QjwkXcg/image.png",
        },
        {
            id: 3,
            CategoreyName: "GALAXY",
            ImageUrl: "https://i.ibb.co/WtzgzLR/image.png",
        },
        {
            id: 4,
            CategoreyName: "GALYA",
            ImageUrl: "https://i.ibb.co/bXZKq5r/image.png",
        },
        {
            id: 5,
            CategoreyName: "LOUNGE",
            ImageUrl: "https://i.ibb.co/DgFpw4m/image.png",
        },
        {
            id: 6,
            CategoreyName: "LYONESSE",
            ImageUrl: "https://i.ibb.co/tQjGQvC/image.png",
        },
        {
            id: 7,
            CategoreyName: "PERA",
            ImageUrl: "https://i.ibb.co/vcNbF9b/image.png",
        },
        {
            id: 8,
            CategoreyName: "PRESTO",
            ImageUrl: "https://i.ibb.co/98hkGPH/image.png",
        },
        {
            id: 9,
            CategoreyName: "QUANTUM",
            ImageUrl: "https://i.ibb.co/g331sJg/image.png",
        },
    ];
    const handleCategoryClick = (category) => {
        window.location.href = `/categories/${category}`;
      };
      const handleResize = () => {
        const windowWidth = window.innerWidth;
    
        // Adjust slidesPerView based on window width
        if (windowWidth < 400) {
          setSlidesPerView(2);
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
    
    return (
        <div className='max-w-[1600px] mx-auto p-3'>
            <div className='w-full flex items-center flex-col text-center p-3'>
                <h2 className='text-xl text-center font-bold md:text-5xl'>Our Categories</h2>
                <hr className='my-4 w-20 text-center border-b-2 border-[#E55472]' />
            </div>

            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}

                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div   onClick={() => handleCategoryClick(item.CategoreyName)} className='categories-cards rounded-lg'>
                            <div className='categories-imgs'>
                                <img src={item.ImageUrl} alt="" />
                            </div>
                            <div className='product-name-cta'>
                                <span>{item.CategoreyName}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CategoriesSlider