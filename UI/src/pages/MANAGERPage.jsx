import React from 'react'
import { Link } from 'react-router-dom'
import { MdGroup } from 'react-icons/md' 
import { BsFileEarmarkCheck } from 'react-icons/bs'; 
import { AiOutlineHistory } from 'react-icons/ai';
import Navbar2 from '../components/Navbar2';


const MANAGERPage = () => {
    return (
    <>
        <Navbar2 />
            
        <div className="flex flex-wrap justify-center gap-6 mt-20">
                
            {/* Button: Add Users */}
            <Link to="/manager/Leave">
                <button
                    className="flex items-center justify-center w-64 h-32 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-xl transition-transform transform hover:scale-105"
                >
                    <BsFileEarmarkCheck className="mr-3 text-2xl" />
                    <span className="text-lg">Leave Request</span>
                </button>
            </Link>
                
            {/* Button: Manager Leave Requests */}
            <Link to="/manager/Leave-History">
                <button
                    className="flex items-center justify-center w-64 h-32 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-xl transition-transform transform hover:scale-105"
                >
                    <AiOutlineHistory className="mr-3 text-2xl" />
                    <span className="text-lg">Leave History</span>
                </button>
            </Link>

            {/* Button: Manage Users */}
            <Link to="/manager/employees">
                <button
                    className="flex items-center justify-center w-64 h-32 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-xl transition-transform transform hover:scale-105"
                >
                    <MdGroup className="mr-3 text-2xl" />
                    <span className="text-lg">Employee List</span>
                </button>
            </Link>

        

        </div>
    </>
  )
}

export default MANAGERPage
