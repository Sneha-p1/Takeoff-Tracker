import React, { useState } from 'react';

const ManagerLeave = () => {
    const [userName, setUserName] = useState('');
    const [leaveType, setLeaveType] = useState('');
    const [detail, setDetail] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const ManagerLeaveRequest = {
            userName,
            leaveType,
            detail,
            fromDate,
            toDate,
        };

        try {
            console.log("dyutsyu")
            const token = localStorage.getItem('token');


            const response = await fetch("/api/manager/lettersend", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(ManagerLeaveRequest),
              });

        

            if (response.status === 201) {
                alert('Leave request submitted successfully');
                window.location.href = '/manager/Leave';
            }
        } catch (error) {
            console.error('There was an error submitting the leave request!', error);
            alert('Internal Server Error');
            window.location.href = '/manager/Leave';
        }
    };

    return (
        <div className="w-[800px] h-[570px] mt-3 ml-72 p-8 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg shadow-md w-full max-w-md shadow-xl">
            
                <h2 className="mb-4 text-xl">Submit Leave Request</h2>
                <form onSubmit={handleSubmit}>
             
                <div className="mb-4">
                    <label className="block mb-2">Manager Name</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full p-1 border border-gray-300 rounded"
                        required
                    />
                </div>



            <div className="mb-4">
                        <label className="block mb-2">Leave Type</label>
                  <div className='flex gap-6'>     
                        <div className="mb-2">
                            <input
                                type="radio"
                                id="sickLeave"
                                name="leaveType"
                                value="Sick Leave"
                                checked={leaveType === 'Sick Leave'}
                                onChange={(e) => setLeaveType(e.target.value)}
                                className="mr-2"
                            />
                            <label htmlFor="sickLeave">Sick Leave</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="radio"
                                id="casualLeave"
                                name="leaveType"
                                value="Casual Leave"
                                checked={leaveType === 'Casual Leave'}
                                onChange={(e) => setLeaveType(e.target.value)}
                                className="mr-2"
                            />
                            <label htmlFor="casualLeave">Casual Leave</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="radio"
                                id="annualLeave"
                                name="leaveType"
                                value="Annual Leave"
                                checked={leaveType === 'Annual Leave'}
                                onChange={(e) => setLeaveType(e.target.value)}
                                className="mr-2"
                            />
                            <label htmlFor="annualLeave">Annual Leave</label>
                        </div>
                    </div>
                    </div> 


                    <div className="mb-4">
                        <label className="block mb-2">Details</label>
                        <textarea
                            value={detail}
                            onChange={(e) => setDetail(e.target.value)}
                            className="w-full p-1 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">From Date</label>
                        <input
                            type="date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            className="w-full p-1 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">To Date</label>
                        <input
                            type="date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            className="w-full p-1 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-1 bg-blue-500 text-white rounded"
                    >
                        Submit
                    </button>
                </form>
            
        </div>
    );
};

export default ManagerLeave;
