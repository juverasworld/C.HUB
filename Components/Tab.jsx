import React from 'react';
import binance from "../public/images/binance.png";
import investor from "../public/images/investor.png" 
import Image from "next/image"
const MarqueeComponent = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="marquee flex">
        <Image src={investor} alt="Image 1" className="mr-4" />
        <Image src={binance} alt="Image 1" className="mr-4" />
        <Image src={binance} alt="Image 1" className="mr-4" />
        <Image src={binance} alt="Image 1" className="mr-4" />
       
      </div>
    </div>
  );
};

export default MarqueeComponent;
