import React from "react";
import Link from "next/link";
import Image from "next/image";

//  special courses data

interface Courses {
  title: string;
  description: string;
  src: string[];
}

const data: Courses[] = [
  {
    title: "Specialized Program",
    description: "Web 3.0 (Blockchain) and Metaverse Specialization",
    src: ["/course1.png"],
  },
  {
    title: "Specialized Program",
    description: "Web 3.0 (Blockchain) and Metaverse Specialization",
    src: ["/course1.png"],
  },
  {
    title: "Specialized Program",
    description: "Web 3.0 (Blockchain) and Metaverse Specialization",
    src: ["/course1.png"],
  },
  {
    title: "Specialized Program",
    description: "Web 3.0 (Blockchain) and Metaverse Specialization",
    src: ["/course1.png"],
  },
  {
    title: "Specialized Program",
    description: "Web 3.0 (Blockchain) and Metaverse Specialization",
    src: ["/course1.png"],
  },
];
const SpecialTracks = () => {
  return (
    <div>
      <section className=" body-font relative mt-20">
        <div className="-mb-10 container mx-auto  px-5">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
            {" "}
            Specialized Tracks:
          </h1>
          <p className="text-[#4A5B5C] text-[20px] font-medium">
            After completing the first three quarters the participants will
            select<br></br> one or more specializations consisting of two
            courses each:
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-start justify-start relative border border-[#00616C4D] lightning hover:ring-2 hover:ring-[#3fe7fadf]">
            <div >
              <h2 className="text-[#00616C] text-[14px] font-medium ">
                Specialized Program
              </h2>
              <h1 className="text-[24px] font-bold text-black py-3">
                Web 3.0 (Blockchain) and Metaverse <br></br> Specialization
              </h1>
              <p className="text-[20px] font-medium text-[#4A5B5C] lh">
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
              </p>
              <Link
                href={"#"}
                className="underline mt-2 text-[#00616C] text-[24px] font-bold hover:scale-105"
              >
                Learn more{" "}
              </Link>
              <Link href={"/register"}>
                <button className="inline-flex ml-3 text-white bg-[#00616C] border-0 py-2 px-6   text-base rounded-3xl font-semibold hover:ring-2 hover:ring-[#2ccfe4] duration-300 hover:scale-105">
                  Register now
                </button>
              </Link>
              <div className="grid  lg:grid-cols-2 grid-cols-1 py-6 gap-2 mt-4">
                {/* course 4 */}
                <div>
                  <div className=" max-w-[427px]">
                    <div className="h-[229px] text-left w-full  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden  relative">
                      <h2 className=" text-black text-base font-extrabold  mb-1">
                        Quarter IV
                      </h2>

                      <p className="leading-relaxed mb-3 text-[#4A5B5C] font-medium">
                        W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
                        Cloud Apps and APIs using Next.js 13 and Cloud
                        Development Kit (CDK) for Terraform
                      </p>
                      <p className="text-[204px] absolute -top-24 right-10 opacity-5 font-extrabold">
                        4
                      </p>
                    </div>
                  </div>
                </div>
                {/* course 5*/}
                <div>
                  <div className=" max-w-[427px] w-full">
                    <div className="h-[229px] text-left w-full  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden  relative">
                      <h2 className=" text-black text-base font-extrabold mb-1">
                        Quarter V
                      </h2>

                      <p className="leading-relaxed mb-3 text-[#4A5B5C] font-medium">
                        W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
                        Cloud Apps and APIs using Next.js 13 and Cloud
                        Development Kit (CDK) for Terraform
                      </p>
                      <p className="text-[204px] absolute -top-24 right-10 opacity-5 font-extrabold">
                        5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="lg:w-1/3 md:w-1/2 sm:px-4  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            {data.map((course: Courses, ind: number) => (
              <>
                <div
                  key={ind}
                  className="flex justify-center items-center space-x-3  group"
                >
                  <Image
                    src={course.src[0]}
                    height={200}
                    width={200}
                    className="h-[80px] w-[110px] group-hover:scale-110 duration-300  hover:shadow-2xl hover:shadow-[#2ccfe4] lightning"
                    alt="course image"
                  ></Image>
                  <div>
                    {" "}
                    <h2 className="text-[#00616C] text-[14px] font-medium">
                      {course.title}
                    </h2>
                    <p className="text-[18px] text-black font-bold">
                      {course.description}
                    </p>
                  </div>
                </div>
                <div className="h-[2px] w-full bg-[#DEE1E6] my-5"></div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialTracks;
