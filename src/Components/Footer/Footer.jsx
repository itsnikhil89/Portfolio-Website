// import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div
//       id="Footer"
//       className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
//     >
//       <div>
//         <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
//         <h3 className="text-sm md:text-2xl font-normal">
//           Feel Free To reach out!
//         </h3>
//       </div>

//       <ul className="text-sm md:text-xl">
//         <li className="flex gap-1 items-center">
//           <MdOutlineEmail size={20} />
//           myemail@gmail.com
//         </li>
//         <li className="flex gap-1 items-center">
//           <CiLinkedin />
//           linkdlin.com/username
//         </li>
//         <li className="flex gap-1 items-center">
//           <FaGithub />
//           github.com/username
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To Reach Out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:kumarnikhil8920@gmail.com" className="hover:underline">
            Gmail
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/nikhil-kumar-692791233/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/itsnikhil89"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

