import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import schoolImg from '/src/assets/images/school.png';
import mobilecomImg from '/src/assets/images/mobilecom.png';
import mobilecom2Img from '/src/assets/images/mobilecom2.png';
import developImg from '/src/assets/images/develop.png';
 const Projects= () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,

   
  };
  const testimonials = [
  {
    title: "Web Development Bootcamp at Koshi St.James College",
    description:
      "The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions...",
    image: schoolImg,
  },
  {
    title: "Web Development Bootcamp at Koshi St.James College",
    description:
      "The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions...",
    image: mobilecomImg,
  },
   {
    title: "Web Development Bootcamp at Koshi St.James College",
    description:
      "The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions...",
    image: mobilecom2Img,
  },
  {
    title: "Web Development Bootcamp at Koshi St.James College",
    description:
      "The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions...",
    image:developImg,
  },
];

  return (
  <>
  
  <div className='font-bold  lg:text-3xl  text-2xl h-[60px]'>
 <p className='ml-6 mt-5'> RECENT PROJECTS </p>
</div>
<Slider {...settings}>
  {testimonials.map((item, index) => (
    <div
      key={index}
      className="flex-col lg:flex-row lg:justify-center justify-start lg:items-center items-start min-h-[300px] lg:w-[1356px] w-full m-2 p-3 "
    >
      <div className="flex flex-col items-center lg:mt-6  m-0 gap-3 lg:float-left float-start">
        <div className="text-[#1D4ED8] lg:text-4xl font-bold  text-xl lg:w-[600px]   lg:text-center text-left p-2">
          {item.title}
        </div>
        <div className="lg:text-center text-left lg:w-[644px] w-full min-h-[144px]">
          {item.description}
        </div>
      </div>
      <div className="lg:float-right float-none lg:w-1/2 w-full p-4 lg:m-0 ml-8">
        <img
          src={item.image}
          className="lg:h-[340px] h-[150px] lg:w-[600px] w-[80%] rounded-2xl"
          alt="testimonial"
        />
      </div>
    </div>
  ))}
</Slider>






  </>)

}


export default Projects