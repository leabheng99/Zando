import React, { useState, useEffect, useContext } from 'react';
import { menu, allProducts } from '../data';
import { IoMdSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart, FaRegBell } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from "../Context/CartContext";
import AuthModal from "../Auth/AuthModal";

const Navbar = ({ toggleCart }) => {
  const { cart } = useContext(CartContext); 
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState("login");
  const navigate = useNavigate();

  const openAuth = (tab) => {
    setAuthTab(tab);
    setIsOpen(false);
    setMobileMenu(false);
    setIsAuthOpen(true);
  };

  const searchResult = allProducts.filter((p) =>
    p.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelectProduct = (product) => {
    setIsOpen(false);
    setSearchValue("");
    navigate(`/product/${product.category.toLowerCase()}/${product.id}`);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearchValue("");
        setMobileMenu(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* 🔹 Navbar */}
      <nav className="w-full sticky top-0 z-50 bg-white h-auto px-4 md:px-12 lg:px-24 shadow">
        <div className="w-full flex items-center justify-between">
          
          {/* Left menu (Desktop) */}
          <ul className="hidden lg:flex items-center gap-10 w-[40%]">
            {menu.map((item) => (
              <li key={item.menu}>
                <Link className="text-[18px] font-bold" to={item.url}>{item.menu}</Link>
              </li>
            ))}
          </ul>
              
          {/* Logo */}
          <Link to={"/"} className="lg:w-[20%] h-full py-4 text-3xl font-bold text-center">
            ZANDO
          </Link>

        {/* icon product cart  */}

          <ul className='lg:hidden'>
            <li className='relative'>
              <LuShoppingBag
                className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={toggleCart}
              />
              {cart.length > 0 && (
                <span className="absolute -top-3 left-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </li>
          </ul>

          {/* Right menu (Desktop) */}
          <ul className="hidden lg:flex items-center w-[40%] gap-4">
            <li className="w-[30%] flex items-center justify-center">
              <button 
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-gray-200 w-full px-3 py-2 rounded hover:bg-gray-300 transition"
              >
                <IoMdSearch className="text-2xl" />
                <span className="font-semibold">Search</span>
              </button>
            </li>

            <li className="w-[30%] flex items-center justify-evenly relative">
              <LuShoppingBag
                className="text-xl cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={toggleCart}
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 left-9 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
              <FaRegHeart className="text-xl cursor-pointer hover:scale-110 transition-transform duration-300" />
              <FaRegBell className="text-xl cursor-pointer hover:scale-110 transition-transform duration-300" />
            </li>

            <li className="w-[40%] flex justify-between">
              <button onClick={() => openAuth('login')} className="p-2 font-bold hover:bg-gray-200 transition-all duration-300">LOGIN</button>
              <button onClick={() => openAuth('register')} className="p-2 font-bold hover:bg-gray-200 transition-all duration-300">REGISTER</button>
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(true)}>
              <IoMdSearch className="text-3xl" />
            </button>
            <button className='text-2xl' onClick={() => setMobileMenu(true)}>☰</button>
          </div>
        </div>
      </nav>

      {/* 🔹 Sidebar Mobile Menu */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        {/* Overlay */}
        <div
          onClick={() => setMobileMenu(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500
            ${mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
        ></div>

          
            
        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 h-full w-64 md:w-96 bg-white shadow-xl transform transition-transform duration-500 ease-in-out
            ${mobileMenu ? "translate-x-0 pointer-events-auto" : "-translate-x-full"}`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-3xl font-bold">ZANDO</h2>
            <button onClick={() => setMobileMenu(false)} className="text-2xl">
              <IoClose />
            </button>
          </div>

          <ul className="flex flex-col p-4">
            {menu.map((item) => (
              <li className='py-4' key={item.menu}>
                <Link
                  onClick={() => setMobileMenu(false)}
                  className="font-bold text-lg hover:text-pink-500"
                  to={item.url}
                >
                  {item.menu}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-3 px-4">
            <button onClick={() => openAuth('login')} className="flex-1 text-center p-2 font-bold bg-gray-200 rounded hover:bg-pink-400 hover:text-white transition">
              LOGIN
            </button>
            <button onClick={() => openAuth('register')} className="flex-1 text-center p-2 font-bold bg-gray-200 rounded hover:bg-pink-400 hover:text-white transition">
              REGISTER
            </button>
          </div>
        </div>
      </div>

        

      {/* 🔹 Search Modal */}
      <div
        className={`fixed w-full z-50 flex items-center justify-center transition-all duration-500 ease-out
        ${isOpen ? "opacity-100 top-0 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        <div className="bg-white w-full rounded-lg shadow-lg p-5 lg:px-40 relative lg:mx-0 mx-4">
          <button 
            onClick={() => { setIsOpen(false); setSearchValue(""); }}
            className="absolute top-3 right-11 text-3xl cursor-pointer font-bold hover:text-red-500"
          >
            &times;
          </button>

          <div className="flex mt-5 items-center border border-gray-300 rounded p-2">
            <IoMdSearch className="text-2xl text-gray-400" />
            <input 
              type="text" 
              placeholder="Search product..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full outline-none px-2 text-lg"
            />
          </div>

          <div className="mt-4 max-h-72 overflow-y-auto">
            {searchValue && (
              searchResult.length > 0 ? (
                searchResult.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-2 mb-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                    onClick={() => handleSelectProduct(item)}
                  >
                    <img 
                      src={item.imageURL} 
                      alt={item.name} 
                      className="w-20 h-20 object-contain rounded-md shadow-sm"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-lg font-semibold">{item.name}</h1>
                      <p className="text-red-600 font-bold">
                        ${item.discount ? (item.price * (1 - item.discount)).toFixed(2) : item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No products found</p>
              )
            )}
          </div>
        </div>
      </div>
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} initialTab={authTab} />
    </>
  );
};

export default Navbar;
