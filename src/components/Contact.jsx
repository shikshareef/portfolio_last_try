import React from 'react';

function Contact() {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
      <form action='https://getform.io/f/bd239c5e-4201-4590-ae7f-c0bc96e37bdd' method='POST' encType='multipart/form-data'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 bg-[#f0f0f0] border-[#001b5e] focus:outline-none focus:ring-2 focus:ring-[#001b5e] focus:border-transparent' type='text' name='name' />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 ml-3'>Phone Number</label>
            <input className='border-2 rounded-lg p-3 bg-[#f0f0f0] border-[#001b5e] focus:outline-none focus:ring-2 focus:ring-[#001b5e] focus:border-transparent' type='text' name='phone' />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input className='border-2 rounded-lg p-3 bg-[#f0f0f0] border-[#001b5e] focus:outline-none focus:ring-2 focus:ring-[#001b5e] focus:border-transparent' type='email' name='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input className='border-2 rounded-lg p-3 bg-[#f0f0f0] border-[#001b5e] focus:outline-none focus:ring-2 focus:ring-[#001b5e] focus:border-transparent' type='text' name='subject' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea className='border-2 rounded-lg p-3 bg-[#f0f0f0] border-[#001b5e] focus:outline-none focus:ring-2 focus:ring-[#001b5e] focus:border-transparent' rows='6' name='message'></textarea>
        </div>
        <div className='flex justify-center'>
          <button type='submit' className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact;
