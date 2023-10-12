import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import home from '../assets/home.jpg';
import leetcodeIcon from '../assets/leetcode.png'; // Import your LeetCode icon
import LinkdedInIcon from '../assets/linkedin.png'
import InstaIcon from '../assets/instagram.png'

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={home}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/10">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl text-white font-bold">I'm Shareef</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-white">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
                "ML Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: '5px', display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://www.instagram.com/shareef.fellow/" target="_blank" rel="noopener noreferrer">
              <img src={InstaIcon} alt="LeetCode Icon" className=" w-350 cursor-pointer hover:scale-110" />
            </a>
           
            <a href="https://www.linkedin.com/in/shareef-sk-405bb1252" target="_blank" rel="noopener noreferrer">
              <img src={LinkdedInIcon} alt="LeetCode Icon" className=" w-350 cursor-pointer hover:scale-110" />
            </a>
            <a href="https://leetcode.com/shareef_leet/" target="_blank" rel="noopener noreferrer">
              <img src={leetcodeIcon} alt="LeetCode Icon" className=" w-350 cursor-pointer hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
