import React from 'react';
import Image from "next/image"
import appstore from "../public/images/appstore.png";
import google from "../public/images/google.png";
import circleB from "../public/images/circleB.png"
import circle from "../public/images/circle.png"
const HeroComponent = () => {
  return (
    <div className="flex flex-col md:flex-row  ">
       <div className="flex-1 md:w-1/2">
        <div className="flex flex-col h-full justify-center px-5 py-10">
            <h3 className='font-bold text-[#900000]'>RIDE WITH EVEREST</h3>
            <p className='font-bold text-4xl pb-5 pt-2'>Set Your own hours. <br /> Earn on your own terms.</p>
          <div className="flex items-center mb-6 md:mb-0 my-3">
            <Image
              src={circle}
              alt="Small Image"
              className="w-6 h-6 mr-2"
            />
            <p className="font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex items-center mb-6 md:mb-0 my-3">
            <Image
              src={circle}
              alt="Small Image"
              className="w-6 h-6 mr-2"
            />
            <p className="font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex items-center mb-6 md:mb-0 my-3">
            <Image
              src={circle}
              alt="Small Image"
              className="w-6 h-6 mr-2"
            />
            <p className="font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <p className='my-5'>
   <button className='px-8 mx-3 py-3 bg-[#0082FF] rounded-2xl'>Apply to drive</button> </p>
        </div>
      </div>
      <div className="flex-1 md:w-1/2 bg-[#f4feff] my-2">
        <div className="flex flex-col h-full justify-center px-5">
            <h3 className='font-bold text-[#2E9000]'>DRIVE WITH EVEREST</h3>
            <p className='font-bold text-4xl pb-5 pt-2'>Set Your own hours. <br /> Earn on your own terms.</p>
          <div className="flex items-center mb-6 md:mb-0 my-3">
            <Image
              src={circleB}
              alt="Small Image"
              className="w-6 h-6 mr-2"
            />
            <p className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex items-center mb-6 md:mb-0 my-3">
            <Image
              src={circleB}
              alt="Small Image"
              className="w-6 h-6 mr-2"
            />
            <p className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex items-center mb-6 md:mb-0 my-3">
            <Image
              src={circleB}
              alt="Small Image"
              className="w-6 h-6 mr-2"
            />
            <p className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <p className='flex my-2'>
    <Image src={google} width={200} height={150}/>
    <Image src={appstore} width={150} height={50} className='h-[50px] mt-3'/>
</p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
