import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <section className="bg-cover bg-center bg-hero text-black py-20 px-6">
        <div className="max-w-4xl mt-32 ml-40 text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Welcome to Takeoff Tracker</h1>
            <p className="text-slate-200 mb-8 text-white">Your ultimate leave letter management app. Simplify your leave management process with ease and efficiency.</p>
          <Link to="/Userlog-in"><button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg font-semibold inline-block">Employee Login</button></Link>  
          <Link to="/admin/log-in"><button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg font-semibold inline-block ml-10">Admin Login</button></Link> 
        </div>
    </section>
    </>
  )
}

export default Home