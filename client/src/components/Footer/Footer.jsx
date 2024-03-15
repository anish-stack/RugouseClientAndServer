import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';

const Footer = () => {
    const handleCategoryClick = (category) => {
        window.location.href = `/categories/${category}`;
    };
    const images = [
        {
            id: 1,
            img: "https://i.ibb.co/p3mW3QZ/1.png"
        },
        {
            id: 2,
            img: "https://i.ibb.co/K7NZQhC/2.png"
        },
        {
            id: 3,
            img: "https://i.ibb.co/Px23YxN/3.png"
        },
        {
            id: 4,
            img: "https://i.ibb.co/tQGWV1X/4.png"
        },
        {
            id: 5,
            img: "https://i.ibb.co/GxgXHSj/5.png"
        },
        {
            id: 6,
            img: "https://i.ibb.co/KWG1fQS/6.png"
        },
        {
            id: 7,
            img: "https://i.ibb.co/RC1Cvnq/7.png"
        },
        {
            id: 8,
            img: "https://i.ibb.co/68MvNZd/8.png"
        },
    ]
    return (
        <>
            {/* <Swiper
            slidesPerView={6}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            spaceBetween={30}
            freeMode={true}
         
            modules={[Autoplay,FreeMode]}
            className="mySwiper footer-swipper"
            breakpoints={{
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 50
                }
            }}
        >
            
            {images.map((image,index) => (
                <SwiperSlide key={index}>
                    <img src={image.img} alt={`Slide ${image.id}`} />
                </SwiperSlide>
            ))}
        </Swiper> */}
            <footer className='py-6'>
                <div className="footer-links">
                    <div className="head">QUICK LINKS</div>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/shop'}>Shop</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <div className="head">CATEGORIES</div>
                    <ul>
                        <li onClick={() => handleCategoryClick('DIAMOND')}>DIAMOND</li>
                        <li className='cursor-pointer' onClick={() => handleCategoryClick('ETERNAL')}>ETERNAL</li>
                        <li className='cursor-pointer' onClick={() => handleCategoryClick('GALAXY')}>GALAXY</li>
                        <li className='cursor-pointer' onClick={() => handleCategoryClick('GALYA')}>GALYA</li>
                        <li className='cursor-pointer' onClick={() => handleCategoryClick('LOUNGE')}>LOUNGE</li>
                        <li className='cursor-pointer' onClick={() => handleCategoryClick('LYONESSE')}>LYONESSE</li>
                        <li className='cursor-pointer' onClick={() => handleCategoryClick('PERA')}>PERA</li>
                        <li className='cursor-pointer' onClick={() => handleCategoryClick('PRESTO')}>PRESTO</li>
                        <li className='cursor-pointer' onClick={() => handleCategoryClick('QUANTUM')}>QUANTUM</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <div className="head">CUSTOMER SERVICE</div>
                    <ul>
                        <li><Link to={'/Shipping-Policy'}>Shipping Policy</Link></li>
                        <li><Link to={'/Contact'}>Help & Contact Us</Link></li>
                        <li><Link to={'/Returns-&-Refunds'}>Returns & Refunds</Link></li>
                        <li><Link to={'/Terms-and-Conditions'}>Terms and Conditions</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <div className="head">CUSTOMER SERVICE</div>
                    <p>Elevate your space with Rug Houzz - Your Premier Destination for Exquisite Carpets.</p>
                    <div className="links">
                        <ul>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                <Link to={"/"}>C-118, Shivalik, Malviya Nagar, New Delhi-110017</Link>
                            </li>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                <Link to="+919871821764">+91-9871821764</Link>
                            </li>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                <Link to="mailto:rughouzz@gmail.com">rughouzz@gmail.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copright">
                <p>© 2024 - ALL RIGHTS RESERVED BY <Link target='_blank' to="https://www.digiindiasolutions.com/">DIGI INDIA SOLUTIONS</Link></p>
            </div>
        </>
    )
}

export default Footer