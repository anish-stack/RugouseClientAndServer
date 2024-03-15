// About.jsx

import React, { useEffect } from 'react';
import './about.css';

const About = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}, []);
  return (
    <div className="container-gap content-only">
      <h2 className="text-3xl font-bold mb-4">Welcome to Rug Huzz!</h2>
      <p className="text-lg mb-4">
        At Rug Huzz, we're passionate about providing you with the finest selection of carpets that add warmth, style, and elegance to your living spaces. With a commitment to quality and craftsmanship, we curate a diverse collection of exquisite carpets that reflect timeless beauty and sophistication.
      </p>

      <p className="text-lg mb-4">
        As specialists in selling carpets, we understand the importance of creating a cozy and inviting atmosphere in your home. Our carefully curated range includes a variety of styles, colors, and patterns to suit every taste and preference. Whether you're looking for traditional designs that exude charm or modern pieces that make a bold statement, we have something for everyone.
      </p>

      <p className="text-lg mb-4">
        What sets us apart is our dedication to customer satisfaction. Our team of experts is here to assist you every step of the way, helping you find the perfect carpet that complements your lifestyle and aesthetic preferences. With a seamless online shopping experience, convenient delivery options, and excellent customer service, we strive to make your shopping experience with us enjoyable and hassle-free.
      </p>

      <p className="text-lg mb-4">
        Located in the heart of New Delhi, our showroom at C-118, Shivalik, Malviya Nagar, invites you to explore our extensive collection firsthand. Feel the luxurious textures, admire the intricate designs, and discover the beauty that each carpet brings to your home.
      </p>

      <p className="text-lg mb-4">
        At Rug Huzz, we're not just selling carpets – we're helping you create spaces that inspire, comfort, and delight. Join us on this journey of transforming your home into a sanctuary of style and sophistication.
      </p>

      <p className='last text-lg'>
        For inquiries, custom orders, or assistance, please don't hesitate to reach out to us at <a className="text-blue-500" href="tel:+919871821764">+91-9871821764</a> or via email at <a className="text-blue-500" href="mailto:rughouzz@gmail.com">rughouzz@gmail.com</a>. We look forward to serving you!
      </p>
      <p className="text-lg">Warm regards,</p>
      <p className="text-lg">The Rug Huzz Team</p>
    </div>
  );
};

export default About;
