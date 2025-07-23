import React from 'react'
import logoyouth from '../assets/images/logo.png'

 export const HeroSection = () => {
  return (
    <div className=" lg:flex-row  flex flex-col-reverse items-center justify-center lg:h-[100vh] mb-6 p-5  w-full lg:bg-[url('/src/assets/images/web.png')] bg-cover bg-no-repeat  brightness-80  ">

<div className='lg:w-1/2 flex flex-col items-center  gap-2 ' >
  <div className='lg:text-5xl  text-3xl  lg:font-semibold'>Go Digital With</div>
  <div className='lg:text-7xl  text-4xl  text-[#1D4ED8] font-bold'>
<p className="text-7xl font-bold">
  <span className="text-blue-600">Y</span>
  <span className="text-cyan-500">O</span>
  <span className="text-indigo-600">U</span>
  <span className="text-teal-500">T</span>
  <span className="text-gray-700">H</span>
  <span> </span>
  <span className="text-purple-600">I</span>
  <span className="text-blue-400">T</span>
</p>


  </div>
  <div className='w-[350px]  lg:text-xl text-center  '>Where innovation meets ambition, technology shapes the future.</div>
  <div className='flex justify-center lg:justify-start    gap-3'>
   <button className='w-[80px]   h-[35px] text-white bg-[#1D4ED8] rounded-[10px]'>Works  </button>
   <button className='w-[80px] h-[35px]  text-blue-900 border-2 border-[#1D4ED8] bg-white  rounded-[10px] hover:bg-[#1D4ED8]  hover:text-white '>Contact</button>
</div></div>
<div className='w-1/2 pl-4 flex justify-end'>
 <img src={logoyouth} className='  lg:h-[400px] h-[200px]  ' alt="logo" />
   </div>
   </div>

  )
}

