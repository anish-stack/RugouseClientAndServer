import React from 'react'

const Cardss = () => {
    return (
        <div className='max-w-[1400px] mb-5 mt-5 p-2 mx-auto bg-[#F0F8FF]'>
            <div className='w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2 mb-2 p-4'>
                <div className='flex items-start justify-center w-full'>
                    <div className='w-1/4'>
                        <img className='w-full' src="https://i.ibb.co/tCdh6cK/image.png" alt="" />
                    </div>
                    <div className='w-4/5'>
                        <h1 className='text-black font-bold mt-2 ml-2'>Free shipping</h1>
                        <p className='text-gray-500 font-semibold ml-2'>On all orders over ₹5000.00</p>
                    </div>




                </div>
                <div className='flex items-start justify-center w-full'>
                    <div className='w-1/4'>
                        <img className='w-full' src="https://i.ibb.co/J3yLD74/image.png" alt="" />
                    </div> <div className='w-4/5'>
                        <h1 className='text-black font-bold mt-2 ml-2'>15 days returns</h1>
                        <p className='text-gray-500 font-semibold ml-2'>Moneyback guarantee</p>
                    </div>

                </div>
                <div className='flex items-start justify-center w-full'>
                    <div className='w-1/4'>
                        <img className='w-full' src="https://i.ibb.co/Bc3xSgQ/image.png" alt="" />
                    </div> <div className='w-4/5'>
                        <h1 className='text-black font-bold mt-2 ml-2'>Secure checkout</h1>
                        <p className='text-gray-500 font-semibold ml-2'>Protected by Phonepe</p>
                    </div>

                </div>
                <div className='flex items-start justify-center w-full'>
                    <div className='w-1/4'>
                        <img className='w-full' src="https://i.ibb.co/stTs1TB/image.png" alt="" />
                    </div> <div className='w-4/5'>
                        <h1 className='text-black font-bold mt-2 ml-2'>Offer & gift here</h1>
                        <p className='text-gray-500 font-semibold ml-2'>On all orders over</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cardss