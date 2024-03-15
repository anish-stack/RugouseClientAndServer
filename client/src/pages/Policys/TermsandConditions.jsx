import React, { useEffect } from 'react';

const TermsandConditions = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
  return (
    <div className='p-3'>
      <div className='breadcrumbs'>
        <div className='w-full mb-5 text-center text-pretty mt-3 bg-[#F0F0F0] min-h-40 px-5 py-5'>
          <h1 className='text-xl mt-5 mb-2 md:text-4xl'>Terms and Conditions</h1>
          <span>
            Home <span><i className="ri-arrow-left-s-line"></i></span>Terms and Conditions{' '}
          </span>
        </div>
      </div>

      <div className='mt-5'>
        <div className='ml-2'>
          <h1 className='text-xl md:text-4xl font-semibold'>Terms and Conditions</h1>
        </div>
      </div>

      <div className='mt-5 px-4'>
        <p>
          Welcome to Rug Houzz! By accessing and using our website, you agree to abide by the following Terms and Conditions. Please take a moment to review these terms carefully.
        </p>

        <h2 className='text-lg md:text-2xl font-semibold mt-4'>Acceptance of Terms</h2>
        <p>
          By using our website, you acknowledge that you have read, understood, and agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website.
        </p>

        <h2 className='text-lg md:text-2xl font-semibold mt-4'>Intellectual Property</h2>
        <p>
          All content on our website, including text, images, logos, and design, is the intellectual property of Rug Houzz and is protected by copyright laws. You may not reproduce, distribute, or use our content without explicit permission.
        </p>

        <h2 className='text-lg md:text-2xl font-semibold mt-4'>Accuracy of Information</h2>
        <p>
          We strive to provide accurate and up-to-date information on our website. However, we do not warrant the completeness, accuracy, or reliability of any information. Changes to the content may occur without prior notice.
        </p>

        <h2 className='text-lg md:text-2xl font-semibold mt-4'>Product Availability</h2>
        <p>
          Product availability is subject to change without notice. We reserve the right to discontinue or modify products, prices, or promotions at any time.
        </p>

        <h2 className='text-lg md:text-2xl font-semibold mt-4'>User Accounts</h2>
        <p>
          To access certain features on our website, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>

        <h2 className='text-lg md:text-2xl font-semibold mt-4'>Privacy Policy</h2>
        <p>
          Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. Please review our Privacy Policy to understand our practices.
        </p>

        <h2 className='text-lg md:text-2xl font-semibold mt-4'>Limitation of Liability</h2>
        <p>
          Rug Houzz shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of our website. This includes any damages related to viruses, inaccuracies, omissions, or interruptions in service.
        </p>

        <h2 className='text-lg md:text-2xl font-semibold mt-4'>Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for changes.
        </p>

        <p>
          By continuing to use our website, you acknowledge and agree to the most current version of these Terms and Conditions. If you have any questions or concerns, please contact us at +91-9871821764.
        </p>

        <p className='mt-4'>
          Thank you for choosing Rug Houzz. We appreciate your cooperation and trust in our services.
        </p>
      </div>
    </div>
  );
};

export default TermsandConditions;
