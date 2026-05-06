import React from 'react'
import { Link } from 'react-router'
import { IoSearch } from 'react-icons/io5'
import Button from '../UI/Button'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { FaBasketShopping } from 'react-icons/fa6'
import { IoChevronForward } from "react-icons/io5";
import SearchBox from './SearchBox'

const Navbar = () => {

  const categories = [
    "Women's Fashion",
    "men's Fashion",
    "Kid's Fashion",
    "Home & Lifestyle",
    "Arts & Crafts",
    "Computer & Electronics",
    "Food & Grocery",
  ]

  return (
    <header>

    
      <nav className='py-8'>

        <div className="container flex justify-between items-center flex-wrap md:flex-nowrap gap-5">

        
          <div className="logo-img">
            <Link to='/' className='order-1'>
              <img src="/logo.png" alt="logo" />
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

              <span className='hidden md:block'>
                Login
              </span>
            </Link>

           
            <Link
              to='/wishlist'
              className='flex gap-1.5 font-normal text-base items-center'
            >
              <FaRegHeart className='text-xl' />

              <span className='hidden md:block'>
                Wishlist
              </span>
            </Link>

          
            <Link
              to='/cart'
              className='flex gap-1.5 font-normal text-base items-center relative'
            >
              <FaBasketShopping className='text-xl' />

              <span className='hidden md:block'>
                My Cart
              </span>

             
              {/* <span className='w-5 h-5 bg-red-500 flex items-center justify-center rounded-full text-white text-[12px] absolute -top-2 -right-3'>
                1
              </span> */}

            </Link>

          </div>
        </div>
      </nav>

     
      <div className="container flex items-center justify-center pb-2.5 border-b border-b-[#EFEEEE]">

        <ul className="flex gap-xl md:gap-14 whitespace-nowrap overflow-x-auto">

          {
            categories.map((item, i) => (
              <li key={i}>

                <Link
                  to="/"
                  className="font-medium text-xl md:text-base text-primary uppercase whitespace-nowrap"
                >
                  {item}
                </Link>

              </li>
            ))
          }

        </ul>

        <IoChevronForward className="text-xl text-black md:hidden flex-shrink-0" />

      </div>

    </header>
  )
}

export default Navbar