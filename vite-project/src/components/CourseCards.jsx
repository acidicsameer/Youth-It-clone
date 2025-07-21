import React from 'react'

const CourseArr=[
    {
        "title":"📘Basic Computer Course – Rs. 6,000",
        "list1":"✅MS Office (Word, Excel, PowerPoint)",
        "list2":"✅Computer Fundamentals & Internet Usage",
        "list3":"✅Tally (Basic Accounting)",
        "list4":"✅Intro to Coding (Python/C)",
        "list5":"✅Designing with Canva/Figma",
        "list6":"✅Designing with Canva/Figma ",
        "list7":"🎯For Students, Beginners, Job Seekers ",

    },
     {
        "title":"🌐 Basic Web Development – Rs. 10,000",
        "list1":"✅ HTML, CSS, JavaScript from Scratch",
        "list2":"✅ Real Projects & Responsive Design",
        "list3":"📅 Duration: 1.5 – 2 months",
        "list4":"🎯 For Beginners, Students",
        

    },
     {
        "title":"🐍 Basic Django Development – Rs. 10,000",
        "list1":"✅ Python + Django Framework",
        "list2":"✅ Auth, Forms, CRUD, Templates",
        "list3":"✅ Mini Project (Blog, CRM, etc.)",
        "list4":"📅 Duration: 2 – 2.5 months",
        "list5":"🎯 For Python Devs, Backend Learners",
      

    },
     {
        "title":"⚛️ React Development – Rs. 12,000",
        "list1":"✅ JSX, Props, State, Hooks",
        "list2":"✅ Routing, API Calls",
        "list3":"✅ Weather App, Todo, Dashboard",
        "list4":"❌ No Backend",
        "list5":"📅 Duration: 2 – 2.5 months",
        "list6":"🎯 For Frontend Devs, React Careers",
        

    },
     {
        "title":"🎨 Advanced Graphics Designing – Rs. 15,000",   
        "list1":"✅ Branding, Layouts, Typography",
        "list2":"✅ Real Portfolio Projects",
        "list3":"❌ No Coding Included",
        "list4":"📅 Duration: 2.5 months",
        "list5":"🎯 For Creatives, Designers, Content Creators",

    },
    {
      "title":" Coding (MERN Stack) – Rs. 20,000",
      "list1":"✅ HTML, CSS, JS, React, Node.js, MongoDB",
      "list2":"✅ REST APIs & Git/GitHub",
      "list3":"✅ Capstone Project & Deployment",
"list4":"❌ No Graphic Designing"
    }
]



const CourseCards = () => {

  return (
  
   
CourseArr.map((curr)=>(

 <div className='min-h-[275px]  lg:w-[425px] w-full flex flex-wrap shadow-2xl  border-blue-800 rounded-2xl border-l-8  m-3'>
     <div className='  text-center font-bold p-2 text-xl    '>{curr.title}</div>
     
     <ul  className='  text-left  list-disc list-inside ml-3 ' >

     <li>{ curr.list1}</li>
      <li>{ curr.list2}</li>
       <li>{ curr.list3}</li>
        <li>{ curr.list4}</li>
         <li>{ curr.list5}</li>
          <li>{ curr.list6}</li>
           <li>{ curr.list7}</li>
     </ul>
   </div>

))
   
  
   
   
   
   
 )
}

export default CourseCards