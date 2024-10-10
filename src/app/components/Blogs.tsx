

import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
interface Blogs{
    title:string;
    name:string;
    description:string,
    img:string;

}
// blogs

  const data:Blogs[]=[
    {
        title:"Generative Ai",
        name: "Hamza Syed",
        description:"AI, or artificial intelligence, refers to the simulation of human intelligence processes by machines, particularly computer systems. These processes include learning (the acquisition of information and rules for using it), reasoning (using rules to reach approximate or definite conclusions), and self-correction.",
        img:"/blog1.avif"
    },
    {
        title:"Humnoid Robots",
        name: "Ameen Alam",
        description:"Humanoid robots are designed to resemble and mimic human behavior and appearance, often featuring a head, torso, arms, and legs. These robots can vary widely in complexity, from simple machines that perform basic tasks to advanced models equipped with artificial intelligence and sophisticated sensors..",
        img:"/blogs3.avif"
    },
    {
        title:"Web 3.o",
        name: "Asharib Ali",
        description:`
3D, or three-dimensional, refers to the representation of objects in a space that has width, height, and depth. This concept contrasts with 2D (two-dimensional) representations, which only capture width and height. The applications and implications of 3D technology span various fields:`,
        img:"/blogs4.avif"
    },
    {
        title:"Block Chain",
        name: "Daniyal Nagori",
        description:`A blog chain is a collaborative effort where multiple bloggers participate in a series of interconnected posts on a common theme or topic. Each blogger writes a post that links to the next one, creating a chain of content that encourages readers to explore different perspectives. Here’s how a typical blog chain works and some ideas for starting one:`,
        img:"/blogs2.avif"
    },
  ]

const Blogs = () => {
  return (
    <div id='blogs'>
        <section className="body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black  ">
       BLOGS
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-[#4A5B5C]">
      Blogs are online platforms where individuals or organizations share their thoughts, insights, and expertise on various topics</p>
    </div>

    <div className="flex flex-wrap -m-4">
        {data.map((blog:Blogs , indx:number)=>(
           <div key={indx} className="p-4 lg:w-1/2">
           <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left group">
             <Image
               alt="Blogs image "
               height={150}
               width={150}
               className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 group-hover:scale-110 duration-300 hover:shadow-2xl hover:shadow-[#2ccfe4] lightning"
               src={blog.img}
             />
             <div className="flex-grow sm:pl-8">
               <h2 className="title-font font-bold text-xl  text-black">
                {blog.title}
               </h2>
               <h3 className="  mb-3 text-[#00616c]/90 text-lg font-medium">{blog.name}</h3>
               <p className="mb-4 leading-relaxed   text-[#4A5B5C] font-medium line-clamp-4">
                 {blog.description}
               </p>
               <span className="inline-flex">
                 <a className="text-gray-500">
                   <svg
                     fill="none"
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     className="w-5 h-5"
                     viewBox="0 0 24 24"
                   >
                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                   </svg>
                 </a>
                 <a className="ml-2 text-gray-500">
                   <svg
                     fill="none"
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     className="w-5 h-5"
                     viewBox="0 0 24 24"
                   >
                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                   </svg>
                 </a>
                 <a className="ml-2 text-gray-500">
                   <svg
                     fill="none"
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     className="w-5 h-5"
                     viewBox="0 0 24 24"
                   >
                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                   </svg>
                 </a>
               </span>
               <button className='px-5 py-1 ml-2 rounded-xl bg-[#00616C] text-white text-lg font-medium hover:scale-105 duration-300 ring-2 ring-[#2ccfe4]  '>
               <Link href={'https://github.com/panaverse/learn-generative-ai'} target='_blank'>  Learn more</Link>
               </button>
             </div>
           </div>
         </div>
        ))}
     
      
     
     
    </div>
  </div>
</section>

    </div>
  )
}

export default Blogs