import React from 'react'
import { Link } from 'react-router-dom';

const BlogCompo = () => {
     const BlogCards=[
        {
            id:1,
            img:"/src/assets/images/b1.jpg",
            title:"Why Youth IT Leads in Itahari’s Tech Scene",
         date:"5/11/2025",
         des:"In the fast-growing tech landscape of Eastern Nepal, Itahari is quickly emerging as a vibrant hub for digital innovation. Among the many IT companies making their mark in the region, Youth IT proudly stands as a top-tier choice for businesses and individuals seeking reliable, creative, and future-focused digital solutions.",
readme:"Read More",

        },
        {
            id:2,
            img:"/src/assets/images/b2.png",
            title:"What If There Is an IT Boom? Opportunities and Consequences of a Digital Explosion",
         date:"5/11/2025",
         des:"The world has already seen waves of technological revolutions, from the dot-com boom of the 1990s to the rise of artificial intelligence and cloud computing in recent years. But what if we experience a massive IT boom—one that accelerates digital transformation across every industry at an unprecedented rate? An IT boom would mean rapid advancements in AI, automation, blockchain, cloud computing, and cybersecurity, reshaping how businesses, governments, and individuals interact with technology. While such a boom would bring extraordinary opportunities, it would also create complex challenges that society must navigate. Let’s explore both the exciting possibilities and the potential risks",
readme:"Read More",


        },
         {
            id:3,
            img:"/src/assets/images/b3.png",
            title:"Roadmap to a Successful IT Career",
         date:"5/11/2025",
des:"The IT industry is one of the fastest-growing and most dynamic fields in the world, offering diverse career paths, high earning potential, and endless opportunities for innovation. However, navigating the IT landscape requires proper planning, continuous learning, and strategic decision-making.",
         readme:"Read More"
        }
    ];
  return (

    <>
    <ul className='flex flex-col lg:flex-row   gap-y-6 bg-[#F6F9FE] m-2 p-2  '>

    <ul>
       { BlogCards.map((curr)=>(
        
       
<div key={curr.id} >
        <div className='  flex flex-col lg:flex-row  gap-5 lg:ml-24   p-10 shadow-2xl  min-h-[304px] lg:w-[65%] w-full rounded-2xl '>
        <div><img src={curr.img} className='lg:w-[500px] w-[250px] h-[250px] m-auto rounded-2xl' alt="" /></div>
        <div className='lg:w-[424px] w-full flex flex-col gap-3'>

            <div className='font-bold lg:text-2xl  text-[18px]'>{curr.title}</div>
            <div className='opacity-80'>{curr.date}</div>
            <div className='h-[48px] overflow-clip'>{curr.des}</div>
            <div className='bg-blue-900 text-white font-bold  rounded-2xl h-[35px] m-1 p-1.5 w-[100px] '>{curr.readme}</div>
        </div></div>
               
     </div>
     
    ))
    }
    </ul>

     <ul>
       { BlogCards.map((curr)=>(
        
       
<div key={curr.id} className='flex flex-col lg:flex-row    bg-[#F6F9FE]    '>
          <div className=' lg:w-[431px]  w-full min-h-[150px]  p-6 shadow-2xl rounded-3xl '>
 <div className='flex gap-2 justify-center items-center'>
   <div> <img className='h-[150px] w-[200px] rounded-3xl' src={curr.img} alt="" /></div>
   <div className='text-blue-900 font-bold w-full '> <Link>{curr.title}</Link></div>
 </div>
      </div>  
     </div>
    ))
    }
    </ul>
    </ul>
    </>
  )
}

export default BlogCompo