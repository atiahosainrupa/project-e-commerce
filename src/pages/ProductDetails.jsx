import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../components/UI/Arrows";
import { useGetProductDetailsQuery } from "./services/api";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();

  const { data } = useGetProductDetailsQuery(id);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [qty, setQty] = useState(1);

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
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">


        <div className="grid grid-cols-4 gap-6">
          
        
          <Slider
            className="col-span-3 bg-gray-100 rounded-xl p-5"
            {...settingsLarge}
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
          >
            {data?.images?.map((img, i) => (
              <div key={i}>
                <img src={img} alt="" className="w-full rounded-lg" />
              </div>
            ))}
          </Slider>

          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            swipeToSlide={true}
            focusOnSelect={true}
            {...settingSmalls}
          >
            {data?.images?.map((img, i) => (
              <div key={i} className="p-2">
                <img
                  src={img}
                  alt=""
                  className="w-full border rounded-lg cursor-pointer hover:scale-105 transition"
                />
              </div>
            ))}
          </Slider>
        </div>

     
        <div className="space-y-5">
          <p className="text-sm text-gray-500 uppercase">
            {data?.brand || "Brand"}
          </p>

          <h1 className="text-3xl font-bold text-gray-800">
            {data?.title}
          </h1>

          <p className="text-gray-600">
            {data?.description}
          </p>

        
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-primary">
              ${data?.price}
            </h2>
            <span className="bg-badge text-white px-2 py-1 text-sm rounded">
              {data?.discountPercentage}% OFF
            </span>
          </div>

          <p className="text-gray-400 line-through">
            ${Math.round(data?.price / (1 - data?.discountPercentage / 100))}
          </p>

         
          <div className="flex items-center gap-5 pt-5">

            
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                className="px-4 py-2 text-xl"
                onClick={() => qty > 1 && setQty(qty - 1)}
              >
                -
              </button>
              <span className="px-4">{qty}</span>
              <button
                className="px-4 py-2 text-xl"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>

            
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

