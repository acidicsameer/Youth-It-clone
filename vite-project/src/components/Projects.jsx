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
  return (<>
  
  <div className='font-bold  lg:text-3xl  text-2xl h-[60px]'>
 <p className='ml-5'> RECENT PROJECTS </p>
</div>
 <Slider {...settings}>
<div className='flex-col lg:flex-row lg:justify-center justify-start  lg:items-center items-start min-h-[300px] lg:w-[1356px]  w-full'>
  <div className='flex flex-col justify-center items-center gap-3 lg:float-left float-start'>
    <div className='text-[#1D4ED8] lg:text-4xl  font-[17px] lg:w-[600px] w-full min-h-[120px]  lg:text-center  text-left  p-2 '>
      Web Development Bootcamp at Koshi St.James College
    </div>
    <div className='lg:text-center  text-left lg:w-[644px] w-full min-h-[144px]'>
      The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions...
    </div>
  </div>
  <div className=' lg:float-right float-none lg:w-1/2 w-full p-4  lg:m-0 ml-8  '>
  <img src={schoolImg} className=' lg:h-[360px] h-[150px] lg:w-[700px] w-[80%] rounded-2xl ' alt="project" />
  </div>
</div>
   <div className='flex justify-center items-center h-[300px] w-[1356px] '>
  <div className='flex flex-col justify-center items-center gap-3 float-left'>
    <div className='text-[#1D4ED8] lg:text-4xl  text-xl w-[600px] h-[120px] text-center  '>
      Web Development Bootcamp at Koshi St.James College
    </div>
    <div className='text-center w-[644px] h-[144px]'>
      The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions...
    </div>
  </div>
  <div className='float-right w-1/2 '>
  <img src={mobilecomImg} className='h-[360px] w-[644px] rounded-2xl ' alt="project" /></div>
</div><div className='flex justify-center items-center h-[300px] w-[1356px] '>
  <div className='flex flex-col justify-center items-center gap-3 float-left'>
    <div className='text-[#1D4ED8] text-4xl w-[600px] h-[120px] text-center  '>
      Web Development Bootcamp at Koshi St.James College
    </div>
    <div className='text-center w-[644px] h-[144px]'>
      The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions...
    </div>
  </div>
  <div className='float-right w-1/2 '>
  <img src={mobilecom2Img} className='h-[360px] w-[700px] rounded-2xl' alt="project" /></div>
</div><div className='flex justify-center items-center h-[300px] w-[1356px] '>
  <div className='flex flex-col justify-center items-center gap-3 float-left'>
    <div className='text-[#1D4ED8] text-4xl w-[600px] h-[120px] text-center  '>
      Web Development Bootcamp at Koshi St.James College
    </div>
    <div className='text-center w-[644px] h-[144px]'>
      The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions...
    </div>
  </div>
  <div className='float-right w-1/2 '>
  <img src={developImg} className='h-[360px] w-[700px] rounded-2xl' alt="project" /></div>
</div>


</Slider>


  </>)

}


export default Projects