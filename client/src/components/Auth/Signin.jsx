import React, { useState } from 'react'
import "./signin.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Signin = () => {
    const [formdata,setFormdata] = useState({
        Email:'',
        Password:""
    })

    const HandleSubmit = async(e) =>{
        e.preventDefault()
        
        try {
            const Response = await axios.post('https://www.api.rughouzz.in/api/v1/Login',formdata)
            // console.log(Response.data)
            const { login } = Response.data;
          

           
            sessionStorage.setItem('Token',Response.data.token);
            sessionStorage.setItem('name',login.Name);
            sessionStorage.setItem('id',login._id);




            
            toast.success("Login SuccessFull")
            window.location.href="/"
            
        } catch (error) {
            console.log(error)
            toast.error("Please Check Email And Password")
        }
    }
    const HandleChange = (event) => {
        const { name, value } = event.target;
        setFormdata((prevData) => {
          return { ...prevData, [name]: value };
        });
      };
      
    return (
        <>
            <section className="signIn ">
                <div className='breadcrumbs'>
                    <div className='w-full text-center text-pretty mt-3 bg-[#F0F0F0] min-h-40 px-5 py-5'>
                        <h1 className='text-xl mt-5 mb-2 md:text-4xl'>Sign-in </h1>
                        <span>
                            Home <span><i className="ri-arrow-left-s-line"></i></span> Sign-In{' '}

                        </span>
                    </div>
                </div>
                <div className="container-gap min-h-screen ">
                    <div className="subhead">
                        <h2>Sign In <br /> To Your Account</h2>
                    </div>

                    <div className="grid-50">
                        <div className="form">
                            <form action="">
                                <input type="email" onChange={HandleChange} name="Email" value={formdata.Email} id="email" placeholder='Email*' required />
                                <input type="password" onChange={HandleChange}  name="Password" value={formdata.Password} id="password" placeholder='Password*' required />
                                <button onClick={HandleSubmit} type="submit" className='pink-btn'>SIGN IN</button>
                                <p className="upper"><Link href="">FORGOTTEN YOUR PASSWORD?</Link></p>
                            </form>
                        </div>
                        <div className="text-grid">
                            <h4>DON'T HAVE AN ACCOUNT?</h4>
                            <p>Add items to your wishlistget personalised recommendations check out more quickly track your orders register</p>
                            <Link to="/SignUp" className='pink-btn'>Create account</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin