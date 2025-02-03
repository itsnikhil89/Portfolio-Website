import React from "react";
import homeImg from "../../assets/homeImg.png"
import TextChange from "../TextChange";

const Home = () => {

  function handleResume(){
    window.open("https://drive.google.com/file/d/1whlU_3oE4EGtQxmaI-3XnI2ncMAZrtts/view?usp=drive_link", "_blank");
  }
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        A passionate Frontend Developer with expertise in React.js,
        JavaScript, and modern web technologies.
         I love building user-friendly, responsive, and 
         AI-powered applications. 
         With experience in developing dynamic web apps and a 
         strong foundation in software engineering, 
         I aim to create impactful digital solutions. 
         Explore my work and let's connect!
        </p>
        <button  onClick={handleResume} className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          View Resume
        </button>
      </div>
      <div>
        <img className="" src={homeImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
