  
  
  
  
  
  import mem1 from '../assets/images/mem1.png';
  
  
  const ImageCard = [
  { id: 1, title: "Chief Executive Officer", name: "Rohit Raj Dhaal", img: mem1 },
  { id: 2, title: "Managing Director", name: "Suman Karki", img: mem1 },
  { id: 3, title: "Chief Operating Officer", name: "Anita Sharma", img: mem1 },
  { id: 4, title: "Project Manager", name: "Dipesh Bhandari", img: mem1 },
  { id: 5, title: "Technical Lead", name: "Nirajan Thapa", img: mem1 },
  { id: 6, title: "Marketing Head", name: "Puja Adhikari", img: mem1 },
  { id: 7, title: "UI/UX Designer", name: "Roshan Subedi", img: mem1 },
  { id: 8, title: "HR Manager", name: "Binita Dahal", img: mem1 },
  { id: 9, title: "Senior Developer", name: "Kushal Ghimire", img: mem1 },
  { id: 10, title: "Trainer", name: "Manish Poudel", img: mem1 },
];
const MeetOurTeam = () => {
  return (
    <>
      <div className='text-center text-3xl font-bold p-4'>Meet Our Team</div>
      <ul className='flex justify-center items-center flex-wrap gap-x-10 gap-y-15 lg:mx-40 m-0 '>
        {ImageCard.map((curr) => (
          <li
            key={curr.id}
            className="bg-black text-center text-gray-800 p-6 rounded-2xl shadow-md border hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <img
              src={curr.img}
              alt={curr.name}
              className="w-full h-[200px] rounded-full"
            />
            <div className="text-xl text-white font-bold">
              <div>{curr.title}</div>
              <div className="mt-2 font-semibold text-lg">{curr.name}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MeetOurTeam;
