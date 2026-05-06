import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import SelectInput from "../components/UI/SelectInput";
import ProductCard from "../components/UI/ProductCard";
import { Pagination } from "../components/UI/Pagination";
import { useGetCategoryListQuery, useGetProductsQuery } from "./services/api";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [limit, setLimit] = useState(30);
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const { data, isLoading } = useGetProductsQuery({
    limit,
    skip: limit * (pageNum - 1),
    category,
  });

  const { data: categories = [] } = useGetCategoryListQuery();
  
  useEffect(() => {
    if (data?.total) {
      setTotalPage(Math.ceil(data?.total / limit));
    }
  }, [data?.total, limit]);

  const sortOption = [
    { value: "10", label: "10" },
    { value: "30", label: "30" },
    { value: "60", label: "60" },
    { value: "80", label: "80" },
  ];

  return (
    <main className="py-12 bg-gray-50 min-h-screen">
      <div className="container grid grid-cols-12 gap-10">
        
     
        <div className="col-span-3 bg-white py-6 px-5 h-fit sticky top-4 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-primary mb-4">Related Categories</h3>
          
          <div className="flex flex-col gap-2.5 mb-8 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            {categories?.map((item) => (
              <Link
                key={item.slug}
                to={`/shop?category=${item.slug}`}
                className={`text-sm lg:text-base capitalize transition-colors hover:text-secondary ${
                  category === item.slug ? "text-secondary font-bold" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
           <div className='py-6 lg:py-12 my-4 lg:my-6 border-y-2 border-y-secondary/10'>
            <h3 className='text-base lg:text-lg font-medium text-primary'>Filter by Price</h3>
            <input type="Range" className='w-full lg:w-64 my-4 lg:my-7' />
            <p className='text-sm lg:text-base'><span className='text-primary/50'>Price:</span> ৳1000 - ৳2500 </p>
          </div>
        </div>
        <div className="col-span-9">
          <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm mb-6">
            <p className="font-medium text-gray-500">
              Showing <span className="text-secondary font-bold">
                {limit * (pageNum - 1) + 1} - {data?.total > limit * pageNum ? limit * pageNum : data?.total}
              </span> of <span className="text-secondary font-bold">{data?.total || 0}</span> products
            </p>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">Display</span>
              <SelectInput
                className="w-20"
                options={sortOption}
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setPageNum(1); 
                }}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-lg font-medium text-gray-400 animate-pulse">Loading products...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data?.products?.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          )}
          {totalPage > 1 && (
            <div className="mt-10 flex justify-center">
              <Pagination 
                handelChange={(num) => setPageNum(num)} 
                pageNum={pageNum} 
                totalPage={totalPage} 
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Shop;
