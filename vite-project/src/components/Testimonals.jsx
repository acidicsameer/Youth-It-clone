import React from 'react';
import Slider from 'react-slick';
import Testseries from '../api/TestimonalData.json';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const TestiCompo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <div className="font-bold text-2xl ml-5 min-h-[100px] flex items-center ">
        Our Testimonals
      </div>

      <Slider {...settings}>
        {Testseries.map((curr) => (
          <div
            key={curr.id}
            className="h-[200px] lg:m-5 w-[290px]  shadow-2xl rounded-2xl  bg-white flex-row   p-5"
          >
            <div className="flex gap-6 h-[70px]  p-2">
              <img
                src={curr.image}
                alt={curr.title}
                className="h-[54px] w-[54px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <div className="text-xl font-bold">{curr.title}</div>
                <div className="text-sm text-gray-500">CEO, Huncha Digital</div>
              </div>
            </div>
            <div className="lg:w-[90%] w-full text-center">{curr.para}</div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestiCompo;
