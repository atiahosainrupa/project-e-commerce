import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Link, Links } from 'react-router'
import ProductCard from '../UI/ProductCard'

const FlashDeals = () => {
  return (
    <section className='pb-[50px]'>
      <div className="container">
        <div className='flex justify-between'>
          <h3 className='sub_head text-[#2E2E2E]'>Flash Deals</h3>
          <Link to='/' className='view flex gap-4.5 items-center'>
          View More <span className='flex '> <MdArrowForward /> </span>
          </Link>
          
        </div>
        <Link to='/' className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5 gap-1 md:gap-6'>
        <ProductCard head= "Headrest Executive Mesh Office Chairset" img="flash-deals-1.png" price="৳10500" discount="-25% OFF"/>
        <ProductCard head= "Women fashion dress set" img="flash-deals-2.png" price="৳1000" discount="-25% OFF"/>
        <ProductCard head= "Headrest Executive Mesh Office Chairset" img="flash-deals-3.png" price="৳৳5000" discount="-25% OFF"/>
        <ProductCard head= "Women black dress and red hat collections" img="flash-deals-4.png" price="৳1000.00" discount="-25% OFF"/>
        </Link>
      </div>
    </section>

    







 

 









  )
}

export default FlashDeals