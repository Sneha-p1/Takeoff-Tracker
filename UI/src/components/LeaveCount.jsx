import React, { useEffect, useState } from 'react';
import { getUserName } from '../pages/LogIn';

const LeaveCount = () => {
  const userName = getUserName()
  console.log("name",userName)
  const [casualLeave, setcasualLeave]= useState(0);
  const [sickLeave, setsickLeave]= useState(0);
  const [annualLeave, setannualLeave]= useState(0);
  

  useEffect(() => {
      const fetchLeaveCounts = async () => {
          try {
            const response = await fetch(`/api/leave-count/${userName}`);
            
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
            const data = await response.json();
            console.log("eyfehe", data)
            setcasualLeave(data.casualLeave)
            setsickLeave(data.sickLeave)
            setannualLeave(data.annualLeave)
              // setLeaveCounts(data);
          } catch (error) {
              console.error('Error fetching leave counts:', error);
          }
      };

      fetchLeaveCounts();
  }, [userName]);

  return (
    <div className="flex flex-wrap justify-center m-auto gap-16">
      <div className="w-60 h-56 bg-gradient-to-r from-blue-400 to-purple-400 to-gray-300 m-auto rounded-2xl shadow-2xl">
        <h2 className="text-white text-2xl font-semibold mb-4 mt-2 text-center">Sick Leave</h2>
        <h2 className="text-white text-7xl font-semibold mb-4 mt-9 text-center">{sickLeave }</h2>
      </div>

      <div className="w-60 h-56 bg-gradient-to-r from-green-400 to-teal-400 m-auto rounded-2xl shadow-2xl">
        <h2 className="text-white text-2xl font-semibold mb-4 mt-2 text-center">Casual Leave</h2>
        <h2 className="text-white text-7xl font-semibold mb-4 mt-9 text-center">{ casualLeave}</h2>
      </div>

      <div className="w-60 h-56 bg-gradient-to-r from-yellow-400 to-orange-400 m-auto rounded-2xl shadow-2xl">
        <h2 className="text-white text-2xl font-semibold mb-4 mt-2 text-center">Annual Leave</h2>
        <h2 className="text-white text-7xl font-semibold mb-4 mt-9 text-center">{ annualLeave}</h2>
      </div>
    </div>
  );
}

export default LeaveCount;

