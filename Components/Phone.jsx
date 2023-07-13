import Image from "next/image"
import Untitled from "../public/images/Untitled.png"
import rightArrow from "react-icons"
const Phone = () => {
  return (
    <section>
      <div className="flex mx-16 my-16 ">
        <div className="flex-1 md:w-1/2  text-white ">
          <div className="flex flex-col h-full justify-center  ">
            <div className="flex flex-col md:flex-row items-center mb-6">

              <div className="flex flex-col my-1 bg-[#0B4CAD] px-5  rounded-l-lg">
                <p className='font-bold text-4xl py-3  '>Save Time on watching <br className="" /> Save money.</p>
                <p className="font-normal text-xl text-[#F1F2F6] ">Recieve secured and automated earnings while we trade for you Recieve secured and automated earnings while we trade for you. Recieve secured and automated earnings  <br />
                  while we trade for you</p>
                <p><button className="text-white px-0 my-5">Learn More <rightArrow  /> </button></p>
              </div>


            </div>
            {/* <div className="flex flex-col my-3">
           <p className="font-bold">Transparency in Report</p>
            <p className="font-normal text-[16px] ">Our reporting style helps you see the state of your portfolio to help you monitor performance.</p>
          </div>
          <div className="flex flex-col my-3">
           <p className="font-bold">Trained $ Vetted Traders</p>
            <p className="font-normal text-[16px] ">We have trained and higly skilled traders with over 4years experience in the crypto-currency market.</p>
          </div> */}



            {/* Repeat the above div block two more times */}
          </div>
        </div>
        <div className="flex-1 md:w-1/2 ">
          <div className="flex items-center justify-center h-full">
            <Image
              src={Untitled}
              width={400}
              height={300}
              alt="Hero Image"
              className="w-[100%] h-auto max-h-96 md:max-h-full py-5"
            />
          </div>
        </div>
      </div>


    </section>
  );
}

export default Phone;