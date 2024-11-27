import React from 'react'
import Navbar from '../components/Navbar'
import UserSidebar from '../components/UserSidebar'
import History from '../components/History'

const LeaveHistory = () => {
  return (
    <>
    <Navbar/>
<div className="flex">
  
<UserSidebar/> 
<History/>
  
</div>
    
    </>
  )
}

export default LeaveHistory