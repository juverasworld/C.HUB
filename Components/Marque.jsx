import { useEffect, useRef } from 'react';
import Image from "next/image"
import bit from "../public/images/bit.png"
const Marquee = ({ children }) => {
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     const marqueeElement = marqueeRef.current;

//     let animationId;
//     const startMarqueeAnimation = () => {
//       animationId = requestAnimationFrame(() => {
//         if (marqueeElement.scrollLeft >= marqueeElement.scrollWidth) {
//           marqueeElement.scrollLeft = -marqueeElement.clientWidth;
//         } else {
//           marqueeElement.scrollLeft += 1;
//         }
//         startMarqueeAnimation();
//       });
//     };

//     startMarqueeAnimation();

//     return () => {
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

  return (
    <div className="marquee-wrapper">
      {/* <div ref={marqueeRef} className="marquee-content">
        {children}
        {children}
      </div> */}
      <marquee behaviour="scroll" direction="left" >
       <div className="flex flex-row">
       <p className='text-white flex flex-row'>
            <span className='px-2 py-[5px]'> <Image width={30} height={20} src={bit}/> </span>
            <span className='font-bold px-2 py-2'> Bitcoin</span>
            <span className='text-gray-400 py-2'> BTC</span>
            <span className='font-bold px-5 py-2'> $34,234.94</span>
        </p>
        <p className='text-white flex flex-row'>
            <span className='px-2 py-[5px]'> <Image width={30} height={20} src={bit}/> </span>
            <span className='font-bold px-2 py-2'> Bitcoin</span>
            <span className='text-gray-400 py-2'> BTC</span>
            <span className='font-bold px-5 py-2'> $34,234.94</span>
        </p>
        <p className='text-white flex flex-row'>
            <span className='px-2 py-[5px]'> <Image width={30} height={20} src={bit}/> </span>
            <span className='font-bold px-2 py-2'> Bitcoin</span>
            <span className='text-gray-400 py-2'> BTC</span>
            <span className='font-bold px-5 py-2'> $34,234.94</span>
        </p>
        <p className='text-white flex flex-row'>
            <span className='px-2 py-[5px]'> <Image width={30} height={20} src={bit}/> </span>
            <span className='font-bold px-2 py-2'> Bitcoin</span>
            <span className='text-gray-400 py-2'> BTC</span>
            <span className='font-bold px-5 py-2'> $34,234.94</span>
        </p>
        <p className='text-white flex flex-row'>
            <span className='px-2 py-[5px]'> <Image width={30} height={20} src={bit}/> </span>
            <span className='font-bold px-2 py-2'> Bitcoin</span>
            <span className='text-gray-400 py-2'> BTC</span>
            <span className='font-bold px-5 py-2'> $34,234.94</span>
        </p>
       </div>
         </marquee>
    </div>
  );
};

export default Marquee;
