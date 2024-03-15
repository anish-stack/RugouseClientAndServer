import React, { useEffect, useState } from 'react'
import './profile.css'
import user from './user.png'
import axios from 'axios';
import MyOrder from './MyOrder';
import ChangePassword from './ChangePassword';
import { Link } from 'react-router-dom';
const Profile = () => {
  const Name = sessionStorage.getItem('name')
  const Id = sessionStorage.getItem('id')
  const token = sessionStorage.getItem('Token')

  const [suser, setuser] = useState([])
  const fetchUserDetails = async () => {
    try {
      const res = await axios.get(`https://www.api.rughouzz.in/api/v1/finduserbyid/${Id}`)
      console.log(res.data.data)
      setuser(res.data.data)
    } catch (error) {
      console.log(error)


    }
  }
  useEffect(() => {
    fetchUserDetails()
  }, [Id])

  const hanldeLogout = ()=>{
    sessionStorage.clear()
    window.location.href='/'
  }
  const [activeTab, setActiveTab] = useState('Profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return (
          <div className='p-2 h-full '>
          <div className='user-name-email w-full gap-3 p-2 flex mt-4'>
            <div className='w-1/2'>
              <label htmlFor="">Name</label>
              <input className='outline-none rounded-lg' type="text" contentEditable={false} value={suser.Name} />
            </div>
            <div className='w-1/2'>
              <label htmlFor="">Email</label>

              <input className='outline-none rounded-lg' type="text" contentEditable={false} value={suser.Email} />
            </div>
          </div>
          <div className='number'>
            <div className='w-full'>
              <label htmlFor="">Contact Number</label>

              <input className='outline-none rounded-lg' type="text" contentEditable={false} value={suser.ContactNumber} />
            </div>

          </div>
        </div>
        );
      case 'MyOrders':
        return <MyOrder />;
      // case 'ChangePassword':
      //   return 
      // Add more cases for other tabs as needed
      default:
        return null;
    }
  };
  return (
    <div className='w-full'>
    {token ? (
       <div className='profile-continer'>
       <div className='profile-header'>

         <div className='Profile-tabs'>
         <ul>
         <li className='cursor-pointer' onClick={() => setActiveTab('Profile')}>Profile</li>
         <li className='cursor-pointer' onClick={() => setActiveTab('MyOrders')}>My Orders</li>
         {/* <li className='' onClick={() => setActiveTab('ChangePassword')}>Change Password</li> */}
         <li className='cursor-pointer'  onClick={hanldeLogout}>Logout</li>

         {/* Add more list items for other tabs */}
       </ul>
         </div>

       </div>
       <div className='no-header overflow-hidden'>

         <div className='Greet-Side'>
           <div className='w-full flex  items-center justify-between'>
             <div className='name'>
               <h1>Hi , {Name} </h1>
               <p className='ml-9'>Done Order And Come In Comformt !</p>
             </div>
             <div className='img-name'>
               <img src={user} alt="user" />
             </div>
           </div>
         </div>
         {renderTabContent()}

       </div>


     </div>
    ):(
      <div className='w-full flex items-center flex-col justify-center min-h-screen  text-white'>
        <div className='w-96'>
        <img src="https://i.ibb.co/8j5XMBr/image.png" alt="Background" className="w-full h-full object-cover " />

        </div>
    <h2 className="text-3xl text-black font-bold mb-4">You Are Not Logged In! 🥲</h2>
    <div className='login'>
        <Link to="/SignIn" className="bg-green-500 text-white py-2 px-4 rounded">Login</Link>
    </div>
</div>

    )}

     

    </div>
  )
}

export default Profile