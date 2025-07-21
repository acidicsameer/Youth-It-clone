import React from 'react'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Gallery = () => {
  return (
   <>
<h1 className='text-2xl font-bold p-3 ml-2'>Gallery</h1>
<div className='flex flex-wrap p-10 gap-3 mx-6  '>
    <img   className='h-[250px] w-[250px]' src="https://api.hamroyouthit.com/media/gallery/IMG_2679_y11HSoB.JPG" alt="" />
    <img   className='h-[250px] w-[250px]'  src="https://api.hamroyouthit.com/media/gallery/IMG_9127.JPG" alt="" />
    <img   className='h-[250px] w-[250px]' src="https://api.hamroyouthit.com/media/gallery/IMG_8922.JPG" alt="" />
    <img   className='h-[250px] w-[250px]' src="https://api.hamroyouthit.com/media/gallery/IMG_8930_hJkcyAn.JPG" alt="" />
    <img   className='h-[250px] w-[250px]' src="https://api.hamroyouthit.com/media/gallery/IMG_9168.JPG" alt="" />
    <img   className='h-[250px] w-[250px]' src="https://api.hamroyouthit.com/media/gallery/IMG_9152.JPG" alt="" />
    <img  className='h-[250px] w-[250px]'  src="https://api.hamroyouthit.com/media/gallery/IMG_0108.JPG" alt="" />
    <img  className='h-[250px] w-[250px]'  src="https://api.hamroyouthit.com/media/gallery/IMG_2677.JPG" alt="" />
    <img   className='h-[250px] w-[250px]' src="https://api.hamroyouthit.com/media/gallery/IMG_8930.JPG" alt="" />
    <img   className='h-[250px] w-[250px]' src="https://api.hamroyouthit.com/media/gallery/IMG_2669.JPG" alt="" />
    <img   className='h-[250px] w-[250px]' src="https://api.hamroyouthit.com/media/gallery/IMG_9316.JPG" alt="" />
    <img  className='h-[250px] w-[250px]'  src="https://api.hamroyouthit.com/media/gallery/IMG_2679.JPG" alt="" />
    <img  className='h-[250px] w-[250px]'  src="https://api.hamroyouthit.com/media/gallery/IMG_2674.JPG" alt="" />
    <img  className='h-[250px] w-[250px]'  src="https://api.hamroyouthit.com/media/gallery/IMG_2673.JPG" alt="" />
    <img   className='h-[250px] w-[250px]' src="https://api.hamroyouthit.com/media/gallery/IMG_2671.JPG" alt="" />


</div>

<div className='flex flex-col lg:flex-row  items-center justify-around min-h-[150px] ' >
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