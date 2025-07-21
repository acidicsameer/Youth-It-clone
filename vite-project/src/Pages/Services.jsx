import React from 'react'
import Cards from '../components/Cards'
import CourseCards from '../components/CourseCards'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import WhyYouth from '../components/WhyYouth'
const Services = () => {
  return (
   <>
<Cards />
 <h1 className=' text-2xl font-bold  ml-6 mt-4'> Course Highlight</h1>
<div className='flex flex-wrap    justify-around   gap-6'>
<CourseCards /></div>
<div>
  <WhyYouth/>
</div>


<div className='flex flex-col lg:flex-row  gap-y-4 items-center justify-around min-h-[150px] ' >
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

export default Services