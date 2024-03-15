import React from 'react'
import Sliders from '../Sliders/Sliders'
import Products from '../../pages/Products/Products'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import About from '../About/About'
import Contact from '../../pages/Contact/Contact'
import Main from '../../pages/Shop/Main'
import Newsletter from '../../pages/Newsletter/Newsletter'
import Market from '../../pages/Shop/Market'
import Cardss from '../../pages/Shop/cardss'
import Offer from '../Offer/Offer'

const Home = () => {
  return (
    <div>
      <Sliders />

      <CategoriesSlider />
      <Main />
      <Market/>
      <Offer/>
      <Products />
      <Cardss/>
      {/* <Contact /> */}
      {/* <Newsletter/> */}
    </div>
  )
}

export default Home