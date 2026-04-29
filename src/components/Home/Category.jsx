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
import { useGetCategoryListQuery } from '../../pages/services/api';

const Category = () => {
  const { data } = useGetCategoryListQuery();
  return (
    <section className="py-12">
      <div className="container">
        <h3 className='sub_head'>Category</h3>
        <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5'>

          {data?.map((item) => (
                <Link key={item} to={`/shop?category=${item}`} className='p-4 shadow flex items-center rounded-xl justify-between'>
                     <p className='font-normal text-base text-secondary'>{item}</p>
                   <MdArrowForwardIos className="text-[#999999] ml-auto" />
                </Link>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Category