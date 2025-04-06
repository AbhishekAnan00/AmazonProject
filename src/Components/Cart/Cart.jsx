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

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (!name || !address || !pincode || !phoneNumber) {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
      });
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    const options = {
      key: "rzp_test_RuEELZW2EUDlp7",
      key_secret: "OAVPg05b6R6DM7POKwp63hMt",
      amount: parseInt(totalPrice),
      currency: "INR",
      name: "Amazon Payment",
      description: "for testing purpose",
      order_receipt: `order_rcptid_${name}`,
      handler: async (response) => {
        try {
          toast.success("Payment Successful");
          const paymentId = response.razorpay_payment_id;
          const user = JSON.parse(localStorage.getItem("user"));

          const orderInfo = {
            cartItems: cart,
            addressInfo,
            date: new Date().toLocaleString(),
            email: user?.user?.email || "N/A",
            userid: user?.user?.uid || "N/A",
            paymentId,
          };

          const orderRef = collection(fireDB, "order");
          await addDoc(orderRef, orderInfo);
        } catch (error) {
          console.error("Order saving failed:", error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <Layout>
      <div className="bg-white shadow-md px-4 py-6 space-y-6">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => <CartItem key={item.id} {...item} />)
        )}

        <div className="flex flex-wrap justify-between gap-4 mt-6">
          <Link to="/products">
            <button className="bg-primary text-black border border-yellow-400 px-6 py-2 rounded-xl font-semibold hover:opacity-80 transition">
              Continue Shopping
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="bg-orange-500 text-black border border-orange-400 px-6 py-2 rounded-xl font-semibold hover:opacity-80 transition"
          >
            Clear Cart
          </button>
        </div>

        <div className="w-full max-w-md mt-8 p-4 border rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span><FormatPrice price={totalPrice} /></span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Fee:</span>
            <span><FormatPrice price={shippingFees} /></span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Order Total:</span>
            <span><FormatPrice price={totalPrice + shippingFees} /></span>
          </div>

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
      </div>
    </Layout>
  );
};
