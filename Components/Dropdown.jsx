import React, { useState } from 'react';

const YourComponent = ({ heading }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col bg-[#F9FAFB] ">
      <div className="flex justify-evenly w-full my-4">
        <h2 className="mr-2 font-bold  text-xl ">{heading}</h2>
        <button
          onClick={handleToggle}
          className="text-xl focus:outline-none"
        >
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && (
        <p className="mt-2 text-center bg-white mx-auto px-10" onClick={handleToggle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
          condimentum  <br  />. lacus a tristique porta.   Etiam rhoncus sem nunc, . a
          consequat nisl aliquet at <br className='' />. In nec ultrices orci, non tristique est.
          Nulla non orci vel dolor mollis tristique <br className='' /> vitae a turpis. . Mauris
          vitae varius lectus, id condimentum arcu.<br className='' /> Fusce iaculis velit ut
          nibh lobortis scelerisque.
        </p>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className='"flex flex-col items-center lg:justify-center md:my-10"'>
            <div className="flex flex-col bg-white ">
      <YourComponent heading="What is Everest ?" />
      <YourComponent heading="What is Everest ?" />
      <YourComponent heading="What is Everest ?" />
      <YourComponent heading="What is Everest ?" />
      </div>
    </div>
  );
};

export default App
