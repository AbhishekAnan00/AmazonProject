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
      <nav className="flex justify-evenly items-center bg-secondary text-white p-1">
        <div>
          <Link to="/">
            <img
              src={amazon_logo}
              alt="logo"
              className="nav-logo h-16 sm:hidden md:block lg:block xl:block 2xl:block hover:border cursor-pointer"
            />
          </Link>
        </div>
        <div className="nav-location flex flex-col hover:border sm:hidden md:hidden lg:hidden xl:block 2xl:block ">
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
        <div className="nav-search flex outline-none border-2 rounded-lg bg-white border-transparent hover:border-orange-400">
          <select
            className="nav-select h-full  p-2 w-14 bg-slate-200 font-poppin text-black outline-none border-none rounded-tl-md rounded-bl-md sm:hidden md:block lg:block xl:block 2xl:block  cursor-pointer"
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
            className="sm:w-100% md:w-[300px] lg:w-[400px] xl:w-[400px] 2xl:w-[500px] sm:rounded-tl-md sm:rounded-bl-md font-poppin text-black pl-2 outline-none border-none cursor-pointer"
          />

          <div className="nav-search-icon w-10 bg-orange-300  flex items-center justify-center text-2xl text-black rounded-tr-md rounded-br-md sm:rounded-tl-md sm:rounded-bl-md md:rounded-tl-md md:rounded-bl-md 2xl:rounded-tl-none 2xl:rounded-bl-none xl:rounded-tl-none xl:rounded-bl-none cursor-pointer">
            <IoSearch />
          </div>
        </div>
        <div className="hover:border flex gap-2 sm:hidden md:hidden lg:hidden xl:hidden 2xl:flex">
          <img
            src="https://www.sic-info.org/wp-content/uploads/2014/01/in.png"
            alt="flag"
          />
          <p className="font-bold">EN</p>
        </div>

        <div className="nav-logout hover:border sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-lg cursor-pointer">
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
          <p className="font-bold sm:hidden md:hidden lg:block xl:block 2xl:block">
            Account & lists
          </p>
        </div>
        <Link to="/order">
          <div className="nav-order hover:border sm:hidden md:hidden lg:block xl:block 2xl:block 2xl:text-lg cursor-pointer">
            <p className="font-bold">Return</p>
            <p>& Orders</p>
          </div>
        </Link>
        <div className="nav-cart hover:border flex items-center cursor-pointer">
          <Link to="/cart">
            <LiaShoppingCartSolid className="nav-cart-icon 2xl:text-5xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer" />
          </Link>
          <p className="2xl:mt-4 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4 font-bold sm:text-sm md:text-md lg:text-lg text-xl-lg">
            Cart{" "}
          </p>
          <p className="cart-count relative top-[-12px] right-8 2xl:text-xl sm:text-xl md:text-md lg:text-lg xl:text-lg  text-orange-400 ">
            {totalItem}
          </p>
        </div>
      </nav>
    </div>
  );
};
