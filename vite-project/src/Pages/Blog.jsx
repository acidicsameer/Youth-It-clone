import React from 'react'
import BlogCompo from '../components/BlogCompo'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Blog = () => {
  return (
    <>
   <BlogCompo />
   
<div className='flex flex-col lg:flex-row gap-y-4  items-center justify-around min-h-[150px] ' >
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
  <Footer/>
</div>
  </>)
}

export default Blog