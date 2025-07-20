import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <section className="flex h-[70px] bg-[#E8F0FE] justify-between items-center border border-skyblue px-4">
      <div className="w-1/2 flex items-center gap-2">
        <img
          src="data:image/png;base64,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"
          alt=""
          className=" w-[700px] h-[70px] relative"
        />
        <img
          src="/src/assets/images/navlogo.png"
          alt="Logo"
          className="h-[70px] absolute left-1.5 top-1.5"
        />
      </div>

      <div className="flex w-1/2 justify-around">
        <Link to="/" className="hover:text-[#1D4ED8] cursor-pointer text-[20px]">Home</Link>
        <Link to="/about" className="hover:text-[#1D4ED8] cursor-pointer text-[20px]">About Us</Link>
        <Link to="/services" className="hover:text-[#1D4ED8] cursor-pointer text-[20px]">Services</Link>
        <Link to="/gallery" className="hover:text-[#1D4ED8] cursor-pointer text-[20px]">Gallery</Link>
        <Link to="/blog" className="hover:text-[#1D4ED8] cursor-pointer text-[20px]">Blog</Link>
        <Link to="/contact" className="hover:text-[#1D4ED8] cursor-pointer text-[20px]">Contact</Link>
      </div>
    </section>
  );
};
