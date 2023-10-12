import React, { useState } from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaDatabase, FaReact, FaAndroid  } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const SkillCard = ({ skill, percentage, icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div id='skills'
      className={`bg-#6A5ACD transition duration-300 shadow-md rounded-lg mx-2 my-2 p-4 max-w-xs text-center w-48 ${
        hovered && 'scale-105 bg-#FFD700'
      }`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div className="text-4xl mb-4" style={{ color: '#001b5e' }}>{icon}</div>
      <h3 className="text-xl mb-2 font-bold" style={{ color: '#001b5e' }}>{skill}</h3>
      <div className="mx-auto w-24 relative">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: '#001b5e',
            pathTransitionDuration: 1.5,
            pathColor: `#ADD8E6`, // Light blue color
            trailColor: 'white',
          })}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { skill: 'Java', percentage: 95, icon: <FaJava /> },
    { skill: 'Python', percentage: 80, icon: <FaPython /> },
    { skill: 'HTML', percentage: 80, icon: <FaHtml5 /> },
    { skill: 'CSS', percentage: 80, icon: <FaCss3 /> },
    { skill: 'JavaScript', percentage: 80, icon: <FaJs /> },
    { skill: 'SQL', percentage: 80, icon: <FaDatabase /> },
    { skill: 'React', percentage: 60, icon: <FaReact /> },
    { skill: 'Android Studio', percentage: 90, icon: <FaAndroid /> },
    { skill: 'Machine Learning', percentage: 80, icon: <FaPython /> },
  ];

  return (
    <div className="my-8 text-center">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#001b5e' }}>Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill.skill} percentage={skill.percentage} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
