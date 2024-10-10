import React from "react";
import Link from "next/link";
// courses data

interface Courses {
  title: string;
  description: string;
  value: number;
}

const data: Courses[] = [
  {
    title: "Quarter-I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    value: 1,
  },
  {
    title: "Quarter-II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    value: 2,
  },
  {
    title: "Quarter-III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    value: 3,
  },
];

const Courses = () => {
  return (
    <div id="courses" className="felx flex-col justify-center">
      <section className=" body-font -mt-16 relative">
        <div className="container mx-auto flex px-5 pt-20 scroll-py-16 md:flex-row flex-col items-center relative">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
            <p className="uppercase text-left text-lg font-medium text-[#00616c]">
              programs of studies
            </p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
              Core Courses
              <br className="hidden lg:inline-block" />
              (Common in all specializations):
            </h1>
            <p className="mb-8 leading-relaxed">
              Every participant of the program will start by completing the{" "}
              <br></br>
              folloeing three courses:
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white ring-2 ring-[#2ccfe4] hover:scale-105 duration-300 bg-[#00616C] border-0 py-2 px-6   text-base rounded-3xl font-semibold">
                Learn More
              </button>
              <Link
                href={"/register"}
                className="underline ml-3 mt-2 text-[#00616C] text-[20px] font-semibold hover:scale-105 duration-300"
              >
                Register now{" "}
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 "></div>
        </div>
      </section>

      {/* courses  */}

      <div className="  px-4  mx-auto  py-10">
        <div className="flex flex-wrap justify-center relative">
          {data.map((course: Courses) => (
            <>
              <div className="p-4  max-w-[427px] ">
                <div className="h-[229px] text-left w-full border hover:ring-2 hover:ring-[#2ccfe4] duration-300 border-[#00616c]/80 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden  lightning  relative animate-borderMove">
                  <h2 className=" text-black text-base font-bold mb-1">
                    {course.title}
                  </h2>

                  <p className="leading-relaxed mb-3">{course.description}</p>
                  <p className="text-[204px] absolute -top-10 right-5 opacity-5 font-extrabold">
                    {course.value}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
