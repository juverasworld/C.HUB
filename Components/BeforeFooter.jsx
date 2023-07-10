import React from 'react';
import Image from "next/image"
import iphone from "../public/images/iphone.png";
import appstore from "../public/images/appstore.png";
import google from "../public/images/google.png";
const HeroComponent = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#f4feff] h-auto">
      <div className="flex-1 md:w-1/2 bg-[#F4FEFF] text-Black py-10  text-center px-5">
        <h1 className="text-4xl md:text-6xl font-bold ">Africa’s No.1 <br className='sm:block hidden' /> Mobility As A <br className='sm:block hidden' /> Service platform.
</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh libero elit faucibus egestas interdum.</p>
<p className='my-3'>
   <button className='px-16 mx-3 py-3 bg-[#0082FF] rounded-3xl'> Buy $EVR</button> 
   <button className='px-8 py-3 bg-white rounded-3xl'>Read Whitepaper</button>
</p>
<p className='sm:text-left px-3 mt-20'>
    Avaliable on
</p>
<p className='flex'>
    <Image src={google} width={200} height={150}/>
    <Image src={appstore} width={150} height={50} className='h-[50px] mt-3'/>
</p>
      </div>
      <div className="flex-1 md:w-1/2">
        <Image
          src={iphone}
          width={500}
          height={250}
          alt="Hero Image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
