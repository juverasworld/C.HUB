import { useState } from 'react';
import logo from "../public/images/logo.png";
import google from "../public/images/google.png";
import appstore from "../public/images/appstore.png";
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="bg-[#F4F8FD] text-black">
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
        <div className="flex md:flex-row justify-evenly flex-col items-center md:items-start mb-4 md:mb-0">
          <div className='mx-5'>
            <h3 className='font-bold'>Company</h3>
            <p className="mt-2 text-sm">FAQs</p>
            <p className="mt-2 text-sm">Contact</p>
            <p className="mt-2 text-sm">Free/pricing</p>
          </div>
          <div className='mx-5'>
            <h3 className='font-bold'>LEGAL</h3>
            <p className="mt-2 text-sm">Privacy Policy</p>
            <p className="mt-2 text-sm">Terms & Condition</p>
            <p className="mt-2 text-sm">Privacy Policy</p>
          </div>
          <div>
            <h3 className=''>SOCIAL</h3>
            <div className='flex flex-row text-[#0E56C0] '>


              <p className="mt-2 mx-2 text-sm"><FaFacebook size={24} /></p>
              <p className="mt-2 text-sm"> <FaInstagram size={24} /></p>
              <p className="mt-2 mx-2  text-sm"> <FaTwitter size={24} /></p>
              <p className="mt-2 text-sm"> <FaLinkedin size={24} /></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 ">
          <h3>DOWNLOAD APP </h3>
          <p className='flex'>
            <Image src={google} width={150} height={100} />
            <Image src={appstore} width={150} height={50} className='h-[40px] mt-2' />
          </p>

        </div>
      </div>
      <div className='px-3 text-[#4A4A4A] text-[14px] font-semibold  mt-5'>
        <div className='mb-4 '>
          ® CryptoLife Capital Limited is a company registered in the Cayman Island with company number CR-377392 and registered address at WB Corporate Services (Cayman) Ltd., PO Box 2775, Artemis House, 67 Fort Street, Grand Cayman, KY1-1111, Cayman Islands.
        </div>
        <div>

          Cryptocurrency is a new asset class that is not subject to regulations at the moment. The services provided by CryptoLife Capital are not currently regulated by any regulatory body. Please be aware that: (i) Your investment is not protected by any financial and insurance services compensation scheme (ii) Crypto assets may experience frequent price volatility resulting in a high degree of risk and can result in the loss of your invested capital. (iii). We do not give financial advice, always consult your legal and financial advisor before making any investment. Before investing, you should ensure that you fully understand all the risks involved and take into consideration your level of experience, your risk appetite and investment objectives. You should not invest more than you can afford to lose. It is your responsibility to ascertain whether you are permitted to use our services based on the legal restrictions in your country of residence. We do not sell any of your personal information to third parties for marketing purposes. The information on this site is not directed at residents of any particular country in which crypto asset investment, distributions or use would be contrary to local law or regulation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
