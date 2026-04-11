import React from 'react'
import { FaBook, FaGift, FaGifts, FaPaw, FaShoppingBasket, FaTools, FaTshirt } from 'react-icons/fa'
import { GiLargeDress } from 'react-icons/gi'
import { MdArrowForwardIos} from 'react-icons/md'
import { TbHealthRecognition } from "react-icons/tb";
import { FaPersonDress } from "react-icons/fa6";
import { TbHorseToy } from "react-icons/tb";
import { SiIfood } from "react-icons/si";
import { BiSolidHomeHeart } from "react-icons/bi";
import { BsWatch } from "react-icons/bs";


import { Link } from 'react-router'

const Category = () => {
  const categories = [
    {
     title: "Health & Household",
     icon : TbHealthRecognition 
    },
    {
     title: "Kids Fashion",
     icon : FaPersonDress
    },
    {
     title: "Toys",
     icon : TbHorseToy
    },
    {
     title: "Groceries",
     icon : SiIfood
    },
    {
     title: "Home & Lifestyle",
     icon : BiSolidHomeHeart
    },
    {
     title: "Men Fashion",
     icon : FaTshirt
    },
    {
     title: "Women's Fashion",
     icon : GiLargeDress
    },
    {
     title: "Stationary & Books",
     icon : FaBook
    },
    {
     title: "Leather Goods",
     icon : FaShoppingBasket
    },
    {
     title: "Jewelleries",
     icon : FaGift
    },
    {
     title: "Watches",
     icon : BsWatch
    },
    {
     title: "women fashion",
     icon : FaTshirt
    },
    {
     title: "Tools & Hardware",
     icon : FaTools
    },
    {
     title: "Pet Supplies",
     icon : FaPaw
    },
    {
     title: "Seasonal",
     icon : FaGifts
    },


  ]
  return (
    <section className='pb-[45px]'>
      <div className="container">
        <h3 className='sub_head'>Category</h3>
        <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5'>

          {
            categories.map((item) => (
                <Link key={item.title} to="/" className='p-4 shadow flex items-center rounded-xl justify-between'>
                   <div className='flex gap-2.5 items-center'>
                     <item.icon className='text-3xl text-[#0970CD]' />
                     <p className='font-normal text-base text-secondary'>{item.title}</p>
                   </div>
                   <MdArrowForwardIos className='text-[#999999] ' />
                </Link>
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default Category