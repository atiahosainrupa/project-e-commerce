import React from 'react'
import { BiCart } from 'react-icons/bi'
import { CiStar } from 'react-icons/ci'
import { FaRegHeart, FaStar } from 'react-icons/fa'

const ProductCard = ({ head, price, img, discount }) => {
  return (
    <div className='p-3 border border-[#E9E9E9] rounded-2xl flex flex-col h-full shadow-sm hover:shadow-md transition'>
      
      <div className='rounded-2xl overflow-hidden relative group'>
        <img src={img} alt={head} className='w-full object-cover' />

        {discount ? (
          <p className="absolute top-0 left-0 py-1 px-3 bg-badge rounded text-white text-xs">
            {discount}
          </p>
        ) : null}

        <span className="absolute top-5 right-3.5 text-2xl text-gray-400 cursor-pointer group-hover:text-red-500 transition">
          <FaRegHeart />
        </span>
      </div>

      <div className='pt-3 px-1 flex flex-col flex-grow'>
        <div>
          
          <div className='flex items-center gap-1 text-amber-400'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar />
            <span className='text-secondary text-sm'>(0)</span>
          </div>

          <h4 className='text-sm md:text-lg font-normal text-primary py-2'>
            {head}
          </h4>
        </div>

        <div className="flex justify-between items-center mt-auto">
          <p className="font-medium text-base md:text-xl text-brand">
            ৳{price}
          </p>

          <button className="text-lg md:text-2xl text-brand hover:scale-110 transition">
            <BiCart />
          </button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard