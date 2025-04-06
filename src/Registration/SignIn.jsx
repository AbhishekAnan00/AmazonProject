import React, { useState } from "react";
import amazon_logo from "../assets/amazon_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import { toast } from "react-toastify";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Sign in successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });

      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } catch (error) {
      toast.error("No account exists, please create one first!");
    }
  };

  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
<Link to="/"> <div className="flex justify-center bg-gray-100  mb-6 rounded-md">
   <img src={amazon_logo} alt="Amazon Logo" className="h-14" />
  </div>
</Link>
      <div className="w-full max-w-md p-6 bg-slate-100 rounded-md shadow">
        <h2 className="text-2xl font-semibold mb-6">Sign in</h2>

        <div className="mb-4">
          <label className="font-semibold block mb-1">Email or mobile number</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 pl-3 border rounded focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 pl-3 border rounded focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        <button
          onClick={signIn}
          className="w-full bg-primary text-black font-semibold py-2 rounded-2xl hover:opacity-80 transition"
        >
          Sign in
        </button>

        <p className="text-sm mt-4">
          By continuing, you agree to Amazon's{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">Conditions of Use</span>{" "}
          and{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">Privacy Notice</span>.
        </p>

        <div className="text-center mt-6 text-sm">
          <p className="mb-2">New to Amazon?</p>
          <Link to="/signup">
            <div className="border p-2 rounded-lg bg-slate-200 hover:opacity-80 transition cursor-pointer font-medium">
              Create your Amazon account
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};



