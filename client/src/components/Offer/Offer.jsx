import React from 'react'
import { Link } from 'react-router-dom'
import './offer.css'
const Offer = () => {
  return (
    <div className='offer-section'>
        <div className='offer-container'>
            <div className='ofer-show'>
                    <div className='offer-content'>
                    <h3> <span>20% </span>on New Collections. Get your discount today!</h3>
                    </div>
                    <div className='offer-button'>
                        <Link>
                            Shop Now <span><i className="ri-arrow-right-line"></i></span>
                        </Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Offer