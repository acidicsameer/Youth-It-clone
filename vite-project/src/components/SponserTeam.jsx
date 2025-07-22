import React from 'react'
import sagarmatha from '../assets/images/sagarmatha.png'
import sdg_foundation from '../assets/images/sdg.png'
import ritxcollege from '../assets/images/ritx.png'
import makalu from '../assets/images/makalu.png'
import purwanchal from '../assets/images/purwanchal.png'

const SponserTeam = () => {
  return (
    <div className='flex lg:justify-around justify-between flex-wrap gap-y-1.5 lg:min-h-[120px] border-2 border-sky-200 items-center p-[15px]'>
      <div className='lg:w-[150px] lg:border-r-2 font-bold mb-2 ml-20 lg:m-0 border-black'>
        Our Trusted Organizations
      </div>
      <div><img src={sdg_foundation} className='lg:h-[80px] h-[50px] rounded-3xl' alt="SDG Foundation Logo" /></div>
      <div><img src={ritxcollege} className='lg:h-[80px] h-[50px] rounded-3xl' alt="RITX College Logo" /></div>
      <div><img src={makalu} className='lg:h-[80px] h-[50px] rounded-3xl' alt="Makalu Logo" /></div>
      <div><img src={purwanchal} className='lg:h-[80px] h-[50px] rounded-3xl' alt="Purwanchal Logo" /></div>
      <div><img src={sagarmatha} className='lg:h-[80px] h-[50px] rounded-3xl' alt="Sagarmatha Logo" /></div>
    </div>
  )
}

export default SponserTeam
