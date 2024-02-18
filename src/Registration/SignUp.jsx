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
    if (name === "" || email === "" || password === "") {
      return toast.error("all fields are required");
    }
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(users);
      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      setName("");
      setEmail("");
      setPassword("");
      toast.success("your account have been created", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      alert("error 404");
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <img src={amazon_logo} alt="Amazon.in" className="h-20 w-26" />
      </div>
      <div className="justify-center flex">
        <div className="p-4 border w-[400px] bg-slate-100 rounded-md">
          <p className="text-2xl font-semibold mb-4">Create account</p>
          <div className="mb-4">
            <p className="font-semibold">Your name</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First and last name"
              className="w-full h-[40px] pl-2 outline-none border-none"
            />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Email</p>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[40px] pl-2 outline-none border-none"
            />
          </div>
          <div>
            <p className="font-semibold">Password</p>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[40px] pl-2 outline-none border-none"
            />
          </div>
          <div className="mb-4">
            <p className="text-[14px]">
              Passwords must be at least 6 characters.
            </p>
          </div>
          <div
            className="item-center font-semibold flex justify-center border p-2 rounded-lg bg-primary hover:opacity-75 transition-opacity cursor-pointer"
            onClick={signUp}
          >
            <p>Create your Amazon account</p>
          </div>
          <div className="mt-4">
            <p className=" text-[14px]">
              By creating an account or logging in, you agree to Amazon's
              Conditions of Use and Privacy Policy.
            </p>
          </div>
          <hr className="mt-6" />
          <div className="mt-5">
            <span>Already have an account?</span>
            <Link to="/signin">
              <span className="ml-2 text-cyan-700">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
