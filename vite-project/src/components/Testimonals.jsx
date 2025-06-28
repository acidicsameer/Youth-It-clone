import React from 'react';
import Slider from 'react-slick';
import Testseries from '/src/api/TestimonalData.json';
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
  };

  return (<>
    <div className='font-bold text-3xl h-[100px] flex items-center'>
  Our Testimonals
</div>

      <Slider {...settings}>
        {Testseries.map((curr) => (
         

            <div  key={curr.id} className="h-[200px] w-[300px]  shadow-2xl rounded-2xl bg-white p-4">
                <div className='flex gap-6 h-[70px] w-[300px] '>
                <img src={curr.image} className="h-[54px] w-[54px] rounded-full object-cover" />
                <div className='flex flex-col gap-1'>
                  <div className="text-xl font-bold">{curr.title}</div>
                  <div className="text-sm text-gray-500 ">CEO, Huncha Digital</div>
                </div></div>
                  <div className='w-[90%] text-center '>{curr.para}</div>
                </div>
        ))}
      </Slider>
   
  </>);
};
