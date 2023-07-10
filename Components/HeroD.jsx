import React from 'react';

const CenteredDiv = () => {
  return (
    <div className="flex flex-col items-center lg:justify-center md:my-10">
      <h1 className="text-4xl font-bold mb-4">Tokenomics</h1>
      <p className="text-[16px] ">$EVR is ipsum dolor sit amet, consectetur adipiscing elit. Aenean id amet,  <br className='md:block hidden' /> volutpat iaculis mattis nibh. Ante tincidunt nisl justo, luctus scelerisque eu a.</p>
      <p className='my-5'>
   <button className='px-8 mx-3 py-3 bg-[#0082FF] rounded-3xl text-white'> Buy $EVR</button>
   <button className='px-8 py-3 bg-white rounded-3xl'>Read Whitepaper</button>
    </p>
    <div className="flex my-5 bg-gray-200 px-5">
      <div className="flex flex-col items-center justify-center p-4  border-gray-300 ">
        <small className="text-sm">Token Name</small>
        <p className="text-lg font-bold mt-2">EVR</p>
      </div>
      <div className="flex flex-col items-center justify-center p-4 border-l border-gray-300">
        <p className="text-sm">Total Supply</p>
        <p className="text-lg font-bold mt-2">250,000,000</p>
      </div>
      <div className="flex flex-col items-center justify-center p-4 border-l border-gray-300">
        <p className="text-sm">Total Supply</p>
        <p className="text-lg font-bold mt-2">1EVR=$20.3</p>
      </div>
    </div>
    <div className="flex bg-gray-200 px-5">
      <div className="flex flex-col items-center justify-center p-4  border-white border-1 ">
        <small className="text-sm">Circulating supply</small>
        <p className="text-lg font-bold ">500,000,000</p>
      </div>
      <div className="flex flex-col items-center justify-center p-4  border-white border-1">
        <small className="text-sm">Circulating supply</small>
        <p className="text-lg font-bold ">500,000,000</p>
      </div>
      <div className="flex flex-col items-center justify-center p-4  border-white border-1  ">
        <small className="text-sm">Circulating supply</small>
        <p className="text-lg font-bold ">500,000,000</p>
      </div>
    </div>
    </div>
    
  );
};

export default CenteredDiv;
