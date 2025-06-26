import React from 'react'

const Contact = ({title,text,logo}) => {
  return (<>
 
   <div className='flex items-center  flex-wrap gap-1'>
    <div  className='text-3xl'>
    {logo}
   </div>
   <div className='flex flex-col gap-1'>
    <div className='font-bold text-2xl text-[#1D4ED8] cursor-pointer '>{title}</div>
    <div>{text}</div>
    </div>
    </div>

    
  </>)
}

export default Contact