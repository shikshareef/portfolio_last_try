import React from 'react';
import ProjectItem from './ProjectItem';
import appimage from '../assets/app.jpg';
import newsweb from '../assets/newsphoto.jpg';

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        In my journey, I've had the opportunity to work on some interesting projects. Here are a couple of them:
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={appimage} title='Women Security App' />
        <ProjectItem img={newsweb} title='News Website' />
      </div>
    </div>
  );
}

export default Projects;
