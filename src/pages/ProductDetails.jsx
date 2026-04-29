import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow,PrevArrow } from '../components/UI/Arrows';
import { useGetProductDetailsQuery } from './services/api';

const ProductDetails = () => {
  const { data } = useGetProductDetailsQuery(1);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settingsLarge = {
    dots: false,
    slidesToShow: 1,
    arrows: false,
  };
    const settingSmalls = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
   <section>
    <div className="container grid grid-cols-2 ">
        <div className='grid grid-cols-4 gap-10'>
        <Slider className='max-w-xl col-span-3 ' {...settingsLarge} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
        <div>
         <img src="/women-fashion-6.png" alt="fashion-img" className='w-full' />
        </div>
        <div>
            <img src="/women-fashion-7.png" alt="fashion-img" className='w-full' />
        </div>
        <div>
         <img src="/women-fashion-8.png" alt="fashion-img" className='w-full' />
        </div>
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settingSmalls}
      >
        <div>
          <img src="/women-fashion-1.png" alt="fashion" className='w-3/4' />
        </div>
        <div>
          <img src="/women-fashion-2.png" alt="fashion" className='w-3/4' />
        </div>
        <div>
         <img src="/women-fashion-3.png" alt="fashion" className='w-3/4' />
        </div>
        <div>
         <img src="/women-fashion-4.png" alt="fashion" className='w-3/4' />
        </div>
        <div>
         <img src="/women-fashion-5.png" alt="fashion" className='w-3/4' />
        </div>
       
      </Slider>
        </div>
        <div className="space-y-4">
         <h1 className="text-4xl text-primary" >{data?.title}</h1>
         <p className="text-xl text-primary ">{data?.description}</p>
        </div>
    </div>
   </section>
  )
}

export default ProductDetails
