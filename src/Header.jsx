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
              className="nav-logo h-16 hover:border cursor-pointer phone-sm:hidden lapi:block"
            />
          </Link>
        </div>
        <div className="nav-location flex flex-col hover:border phone-sm:hidden lapi:block">
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
            className="nav-select h-full  p-2 w-14 bg-slate-200 font-poppin text-black outline-none border-none rounded-tl-md rounded-bl-md cursor-pointer phone-sm:hidden lapi:block"
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
            className="w-[600px] font-poppin text-black pl-2 outline-none border-none cursor-pointer phone-sm:w-[150px] phone-md:w-[160px] phone-lg:w-[180px] phone-xl:w-[200px] lapi:w-[600px] phone-sm:rounded-bl-md phone-sm:rounded-tl-md"
          />

          <div className="nav-search-icon w-10 bg-orange-300 flex items-center justify-center text-2xl text-black rounded-tr-md rounded-br-md cursor-pointer">
            <IoSearch />
          </div>
        </div>
        <div className="hover:border flex gap-2 phone-sm:hidden lapi:block">
          <img
            src="https://www.sic-info.org/wp-content/uploads/2014/01/in.png"
            alt="flag"
          />
          <p className="font-bold">EN</p>
        </div>

        <div className="nav-logout hover:border text-lg cursor-pointer phone-sm:text-sm lapi:text-lg">
          {user ? (
            <p onClick={logout} className="logout">
              Hello , Logout
            </p>
          ) : (
            <Link to="/signin">
              <p>
                <span> Hello,SignIn</span>
              </p>
            </Link>
          )}
          <p className="font-bold phone-sm:hidden lapi:block">
            Account & lists
          </p>
        </div>
        <Link to="/order">
          <div className="nav-order hover:border text-lg cursor-pointer phone-sm:hidden lapi:block">
            <p className="font-bold">Return</p>
            <p>& Orders</p>
          </div>
        </Link>
        <div className="nav-cart hover:border flex items-center cursor-pointer">
          <Link to="/cart">
            <LiaShoppingCartSolid className="nav-cart-icon text-5xl cursor-pointer phone-sm:text-2xl phone-md:text-2xl phone-lg:text-3xl phone-xl:3xl lapi:text-5xl" />
          </Link>
          <p className="mt-4 font-bold text-xl phone-sm:text-sm lapi:text-xl">
            Cart
          </p>
          <p className="cart-count relative top-[-12px] right-8 text-xl  text-orange-400 phone-sm:text-sm lapi:text-xl">
            {totalItem}
          </p>
        </div>
      </nav>
    </div>
  );
};
