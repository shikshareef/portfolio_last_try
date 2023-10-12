import React from 'react'
import WorkInfo from './WorkInfo'

const data =[
    {
        year:2023,
        title:"web intern",
        duration:"1 month",
        details:"worked as a front end web intern under code alpha internship programm i sharped my front end skills with their tasks and completed my internship , thanks to code alpha"
    }
]

function Work() {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 ' id='work'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item , idx) => (
            <WorkInfo key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}
    </div>
  )
}

export default Work
