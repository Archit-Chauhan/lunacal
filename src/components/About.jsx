import React, { useState } from "react";
import { GrDrag } from "react-icons/gr";
import { MdOutlineHelpOutline } from "react-icons/md";




const About = () => {
  const [data, setData] = useState("About")
  return (
    <div className="relative bg-[#363C43] w-[720px] h-[316px] md:1/2 flex rounded-xl overflow-hidden">
      {/* icons */}
      <div className="w-[24px] h-min relative ml-3">
      <MdOutlineHelpOutline className="w-[24px] h-[24px] mt-5 text-[#969696]"/>
      <GrDrag className="w-[24px] h-[30px] mt-[105px] text-[#969696] font-extrabold"/>
      </div>
      {/* navbar and text */}
      <div className="flex-1 ">
        <div className="flex-col">
          {/* navbar */}
            <div className="flex gap-2.5 px-1 bg-[#171717] mt-6 rounded-3xl h-[62px] w-[614px] mx-auto justify-stretch">
              <button class="relative h-[49px] w-[195px] bg-transparent my-auto font-medium text-[#A3ADB2] overflow-hidden group" onClick={()=>setData("About")}>
                <span class="relative z-20">About Me</span>
                <span class="absolute inset-0 z-10 bg-[#27282e] rounded-3xl transform scale-x-0 transition-transform duration-300 origin-top-left group-hover:scale-x-100"></span>
              </button>

              <button class="relative h-[49px] w-[195px] bg-transparent my-auto font-medium text-[#A3ADB2] overflow-hidden group" onClick={()=>setData("Experience")}>
                <span class="relative z-20">Experiences</span>
                <span class="absolute inset-0 z-10 bg-[#27282e] rounded-3xl transform scale-x-0 transition-transform duration-300 origin-top-left group-hover:scale-x-100"></span>
              </button>
              <button class="relative h-[49px] w-[195px] bg-transparent my-auto font-medium text-[#A3ADB2] overflow-hidden group" onClick={()=>setData("Recomended")}>
                <span class="relative z-20">Recommended</span>
                <span class="absolute inset-0 z-10 bg-[#27282e] rounded-3xl transform scale-x-0 transition-transform duration-300 origin-top-left group-hover:scale-x-100"></span>
              </button>
            </div>
          {/* text */}
          <div className="h-[62px] w-[614px] mx-auto mt-6 font-normal text-xl font-sans text-[#969696]">
            {data==="About" && (
              <>
              <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>

<p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
              </>
            ) }
            {data==="Experience" && (
              <>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore ipsa quod necessitatibus quaerat accusamus rerum! Nemo deserunt expedita aperiam sint voluptatum corrupti ipsa officiis, vitae, explicabo error modi soluta praesentium saepe laudantium ullam quas nihil ducimus culpa eos rem! Eius aliquid nobis atque optio. Est, corporis reiciendis nostrum veritatis accusantium obcaecati, quod optio quae suscipit iure, aperiam exercitationem nesciunt?</p>
              </>
            ) }
            {data==="Recomended" && (
              <>
              <p> Fugit sint reprehenderit facilis ipsum perspiciatis praesentium dolore voluptates ab quibusdam. Facilis eos magnam sequi error similique libero, iste deserunt cumque cupiditate aliquid at repellendus possimus, molestias voluptates expedita quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, laborum quod voluptate maxime totam porro qui fuga saepe labore est velit nihil nemo ducimus.</p>
              </>
            ) }
          
          </div>
        </div>
      </div>
        <div className="absolute w-2 rounded-lg right-3 h-16 top-1/2 -translate-y-1/2 bg-gradient-to-b from-[#888989] to-[#4A4E54]"></div>
    </div>
  );
};

export default About;
