import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import img from '../Images/register.jpg';
const styles = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};

const Userlogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const navigate = useNavigate();

const loginSubmit = async (e) => {
  e.preventDefault();
  const loginDetails = {
      email,
      password,
      userType
  };

  const res = await fetch("/api/Userlogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDetails),
  });
  console.log(res, "login res from /Userlogin");
  if (res.ok) { 
    // console.log('/login resp json', data)
    const data =await res.json();
    console.log(data)
    const userType = data.userType;
    // console.log('usertype ', userType)
    if(data.userType==='user'){
    toast.success(`Logged in as : ${userType}`);
    return navigate("/user-Dashboard");
  }
    else if(data.userType==='Manager'){
      toast.success(`Logged in as : ${userType}`);
      return navigate("/manager/manager");
    }

  } else {
    toast.error(`Please check your credentials`);
    return navigate("/Userlog-in");
  }

}



  return (
    <>
    <div style={styles} className="flex items-center justify-center min-h-screen">
      
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8  w-96 mx-4">
          <h2 className="text-white text-3xl font-semibold mb-6 text-center">Login</h2>
  
          <form onSubmit={loginSubmit}>
              <div className="mb-4">
                  <label 
                  htmlFor="email"
                  className="block text-white text-sm font-bold mb-2">Email</label>
                  <input 
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-transparent focus:border-blue-500 focus:bg-opacity-30 focus:outline-none text-sm" type="text" placeholder="Email" />
              </div>
              <div className="mb-6">
                  <label 
                  htmlFor="password" 
                  className="block text-white text-sm font-bold mb-2">Password</label>
                  <input 
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-transparent focus:border-blue-500 focus:bg-opacity-30 focus:outline-none text-sm" type="password" placeholder="Password" />
                      </div>
                      

                      <label
                htmlFor="type"
                className="block text-white font-bold  mb-2"
              >
                UserType
              </label>
            <select
                id="userType"
                name="userType"
                className="border rounded w-full py-2 px-3 "
                required
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                
                <option value="user">User</option>
                <option value="Manager">Manager</option>
     
              </select>




              <button type="submit"  className="w-full p-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none mt-6 ">Login</button>
                      <br />
                      
            {/* <Link to="#" className="text-gray-950 text-sm hover:underline">
              Forgot Password?
            </Link> */}
        </form>
      </div>
  </div>
    </>
  )
}

const getUserType = () => {
    const authToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("Authtoken"))
      ?.split("=")[1];
    console.log("documemnt.cookie vslue", authToken);
  
    const decoded = jwtDecode(authToken);
    console.log("decoded", decoded);
    const userType = decoded.userType;
    console.log("usertype", userType);
    return userType;
};
  
const getUserName = () => {
  const authToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("Authtoken"))
    ?.split("=")[1];
  console.log("documemnt.cookie vslue", authToken);

  const decoded = jwtDecode(authToken);
  console.log("decoded", decoded);
  const userName = decoded.username;
  console.log("userName", userName);
  return userName;
};
  
export {Userlogin as default, getUserType,getUserName}