import React from 'react';

function ProjectItem({ img, title }) {
  return (
    <div className='relative flex items-center justify-center h-48 w-full shadow-xl shadow-gray-400 rounded-xl group overflow-hidden hover:shadow-2xl transition duration-300 ease-in'>
      <img src={img} alt={title} className='object-cover w-full h-full' />
      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gradient-to-r from-gray-200 to-[#001b5e]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <a href='/' className=''>
         <p className='text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg rounded-md'>More Info </p>
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
