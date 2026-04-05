import React from 'react'
import { FaTruckArrowRight } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";

const Services = () => {
  return (
    <section className='py-12'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className='flex gap-4.5 items-center justify-center'>
                <FaTruckArrowRight className='text-6xl text-[#0198E9]'/>
                <div>
                    <h4 className='text-xl font-bold text-[#333333]'>FREE SHIPPING</h4>
                    <p className='text-base font-medium text-[#757575]'>Order via Campaign</p>
                </div>
            </div>
            <div className='flex gap-4.5 items-center justify-center'>
                <BsStars className='text-6xl text-[#0198E9]'/>
                <div>
                    <h4 className='text-xl font-bold text-[#333333]'>BEST PRICE</h4>
                    <p className='text-base font-medium text-[#757575]'>Quality products</p>
                </div>
            </div>
            <div className='flex gap-4.5 items-center justify-center'>
                <TbTruckReturn className='text-5xl text-[#0198E9]'/>
                <div>
                    <h4 className='text-xl font-bold text-[#333333]'>FREE RETERN</h4>
                    <p className='text-base font-medium text-[#757575]'>Within 7 days returns</p>
                </div>
            </div>
            <div className='flex gap-4.5 items-center justify-center'>
                <RiSecurePaymentLine className='text-5xl text-[#0198E9]'/>
                <div>
                    <h4 className='text-xl font-bold text-[#333333]'>SECURE PAYMENT</h4>
                    <p className='text-base font-medium text-[#757575]'>100% secure payment</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services