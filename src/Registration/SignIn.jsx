import React, { useState } from "react";
import amazon_logo from "../assets/amazon_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import { toast } from "react-toastify";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigation = useNavigate();
  const signIn = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, Password);
      toast.success("signin successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem("user", JSON.stringify(result));
      navigation("/");
    } catch (error) {
      alert("No account exits , Create account first !");
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <img src={amazon_logo} alt="Amazon.in" className="h-20 w-26" />
      </div>
      <div className="justify-center flex">
        <div className="p-4 border rounded-md w-[400px] bg-slate-100">
          <p className="text-2xl font-semibold mb-4">Sign in</p>
          <div className="mb-4">
            <p className="font-semibold">Email or mobile phone number</p>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[40px] pl-2 outline-none border-none"
            />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Password</p>
            <input
              type="text"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[40px] pl-2 outline-none border-none"
            />
          </div>
          <div
            className="text-center bg-primary text-black hover:opacity-75 transition-opacity  p-2 mb-4 w-full rounded-2xl cursor-pointer"
            onClick={signIn}
          >
            Sign in
          </div>
          <div className="mb-4">
            <p className="text-[14px]">
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
          </div>
          <div className="flex justify-center mb-4 text-[13px]">
            <p>New to Amazon?</p>
          </div>
          <Link to="/signup">
            <div
              className="item-center font-semibold flex justify-center border p-2 rounded-lg bg-slate-200 
            hover:opacity-75 transition-opacity  cursor-pointer"
            >
              <p>Create your Amazon account</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
