import React from 'react';
import Image from "next/image"
// import heroImage from "../public/images/heroImage.png";
import appstore from "../public/images/appstore.png";
import main from "../public/images/main.png"
import google from "../public/images/google.png";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white">
      <div className="flex-1 md:w-1/2 bg-white star text-center text-[#0B4CAD] text-Black py-10 px-5 mx-10 sm:mt-16 mt-5">
        <h1 className="text-4xl md:text-5xl font-bold ">The easiest way to<br className='sm:block hidden' />invest in crypto
</h1>
<p className='text-[#5C5C5C]'>Recieved secured and automated earnings <br className='sm:block hidden ' /> while we trade for you</p>
<p className='my-3'>
   <button className='px-5 py-3 bg-[#0082FF] text-white rounded-xl'> Start Investing! </button> 
  
</p>

<p className='flex'>
    <Image src={google} width={200} height={150}/>
    <Image src={appstore} width={150} height={50} className='h-[50px] mt-3'/>
</p>
      </div>
      <div className="flex-1 md:w-1/2">
        <Image
          src={main}
          width={300}
          height={150}
          alt="heroImage Image"
          className="min-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
