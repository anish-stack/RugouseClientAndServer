import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Importing eye icons from Remix Icon
import axios from 'axios';
import toast from 'react-hot-toast';

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChangePassword = async () => {
    try {
      // Validate if no empty field
      if (!oldPassword || !newPassword || !confirmPassword) {
        toast.error('All fields are required');
        return;
      }

      // Check if the new password and confirm password match
      if (newPassword !== confirmPassword) {
        toast.error('New Password and Confirm Password do not match');
        return;
      }

      // Make API request to change password
      const token = sessionStorage.getItem('Token');
      const id = sessionStorage.getItem('id');

      console.log(token)
      const response = await axios.post(
        'https://www.api.rughouzz.in/api/v1/changePassword',
        { oldPassword, newPassword, confirmPassword,id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data)
      if (response.data.success) {
        toast.success(response.data.message);
        // You can redirect or perform any other actions after a successful password change
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error during password change:', error);
      toast.error('Internal Server Error');
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Change Password</h2>

      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="oldPassword">
          Old Password
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="oldPassword"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          placeholder="Enter old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="newPassword">
          New Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="newPassword"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            className="absolute bg-red-400 text-white right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="absolute bg-red-400 text-white right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={handleChangePassword}
      >
        Change Password
      </button>
    </div>
  );
};

export default ChangePassword;
