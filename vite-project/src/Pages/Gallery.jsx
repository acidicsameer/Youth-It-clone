import React from 'react'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import sameer from '../assets/images/mem1.png'
import mem2 from '../assets/images/b1.jpg'
import mem3 from '../assets/images/b2.png'
import mem4 from '../assets/images/b3.png'
import mem5 from '../assets/images/mem1.jpg'
import mem6 from '../assets/images/mem6.jpg'
import mem7 from '../assets/images/mem7.jpg'
import mem8 from '../assets/images/mem8.jpg'
import mem9 from '../assets/images/mem9.jpg'
import mem10 from '../assets/images/mem10.jpg'
import mem11 from '../assets/images/mem11.jpg'
import mem12 from '../assets/images/mem12.jpg'
import mem13 from '../assets/images/mem13.jpg'
const Gallery = () => {
  return (
   <>
<h1 className='text-2xl font-bold p-3 ml-2 '>Gallery</h1>
<div className='flex flex-wrap p-10 gap-5   mx-6  '>
    <img   className='h-[250px] w-[250px]' src={sameer} alt="" />
    <img   className='h-[250px] w-[250px]'  src={mem2} alt="" />
    <img   className='h-[250px] w-[250px]' src={mem3} alt="" />
    <img   className='h-[250px] w-[250px]' src={mem4} alt="" />
    <img   className='h-[250px] w-[250px]' src={mem5} alt="" />
    <img   className='h-[250px] w-[250px]' src={mem6} alt="" />
    <img  className='h-[250px] w-[250px]'  src={mem7} alt="" />
    <img  className='h-[250px] w-[250px]'  src={mem8} alt="" />
    <img   className='h-[250px] w-[250px]' src={mem9} alt="" />
    <img   className='h-[250px] w-[250px]' src={mem10} alt="" />
    <img   className='h-[250px] w-[250px]' src={mem11} alt="" />
    <img  className='h-[250px] w-[250px]'  src={mem12} alt="" />
    <img  className='h-[250px] w-[250px]'  src={mem13} alt="" />
    


</div>

<div className='flex flex-col lg:flex-row  gap-y-4  items-center justify-around min-h-[150px] ' >
<Contact 
logo={<i class="fa fa-map-marker"></i>}
title="Find Us"
text="Ithari,Sunsari"
/>
<Contact
logo={<i class="fa fa-phone"></i>}
title="Call Us"
text="9807409596"
/>
<Contact 
logo={<i class="fa fa-envelope"></i>}
title="Mail Us"
text="hamroyouthit@gmail.com"

/>

</div>


<div>
  
<Footer />
</div>
   
   </>
  )
}

export default Gallery