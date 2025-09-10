import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("rudra@gmail.com");
  const [password, setPassword] = useState("Rudra@123456");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = async () => {
    try {
      const result = await axios.post(
        BASE_URL + "/login",
        {
          email: emailId,
          password: password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(result.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something Went Wrong")
      console.log(err);
    }
  };

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
                className="input w-full"
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
                className="input w-full"
                placeholder="Type here"
              />
            </fieldset>
          </div>
          <div className="card-actions flex-col justify-center w-full ">
            <p className="text-red-500">{error}</p>
            <button
              onClick={() => handleLogin()}
              className="btn btn-primary w-full"
            >
              Login!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
