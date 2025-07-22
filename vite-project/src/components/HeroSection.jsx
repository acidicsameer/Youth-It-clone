import React from 'react'
import logoyouth from './assets/images/webdev.png'

 export const HeroSection = () => {
  return (
    <div className=" lg:flex-row  flex flex-col-reverse items-center justify-center lg:h-[100vh] mb-6 p-5  w-full lg:bg-[url('/src/assets/images/web.png')] bg-cover bg-no-repeat  brightness-80  ">

<div className='lg:w-1/2 flex flex-col gap-1.5' >
  <div className='lg:text-5xl  text-center text-3xl  lg:font-semibold'>Go Digital With</div>
  <div className='lg:text-7xl text-center text-4xl  text-[#1D4ED8] font-bold'>YOUTH IT</div>
  <div className='w-[350px]  lg:text-xl text-center lg:text-left '>Where innovation meets ambition, technology shapes the future.</div>
  <div className='flex justify-center lg:justify-start    gap-3'>
   <button className='w-[80px]   h-[35px] text-white bg-[#1D4ED8] rounded-[10px]'>Works  </button>
   <button className='w-[80px] h-[35px]  text-blue-900 border-2 border-[#1D4ED8] bg-white  rounded-[10px] hover:bg-[#1D4ED8]  hover:text-white '>Contact</button>
</div></div>
<div className=''>
 <img src={logoyouth} className='  lg:h-[400px] h-[200px]  ' alt="logo" />
   </div>
   </div>

  )
}

