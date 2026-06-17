import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Link } from 'react-router'
import ProductCard from '../UI/ProductCard'
import { IoIosArrowDown } from 'react-icons/io'
import { useGetProductsQuery } from '../../pages/services/api'


const FeaturedProduct = () => {
    const { data, isLoading, isError } = useGetProductsQuery({
        limit: 20,
        skip:0,
        Category: "smartphones"
        });
  return (
    <section className='pb-12'>
      <div className="container">
        <div className='flex justify-between'>
          <h3 className='sub_head text-[#2E2E2E]'>Featured Product</h3>
          
          <Link to='/shop' className='view flex gap-4.5 items-center'>
          View More <span className='flex '> <MdArrowForward /> </span>
          </Link>
          
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5 gap-1 md:gap-6'>
          {
            data?.products.map((item) => (
              <ProductCard key={item.id} data={item}/>
            ) )
          }
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct