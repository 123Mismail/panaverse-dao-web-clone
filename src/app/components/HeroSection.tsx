 
 import React from "react";
import Image from "next/image";
import typeWriter from "./typeWriter";
import TypeWriter from "./typeWriter";
const HeroSection = () => {
  return (
    <div>
      <section className="  body-font  relative animate-textLanding">
        <div className="container mx-auto flex px-5  py-24 lg:pt-10 -mt-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left ">
            <p className="leading-relaxed text-[#00616C] text-[18px] font-semibold font-manrope mb-4 ">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </p>
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium  capitalize ">
             <TypeWriter />
               
            </h1>
            <p className="text-[20px] mb-3 text-[#4A5B5C]">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="text-[20px] mb-3 text-[#4A5B5C]">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="flex w-full md:justify-start justify-center mt-5">
              <button className="inline-flex text-white ring-2 ring-[#2ccfe4] bg-[#00616C] border-0 py-3 px-8   text-lg rounded-3xl font-semibold hover:bg-[#00616C] cursor-pointer animate-bounce">
                Learn More
              </button>
            </div>

             
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  mb-32  flex   justify-center items-center  border-spacing-0 ">
            <Image src={'/heropic.png'} height={550} width={550} alt="hero image" className="lightning mt-3 lg:rounded-full  lg:h-[450px] lg:w-[450px] overflow-visible "/>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-6 border-none absolute px-5 -top-4 opacity-5 w-full border-b-white ">
  {Array.from({ length: 24 }).map((_, indx) => (
    <div key={indx} className="h-36 w-full border border-[#00616C] flex items-center justify-center">
      {/* boxes */}
    </div>
  ))}
</div>
    </div>
  );
};

export default HeroSection;
