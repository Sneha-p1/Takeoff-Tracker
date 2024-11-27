import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaHistory, FaRegCalendarAlt, FaSignOutAlt } from 'react-icons/fa'; 
import Logout from './Logout';

const UserSidebar = () => {
    const [username, setUsername] = useState([]);

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const res = await fetch('/api/username');
                const data = await res.json();
                setUsername(data);
                console.log(data, "ghgh");
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchUsername();
    }, []);

    return (
        <div className="bg-white w-52 h-[593px] shadow-lg rounded-lg p-4">
            {/* User Profile Section */}
            <div className="flex items-center justify-center flex-col">
                <img src="/src/Images/user.png" className="w-14 h-14 border-2 rounded-full border-blue-400 mb-3" alt="User" />
                <p className="text-center text-lg font-semibold text-gray-700">{username}</p>
            </div>

            <br />

            {/* Sidebar Links */}
            <div className="space-y-6">
                {/* Apply Leave */}
                <div className="flex items-center space-x-3">
                    <FaRegCalendarAlt className="text-xl text-blue-600" />
                    <Link to="/user-Dashboard">
                        <button className="text-gray-700 hover:text-blue-600 font-medium">Apply Leave</button>
                    </Link>
                </div>

                {/* Leave History */}
                <div className="flex items-center space-x-3">
                    <FaHistory className="text-xl text-blue-600" />
                    <Link to="/Leave-History">
                        <button className="text-gray-700 hover:text-blue-600 font-medium">Leave History</button>
                    </Link>
                </div>

                {/* Leave Count */}
                <div className="flex items-center space-x-3">
                    <FaRegUser className="text-xl text-blue-600" />
                    <Link to="/Leave-Balance">
                        <button className="text-gray-700 hover:text-blue-600 font-medium">Leave Count</button>
                    </Link>
                </div>

                {/* Logout */}
                <div className="flex items-center space-x-3">
                    <FaSignOutAlt className="text-xl text-red-600" />
                    <div className="ml-2">
                        <Logout />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSidebar;
