import React, { useEffect, useState } from 'react';

const Manageuser = () => {

  const [userDetails, setuserDetails] = useState([]);
  const userType = ('user'); 

  useEffect(() => {
    const fetchuserDetails = async () => {
      try {
        console.log("gfdhsf")
        console.log(userType);
        const response = await fetch(`/api/users/${userType}`);
        const data = await response.json()
        setuserDetails(data);
      } catch (error) {
        console.error('Error fetching leave history:', error);
      }
    };

    fetchuserDetails();
  }, [userType]);



  return (
    <div className="bg-white rounded w-[900px] mx-auto mt-10 shadow p-4 mb-6">
      <div className="text-2xl font-bold text-center mb-6 text-black">Employees Information</div>
      <h3 className="text-lg font-semibold mb-4 mt-9">Users Details</h3>
      
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Password</th>
            <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">User Type</th>
            <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">User Roll</th>
            {/* <th className="px-6 py-3 text-sm font-medium text-black uppercase tracking-wider">Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {userDetails.map(user => (
            <tr key={user._id} className="border-b border-gray-200">
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.password}</td>
              <td className="px-6 py-4">{user.userType}</td>
              <td className="px-6 py-4">{user.userRoll}</td>
              {/* <td className="px-6 py-4">

                <div className='flex'>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={() => handleEditUsers(user._id)}>Edit</button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 ml-2"
                    onClick={() => handleDeleteUsers(user._id)}>Delete</button>
                </div>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manageuser;
