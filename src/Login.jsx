import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("rudra@gmail.com");
  const [password, setPassword] = useState("Rudra@123456");

  // Handle Login
  const handleLogin = async () => {
    try{
      const result = await axios.post("http://localhost:5000/login", {
        email : emailId,
        password : password
      },{withCredentials : true});
      console.log(result)
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className="flex justify-center m-16">
      <div className="card card-border bg-base-300 w-96 flex justify-center ">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          {/* Input for Email and password */}
          <div>
            {/* Email */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                type="text"
                className="input"
                placeholder="Type here"
              />
            </fieldset>
            {/* Password */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="input"
                placeholder="Type here"
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center ">
            <button onClick={() => handleLogin()} className="btn btn-primary w-30">Login!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
