import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import { Layout } from "../Layout/Layout";
export const Order = () => {
  // const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  // const { order } = useProductContext();
  return (
    <Layout>
      <>
        <div className="lapi:grid lapi:grid-cols-2 lapi:pl-8 mt-6 phone-sm:flex phone-sm:flex-col phone-sm:pl-4">
          <div>
            <p className="text-3xl">Your Orders</p>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="search all orders"
              className="pl-3 w-80 h-8 text-blackoutline-none border-none"
            />
            <button className="bg-black text-white hover:opacity-75 transition-opacity rounded-3xl lapi:text-[14px] phone-sm:text-[12px] h-8 w-32 cursor-pointer">
              search
            </button>
          </div>
        </div>
        <hr className="mt-2"/>
        {/* <div className=" h-full pt-10">
          {order
            .filter((obj) => obj.userid == userid)
            .map((order) => {
              // order.cartItems.map()
              return (
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                  {order.CartItem.map((item) => {
                    return (
                      <div className="rounded-lg md:w-2/3">
                        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                          <img
                            src={item.image}
                            alt="product-image"
                            className="w-full rounded-lg sm:w-40"
                          />
                          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0">
                              <h2 className="text-lg font-bold text-gray-900">
                                {item.name}
                              </h2>
                              <p className="mt-1 text-xs text-gray-700">
                                {item.description}
                              </p>
                              <p className="mt-1 text-xs text-gray-700">
                                {item.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div> */}
      </>
    </Layout>
  );
};
