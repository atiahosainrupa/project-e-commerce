import React, { useEffect, useState } from "react";
import SelectInput from "../components/UI/SelectInput";
import ProductCard from "../components/UI/ProductCard";
import { Link, useSearchParams } from "react-router";
import { useGetProductsQuery } from "./services/api";
import { Pagination } from "../components/UI/Pagination";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  
  const[limit, setLimit] = useState(30);
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState (1);
  const { data, isLoading, isError } = useGetProductsQuery({
    limit,
    skip: limit * (pageNum - 1),
    category,
    });
  

 useEffect(()=>{
  if (data?.total){
    setTotalPage (Math.ceil(data?.total / limit));
  }
 },[data?.total, limit]);


  const sortOption = [
    { value: "10", 
      label: "10" },

    { value: "30",
      label: "30" },

    { value: "60",
      label: "60" },
    
    { value: "80",
      label: "80" }  
  ];

  const categories = [
    { title: "Health & Household" },
    { title: "Kids Fashion" },
    { title: "Toys" },
    { title: "Groceries" },
    { title: "Home & Lifestyle" },
    { title: "Men Fashion" },
    { title: "Women's Fashion" },
    { title: "Stationary & Books" }
  
  ];

 

  return (
    <main className='py-12'>
      <div className="container grid grid-cols-12 gap-14">

      
        <div className='col-span-3 bg-white py-6 px-5 h-fit sticky top-0 left-0'>
          <h3 className='text-lg font-medium text-primary'>Related Categories</h3>
          <div className='space-y-1.5 mt-1'>
            {categories.map((item) => (
              <Link to="/shop" key={item.title} className='block text-base text-secondary'>
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className='col-span-9'>
          <div className='flex items-center justify-between'>
            <p className='font-medium text-lg text-[#424241]/50'>
              Showing <span className='text-secondary'>{limit * (pageNum - 1) + 1} - {data?.total > limit * pageNum ? limit * pageNum : data?.total} </span> {" "} of
              <span className='text-secondary'>{data?.total}</span> products
            </p>

            <div className='w-fit flex items-center gap-7'>
              <p>Display</p>
              <SelectInput
               className="max-w-20"
               options={sortOption}
               value={limit} 
               onChange={(e)=> setLimit(e.target.value)} />
            </div>
          </div>

          <div className='grid grid-cols-4 gap-6 mt-6'>
            {isLoading ? (
              <p>Loading.....</p>
            ) : (
             data?.products?.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))

            )}
          </div>
            <Pagination handelChange={(num) => setPageNum(num)} pageNum = {pageNum} totalPage= {totalPage} />
        </div>
      </div>
    </main>
  );
};

export default Shop;
