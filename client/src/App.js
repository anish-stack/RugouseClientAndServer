import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SingleProducts from './pages/SingleProducts/SingleProducts';
import { Toaster } from 'react-hot-toast';
import Cart from './components/cart/Cart';
import Signin from './components/Auth/Signin';
import SignUp from './components/Auth/SignUp';
import OrderPage from './pages/OrderPage/OrderPage';
import PaymentSuccess from './pages/paymentSuccess/PaymentSuccess';
import OrderConfirm from './pages/OrderConfirm/Orderconfirm';
import Shop from './pages/Shop/Shop';
import Categoreies from './pages/Categories/Categoreies';
import Contact from './pages/Contact/Contact';
import Mobile from './components/Mobile/Mobile';
import About from './components/About/About';
import Profile from './components/Profile/Profile';
import TermsandConditions from './pages/Policys/TermsandConditions';
import ReturnsRefunds from './pages/Policys/ReturnsRefunds';
import ShippingPolicy from './pages/Policys/ShippingPolicy';
import Admin from './components/admin/Admin';

function App() {
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

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SingleProducts/:id' element={<SingleProducts />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/SignIn' element={<Signin />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Payment' element={<OrderPage />} />
        <Route path='/Order' element={<OrderConfirm />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/categories/:category' element={<Categoreies />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Terms-and-Conditions' element={<TermsandConditions />} />
        <Route path='/Returns-&-Refunds' element={<ReturnsRefunds />} />
        <Route path='/Shipping-Policy' element={<ShippingPolicy />} />
        <Route path='/admin' element={<Admin />} />










        <Route
          path="/paymentsuccess/:transication/:value"
          element={

            <PaymentSuccess />

          }
        />






      </Routes>
      <Footer />
      {isMobile && <Mobile />}
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
