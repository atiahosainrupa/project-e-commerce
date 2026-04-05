import React from 'react'
import { BiCart } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa6'

const ProductCard = () => {
  return (
    <div className='p-2.5 border border-[#E9E9E9] rounded-2xl bg-white'>     
      <div className='rounded-2xl overflow-hidden relative'>
        <img src="/feature-img-1.png" alt="product" className='w-full' />
          <p className="absolute top-0 left-0 py-1 px-3 bg-badge rounded text-white text-xs md:text-base"> -25% off</p>
      </div>
      <div className='pt-3.5 px-1 '>
          <div className='flex items-center gap-1 text-amber-300'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className='text-secondary'>(0)</span>
          </div>
          <h4 className='text-xs md:text-lg font-normal text-primary py-2.5'>
            Men fashion watch set
          </h4>
        <div className="flex justify-between">
          <p className="font-medium text-base md:text-2xl text-brand">
            ৳10500
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