import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import Button from "./Button";
 
export function Pagination({handelChange, pageNum, totalPage }) {
 
  const next = () => {
    if (pageNum === totalPage) return;
 
    handelChange(pageNum + 1);
  };
 
  const prev = () => {
    if (pageNum === 1) return;
 
    handelChange(pageNum - 1);
  };
 
  return (
    <div className="flex items-center gap-4 mt-10 justify-center">
      <Button
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={pageNum === 1}
      >
        <BiArrowFromRight strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {
          [...Array(totalPage)].map((i, index)=> (
                   <Button variant= {pageNum == (index + 1) ? "primary": "secondary" }  className="rounded-full"
                    onClick={()=>handelChange(index +1)}>
                      {index+1}
                    </Button>
          ))}
      </div>
      <Button
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={pageNum === totalPage}
      >
        Next
        <BiArrowFromLeft strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}