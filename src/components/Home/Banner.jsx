import React from 'react'
import { Link } from 'react-router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {

  const settings = {
    dots: true,
    slidesToShow: 1,
    arrows: false,

    appendDots: dots => (
      <div>
        <ul className='flex gap-2 absolute bottom-3 left-1/2 -translate-x-1/2'>
          {dots}
        </ul>
      </div>
    ),

    customPaging: i => (
      <div>
        <button className='w-1 md:w-3 h-1 md:h-3 bg-white rounded-full'></button>
      </div>
    ),

    dotsClass: "slick-dots !flex gap-2 absolute bottom-20 left-1/2 -translate-x-1/2 [&_.slick-active_button]:!bg-brand"
  };

  return (
    <section className='pt-3 pb-12'>
      <div className="container flex gap-7">

        <div className='w-full md:w-[66%]'>

          <Slider {...settings}>

            <Link to='/'>
              <img src="/banner-1.png" alt="banner-1" className='w-full'/>
            </Link>

            <Link to='/'>
              <img src="/banner-3.png" alt="banner-3" className='w-full'/>
            </Link>

            <Link to='/'>
              <img src="/banner-5.png" alt="banner-5" className='w-full'/>
            </Link>

            <Link to='/'>
              <img src="/banner-2.png" alt="banner-2" className='w-full'/>
            </Link>

            <Link to='/'>
              <img src="/banner-4.png" alt="banner-4" className='w-full'/>
            </Link>

          </Slider>

        </div>

        <div className='w-full md:w-[34%] hidden md:flex flex-col space-y-7'>

          <Link>
            <img src="/banner-right-1.png" alt="banner-right-1" className='w-full'/>
          </Link>

          <Link>
            <img src="/banner-right-2.png" alt="banner-right-2" className='w-full'/>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Banner