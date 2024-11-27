import React, { useEffect, useState } from 'react';

const Admindashboard = () => {
    const [leaveRequests, setLeaveRequests] = useState([]);

    useEffect(() => {
        fetchLeaveRequests();
    }, []);

    const fetchLeaveRequests = async () => {
        try {
            console.log("tghj")
            const response = await fetch('/api/manager/leaveRequests');
            const data = await response.json()
            setLeaveRequests(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching leave requests:', error);
        }
    };

    

    const handleApproveLeave = async (id) => {
        console.log("ghdsd")
        try {
            
            const response = await fetch(`/api/manager/leaveRequests/${id}/approve`);
            const data = await response.json()
            setLeaveRequests(leaveRequests.map(leave =>
                leave._id === id ? { ...leave, status: 'Approved' } : leave
            ));
        } catch (error) {
            console.error('There was an error approving the leave request!', error);
        }
    };

    const handleRejectLeave = async (id) => {
        try {
            const response = await fetch(`/api/manager/leaveRequests/${id}/reject`);
            const data = await response.json()
            setLeaveRequests(leaveRequests.map(leave =>
                leave._id === id ? { ...leave, status: 'Rejected' } : leave
            ));
        } catch (error) {
            console.error('There was an error rejecting the leave request!', error);
        }
    };




    return (
        <div className="bg-white rounded shadow-xl p-4 mx-auto mt-10 w-[1160px]">
            <div className="text-2xl font-bold text-center mb-6 text-black">Managers Leave Requests</div>
            <h3 className="text-lg font-semibold mb-4 mt-9">Pending Leave Requests</h3>
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Employee</th>
                        <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Details</th>
                        <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Start Date</th>
                        <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">End Date</th>
                        <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {leaveRequests.map(leave => (
                        <tr key={leave._id} className="border-b border-gray-200">
                            <td className="px-6 py-4">{leave.userName}</td>
                            <td className="px-6 py-4">{leave.leaveType}</td>
                            <td className="px-6 py-4">{leave.detail}</td>
                            <td className="px-6 py-4">{leave.fromDate.split('T')[0]}</td>
                            <td className="px-6 py-4">{leave.toDate.split('T')[0]}</td>
                            <td className="px-6 py-4">{leave.status}</td>
                           
                                <td className="px-6 py-4">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                        onClick={() => handleApproveLeave(leave._id)}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 ml-2"
                                        onClick={() => handleRejectLeave(leave._id)}
                                    >
                                        Reject
                                    </button>
                                </td>



                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admindashboard;
