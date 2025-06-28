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
  
  <div className='font-bold text-3xl h-[60px]'>
 <p> RECENT PROJECTS</p>
</div>
 <Slider {...settings}>
<div className='flex justify-center items-center h-300px] w-[1356px] '>
  <div className='flex flex-col justify-center items-center gap-3 float-left'>
    <div className='text-[#1D4ED8] text-4xl w-[600px] h-[120px] text-center  '>
      Web Development Bootcamp at Koshi St.James College
    </div>
    <div className='text-center w-[644px] h-[144px]'>
      The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions... The world has already seen waves of technological revolutions...
    </div>
  </div>
  <div className='float-right w-1/2 '>
  <img src={schoolImg} className='h-[360px] w-[700px] rounded-2xl ' alt="project" /></div>
</div>
   <div className='flex justify-center items-center h-[300px] w-[1356px] '>
  <div className='flex flex-col justify-center items-center gap-3 float-left'>
    <div className='text-[#1D4ED8] text-4xl w-[600px] h-[120px] text-center  '>
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