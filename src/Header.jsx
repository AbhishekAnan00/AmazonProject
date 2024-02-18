import React from "react";
import amazon_logo from "./assets/amazon_logo.png";
import { MdLocationPin } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useCartContext } from "./Context/CartContext";
import { useFilterContext } from "./Context/FilterContext";

export const Header = () => {
  const { totalItem } = useCartContext();
  //search
  const {
    updateFilterValue,
    filters: { text },
    allProducts,
  } = useFilterContext();

  //to category with option
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem.company;
    });
    return (newVal = [...new Set(newVal)]);
  };
  const getCompanyData = getUniqueData(allProducts);
  //user
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user?.user?.email);
  //user logout
  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/signin";
  };
  return (
    <div className="header">
      <nav className="flex justify-evenly  items-center bg-secondary text-white p-1">
        <div>
          <Link to="/">
            <img
              src={amazon_logo}
              alt="logo"
              className=" h-16 w-28 hover:border cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-col hover:border">
          <div>
            <p className="text-[12px]">Delivery</p>
          </div>
          <div>
            <MdLocationPin />
          </div>
          <div>
            <p className="font-bold">india</p>
          </div>
        </div>
        <div className="flex border-2 rounded-lg border-transparent hover:border-orange-400">
          <select
            className="h-10 bg-slate-200 font-poppin text-black outline-none border-none rounded-tl-md rounded-bl-md p-2 w-14 cursor-pointer"
            onClick={updateFilterValue}
            name="company"
          >
            <option>All</option>
            {getCompanyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem}>
                  {curElem}
                </option>
              );
            })}
          </select>

          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search Amazon.in"
            className=" w-[500px] h-10 font-semibold font-poppin text-black pl-2 outline-none border-none cursor-pointer"
          />

          <div className=" bg-orange-300 h-10 w-10 flex items-center justify-center text-2xl text-black rounded-tr-md rounded-br-md cursor-pointer">
            <IoSearch />
          </div>
        </div>
        <div className="hover:border flex gap-2">
          <img
            src="https://www.sic-info.org/wp-content/uploads/2014/01/in.png"
            alt="flag"
          />
          <p className="font-bold">EN</p>
        </div>

        <div className="hover:border cursor-pointer">
          {user ? (
            <p onClick={logout} className="logout">
              Hello , Logout
            </p>
          ) : (
            <Link to="/signin">
              <p>
                <span> Hello,Sign in</span>
              </p>
            </Link>
          )}
          <p className="font-bold">Acount & lists</p>
        </div>
        <Link to="/order">
          <div className="hover:border cursor-pointer">
            <p className="font-bold">Return</p>
            <p>& Orders</p>
          </div>
        </Link>
        <div className="hover:border flex items-center cursor-pointer">
          <Link to="/cart">
            <LiaShoppingCartSolid className="text-5xl cursor-pointer" />
          </Link>
          <p className="mt-4 font-bold">Cart </p>
          <p className="relative top-[-12px] right-8 text-2xl text-orange-400 ">
            {totalItem}
          </p>
        </div>
      </nav>
    </div>
  );
};
