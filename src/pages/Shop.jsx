import React from 'react'
import SelectInput from '../components/UI/SelectInput'
import ProductCard from '../components/UI/ProductCard'
import { Link } from 'react-router'

const Shop = () => {
    const sortOption=[
        {
        value:"newest_items",
        label:"Newest Items"
        },
        {
        value:"oldest_items",
        label:"Oldest Items"
        }
    ]
    const categories = [
        {
         title: "Health & Household"
        },
        {
         title: "Kids Fashion"
        },
        {
         title: "Toys"
        },
        {
         title: "Groceries"
        },
        {
         title: "Home & Lifestyle"
        },
        {
         title: "Men Fashion"
             
        },
        {
         title: "Women's Fashion"
             
        },
        {
         title: "Stationary & Books"
             
        }
    ]
  return (
    <main className='py-12'>
      <div className="container grid grid-cols-12 gap-14">
      <div className='col-span-3 bg-white py-6 px-5 h-fit sticky top-0 left-0'>
        <h3 className='text-lg font-medium text-primary'>Related Categories</h3>
        <div className='space-y-1.5 mt-1'>
            {
                categories.map((item)=>(
                  <Link to="/shop" key={item.title} className='block text-base text-secondary'>
                    {item.title}
                  </Link>
                ))
            }
        </div>
        <div className='py-6 my-6 border-y-2 border-y-secondary/10'>
           <h3 className='text-lg font-medium text-primary'>Filter by Price</h3>
           <input type="range" name=""id="" className='w-full my-6 ' />
           <p>Price: ৳1000 - ৳2500 </p>
        </div>
      </div>
      <div className='col-span-9'>
        <div className='flex items-center justify-between'>
            <p className='font-medium text-lg text-[#424241]/50 '>Showing <span className='text-secondary'> 20 </span> of <span className='text-secondary'> 160 </span> product</p>
            <div className='w-fit flex items-center gap-7'>
                <p>Sort By:</p>
                <SelectInput className="max-w-44" options={sortOption}></SelectInput>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-6 mt-6'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            
            
        </div>
      </div>
      </div>
    </main>
  )
}

export default Shop
