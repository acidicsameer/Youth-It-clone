
import React from 'react'
import MeetOurTeam from '../components/MeetOurTeam'
import ReachUs from '../components/ReachUs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WorkPlan from '../components/WorkPlan'
import ContactInfo from '../components/ContactInfo'
const About = () => {
  return (
    <>
    <h1 className='font-bold text-3xl text-center  p-8 '>We provide smart, reliable IT solutions for you.</h1>
    <div className='flex  justify-center flex-wrap gap-6 text-[19px]'>

      <div className='w-[500px] float-right '>
Youth IT is a dynamic and innovative software company committed to empowering businesses with tailored, scalable, and future-ready solutions. We specialize in designing and developing cutting-edge software that drives operational efficiency, enhances productivity, and accelerates digital transformation across diverse industries. Our mission is to simplify complex challenges and unlock new opportunities through technology, enabling businesses to thrive in a competitive landscape.
      </div>
      <div  className='w-[500px] '>
We pride ourselves on our team of passionate and skilled professionals who bring creativity, expertise, and a client-first approach to every project. We are dedicated to delivering excellence, fostering long-term partnerships, and helping our clients achieve measurable success. By combining innovation, agility, and a deep understanding of industry needs, we aim to shape the future of software development.

      </div>
    </div>

    <div className='mt-6'>  <MeetOurTeam/></div>

<div className='flex flex-wrap gap-[20px]  mt-10 bg-[#F6F9FE] justify-around min-h-[400px] '>
  <WorkPlan 

  title="OUR MISSION"
  para="To Deliver Innovative, User-Centric Software Solutions That Empower Businesses, Foster Digital Transformation, And Drive Sustainable Growth Through Cutting-Edge Technology And Unparalleled Expertise."
  
  />
  <WorkPlan 
   image=""
  title="OUR VISION"
  para="To Be A Global Leader In Software Innovation, Transforming Industries By Creating Intelligent, Scalable Solutions That Shape The Future Of Technology And Empower Businesses Worldwide."/>
  <WorkPlan 
    
  title="OUR GOAL"
  
  para="To Consistently Deliver High-Quality, Innovative Software Solutions That Exceed Client Expectations, Foster Long-Term Partnerships, And Drive Measurable Business Growth For Our Clients And Our Company."/>
  
</div>


<div className='flex-col flex lg:flex-row lg:justify-around justify-center items-center gap-5   '>
<div>
<ContactInfo
icon={<i class="fa fa-map-marker"></i>}
location='Location'
visitus='Visit Us At'
des='Pargati Chowk, Itahari, Nepal'
/>
</div>
<div>
<ContactInfo
icon={<i class="fa fa-phone"></i>}
location='24x7 Service..'
visitus='Call Us On
'
des='+977 9746888890

'
/></div>
<div>
<ContactInfo
icon={<i class="fa fa-envelope"></i>}
location='Drop A Line
'
visitus='Mail Address
'
des='hamroyouthit@gmail.com

'
/></div>
<div>
<ContactInfo
icon={<i class="fa fa-clock-o"></i>}
location='Office Hours..'
visitus='Opening Time'
des='Sun-Fri: 9AM-5PM'
/></div>
</div>
    <div className='mt-[100px]'>
    <ReachUs/>
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

export default About