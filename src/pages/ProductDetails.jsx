import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../components/UI/Arrows";
import { useGetProductDetailsQuery } from "./services/api";
import { useParams } from "react-router";
import { useDispatch } from "react-redux"; // Redux dispatch ইম্পোর্ট করা হয়েছে
import { addToCart } from "../redux/cartSlice"; // আপনার স্লাইস এর নাম অনুযায়ী পাথ ঠিক করে নিবেন

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch(); // Dispatch হুক সেটআপ

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

  // কার্টে প্রোডাক্ট পাঠানোর ফাংশন
  const handleAddToCart = () => {
    if (data) {
      dispatch(
        addToCart({
          id: data.id,
          title: data.title,
          price: data.price,
          thumbnail: data.thumbnail, // ছবির জন্য সঠিক প্রপার্টি
          category: data.category,
          quantity: qty, // সিলেক্ট করা কোয়ান্টিটি
        })
      );
      alert("Product added to cart!");
    }
  };

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

          <h1 className="text-3xl font-bold text-gray-800">{data?.title}</h1>

          <p className="text-gray-600">{data?.description}</p>

          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-primary">${data?.price}</h2>

            <span className="bg-badge text-white px-2 py-1 text-sm rounded">
              {data?.discountPercentage}% OFF
            </span>
          </div>

          <p className="text-gray-400 line-through">
            ${Math.round(data?.price / (1 - (data?.discountPercentage || 0) / 100))}
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center gap-5 pt-5">
            <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden w-fit">
              <button
                className="px-4 py-3 text-xl font-semibold hover:bg-gray-100 transition"
                onClick={() => qty > 1 && setQty(qty - 1)}
              >
                -
              </button>

              <span className="px-6 font-semibold text-lg">{qty}</span>

              <button
                className="px-4 py-3 text-xl font-semibold hover:bg-gray-100 transition"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={handleAddToCart} // এখানে ফাংশনটি কল করা হয়েছে
                className="bg-black text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition font-medium w-full sm:w-auto"
              >
                🛒 Add to Cart
              </button>

              <button className="bg-primary text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition font-medium w-full sm:w-auto">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;