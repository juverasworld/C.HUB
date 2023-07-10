import { useState } from 'react';
import logo from "../public/images/logo.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto py-8 px-4 md:flex md:justify-between">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <Image
            src={logo}
            width={200}
            height={150}
            alt="Image 1"
            className=" h-8 w-auto"

          />
          <p className="mt-2 text-sm">4th Street Elekahia Housing Estate Port  </p>
          <p className="mt-2 text-sm">Harcourt, Obio Akpor LGA,</p>
          <p className="mt-2 text-sm">Rivers State, Nigeria</p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
      <h3 className='font-bold'>Contact Us</h3>
          <p className="mt-2 text-sm">Lorem ipsum dolor sit amet</p>
          <p className="mt-2 text-sm">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
         <h3>Link</h3>
          <p className="mt-2 text-sm">Privacy Policy</p>
          <p className="mt-2 text-sm">Terms and Conditions</p>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
