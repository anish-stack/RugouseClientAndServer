import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from './01.jpg'
import img2 from './03.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
const Sliders = () => {
    return (
        <div className='max-w-[1600px] h-[65vh] md:h-[90vh] mx-auto'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slider-inner'>
                        <img src={img1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-inner'>
                        <img src={img2} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Sliders