import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import img from '../Images/register.jpg';
import { useState } from "react";
const styles = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};


const SignUP = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("admin");
    const navigate = useNavigate();
  
    // signup
    const signupSubmit = async (userDetails) => {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      // return;
      console.log(res);
      if (res.ok) {
        toast.success(`Signup success`);
        return navigate("/admin/log-in");
      } else {
        toast.error(`Please check the input data`);
        return navigate("/admin/sign-up");
      }
    };
  
    const submitForm = (e) => {
      e.preventDefault();
      const userDetails = {
        userName,
        password,
        email,
        userType
      };
  
      signupSubmit(userDetails);
    };
  

  return (
    <>
    <div style={styles} className="flex items-center justify-center min-h-screen">
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8  w-96 mx-4">
        <h2 className="text-white text-3xl font-semibold mb-6 text-center">Sign up</h2>
        
        <form onSubmit={submitForm}>
            <div className="mb-4">
                 <input 
                  id="name"
                  name="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-transparent focus:border-blue-500 focus:bg-opacity-30 focus:outline-none" type="text" placeholder="Name"/>
            </div>
            <div className="mb-6">
                <input 
                 id="email"
                 name="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-transparent focus:border-blue-500 focus:bg-opacity-30 focus:outline-none" type="text" placeholder="Email" />
            </div>
            <div className="mb-6">
                <input 
                 id="password"
                 name="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-transparent focus:border-blue-500 focus:bg-opacity-30 focus:outline-none" type="password" placeholder="Password" />
            </div>

            <label
                htmlFor="type"
                className="block text-white font-bold  mb-2"
              >
                Admin
              </label>
            <select
                id="userType"
                name="userType"
                className="border rounded w-full py-2 px-3"
                required
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                
                {/* <option value="user">User</option>
                <option value="manager">Manager</option> */}
                <option value="admin">Admin</option>
     
              </select>
            <button type="submit" className="w-full mt-6 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none">Signup</button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/admin/log-in" className="text-cyan-500 hover:text-cyan-300 hover:underline">
              Login
            </Link>
          </p>

        </form>
    </div>
</div>
    </>
  )
}

export default SignUP