import React from 'react'

const ContactInfo = ({visitus,location,des,icon}) => {
  return (
  <>
  <div className='flex flex-col w-[300px] h-[100px] p-3 shadow-2xl rounded-2xl hover:shadow-xl transition-transform transform hover:scale-105'>
    
    <div className='flex justify-center gap-3.5  '>
    <div>{icon}</div>
    <div className='flex flex-col text-xl font-bold '>
        <div>{location}</div>
        <div className='text-blue-900'>{visitus}
</div>
</div>
    </div>
    <div className='text-[17px] text-center '>{des}</div>
  </div>
  </>
  )
}

export default ContactInfo