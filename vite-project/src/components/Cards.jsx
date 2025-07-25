
import webdev from '../assets/images/webdev.png';
import software from '../assets/images/software.png';
import graphic from '../assets/images/graphic.png';
import mobileapp from '../assets/images/mobileapp.png';

const ServiceArr = [
  {
    image: webdev,
    title: "Web Development",
    text: "We create fast, responsive, and stunning websites tailored to your needs.",
    buttonText: "Get Started",
  },
  {
    image: software,
    title: "Software Development",
    text: "Custom software solutions to streamline workflows and boost efficiency.",
    buttonText: "Get Started",
  },
  {
    image: graphic,
    title: "Graphic Designing",
    text: "Engaging visuals for branding, marketing, and UI/UX.",
    buttonText: "Get Started",
  },
  {
    image: mobileapp,
    title: "Mobile App Development",
    text: "High-performance Android & iOS apps with seamless user experience",
    buttonText: "Get Started",
  },
];




const Cards = () => {
  return (<>
  
    <p className='font-bold  h-[100px] text-3xl ml-6 bg-[#F6F9FE] flex items-center'>Our Services</p>
<div className='min-h-[450px]'>
  <div className='flex justify-around  flex-wrap bg-[#F6F9FE] min-h-[400px]  '>
   {ServiceArr.map((elem) => (
    <div  key={elem.title} className='flex flex-col w-[315px] min-h-[360px] gap-2 justify-center bg-white items-center p-[20px] border-2 border-sky-200 rounded-2xl'>
      <div  className='h-[192px] w-[283px] flex justify-center items-center'>
        <img src={elem.image} className='h-[200px]' alt={elem.title} />
      </div>
      <div className='font-bold h-[28px]'>{elem.title}</div>
      <div className='text-center h-[64px] w-[283px] mb-2'>
        <p>{elem.text}</p>
      </div>
      <div className='bg-[#1D4ED8] text-center h-[32px] w-[283px] rounded-2xl text-white'>
        <button>{elem.buttonText}</button>
      </div>
    </div>
      ))}
   </div></div></>);
  }


export default Cards;
