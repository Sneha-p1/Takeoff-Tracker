import React, { useEffect, useState } from 'react';

const ManagerLeavehistory = () => {

  const [username, setUsername] = useState([]);
   
  useEffect(() =>{
      const fetchUsername = async ()=>{
          try {
              const res = await fetch('/api/manager/username');
              const data = await res.json()
              setUsername(data)
              console.log(data,"ghgh")
          }
          catch (error) {
              console.log("error", error)
          }
      };
      fetchUsername()
  },[username])



  const [leaveHistory, setLeaveHistory] = useState([]);
  const userName = localStorage.getItem('userName'); 

  useEffect(() => {
    const fetchLeaveHistory = async () => {
      try {
        console.log("gfdhsf")
        // console.log(username);
         console.log(userName);
        const response = await fetch(`/api/manager/leaveHistory/${username}`);
        const data = await response.json()
        setLeaveHistory(data);
      } catch (error) {
        console.error('Error fetching leave history:', error);
      }
    };

    fetchLeaveHistory();
  }, [username]);

  return (
    <>
      <div className="bg-white rounded shadow-xl p-4 mx-auto mt-10 w-[1077px]">
        <div className="text-2xl font-bold text-center mb-6 text-black">Manager Leave History</div>
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Leave Type</th>
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">FromDate</th>
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">ToDate</th>
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Posting Date</th>
              <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody id="managerLeaveHistory">
            {leaveHistory.map(leave => (
              <tr key={leave._id} className="border-b border-gray-200">
                <td className="px-6 py-4">{leave.leaveType}</td>
                <td className="px-6 py-4">{new Date(leave.fromDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">{new Date(leave.toDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">{leave.detail}</td>
                <td className="px-6 py-4">{new Date(leave.postingDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManagerLeavehistory;
