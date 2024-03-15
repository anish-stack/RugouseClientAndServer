import React, { useEffect } from 'react'
import "./contact.css"
const Contact = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <>
            <section className="contact-icons py-5">
                <div className="container-gap">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="col-span-1 md:col-span-1 single text-center">
                            <i className="fas fa-map-marker-alt text-3xl text-gray-800"></i>
                            <h4 className="text-lg font-semibold mt-3">Address</h4>
                            <p>C-118, Shivalik, Malviya Nagar, New Delhi-110017</p>
                        </div>
                        <div className="col-span-1 md:col-span-1 single text-center">
                            <i className="fas fa-phone-alt text-3xl text-gray-800"></i>
                            <h4 className="text-lg font-semibold mt-3">Phone Number</h4>
                            <p>+91-9871821764</p>
                        </div>
                        <div className="col-span-1 md:col-span-1 single text-center">
                            <i className="far fa-envelope text-3xl text-gray-800"></i>
                            <h4 className="text-lg font-semibold mt-3">Email & Web</h4>
                            <p>rughouzz@gmail.com</p>
                        </div>
                        <div className="col-span-1 md:col-span-1 single text-center">
                            <i className="far fa-clock text-3xl text-gray-800"></i>
                            <h4 className="text-lg font-semibold mt-3">Opening Hours</h4>
                            <p>Mon to Sat: 9:00 AM to 8:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="signIn">
                <div className="container-gap">
                    <div className="subhead">
                        <h2>Need Our Help! Please an Email.</h2>
                    </div>

                    <div className="grid-50">
                        <div className="form">
                            <form action="">
                                <input type="text" name="name" id="name" placeholder='Name*' required />
                                <input type="email" name="email" id="email" placeholder='Email:' required />
                                <input type="number" name="phone_num" id="phone_num" placeholder='Phone Number:' required />
                                <button type="submit" className='pink-btn bg-pink-500 '>SEND MESSAGE</button>
                            </form>
                        </div>
                        <div className='form textarea'>
                            <textarea name="message" id="message"></textarea>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact