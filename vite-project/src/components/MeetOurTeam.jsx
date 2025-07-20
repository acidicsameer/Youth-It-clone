import React from 'react'
const ImageCard = [
  {
    id: 1,
    title: "Chief Executive Officer",
    name: "Rohit Raj Dhaal",
    img: "/src/assets/images/mem1.png"
  },
  {
    id: 2,
    title: "Managing Director",
    name: "Suman Karki",
   img: "/src/assets/images/mem1.png"
  },
  {
    id: 3,
    title: "Chief Operating Officer",
    name: "Anita Sharma",
  img: "/src/assets/images/mem1.png"
  },
  {
    id: 4,
    title: "Project Manager",
    name: "Dipesh Bhandari",
 img: "/src/assets/images/mem1.png"
  },
  {
    id: 5,
    title: "Technical Lead",
    name: "Nirajan Thapa",
 img: "/src/assets/images/mem1.png"
  },
  {
    id: 6,
    title: "Marketing Head",
    name: "Puja Adhikari",
   img: "/src/assets/images/mem1.png"
  },
  {
    id: 7,
    title: "UI/UX Designer",
    name: "Roshan Subedi",
 img: "/src/assets/images/mem1.png"
  },
  {
    id: 8,
    title: "HR Manager",
    name: "Binita Dahal",
    img: "/src/assets/images/mem1.png"
  },
  {
    id: 9,
    title: "Senior Developer",
    name: "Kushal Ghimire",
   img: "/src/assets/images/mem1.png"
  },
  {
    id: 10,
    title: "Trainer",
    name: "Manish Poudel",
   img: "/src/assets/images/mem1.png"
  }
];




const MeetOurTeam = () => {
 return (
  <>
    <div className='text-center text-3xl font-bold p-4'>Meet Our Team</div>
    <ul className='flex justify-center items-center   flex-wrap gap-x-10 gap-y-15 mx-40'>
      {ImageCard.map((curr) => (
<li
  key={curr.id}
  className="bg-black text-center text-gray-800 p-6 rounded-2xl shadow-md border hover:shadow-xl transition-transform transform hover:scale-105"
>          <img
            src={curr.img}
            alt={curr.name}
            className="  w-full  h-[200px] rounded-full  "
          />
          <div className ="text-xl  text-white font-bold" >
          <div >{curr.title}</div>
          
          <div className="mt-2  font-semibold text-lg">{curr.name}</div>
       </div> </li>
      ))}
    </ul>
  </>
  
);
}

export default MeetOurTeam