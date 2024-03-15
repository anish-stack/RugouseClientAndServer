import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const CategoriesSlider = () => {
    const data = [
        {
            id: 1,
            CategoreyName: "DIAMOND",
            ImageUrl: "https://rughouzz.in//media/product/310037962_diamond1.jpg",
        },
        {
            id: 2,
            CategoreyName: "ETERNAL",
            ImageUrl: "https://rughouzz.in//media/product/890518138_eternal.png",
        },
        {
            id: 3,
            CategoreyName: "GALAXY",
            ImageUrl: "https://rughouzz.in//media/product/882388544_GALAXY.png",
        },
        {
            id: 4,
            CategoreyName: "GALYA",
            ImageUrl: "https://rughouzz.in//media/product/214612740_galya.jpg",
        },
        {
            id: 5,
            CategoreyName: "LOUNGE",
            ImageUrl: "https://rughouzz.in//media/product/136064110_LOUNGE.png",
        },
        {
            id: 6,
            CategoreyName: "LYONESSE",
            ImageUrl: "https://rughouzz.in//media/product/516898470_LYONESSE.png",
        },
        {
            id: 7,
            CategoreyName: "PERA",
            ImageUrl: "https://rughouzz.in//media/product/649303780_pera.png",
        },
        {
            id: 8,
            CategoreyName: "PRESTO",
            ImageUrl: "https://rughouzz.in//media/product/137222244_PRESTO.png",
        },
        {
            id: 9,
            CategoreyName: "QUANTUM",
            ImageUrl: "https://rughouzz.in//media/product/639114073_quantum.jpg",
        },
    ];


    return (
        <div className='max-w-[1600px] mx-auto p-3'>
            <div className='w-full flex items-center flex-col text-center p-3'>
                <h2 className='text-xl text-center font-bold md:text-5xl'>New Arrival Items</h2>
                <hr className='my-4 w-20 text-center border-b-2 border-[#E55472]' />
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}

                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='categories-cards'>
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