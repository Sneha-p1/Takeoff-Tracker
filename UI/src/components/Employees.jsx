import React, { useEffect, useState } from 'react'

const Employees = () => {

  const [UserDetails, setUserDetails] = useState([]);
  const userType = ('user'); 

  useEffect(() => {

  const fetchUserDetails = async () => {
      try {
          console.log("tghj")
        console.log(userType);
          const response = await fetch(`/api/userdetails/${userType}`);
          const data = await response.json()
          setUserDetails(data);
      } catch (error) {
          console.error('Error fetching leave requests:', error);
      }
  };
  fetchUserDetails();
}, [userType]);



  return (
    <>
    <div className="bg-white rounded shadow-xl p-4 mx-auto mt-10 w-[1077px]">
    <div className="text-2xl font-bold text-center mb-6 text-black">Employee List</div>
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Mobile</th>
                  {/* <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Leave Count</th> */}
                </tr>
              </thead>
              <tbody id="UserDetails">
                {UserDetails.map(employee => (
                     <tr key={employee._id} className="border-b border-gray-200">
                         <td className="px-6 py-4">{employee.username}</td>
                         <td className="px-6 py-4">{employee.userRoll}</td>
                         <td className="px-6 py-4">{employee.email}</td>
                         <td className="px-6 py-4">{employee.mobile}</td>
                         {/* <td className="px-6 py-4">{employee.count}</td> */}
                     </tr>
            ))}
              </tbody>
            </table>
          </div>

    </>
  )
}

export default Employees