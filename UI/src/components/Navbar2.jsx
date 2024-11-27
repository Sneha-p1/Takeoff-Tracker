import React from 'react';
import Logout from './Logout';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <>
      <div className="flex flex-wrap bg-gradient-to-r from-blue-900 to-red-950 shadow-lg p-4">
        <nav className="w-full flex flex-wrap items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link to="/manager/manager">
              <img
                src="/src/Images/Menu.png"
                alt="Menu"
                className="w-6 h-6"
              />
            </Link>
            <p className="text-white text-xl font-bold">Takeoff Tracker</p>
          </div>

          <div className="flex flex-wrap items-center space-x-4 mt-4 lg:mt-0">
            <Link to="/manager/manager">
              <button className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300">
                Home
              </button>
            </Link>

            <div className="mt-4 lg:mt-0 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300">
              <Logout />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar2;
