import React from 'react'

const Projects = ({title,text,image}) => {
  return (<>
    <div className='flex justify-center gap-6'>
<div className='flex flex-col justify-center  gap-3'> 
<div className='text-[#1D4ED8] text-4xl w-[600px] h-[80px] '>{title}</div>
<div className='text-center w-[644px] h-[144px] '> {text}</div>
</div>
<div className=''> <img src={image}  className='h-[360px] w-[700px] rounded-2xl' alt="" /></div>
    </div>
   
  </>)

}

export default Projects