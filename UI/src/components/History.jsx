// 


import React, { useEffect, useState } from 'react';

const History = () => {
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

  const [leaveHistory, setLeaveHistory] = useState([]);
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    const fetchLeaveHistory = async () => {
      try {
        console.log("gfdhsf");
        console.log(userName);
        const response = await fetch(`/api/leaveHistory/${username}`);
        const data = await response.json();
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
          <div className="text-3xl font-bold text-center mb-8 text-blue-800">Leave History</div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-blue-200">
                  <th className="px-6 py-3 text-xs font-semibold text-blue-900 uppercase tracking-wider text-center">
                    Leave Type
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-blue-900 uppercase tracking-wider text-center">
                    From Date
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-blue-900 uppercase tracking-wider text-center">
                    To Date
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-blue-900 uppercase tracking-wider text-center">
                    Description
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-blue-900 uppercase tracking-wider text-center">
                    Posting Date
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-blue-900 uppercase tracking-wider text-center">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody id="userLeaveHistory">
                {leaveHistory.map((leave, index) => (
                  <tr
                    key={leave._id}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-blue-100 transition-all`}
                  >
                    <td className="px-6 py-4 text-center">{leave.leaveType}</td>
                    <td className="px-6 py-4 text-center">
                      {new Date(leave.fromDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {new Date(leave.toDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-center">{leave.detail}</td>
                    <td className="px-6 py-4 text-center">
                      {new Date(leave.postingDate).toLocaleDateString()}
                    </td>
                    <td
                      className={`px-6 py-4 text-center font-semibold ${
                        leave.status === 'Approved'
                          ? 'text-green-600'
                          : leave.status === 'Rejected'
                          ? 'text-red-600'
                          : 'text-yellow-600'
                      }`}
                    >
                      {leave.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </>
  );
};

export default History;
