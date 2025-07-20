import React from 'react'
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import SponserTeam from "../components/SponserTeam";

import Cards from '../components/Cards'
import WorkPlan from '../components/WorkPlan'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import { TestiCompo } from '../components/Testimonals';


 const Home = () => {
  return (
  <>
   <HeroSection />
  <SponserTeam />
<Cards />
 
<Projects />
  <div className='h-[350px] w-[1500px]'>
      <TestiCompo />
    </div>

 <div className='font-bold text-2xl bg-[#F6F9FE] h-[50px]'>How we Work </div>
<div className='flex flex-wrap gap-[20px]  bg-[#F6F9FE] justify-around h-[400px] '>
  <WorkPlan 
  image="/src/assets/images/plan.png"
  title="Plan"
  para="Failing to plan is planning to fail—especially in IT, where a well-structured strategy turns complexity into innovation."
  
  />
  <WorkPlan 
    image="/src/assets/images/design.png"
  title="Design"
  para="Good design is not just what you see—it’s how it works, feels, and solves problems effortlessly."/>
  <WorkPlan 
    image="/src/assets/images/develop.png"
  title="Develop"
  para="Development is not just about writing code; it's about creating solutions, building experiences, and shaping the future."/>
  
</div>
<div className='flex justify-around h-[150px] ' >
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

  </>)
}

export default Home ;