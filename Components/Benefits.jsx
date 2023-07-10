import frame from "../public/images/frame.png"
import circleC from "../public/images/circleC.png"
import circleB from "../public/images/circleB.png"
import React from 'react';
import Image from "next/image"

const Benefit = () => {
    return ( 
    <>
    <div className="bg-[#0B4CAD] px-20 py-16">
        <div className="mx-10">
            <p className="">
                <button className="text-[#0B4CAD] bg-slate-400 px-5 rounded">
                BENEFITS
                </button>
                </p></div>
            <div className="text-white font-bold text-4xl mx-10">
                <p>  Save Time on watching Crypto charts. </p>
               
               <p>Save money.</p>  
            </div>
            <div className="flex flex-col md:flex-row  ">
      
      <div className="flex-1 md:w-1/2  text-white ">
        <div className="flex flex-col h-full justify-center mx-5 px-5">
          <div className="flex flex-col md:flex-row items-center mb-6">
           
            <div className="flex flex-col my-1">
          <p className='font-bold '>Capitial Protection</p>
            <p className="font-normal text-[16px] ">We have risk management policy that helps to protect our <br/> investment capital depending on the investment plan you choose</p>
          </div>
          
          
          </div>
          <div className="flex flex-col my-3">
           <p className="font-bold">Transparency in Report</p>
            <p className="font-normal text-[16px] ">Our reporting style helps you see the state of your portfolio to help you monitor performance.</p>
          </div>
          <div className="flex flex-col my-3">
           <p className="font-bold">Trained $ Vetted Traders</p>
            <p className="font-normal text-[16px] ">We have trained and higly skilled traders with over 4years experience in the crypto-currency market.</p>
          </div>
         
          
          
          {/* Repeat the above div block two more times */}
        </div>
      </div>
      <div className="flex-1 md:w-1/2 ">
        <div className="flex items-center justify-center h-full">
          <Image
            src={frame}
            width={400}
            height={300}
            alt="Hero Image"
            className="w-[80%] h-auto max-h-96 md:max-h-full py-5"
          />
        </div>
      </div>
    </div>
    </div>
    </> );
}
 
export default Benefit;