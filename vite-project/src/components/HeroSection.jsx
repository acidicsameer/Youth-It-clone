import React from 'react'

 export const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]  w-full bg-[url('/src/assets/images/web.png')] bg-cover bg-no-repeat  brightness-90 ">

<div className='w-1/2 flex flex-col gap-1.5' >
  <div className='text-5xl  font-semibold'>Go Digital With</div>
  <div className='text-7xl text-[#1D4ED8] font-bold'>YOUTH IT</div>
  <div className='w-[350px]'>Where innovation meets ambition, technology shapes the future.</div>
  <div className='flex gap-3'>
   <button className='w-[80px] h-[35px] text-white bg-[#1D4ED8] rounded-[10px]'>Works  </button>
   <button className='w-[80px] h-[35px]  text-blue-900 border-2 border-[#1D4ED8] bg-white  rounded-[10px] hover:bg-[#1D4ED8]  hover:text-white '>Contact</button>
</div></div>
<div className=''>
 <img src="/src/assets/images/logo.png" className=' h-[400px]  ' alt="logo" />
   </div>
   </div>
  )
}

