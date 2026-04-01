import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Link } from 'react-router'
import ProductCard from '../UI/ProductCard'
import { IoIosArrowDown } from 'react-icons/io'


const FeaturedProduct = () => {
  return (
    <section className='pb-[50px]'>
      <div className="container">
        <div className='flex justify-between'>
          <h3 className='sub_head text-[#2E2E2E]'>Featured Product</h3>
          
          <Link to='/' className='view flex gap-4.5 items-center'>
          View More <span className='flex '> <MdArrowForward /> </span>
          </Link>
          
        </div>
        <Link to='/' className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5 gap-1 md:gap-6'>
        <ProductCard head="Men fashion watch set " img="feature-img-1.png" price="৳10500"/>
        <ProductCard head="Headrest Executive Mesh Office Chair set" img="feature-img-2.png" price="৳1000"/>
        <ProductCard head="Headrest Executive Mesh Office Chair set" img="feature-img-3.png" price="৳5000"/>
        <ProductCard head="Headrest Executive Mesh Office Chair set" img="feature-img-4.png" price="৳1000"/>
        <ProductCard head="Women fashion dress set" img="women-fashion-1.png" price="৳10500"/>
        <ProductCard head="Women fashion dress set" img="women-fashion-2.png" price="৳1000"/>
        <ProductCard head="Women pink dress and red cap collection" img="women-fashion-3.png" price="৳5000"/>
        <ProductCard head="Women black dress and red cap collection" img="women-fashion-4.png" price="৳1000"/>
        <ProductCard head="Women black dress and red cap collection" img="women-fashion-5.png" price="৳10500"/>
        <ProductCard head="Women fashion dress set" img="women-fashion-6.png" price="৳1000"/>
        <ProductCard head="Women fashion dress set" img="women-fashion-7.png" price="৳5000"/>
        <ProductCard head="Women fashion dress set" img="women-fashion-8.png" price="৳1000"/>
        <ProductCard head="Men fashion watch set " img="feature-img-1.png" price="৳10500"/>
        <ProductCard head="Lite set " img="feature-img-5.png" price="৳1000"/>
        <ProductCard head="Women fashion bag set" img="feature-img-6.png" price="৳5000"/>
        <ProductCard head="Men fashion black bag set" img="feature-img-7.png" price="৳1000"/>
        </Link>
      </div>
      <div className='flex justify-center pt-10'>
        <Link to="/" className=' flex items-center gap-1 bg-[#34ADED] py-2.5 px-7 rounded-4xl text-white text-[16px] font-semibold'>
      Show more <span><IoIosArrowDown /></span>
      </Link>
      </div>
    </section>
  )
}

export default FeaturedProduct