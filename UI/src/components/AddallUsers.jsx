import React, { useState } from 'react';

const AddallUsers = () => {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    userType: '',
    userRoll: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/useradd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Failed to add user');
      }

      setUserData({
        userName: '',
        email: '',
        password: '',
        userType: '',
        userRoll: ''
      });

      alert('User added successfully');
      window.location.href = '/admin/addallusers';
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user. Please try again.');
    }
  };

  return (
              <div className="container mx-auto p-4 w-[500px] mt-6 p-6 bg-gray-200 shadow-xl rounded-lg">
                  <div className="text-2xl text-center font-bold mb-4 text-black">Add New User</div>
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto" id="userForm">
                      <div className="mb-4">
                          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name:</label>
                          <input
                              type="text"
                              id="userName"
                              name="userName"
                              placeholder="Enter UserName"
                              value={userData.userName}
                              onChange={handleInputChange}
                              className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                              required
                          />
                      </div>
                      <div className="mb-4">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                          <input
                              type="text"
                              id="email"
                              name="email"
                              placeholder="Enter Email"
                              value={userData.email}
                              onChange={handleInputChange}
                              className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                              required
                          />
                      </div>
                      <div className="mb-4">
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                          <input
                              type="password"
                              id="password"
                              name="password"
                              placeholder="Enter Password"
                              value={userData.password}
                              onChange={handleInputChange}
                              className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                              required
                          />
                      </div>
                      <div className="mb-4">
                          <label htmlFor="userType" className="block text-sm font-medium text-gray-700">User Type:</label>
                          <input
                              type="text"
                              id="userType"
                              name="userType"
                              placeholder="Enter User Type"
                              value={userData.userType}
                              onChange={handleInputChange}
                              className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                              required
                          />
                      </div>
                      <div className="mb-4">
                          <label htmlFor="userRoll" className="block text-sm font-medium text-gray-700">User Roll:</label>
                          <input
                              type="text"
                              id="userRoll"
                              name="userRoll"
                              placeholder="Enter User Roll"
                              value={userData.userRoll}
                              onChange={handleInputChange}
                              className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                              required
                          />
                      </div>
                      <div className="flex justify-center">
                          <button
                              type="submit"
                              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                          >
                              Save
                          </button>
                          <button
                              type="button"
                              className="bg-gray-400 text-gray-700 py-2 px-4 ml-2 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                              onClick={() => {
                                  
                                  window.location.href = '/admin/addallusers'; 
                              }}
                          >
                              Cancel
                          </button>
                      </div>
                  </form>
              </div>
  );
}

export default AddallUsers;
