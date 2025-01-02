"use client";

import Slider from "react-slick";
import { PiCaretRightLight } from "react-icons/pi";
import BannerText from "./BannerText";

const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2 -translate-y-1/2 shadow-lg"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <div style={{ display: "none" }} />, // Completely hides the prevArrow
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="w-full h-full relative">
          <img
            src="https://cdn.pixabay.com/photo/2018/07/29/23/05/woman-3571298_1280.jpg"
            alt="banner one"
            className="w-full h-full object-cover"
          />
          <BannerText title="Outware Picks" />
        </div>
        {/* Slide 2 */}
        <div className="w-full h-full relative">
          <img
            src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599559_1280.jpg"
            alt="banner two"
            className="w-full h-full object-cover"
          />
          <BannerText title="Seasonal Offers" />
        </div>
        {/* Slide 3 */}
        <div className="w-full h-full relative">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_1280.jpg"
            alt="banner three"
            className="w-full h-full object-cover"
          />
          <BannerText title="Best for Women" />
        </div>
      </Slider>
      {/* Bottom Gradient */}
      <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  );
};

export default Banner;
