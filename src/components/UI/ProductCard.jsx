import React from 'react'
import { BiCart } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa6'
import { Link } from "react-router";

const ProductCard = ({data}) => {
  return (
    <div className='p-2.5 border border-[#E9E9E9] rounded-2xl bg-white'>     
      <div className='rounded-2xl overflow-hidden relative'>
         <Link to={`/shop/${data.id}`}>
              <img src={data?.thumbnail} alt="product" className='w-full' />
         </Link>
          {
            data?.discountPercentage && (
              <p className="absolute top-0 left-0 py-1 px-3 bg-badge rounded text-white text-xs md:text-base">
                 -${data?.discountPercentage}OFF
              </p>
            )}
      </div>
      <div className='pt-3.5 px-1 '>
          <div className='flex items-center gap-1 text-amber-300'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className='text-secondary'>({data?.rating})</span>
          </div>
          <h4 className='text-xs md:text-lg font-normal text-primary py-2.5'>
           {data?.title}
          </h4>
        <div className="flex justify-between">
          <p className="font-medium text-base md:text-2xl text-brand">
            {data?.price}
          </p>
          <button>
            <BiCart className='text-lg md:text-3xl text-brand' />
          </button>
        </div>
      </div>
      </div>
  )
}

export default ProductCard