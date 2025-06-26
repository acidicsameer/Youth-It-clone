import React from 'react';

const Cards = ({ image, title, text, buttonText }) => {
  return (
    <div className='flex flex-col w-[315px] h-[360px] gap-2 justify-center bg-white items-center p-[20px] border-2 border-sky-200 rounded-2xl'>
      <div className='h-[192px] w-[283px] flex justify-center items-center'>
        <img src={image} className='h-[200px]' alt={title} />
      </div>
      <div className='font-bold h-[28px]'>{title}</div>
      <div className='text-center h-[64px] w-[283px] mb-2'>
        <p>{text}</p>
      </div>
      <div className='bg-[#1D4ED8] text-center h-[32px] w-[283px] rounded-2xl text-white'>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Cards;
