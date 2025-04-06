import React, { useState } from "react";
import amazon_logo from "../assets/amazon_logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../Firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);

      setName("");
      setEmail("");
      setPassword("");

      toast.success("Your account has been created", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
   <Link to="/"><div className="flex justify-center bg-gray-100  mb-6 rounded-md">
      <img src={amazon_logo} alt="Amazon Logo" className="h-14" />
    </div></Link> 
  

      <div className="w-full max-w-md bg-slate-100 p-6 rounded-md shadow">
        <h2 className="text-2xl font-semibold mb-6">Create account</h2>

        <div className="mb-4">
          <label className="font-semibold block mb-1">Your name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First and last name"
            className="w-full h-10 pl-3 border rounded focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 pl-3 border rounded focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-2">
          <label className="font-semibold block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 pl-3 border rounded focus:outline-none"
            placeholder="At least 6 characters"
          />
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Passwords must be at least 6 characters.
        </p>

        <button
          onClick={signUp}
          className="w-full bg-primary text-black font-semibold py-2 rounded-lg hover:opacity-80 transition"
        >
          Create your Amazon account
        </button>

        <p className="text-sm mt-4">
          By creating an account or logging in, you agree to Amazon's{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Conditions of Use
          </span>{" "}
          and{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Privacy Policy
          </span>.
        </p>

        <hr className="mt-6" />

        <div className="mt-4 text-sm text-center">
          <span>Already have an account?</span>
          <Link to="/signin">
            <span className="ml-2 text-cyan-700 font-medium hover:underline">
              Sign in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
