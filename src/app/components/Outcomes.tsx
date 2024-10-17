import React from "react";
import Image from "next/image";
const Outcomes = () => {
  return (
    <div>
      <section className="body-font ">
        <div className="container px-5 py-24 mx-auto gap-4">
          {/* main container */}
          <div className="  lg:flex    justify-between">
            {/* left side */}
            <Image
              height={1050}
              width={1050}
              alt="ecommerce"
              src={"/left.png"}
              className="lightning rounded-full"
            />
            {/* right side */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0  ">
              <h1 className=" scroll-m-20 text-[36px] font-extrabold tracking-tight lg:text-[40px] lg:w-[600px] md:w-[500px] w-auto ">
                The Outcome for Participants of the Program
              </h1>

              <p className="leading-relaxed lg:w-[600px] md:w-[500px] w-auto text-[#4A5B5C] text-[20px] font-medium">
                As a graduate of this program, you will own valuable products
                such as Full-Stack App Templates, AR and VR Experiences, and
                APIs that are marketed globally by the Panaverse DAO. You will
                also have the opportunity to offer your services at a rate of
                $50 per hour, providing a path to financial stability while
                contributing to the growth of Pakistan's software exports
              </p>
              <div className="grid grid-cols-2 lg:w-[600px] md:w-[500px] w-auto py-10  ">
                <div className="py-5 flex space-x-2 items-center">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-primary "
                  />
                  <h3 className="text-black text-[21px] font-medium">
                    Product Ownership
                  </h3>
                </div>
                <div className="py-5 flex space-x-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox  "
                  />
                  <h3 className="text-black text-[21px] font-medium">
                    Freelancing
                  </h3>
                </div>
                <div className="py-5 flex space-x-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-primary"
                  />
                  <h3 className="text-black text-[21px] font-medium">
                    Global marketing by DAO
                  </h3>
                </div>
                <div className="py-5 flex space-x-2 items-center ">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-primary"
                  />
                  <h3 className="text-black text-[21px] font-medium">
                    Boosting Economy
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Outcomes;
