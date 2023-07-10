import React from 'react';
import Image from "next/image"
import email from "../public/images/email.png";
const CenteredDiv = () => {
  return (
    <div className='bg-[#F4F8FD] '>

    <div className="flex   items-center lg:justify-center md:my-10">
      <div className="flex flex-row justify-evenly bg-white my-36 rounded-md py-10 px-10">
        <Image src={email} width={200} height={150}/>
        <div className='mx-10'>
      <h1 className="text-4xl font-bold text-[#0B4CAD]"> Join the 569 people who trust Us <br className='sm:block hidden'/> with their money</h1>
<div>
  <form className='my-3' action="">
    <input type="email" placeholder='your work email address' className='bg-gray-100 h-12 w-72 pl-4 outline-[#0b4cad]' />
    <button className='bg-[#0B4CAD] text-white'>Join the waitlist</button>
  </form>
</div>
        </div>
      </div>
      
     
   
    </div>
    </div>
    
  );
};

export default CenteredDiv;
