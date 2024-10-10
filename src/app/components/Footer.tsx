
import Image from 'next/image'
import React from 'react'
import { FaFacebook,FaLinkedin ,FaGithub ,FaTwitterSquare,FaMapMarkerAlt,FaWhatsapp ,FaRegEnvelope} from "react-icons/fa";
const Footer = () => {
  return (
 
      <footer className=" body-font">
  <div className="container px-5 py-24 mx-auto flex gap-y-3 md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center  ">
        <Image src={'/logo.png'} width={100} height={100} className='mr-3' alt='logo panaverse'></Image>
        <h2 className='title-font font-medium text-lg mb-3 text-black '>ABOUT US</h2>
      </a>
      <p className="mt-2   text-[#00616C]">
      Web 3 Protocol for Launching New Startups (DAOs), Raise Capital (Crowdfunding), Sell Assets on an Ownership Economy
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-[#4A5B5C] ">
        <h2 className="title-font font-medium text-lg mb-3 text-black ">
          COURSES
        </h2>
        <nav className="list-none mb-10 text-[#00616C]">
          <li>
            <a className=" ">Genarative Ai </a>
          </li>
          <li>
            <a className=" ">Web3.o</a>
          </li>
          <li>
            <a className=" ">Cloud Commputing</a>
          </li>
          <li>
            <a className=" ">Webdevelopment</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-[#4A5B5C] ">
        <h2 className="title-font font-medium text-lg mb-3 text-black ">
          CITIES
        </h2>
        <nav className="list-none mb-10 text-[#00616C]">
          <li>
            <a className=" ">Karachi </a>
          </li>
          <li>
            <a className=" first-letter:">Lahore</a>
          </li>
          <li>
            <a className=" ">Pishawer</a>
          </li>
          <li>
            <a className=" ">Hiaderabad</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-[#4A5B5C]  text-center">
        <h2 className="title-font font-medium text-lg mb-3 text-black ">
          SOCIAL MEDIA LINKS
        </h2>
        <nav className="list-none mb-10 cursor-pointer text-[#00616C]">
          <li>
            <a className=" flex   items-center gap-1 group"> <FaFacebook className='text-xl group-hover:scale-95 duration-300 '/>Facebook </a>
          </li>
          <li>
            <a className="flex   items-center gap-1  group"><FaTwitterSquare className='text-xl group-hover:scale-95 duration-300 '/> Twitter</a>
          </li>
          <li>
            <a className="flex   items-center gap-1  group"><FaGithub className='text-xl group-hover:scale-95 duration-300 '/> GitHub</a>
          </li>
          <li>
            <a className="flex   items-center gap-1  group"> <FaLinkedin className='text-xl group-hover:scale-95 duration-300 '/>Linkdin</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-[#4A5B5C]  ">
        <h2 className="title-font font-medium text-lg mb-3 text-black ">
          CONTACT US
        </h2>
        <nav className="list-none mb-10 cursor-pointer underline text-[#00616C]/80">
          <li>
            <a className=" flex   items-center gap-1 group"> <FaMapMarkerAlt className='text-xl group-hover:scale-95 duration-300 '/> Plot 245/2 M, PECHS Block 6,Karachi </a>
          </li>
          <li>
            <a className="flex   items-center gap-1  group"><FaWhatsapp className='text-xl group-hover:scale-95 duration-300 '/> +923069988780</a>
          </li>
          <li>
            <a className="flex   items-center gap-1  group"><FaRegEnvelope className='text-xl group-hover:scale-95 duration-300 '/> education@piaic.org</a>
          </li>
          
        </nav>
      </div>
       
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2024 Panaversity —
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          @Panaverse
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>


  )
}

export default Footer