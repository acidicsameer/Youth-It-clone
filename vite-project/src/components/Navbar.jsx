import React from 'react'

 export const Navbar = () => {
  return (<>
 <div className='flex h-[70px]  justify-around  align-middle border-[1px] border-skyblue items-center'>
<div className="bg-[url('/src/assets/images/triangle.png')] w-1/2 h-[70px]  ">
  <img src="/src/assets/images/navlogo.png" className="h-[60px]" alt="Logo" />
</div>

 <div className='hover:text-[#1D4ED8] hover:cursor-pointer text-[20px]'>Home</div>
 <div className='hover:text-[#1D4ED8] hover:cursor-pointer text-[20px]'>About Us</div>
 <div className='hover:text-[#1D4ED8] hover:cursor-pointer text-[20px]'>Services</div>
 <div className='hover:text-[#1D4ED8] hover:cursor-pointer text-[20px]'>Gallery</div>
 <div className='hover:text-[#1D4ED8] hover:cursor-pointer text-[20px]'>Blog</div>
 <div className='hover:text-[#1D4ED8] hover:cursor-pointer text-[20px]'>Contact</div></div>
 
   </>)
}