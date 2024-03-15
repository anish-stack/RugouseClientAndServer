import React, { useState, useEffect } from 'react'
import logo from './logo (1).png'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux';
import './header.css'
import TopCart from '../TopCart/TopCart';
const Header = () => {
    const [showDrop, setShowDrop] = useState(false);
    const state = useSelector(state => state.cart);
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [showCart, setShowCart] = useState(false);
    const Token = sessionStorage.getItem('Token')
    const Name = sessionStorage.getItem('name')
    // console.log(Token)
    const ShowDropDown = () => {
        setShowDrop(!showDrop);
    };
    const handleOpenMobile = () => {
        setIsMobileOpen(!isMobileOpen)
    }
    const handleClose = () => {
        setShowDrop(false);
    }
    const [fixed, setFixed] = useState(false)
    useEffect(() => {
        const scrollValueinYDirection = 120
        window.addEventListener("scroll", () => {
            if (window.scrollY > scrollValueinYDirection) {
                setFixed(true);
            } else{
                setShowCart(false)
                setFixed(false)
            }
        })

    }, [])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleCategoryClick = (category) => {
        window.location.href = `/categories/${category}`;
    };
    const showCarts = () => {
        setShowCart(!showCart);
    }

    return (
        <header className={`w-full bg-white ${fixed ? 'fixed bg-white z-[99] top-0 shadow-xl' : ' '} `}>
            <div className="w-full px-4 py-5 flex items-center justify-between">
                <Link to="/" className='logo'>
                    <img src={logo} className='w-24' alt="logo" />
                </Link>
                <div className={`nav ${isMobileOpen ? 'show' : 'unShow'} ${fixed ? 'topTwo' : ' '} `}>
                    <nav>
                        <ul className='flex flex-col items-baseline md:flex-row space-x-5'>
                            <li><Link onClick={handleClose} className='text-xl font-bold text-[#4C586A] uppercase transition-all duration-150 ease-out  hover:text-[#E55472]' to="/">Home</Link></li>
                            <li><Link onClick={handleClose} className='text-xl font-bold text-[#4C586A] uppercase transition-all duration-150 ease-out hover:text-[#E55472]' to="/Shop">Shop</Link></li>
                            <li>
                                <Link
                                    onClick={ShowDropDown}
                                    className='text-xl font-bold text-[#4C586A] uppercase transition-all relative duration-150 ease-out hover:text-[#E55472]'

                                >
                                    CATEGORIES
                                </Link>

                                <AnimatePresence>
                                    {showDrop && (
                                        <motion.div
                                            className='dropdown'
                                            initial={{ opacity: 0, y: 20 }} // Initial position (optional)
                                            animate={{ opacity: 1, y: 0 }} // Animation to run when dropdown is shown
                                            exit={{ opacity: 0, y: 20 }} // Animation to run when dropdown is hidden
                                        >
                                            <ul className='dropdown-items'>
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
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                            <li><Link onClick={handleClose} className='text-xl font-bold text-[#4C586A] uppercase transition-all duration-150 ease-out hover:text-[#E55472]' to="/About">About</Link></li>
                            <li><Link onClick={handleClose} className='text-xl font-bold text-[#4C586A] uppercase transition-all duration-150 ease-out hover:text-[#E55472]' to="/Contact">Contact</Link></li>

                        </ul>
                    </nav>
                </div>
                <div className='extra-links'>
                    <nav>
                        <ul className='flex gap-2 space-x-5'>
                            {/* <li><Link onClick={handleClose} className='text-xl text-center text-[#000] uppercase transition-all duration-150 ease-out  hover:text-[#E55472]' ><i className="ri-search-line"></i></Link></li> */}
                            {Token ? (
                                <Link to="/Profile" className='font-bold ml-2 namess'>Welcome {Name}</Link>
                            ):(
                                <li><Link onClick={handleClose} to="/SignIn" className='text-xl text-[#000] uppercase transition-all duration-150 ease-out  hover:text-[#E55472]' ><i className="ri-user-fill"></i></Link></li>

                            )}
                            <li>
                                <Link onClick={() => { handleClose(); showCarts(); }} className='text-xl text-[#000] uppercase transition-all duration-150 ease-out relative hover:text-[#E55472]'>
                                    <i className="ri-shopping-bag-line"></i>
                                    <div className='countnumber'>
                                        <span>{state.length || 0}</span>
                                    </div>
                                </Link>
                            </li>

                            {isMobile && <li onClick={handleOpenMobile}><Link onClick={handleClose} className='text-xl text-[#000] uppercase transition-all duration-150 ease-out relative hover:text-[#E55472]' ><i className="ri-menu-line"></i>

                            </Link></li>}
                        </ul>
                    </nav>
                </div>
            </div>
            <TopCart showCart={showCart} />

        </header>
    )
}

export default Header