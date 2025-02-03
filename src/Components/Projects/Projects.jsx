import React from "react";
import ProjectCard from "./ProjectCard";
import newsImg from "../../assets/newsImg.png"
import aiImg from "../../assets/aiImg.png"
import landingImg from "../../assets/landingImg.png"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="AI Article Summarizer App"
          main="A React.js-based AI-powered application that generates concise article summaries using the OpenAI API. Implements Redux for efficient state management, ensuring smooth user interactions. Users can input article links or text to quickly extract key insights, enhancing reading efficiency. "
          img={aiImg}
          link="https://github.com/itsnikhil89/Sumz---Article-SummarizerApp-in-React.git"
        />
        <ProjectCard
          title="Dynamic News Web Application"
          main="A React.js & Bootstrap-powered news app that fetches real-time articles from multiple sources using the News API. Features category-based filtering, a responsive UI, and smooth navigation for an enhanced reading experience. Designed to deliver the latest news efficiently and intuitively."
          img={newsImg}
          link="https://github.com/itsnikhil89/NewsHub-App.git"
        />
        <ProjectCard
          title="Saloon Landing Page Website"
          main="A responsive and visually appealing landing page designed for a saloon, built using HTML, CSS, and JavaScript. Focused on user engagement with clean design elements, smooth navigation, and informative sections to showcase services and promotions."
          img={landingImg}
          link="https://github.com/itsnikhil89/Task-1-Web-Development-Internship.git"
        />
      </div>
    </div>
  );
};

export default Projects;
