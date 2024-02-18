import React, { useContext } from "react";
import amazon_logo from "./assets/amazon_logo.png";

export const Footer = () => {

  const backtotop = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="footer mt-[420px]">
      <div className="footer-panel-1  text-center text-white bg-slate-500 hover:bg-slate-400 p-4">
        <p onClick={backtotop} className=" cursor-pointer ">Back to top</p>
      </div>
      <div className="footer-panel-2 grid grid-cols-4 p-20 gap-10 bg-slate-700 text-white">
        <ul className="flex flex-col">
          <p className="font-bold">Get to Know Us</p>
          <a>About Us</a>
          <a>Careers</a>
          <a>Press Releases</a>
          <a>Amazon Science</a>
        </ul>
        <ul className="flex flex-col">
          <p className="font-bold">Connect with Us</p>
          <a>Facebook</a>
          <a>Twitter</a>
          <a>Instagram</a>
        </ul>
        <ul className="flex flex-col">
          <p className="font-bold">Make Money with Us</p>
          <a>Sell on Amazon</a>
          <a>Sell under Amazon Accelerator</a>
          <a>Protect and Build Your Brand</a>
          <a>Amazon Global Selling</a>
          <a>Become an Affiliate</a>
          <a>Fulfilment by Amazon</a>
          <a>Advertise Your Products</a>
          <a>Amazon Pay on Merchants</a>
        </ul>
        <ul className="flex flex-col">
          <p className="font-bold">Let Us Help You</p>
          <a>COVID-19 and Amazon</a>
          <a>Your Account</a>
          <a>Returns Centre</a>
          <a> 100% Purchase Protection</a>
          <a>Amazon App Download</a>
          <a>Help</a>
        </ul>
      </div>
      <div className="footer-panel-3 flex justify-center bg-slate-700 border-t-2 p-2 ">
        <img src={amazon_logo} alt="amazon" className="h-10 w-20" />
      </div>
      <div className="footer-panel-4">
        <div className="copyright-notice flex gap-2 justify-center bg-slate-800 text-white p-1">
          <div className="text-[14px]">
            <a>Conditions of Use & Sales</a>
            <a>Privacy Notice</a>
            <a>Interest Based-Ads</a>
          </div>
        </div>
        <div className="copyright text-center gap-2 bg-slate-800 text-white text-[14px]">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};
