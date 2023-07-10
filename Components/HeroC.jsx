import React from 'react';
import Image from "next/image"
import iphonee from "../public/images/iphonee.png"
import metrics from "../public/images/metrics.png"
import check from "../public/images/check.png"
import contact from "../public/images/contact.png"
const HeroComponent = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex-1 md:w-1/2 ">
        <div className="flex items-center justify-center h-full bg-[#E8EEC2]">
          <Image
            src={iphonee}
            width={600}
            height={600}
            alt="Hero Image"
            className="w-[50%] h-full max-h-96 md:max-h-full py-5"
          />
        </div>
      </div>
      <div className="flex-1 md:w-1/2  text-black p-6">
        <div className="flex flex-col h-full justify-center mx-5 px-5">
          <p><button className='bg-[#4caf5149] px-10 rounded-xl text-[#0B4CAD]'>INVESTMENTS</button></p>
          <p className='text-[#0B4CAD] text-3xl  mt-5 font-bold'>Start Building your digital wealth in 10 minutes</p>
          <div className="flex flex-col md:flex-row items-center mb-6">

            


          </div>
          <div className="flex flex-row ">
            <div className='px-3 leading-10 pt-10 font-bold'>1</div>
            <Image
              src={contact}
              alt="Small Image"
              className="w-36 h-36 "
            />
            <div className='pt-7'>
              <p className="font-bold">Register</p>
              <p className="font-normal text-[16px] ">it more shed went up is loud case Delay music in lived noise an</p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className='px-3 leading-10 pt-10 font-bold'>2</div>
            <Image
              src={check}
              alt="Small Image"
              className="w-36 h-36"
            />
            <div className='pt-7'>
              <p className="font-bold">Get Verified</p>
              <p className="font-normal text-[16px] ">it more shed went up is loud case Delay music in lived noise an</p>
            </div>
          </div>
          <div className="flex flex-row my-3">
            <div className='px-3 leading-10 pt-7 font-bold'>3</div>
            <Image
              src={metrics}
              alt="Small Image"
              className="w-36 h-36"
            />
            <div className='pt-7'>
              <p className="font-bold">Get Verified</p>
              <p className="font-normal text-[16px] ">it more shed went up is loud case Delay music in lived noise an</p>
            </div>
          </div>

          <p><button className='bg-[#0B4CAD] text-white rounded w-52 py-3 font-bold'>Sign Up Now</button></p>
        </div>

      </div>
    </div>
  );
};

export default HeroComponent;

        