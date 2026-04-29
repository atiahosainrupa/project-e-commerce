import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Link, Links } from 'react-router'
import ProductCard from '../UI/ProductCard'
import { useGetProductsQuery } from '../../pages/services/api'
import Category from './Category'
import { IoMdArrowForward } from 'react-icons/io'

const SmartPhones = () => {
    const { data, isLoading, isError } = useGetProductsQuery({
      limit: 4,
      skip:0,
      category: "smartphones"
      });
  return (
    <section className='pb-12'>
      <div className="container">
        <div className="flex justify-between">
          <h3 className='sub_head text-[#2E2E2E]'>Smart Phones</h3>
          <Link to="/shop?category=smartphones"
           className='view flex gap-4.5 items-center'>
          View More <IoMdArrowForward/>
          </Link>
          
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5 gap-1 md:gap-6">
        {data?.products.map((item) => (
           <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>

    







 

 









  )
}

export default SmartPhones