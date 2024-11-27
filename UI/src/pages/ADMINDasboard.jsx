import React from 'react'
import { Link } from 'react-router-dom'
import { MdAssignment, MdGroup, MdAdd } from 'react-icons/md' // Importing icons for buttons
import Navbar3 from '../components/Navbar3'

const ADMINDashboard = () => {
    return (
    <>
        <Navbar3 />
            
        <div className="flex flex-wrap justify-center gap-6 mt-20">
                
            {/* Button: Add Users */}
            <Link to="/admin/addallusers">
                <button
                    className="flex items-center justify-center w-64 h-32 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-xl transition-transform transform hover:scale-105"
                >
                    <MdAdd className="mr-3 text-2xl" />
                    <span className="text-lg">Add Users</span>
                </button>
            </Link>
                
            {/* Button: Manager Leave Requests */}
            <Link to="/admin/adminDashboard">
                <button
                    className="flex items-center justify-center w-64 h-32 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-xl transition-transform transform hover:scale-105"
                >
                    <MdAssignment className="mr-3 text-2xl" />
                    <span className="text-lg">Manager Leave Requests</span>
                </button>
            </Link>

            {/* Button: Manage Users */}
            <Link to="/admin/manage-users">
                <button
                    className="flex items-center justify-center w-64 h-32 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-xl transition-transform transform hover:scale-105"
                >
                    <MdGroup className="mr-3 text-2xl" />
                    <span className="text-lg">Manage Users</span>
                </button>
            </Link>

            {/* Button: Manage Managers */}
            <Link to="/admin/manage-managers">
                <button
                    className="flex items-center justify-center w-64 h-32 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl shadow-xl transition-transform transform hover:scale-105"
                >
                    <MdGroup className="mr-3 text-2xl" />
                    <span className="text-lg">Manage Managers</span>
                </button>
            </Link>

        </div>
    </>
  )
}

export default ADMINDashboard
