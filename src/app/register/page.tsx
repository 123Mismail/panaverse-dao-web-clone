import React from "react";

const Registration = () => {
  return (
    <div>
      <section className=" body-font relative">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl   text-2xl font-bold title-font mb-4 ">
              Registration Form
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-[#15494f]">
              Pleae make sure details you enter are correct.
            </p>
          </div>
          <form action="https://formspree.io/f/xwpkezaq" method="POST">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-base font-medium opacity-75 text-[#15494f]"
                    >
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      className="w-full  bg-opacity-50 rounded border border-[#00616C] focus:border-[#00616C]  focus:bg-white focus:ring-1 focus:ring-[#00616C]/80  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-base font-medium opacity-75 text-[#15494f]"
                    >
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      className="w-full  bg-opacity-50 rounded border border-[#00616C] focus:border-[#00616C]  focus:bg-white focus:ring-1 focus:ring-[#00616C]/80  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-base font-medium opacity-75 text-[#15494f]"
                    >
                      Email
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      className="w-full  bg-opacity-50 rounded border border-[#00616C] focus:border-[#00616C]  focus:bg-white focus:ring-1 focus:ring-[#00616C]/80  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-base font-medium opacity-75 text-[#15494f]"
                    >
                      Password
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      className="w-full  bg-opacity-50 rounded border border-[#00616C] focus:border-[#00616C]  focus:bg-white focus:ring-1 focus:ring-[#00616C]/80  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full ">
                  <button className="flex mx-auto justify-center text-white bg-[#00616C] border-0 py-2 px-8 focus:outline-none hover:bg-[#00616C]/90 rounded text-lg font-medium w-full text-center">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registration;
