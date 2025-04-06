import React from "react";
import amazon_logo from "./assets/amazon_logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  const backtotop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="mt-[700px] bg-slate-800 text-white text-sm">

      <div
        className="text-center bg-slate-700 hover:bg-slate-900 p-4 cursor-pointer font-semibold"
        onClick={backtotop}
      >
        Back to top
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-8 py-10 bg-slate-800 text-sm">
        <ul className="space-y-1">
          <p className="font-bold mb-2">Get to Know Us</p>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Science</li>
        </ul>

        <ul className="space-y-1">
          <p className="font-bold mb-2">Connect with Us</p>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>

        <ul className="space-y-1">
          <p className="font-bold mb-2">Make Money with Us</p>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Protect and Build Your Brand</li>
          <li>Amazon Global Selling</li>
          <li>Become an Affiliate</li>
          <li>Fulfilment by Amazon</li>
          <li>Advertise Your Products</li>
          <li>Amazon Pay on Merchants</li>
        </ul>

        <ul className="space-y-1">
          <p className="font-bold mb-2">Let Us Help You</p>
          <li>COVID-19 and Amazon</li>
          <li>Your Account</li>
          <li>Returns Centre</li>
          <li>100% Purchase Protection</li>
          <li>Amazon App Download</li>
          <li>Help</li>
        </ul>
      </div>
      <Link to="/">
        <div className="flex justify-center items-center bg-slate-700 border-t border-slate-600 py-3">
          <img src={amazon_logo} alt="amazon" className="h-8" />
        </div>
      </Link>
      <div className="bg-slate-800 text-center py-2 space-y-1 text-xs">
        <div className="space-x-3">
          <span>Conditions of Use & Sale</span>
          <span>Privacy Notice</span>
          <span>Interest-Based Ads</span>
        </div>
        <div>© 2025, Amazon.com, Inc. or its affiliates</div>
      </div>
    </footer>
  );
};
