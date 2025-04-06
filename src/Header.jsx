import React, { useState, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import amazon_logo from "./assets/amazon_logo.png";
import { MdLocationPin } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useCartContext } from "./Context/CartContext";
import { useFilterContext } from "./Context/FilterContext";

export const Header = () => {
  const { totalItem } = useCartContext();
  const { allProducts } = useFilterContext();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const debouncedSearch = useMemo(
    () =>
      debounce((searchTerm) => {
        if (searchTerm.trim() === "") {
          setSuggestions([]);
          return;
        }
        const filtered = allProducts.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSuggestions(filtered);
      }, 300),
    [allProducts]
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  const handleSuggestionClick = (id) => {
    setQuery("");
    setSuggestions([]);
    navigate(`/singleproduct/${id}`);
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/signin";
  };

  return (
    <header className="bg-secondary text-white shadow-sm">
      <nav className="max-w-[1440px] mx-auto px-4 py-2 flex flex-wrap items-center justify-between relative">
     
        <Link to="/" className="flex items-center gap-2">
          <img src={amazon_logo} alt="Amazon Logo" className="h-12" />
        </Link>

        <div className="hidden lg:flex flex-col justify-center items-start text-sm hover:border px-2 cursor-pointer">
          <p>Deliver to</p>
          <div className="flex items-center gap-1">
            <MdLocationPin />
            <p className="font-bold">India</p>
          </div>
        </div>

        <div className="flex-1 mx-4 max-w-[800px] w-full relative z-50">
          <div className="flex bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Amazon.in"
              className="flex-1 px-3 py-2 text-black outline-none"
            />
            <div className="bg-orange-300 text-black px-4 flex items-center justify-center cursor-pointer">
              <IoSearch className="text-xl" />
            </div>
          </div>

          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-white text-black border border-gray-300 rounded-b-md shadow-lg max-h-60 overflow-y-auto">
              {suggestions.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 hover:bg-gray-100 flex items-center gap-3 cursor-pointer"
                  onClick={() => handleSuggestionClick(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-10 w-10 object-contain rounded"
                  />
                  <span>{product.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-2 hover:border px-2 cursor-pointer">
          <img
            src="https://www.sic-info.org/wp-content/uploads/2014/01/in.png"
            alt="flag"
            className="h-5"
          />
          <p className="font-bold">EN</p>
        </div>

        <div className="text-sm hover:border px-2 cursor-pointer">
          {user ? (
            <div onClick={logout}>
              <p>Hello, {user.user.displayName || user.user.email}</p>
              <p className="font-bold hidden lg:block">Logout</p>
            </div>
          ) : (
            <Link to="/signin">
              <p>Hello, Sign In</p>
              <p className="font-bold hidden lg:block">Account & Lists</p>
            </Link>
          )}
        </div>

        <Link
          to="/order"
          className="hidden lg:block hover:border px-2 cursor-pointer text-sm"
        >
          <p className="font-bold">Returns</p>
          <p>& Orders</p>
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center hover:border px-2 cursor-pointer"
        >
          <LiaShoppingCartSolid className="text-3xl lg:text-5xl" />
          <span className="absolute top-0 left-5 text-orange-400 font-bold text-sm">
            {totalItem}
          </span>
          <p className="ml-2 font-bold hidden lg:block">Cart</p>
        </Link>
      </nav>
    </header>
  );
};



