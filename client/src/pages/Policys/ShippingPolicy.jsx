import React, { useEffect } from 'react'

const ShippingPolicy = () => {
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
        <h1 className='text-xl mt-5 mb-2 md:text-4xl'>Shipping Policy</h1>
        <span>
          Home <span><i className="ri-arrow-left-s-line"></i></span>Shipping Policy{' '}
        </span>
      </div>
    </div>

    <div className='mt-5'>
      <div className='ml-2'>
        <h1 className='text-xl md:text-4xl font-semibold'>Shipping Policy</h1>
      </div>
    </div>

    <div className='mt-5 px-4'>
      <p>
        Welcome to Rug Houzz! Our Shipping Policy is designed to provide you with a straightforward understanding of how we handle the delivery of your chosen carpets.
      </p>

      <h2 className='text-lg md:text-2xl font-semibold mt-4'>Delivery Process</h2>
      <p>
        Once you've made your selection, we aim to dispatch your order within 2 working days. Our reliable delivery partners will ensure your carpets reach your doorstep in pristine condition.
      </p>

      <h2 className='text-lg md:text-2xl font-semibold mt-4'>Shipping Charges</h2>
      <p>
        Shipping charges are calculated based on the weight and dimensions of your order. During checkout, you'll see a transparent breakdown of these costs before finalizing your purchase.
      </p>

      <h2 className='text-lg md:text-2xl font-semibold mt-4'>Nationwide Delivery</h2>
      <p>
        We offer nationwide shipping, so whether you're in the bustling city or a serene town, your preferred carpets can be delivered to your location. Please note that delivery times may vary based on your address.
      </p>

      <h2 className='text-lg md:text-2xl font-semibold mt-4'>Estimated Delivery Times</h2>
      <p>
        Estimated delivery times will be provided during the checkout process. These times are indicative and can be subject to slight variations based on unforeseen circumstances.
      </p>

      <h2 className='text-lg md:text-2xl font-semibold mt-4'>Delivery Updates</h2>
      <p>
        For your convenience, we'll keep you informed about the status of your delivery. Once your order is on its way, you'll receive a confirmation email with details to ensure you're in the loop.
      </p>

      <h2 className='text-lg md:text-2xl font-semibold mt-4'>Contact Us</h2>
      <p>
        If you have any questions or concerns regarding your shipment, our friendly customer support team is here to assist. Feel free to reach out at +91-9871821764, and we'll be happy to help.
      </p>

      <p className='mt-4'>
        At Rug Houzz, we strive to make your shopping experience as enjoyable as possible, and our transparent Shipping Policy is a testament to our commitment to your satisfaction. Thank you for choosing us for your carpet needs!
      </p>
    </div>
  </div>
  )
}

export default ShippingPolicy