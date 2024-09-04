import React, { useState, useRef } from 'react';
import imgSrc from '../assets/building.jpeg';
import { MdOutlineHelpOutline } from "react-icons/md";
import { GrDrag } from "react-icons/gr";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageSection = () => {
  const [images, setImages] = useState([imgSrc, imgSrc, imgSrc]);
  const fileInputRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Function to add new images
  const addImage = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <div className='relative flex bg-[#363C43] h-[330px] w-[720px] rounded-xl overflow-hidden'>
      <div className="w-[24px] h-min relative ml-3">
        <MdOutlineHelpOutline className="w-[24px] h-[24px] mt-5" />
        <GrDrag className="w-[24px] h-[30px] mt-[105px] text-[#4A4E54]" />
      </div>

      <div className='flex-1 mr-8'>
        <div className='flex justify-between mt-4 ml-4'>
          <div className='h-16 w-36 bg-[#171717] text-white flex items-center justify-center rounded-3xl'>
            Gallery
          </div>
          <div className='flex items-center gap-6'>
            <div 
              className='w-32 h-11 bg-gradient-to-b from-[#303439] to-[#161718] rounded-3xl shadow-xl text-white text-xs flex justify-center items-center cursor-pointer'
              onClick={() => fileInputRef.current.click()} // Trigger file input click
            >
              + ADD IMAGE
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={addImage}
              className="hidden"
            />
            <div className='flex gap-4'>
              <div
                className='w-11 h-11 bg-gradient-to-b from-[#303439] to-[#161718] rounded-full text-[#6F787C] flex justify-center items-center cursor-pointer'
                onClick={scrollLeft}
              >
                <FaArrowLeft />
              </div>
              <div
                className='w-11 h-11 bg-gradient-to-b from-[#303439] to-[#161718] rounded-full text-[#6F787C] flex justify-center items-center cursor-pointer'
                onClick={scrollRight}
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable image gallery */}
        <div
          className='flex overflow-x-auto overflow-y-clip mt-14 ml-2 space-x-4 pr-6'
          ref={scrollContainerRef}
        >
          {images.map((image, index) => (
            <div key={index} className='flex-shrink-0'>
              <img
                src={image}
                alt={`building-image-${index}`}
                className='h-40 w-40 object-cover rounded-lg grayscale hover:grayscale-0 hover:-rotate-6 hover:scale-110 transition-transform duration-500'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
