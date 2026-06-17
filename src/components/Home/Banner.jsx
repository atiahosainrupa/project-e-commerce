import React from 'react';
import { Link } from 'react-router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    pauseOnHover: false,

    appendDots: (dots) => (
      <div className="absolute bottom-4 left-0 right-0 w-full flex justify-center z-10">
        <ul className='flex gap-2 absolute bottom-16 left-1/2 -translate-x-1/2'>
          {dots}
        </ul>
      </div>
    ),

    customPaging: () => (
      <button className="w-2 md:w-3 h-2 md:h-3 bg-white/60 rounded-full transition-all duration-300 block focus:outline-none"></button>
    ),

    dotsClass:
      "slick-dots !static !flex justify-center gap-2 [&_.slick-active_button]:!bg-brand [&_li]:!w-auto [&_li]:!h-auto [&_li]:!m-0"
  };

  return (
    <section className='pt-3 pb-12'>
      <div className="container flex gap-7">

        <div className='w-full md:w-[66%] relative'>

          <Slider {...settings}>

            <Link to='/'>
              <img src="/banner-img.png" alt="banner-1" className='w-full object-cover' />
            </Link>

            <Link to='/'>
              <img src="/banner-img-5.png" alt="banner-5" className='w-full object-cover' />
            </Link>

            <Link to='/'>
              <img src="/banner-img-2.png" alt="banner-2" className='w-full object-cover' />
            </Link>

            <Link to='/'>
              <img src="/banner-img-3.png" alt="banner-3" className='w-full object-cover' />
            </Link>

            <Link to='/'>
              <img src="/banner-img-4.png" alt="banner-4" className='w-full object-cover' />
            </Link>

          </Slider>

        </div>

        <div className='w-full md:w-[34%] hidden md:flex flex-col space-y-7'>

          <Link to='/shop?category=groceries' className="overflow-hidden rounded-md transition-transform duration-300 hover:scale-[1.01]">
            <img src="/banner-right-img-1.png" alt="Groceries Collection" className='w-full' />
          </Link>

          <Link to='/shop?category=beauty' className="overflow-hidden rounded-md transition-transform duration-300 hover:scale-[1.01]">
            <img src="/banner-right-img-2.png" alt="Health and Beauty Collection" className='w-full' />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Banner;