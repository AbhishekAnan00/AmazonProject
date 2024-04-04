import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import Model from "../Model/Model";
import { fireDB } from "../../Firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

export const Cart = () => {
  const { cart, totalPrice, shippingFees, clearCart } = useCartContext();

  //payment integration with Razorpay
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    // validation
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    var options = {
      key: import.meta.env.VITE_API_KEY_RAZORPAY,
      key_secret: import.meta.env.VITE_SECRET_KEY_RAZORPAY,
      amount: parseInt(totalPrice),
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "Amazon Payment",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);
        toast.success("Payment Successful");
        const paymentId = response.razorpay_payment_id;
        const orderInfo = {
          CartItem,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId,
        };
        try {
          const orderRef = collection(fireDB, "order");
          addDoc(orderRef, orderInfo);
        } catch (error) {
          console.log("error");
        }
      },

      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };
  return (
    <>
      <Layout>
        <div className="cartitem-cart bg-white shadow-lg pl-10 pt-4 phone-sm:pl-2 lapi:pl-10">
          <p className="font-bold text-3xl">Shopping Cart</p>
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
          <hr className="mt-10" />
        </div>
        <hr className="mt-4" />
        <div className=" w-full flex justify-around ">
          <Link to="/products">
            <button className="border border-yellow-400 bg-primary text-black hover:opacity-75 transition-opacity rounded-2xl font-semibold p-[6px] w-42 mt-5 cursor-pointer ">
              continue shopping
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="border border-orange-400 bg-orange-500 text-black  hover:opacity-75 transition-opacity rounded-2xl font-semibold p-[4px] w-32 mt-5 cursor-pointer "
          >
            Clear Cart
          </button>
        </div>
        <div className="p-4 w-96 text-xl lapi:right-0 lapi:top-32 lapi:absolute phone-sm:block phone-sm:w-full lapi:w-96">
          <div className="flex justify-between mb-1">
            <p>subtotal:</p>
            <p>
              <FormatPrice price={totalPrice} />
            </p>
          </div>
          <hr />
          <div className="flex justify-between mb-1">
            <p>shipping fee:</p>
            <p>
              <FormatPrice price={shippingFees} />
            </p>
          </div>
          <hr />
          <div className="flex justify-between mb-1">
            <p className="font-semibold">order total:</p>
            <p className="font-semibold">
              <FormatPrice price={totalPrice + shippingFees} />
            </p>
          </div>
          {/* <button className="border border-yellow-400 bg-primary text-black  hover:opacity-75 transition-opacity rounded-2xl font-semibold p-[5px] w-full mt-5 cursor-pointer items-center">
            Proceed to Buy
          </button> */}
          <Model
            name={name}
            address={address}
            pincode={pincode}
            phoneNumber={phoneNumber}
            setName={setName}
            setAddress={setAddress}
            setPincode={setPincode}
            setPhoneNumber={setPhoneNumber}
            buyNow={buyNow}
          />
        </div>
      </Layout>
    </>
  );
};
