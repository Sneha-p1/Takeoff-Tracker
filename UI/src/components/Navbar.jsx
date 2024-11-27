import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="flex flex-wrap items-center bg-gradient-to-r from-blue-900 to-red-950 shadow-lg p-4">
        <nav className="flex w-full justify-between items-center">
          <div className="flex items-center">
            <input type="button" className="hidden" />
            <Link to="/user-Dashboard">
              <img
                src="/src/Images/Menu.png"
                alt="Menu"
                className="w-6 h-6 pl-2"
              />
            </Link>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-white text-xl font-medium">Takeoff Tracker</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
