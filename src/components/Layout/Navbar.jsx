import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { IoSearch } from 'react-icons/io5'
import Button from '../UI/Button'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { FaBasketShopping } from 'react-icons/fa6'
import { IoChevronForward } from "react-icons/io5";
import SearchBox from './SearchBox'

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        const categoryNames = data.map(cat => typeof cat === 'object' ? cat.name : cat);
        setCategories(categoryNames);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    const updateCartCount = () => {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(existingCart.length);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <header>
      
      <nav className='py-8'>
        <div className="container flex justify-between items-center flex-wrap md:flex-nowrap gap-5">
          
          <div className="logo-img">
            <Link to='/' className='order-1'>
              <img src="/logo-1.png" alt="logo" />
            </Link>
          </div>
          
          <div className="search-bar bg-[#F1F1F1] flex items-center rounded-md h-fit w-full md:max-w-md xl:max-w-3xl order-3 md:order-2">
            <SearchBox />
            <Button className='rounded-l-none px-4'>
              <IoSearch className='text-[28px]' />
            </Button>
          </div>
          
          <div className='flex gap-5 md:gap-10 order-2 md:order-3 text-nowrap'>
            <Link
              to='/login'
              className='flex gap-1.5 font-normal text-base items-center'
            >
              <FaRegUser className='text-xl' />
              <span className='hidden md:block'>Login</span>
            </Link>

            <Link
              to='/wishlist'
              className='flex gap-1.5 font-normal text-base items-center'
            >
              <FaRegHeart className='text-xl' />
              <span className='hidden md:block'>Wishlist</span>
            </Link>

            <Link
              to='/cart'
              className='flex gap-1.5 font-normal text-base items-center relative group'
            >
              <div className="relative p-1">
                <FaBasketShopping className='text-xl' />
                
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-brand text-white text-[11px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-fadeIn shadow-sm">
                    {cartCount}
                  </span>
                )}
              </div>

              <span className='hidden md:block'>My Cart</span>
            </Link>
          </div>

        </div>
      </nav>

      <div className="container flex items-center justify-between pb-3 border-b border-b-[#EFEEEE]">
        <ul className="flex gap-6 md:gap-10 whitespace-nowrap overflow-x-auto w-full pb-2
          scrollbar-thin 
          scrollbar-thumb-gray-300 
          scrollbar-track-transparent 
          hover:scrollbar-thumb-gray-400 
          transition-all">
          
      
          {loading ? (
            <div className="flex gap-6 items-center w-full py-1">
              
              <div className="w-4 h-4 border-2 border-brand border-t-transparent rounded-full animate-spin"></div>
              
          
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div 
                  key={index} 
                  className="h-4 bg-gray-200 rounded animate-pulse w-24"
                ></div>
              ))}
            </div>
          ) : (
            categories.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => navigate(`/shop?category=${item.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="font-medium text-sm text-primary uppercase whitespace-nowrap hover:text-brand cursor-pointer bg-transparent border-none p-0 transition-colors"
                >
                  {item}
                </button>
              </li>
            ))
          )}

        </ul>
        <IoChevronForward className="text-xl text-black md:hidden flex-shrink-0 ml-2" />
      </div>

    </header>
  )
}

export default Navbar;