import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const Formtable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {

  const handleCloseAndRefresh = () => {
    handleclose();
    window.location.reload();
  };

  return (
    <div className="addContainer">
      <form onSubmit={handleSubmit} className="w-96 mx-auto">
        
        <div className="close-btn cursor-pointer text-xl text-gray-500 hover:text-red-500" onClick={handleCloseAndRefresh}>
          <MdClose />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="font-semibold text-gray-700 flex items-center">
            Name: <span className="text-red-500 ml-1">*</span>
          </label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            className="border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            placeholder="Enter your name"
            onChange={handleOnChange} 
            value={rest.username}
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="font-semibold text-gray-700 flex items-center">
            Email: <span className="text-red-500 ml-1">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            placeholder="Enter your email"
            onChange={handleOnChange} 
            value={rest.email}
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="font-semibold text-gray-700 flex items-center">
            Password: <span className="text-red-500 ml-1">*</span>
          </label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            className="border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            placeholder="Enter your password"
            onChange={handleOnChange} 
            value={rest.password}
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="userType" className="font-semibold text-gray-700 flex items-center">
            User Type: <span className="text-red-500 ml-1">*</span>
          </label>
          <select 
            id="userType" 
            name="userType" 
            className="border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            onChange={handleOnChange} 
            value={rest.userType}
            required
          >
            <option value="" disabled>Select User Type</option>
            <option value="user">User</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="userRoll" className="font-semibold text-gray-700 flex items-center">
            Department: <span className="text-red-500 ml-1">*</span>
          </label>
          <input 
            type="text" 
            id="userRoll" 
            name="userRoll" 
            className="border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            placeholder="Enter your department"
            onChange={handleOnChange} 
            value={rest.userRoll}
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="mobile" className="font-semibold text-gray-700 flex items-center">
            Mobile: <span className="text-red-500 ml-1">*</span>
          </label>
          <input 
            type="number" 
            id="mobile" 
            name="mobile" 
            className="border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            placeholder="Enter your mobile number"
            onChange={(e) => {
              if (e.target.value.length <= 10) { handleOnChange(e); }
            }} 
            value={rest.mobile}
            required
          />
        </div>

        <div className="flex justify-center">
          <button className="btn bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-gradient-to-l hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formtable;
