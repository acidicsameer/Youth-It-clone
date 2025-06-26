import React from 'react'

const Footer = () => {
  return (
  <>
     <div className='flex justify-around   bg-[#F6F9FE] h-[210px] '>
<div className='flex flex-col gap-2'> 
    <div><img src="/src/assets/images/logo.png" className='h-[70px]' alt="" /></div>
    <div className='text-[#1D4ED8] font-bold  '>Follow Us</div>
    <div className='text-3xl flex gap-4'>
      <div> <i class="fa fa-facebook text-[#1D4ED8]  "></i></div>
       <div> <i class="fa fa-google text-red-900"></i></div>
        </div>
        </div>
        <div>
            <div className='text-[#1D4ED8]  font-bold text-2xl'>
                Useful Links
            </div>
            <div className='flex flex-col gap-1.5'>
<div><a href="" className='hover:text-[#1D4ED8]'>Home</a></div>
<div><a href="" className='hover:text-[#1D4ED8]'>About Us</a></div>
<div><a href="" className='hover:text-[#1D4ED8]'>Services</a></div>
<div><a href="" className='hover:text-[#1D4ED8]'>Gallery</a></div>
<div><a href="" className='hover:text-[#1D4ED8]'>Blog</a></div>
<div><a href="" className='hover:text-[#1D4ED8]'>Contact</a></div>
            </div>
            </div>
            <div className='flex  flex-col gap-2'>
                <div className='text-[#1D4ED8] font-bold text-2xl '><a href="">Subscribe</a></div>
                <div>Don't miss any updates. Subscribe now!</div>
               <div className="flex ">
                    <input type="email" placeholder='Enter Your Email'  className='border-2 border-gray h-[30px]  rounded-[5px]'/>
                <button type='button' className='mt-[20px]'><img src="/src/assets/images/send.png" className='h-[30px] ' alt="" /></button>
               </div>
            </div>
        </div>
        <div className='text-center bg-[#F6F9FE] '>
            &copy;2025 Youth IT. All rights reserved.
        </div>
       
</>
  )
}

export default Footer