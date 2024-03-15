import React, { useEffect } from 'react'

const ReturnsRefunds = () => {
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
              <h1 className='text-xl mt-5 mb-2 md:text-4xl'>Returns & Refunds</h1>
              <span>
                Home <span><i className="ri-arrow-left-s-line"></i></span>Returns & Refunds{' '}
              </span>
            </div>
          </div>
    
          <div className='mt-5'>
            <div className='ml-2'>
              <h1 className='text-xl md:text-4xl font-semibold'>Returns & Refunds</h1>
            </div>
          </div>
    
          <div className='mt-5 px-4'>
            <p>
              At Rug Houzz, we want you to be completely satisfied with your purchase. Our Returns & Refunds policy is designed to make the process straightforward and hassle-free.
            </p>
    
            <h2 className='text-lg md:text-2xl font-semibold mt-4'>Return Eligibility</h2>
            <p>
              We accept returns within [insert timeframe] days from the date of delivery. To be eligible for a return, your carpet must be unused, in the same condition as received, and in its original packaging.
            </p>
    
            <h2 className='text-lg md:text-2xl font-semibold mt-4'>Initiating a Return</h2>
            <p>
              To start the return process, please contact our customer support team at +91-9871821764. Our team will guide you through the necessary steps and provide instructions on how to return your item.
            </p>
    
            <h2 className='text-lg md:text-2xl font-semibold mt-4'>Return Shipping</h2>
            <p>
              The cost of return shipping is the responsibility of the customer. Ensure that the item is securely packaged to prevent damage during transit. We recommend using a trackable shipping service to ensure the safe arrival of your return.
            </p>
    
            <h2 className='text-lg md:text-2xl font-semibold mt-4'>Refund Process</h2>
            <p>
              Once your return is received and inspected, we will send you an email to notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will be automatically applied to your original method of payment within a reasonable timeframe.
            </p>
    
            <h2 className='text-lg md:text-2xl font-semibold mt-4'>Non-Returnable Items</h2>
            <p>
              Certain items are non-returnable, including custom or personalized orders. These items are crafted specifically for you and, unfortunately, cannot be returned unless they arrive damaged or defective.
            </p>
    
            <h2 className='text-lg md:text-2xl font-semibold mt-4'>Damaged or Defective Items</h2>
            <p>
              In the rare event that your item arrives damaged or defective, please contact us immediately. We will assess the issue and work with you to provide a suitable resolution, whether it's a replacement or a refund.
            </p>
    
            <h2 className='text-lg md:text-2xl font-semibold mt-4'>Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our Returns & Refunds policy, don't hesitate to reach out to our customer support team at +91-9871821764. We are here to assist you and ensure your satisfaction with every purchase.
            </p>
    
            <p className='mt-4'>
              Thank you for choosing Rug Houzz. We appreciate your trust and aim to make your shopping experience enjoyable and worry-free.
            </p>
          </div>
        </div>
  )
}

export default ReturnsRefunds