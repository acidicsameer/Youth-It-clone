import React from 'react'

const WorkPlan = ({ image, title, para }) => {
  
    return (
    <div  className='h-[284px] w-[384px] flex flex-col  bg-white flex-wrap  justify-center items-center    rounded-2xl  hover:scale-[1.1] shadow-2xl'>
        <div><img src={image} className='w-[80p] h-[80px] flex justify-center items-center ' alt="" /></div>
        <div className='font-bold'>{title}</div>
        <div className='text-center w-[336px] h-[72px]'>{para}</div>
    </div>
  )
}

export default WorkPlan