import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import { Layout } from "../Layout/Layout";
import { FormatPrice } from "../FormatPrice/FormatPrice";

export const Order = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userid = userData?.user?.uid;
  const { order } = useProductContext();

  if (!userid) {
    return (
      <Layout>
        <div className="px-4 mt-10 text-center text-xl text-red-600">
          Please sign in to view your orders.
        </div>
      </Layout>
    );
  }

  // Filter orders that belong to the logged-in user
  const userOrders = order.filter((obj) => obj.userid === userid);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
        {userOrders.length === 0 ? (
          <p className="text-center text-gray-600">No orders found.</p>
        ) : (
          userOrders.map((ord) => {
            // Calculate total for each order (price * amount for each item)
            const orderTotal = ord.cartItems?.reduce(
              (acc, item) => acc + item.price * item.amount,
              0
            );
            return (
              <div key={ord.id} className="bg-white rounded-lg shadow mb-8">
                {/* Order Header */}
                <div className="border-b px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <p className="text-sm text-gray-600">
                      Order Date: {ord.date}
                    </p>
                    <p className="text-sm text-gray-600">
                      Payment ID: {ord.paymentId}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="text-sm text-gray-600">
                      Delivered to: {ord.addressInfo?.name},{" "}
                      {ord.addressInfo?.address}
                    </p>
                    <p className="text-sm text-gray-600">
                      Phone: {ord.addressInfo?.phoneNumber}
                    </p>
                  </div>
                </div>
                {/* Order Items */}
                <div className="p-6">
                  <div className="grid gap-4">
                    {ord.cartItems?.length > 0 ? (
                      ord.cartItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row gap-4 border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full sm:w-24 rounded-md object-contain"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                            <p className="text-sm text-gray-800 font-medium">
                              Quantity: {item.amount}
                            </p>
                            <p className="text-sm text-gray-800 font-medium">
                              Price: <FormatPrice price={item.price} />
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600">No items in this order.</p>
                    )}
                  </div>
                  {/* Order Total */}
                  <div className="flex justify-end border-t pt-4">
                    <p className="text-lg font-bold">
                      Order Total: <FormatPrice price={orderTotal || 0} />
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
};

export default Order;
