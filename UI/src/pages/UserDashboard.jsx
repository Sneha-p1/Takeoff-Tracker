import React from 'react'
import '../../src/App.css'
import Navbar from '../components/Navbar'
import UserSidebar from '../components/UserSidebar'
import LeaveLetter from '../components/LeaveLetter'
import img from '../Images/UserDash.jpg';

const styles = {
  backgroundImage: `url(${img})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const UserDashboard = () => {
  return (
    <>
    
<Navbar/>
<div style={styles} className="flex">
  
<UserSidebar/> 
<LeaveLetter/>
  
</div>

    
    </>
  )
}

export default UserDashboard