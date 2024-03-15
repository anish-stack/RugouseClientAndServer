import React, { useState } from 'react'
import "./signin.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const [formdata, setFormdata] = useState({
        Email: '',
        Password: "",
        Name: "",
        ContactNumber: ""
    })

    const HandleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const Response = await axios.post('https://www.api.rughouzz.in/api/v1/Register', formdata)
            console.log(Response.data)
            toast.success("Registration SuccessFull")

            setLoading(false)
            window.location.href = "/SignIn"
            // sessionStorage.setItem('Token',Response.data.token);

        } catch (error) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
            setLoading(false)



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
            <section className="signIn">
                <div className='breadcrumbs'>
                    <div className='w-full text-center text-pretty mt-3 bg-[#F0F0F0] min-h-40 px-5 py-5'>
                        <h1 className='text-xl mt-5 mb-2 md:text-4xl'>Sign-Up </h1>
                        <span>
                            Home <span><i className="ri-arrow-left-s-line"></i></span> Sign-Up{' '}

                        </span>
                    </div>
                </div>
                <div className="container-gap mt-5 min-h-screen ">
                    <div className="subhead">
                        <h2>Sign Up <br /> To Your Account</h2>
                    </div>
                    <div className="grid-50">
                        <div className="form">
                            <form action="">
                                <input type="text" onChange={HandleChange} name="Name" value={formdata.Name} id="email" placeholder='Name' required />
                                <input type="email" onChange={HandleChange} name="Email" value={formdata.Email} id="email" placeholder='Email*' required />

                                <input type="email" onChange={HandleChange} name="ContactNumber" value={formdata.ContactNumber} id="ContactNumber" placeholder='Contact-Number' required />
                                <input type="password" onChange={HandleChange} name="Password" value={formdata.Password} id="password" placeholder='Password*' required />
                                <button
                                    onClick={HandleSubmit}
                                    type="submit"
                                    className='pink-btn'
                                    disabled={loading}
                                >
                                    {loading ? "Wait" : "SIGN IN"}
                                </button>
                            </form>
                        </div>
                        <div className="text-grid">
                            <h4>Already HAVE AN ACCOUNT?</h4>
                            <p>Add items to your wishlistget personalised recommendations check out more quickly track your orders register</p>
                            <Link to="/SignIn" className='pink-btn'>Login</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp