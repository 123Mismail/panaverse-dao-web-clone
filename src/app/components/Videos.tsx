"use client"
 
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { SlBell } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import Image  from 'next/image';

interface Videos{
    title:string;
    playList:string;
    tag:string,
    src:string,
    image:string;
    fullPalylist:string
};

const data:Videos[]=[
    {
        title:"Cloud Deployment -Aure App",
        playList:"View full playlist",
        tag:"Panaversity Urdu.Playlist",
        src:"https://www.youtube.com/embed/1TzpNX4NRjI?si=l6aZuqo9eGFU4NbN", 
        image:"/blog1.avif",
        fullPalylist:"https://www.youtube.com/watch?v=1TzpNX4NRjI&list=PL0vKVrkG4hWrqwmlQ6k8ArJ93BrwX6V4l"
    },
    {
        title:"Cloud Deployment -Aure App",
        playList:"View full playlist",
        tag:"Panaversity Urdu.Playlist",
        src:"https://www.youtube.com/embed/6-W9mY-t430?si=EpgqCtqeGZQE6rc5",
        image:"/blogs2.avif",
        fullPalylist:"https://www.youtube.com/watch?v=6-W9mY-t430&list=PL0vKVrkG4hWoIq5_1NdK9ae47E7F_NtuK"
    },
    {
        title:"Programming for begginers",
        playList:"View full playlist",
        tag:"Panaversity Urdu.Playlist",
        src:"https://www.youtube.com/embed/o5mpd0iRhDA?si=JSt2G_wYovUTWA4D",
        image:"/blogs3.avif",
        fullPalylist:"https://www.youtube.com/embed/o5mpd0iRhDA?si=JSt2G_wYovUTWA4D"
    },
    {
        title:"Building E-commerce Shopify",
        playList:"View full playlist",
        tag:"Panaversity Urdu.Playlist",
        src:"https://www.youtube.com/embed/ejyDybw3EAA?si=LZg4oceRJVUkvSLH", 
        image:"/blogs4.avif",
        fullPalylist:"https://www.youtube.com/watch?v=ejyDybw3EAA&list=PL0vKVrkG4hWr46NBwKK-niU3WYpeME0Ej"
    },
    
]

const videoNave=["Home" ,"Videos" ,"Shorts" ,"Live"  ]

const VideosPage = () => {

  const [isOnline, setIsOnline] = useState(true);

  // checking isOnline or not
  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    // Set the initial online status
    updateOnlineStatus();

    // Add event listeners for online and offline events
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);
  return (
    <div id='videos'>
        <section className="   body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center sm:pr-2 w-full  mb-20">
      <Image src={'/main.jpg'} height={1500} width={1500} className='w-full hidden lg:block rounded-lg' alt='panaverse home image'></Image>
      <div className='flex flex-wrap  lg:justify-start justify-center items-center lg:my-2  -mt-8   '>
        <Image src={'/logo2.jpg'} alt='Logo Panaverse' height={250} width={250} className=' h-[150px] w-[150px] rounded-3xl mr-6 opacity-40'></Image><div className='text-left ml-2'>
            <h2 className='text-4xl font-bold pt-1 text-black'>Panaversity Urdu</h2>
            <p className='py-1'>@panaverse 20.3k subscribers 290 videos</p>
            <p className=''>Panaverse DAO's mission statement is to train Cloud Native Generative AI Developers ...<span className='text-black'>more</span></p> 
            <p className=''><Link href={'https://www.panaverse.co/'}target='_blank' className=' text-[#00616c]'>panavers.com</Link> <span className='text-sm text-black font-medium '>and 3 more links.</span></p> 
            <button className='py-2 px-5 rounded-3xl bg-slate-200 mt-3 flex items-center text-lg font-medium'> <SlBell className='mr-1 text-lg'/>Subscribe <IoIosArrowDown className='ml-1'/></button>
        </div> 
       
      </div>
      <ul className='flex space-x-10 max-w-full mt-4 text-base font-medium cursor-pointer '>{videoNave.map((link:string ,indx:number)=>(
             <li className='hover:underline  hover:underline-offset-[12px] ' key={indx}>{link}</li>
        ))}
         
        </ul> 
        <div className='h-[1px] w-full bg-black/50 mt-2'></div>
    </div>
    <div className="flex flex-wrap  -m-6">
        {data.map((video:Videos ,indx:number)=>(

<div key={indx} className="p-4 lg:w-1/4 md:w-1/2">
<div className="h-full flex flex-col items-center text-center">
    {/* video */}
    {isOnline ? 
    <iframe
    width={250}
    height={200}
    src={video.src}
    title="YouTube video player"
    frameBorder="1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className='rounded-lg p-0 w-full mb-1  lightning'
/> : <Image src={video.image} height={200} width={250} alt='video image' className='h-[200px] w-full rounded-xl lightning'></Image>}
    
  {/* video detail */}
  <div className="w-full text-left ">
  <h2 className="title-font font-medium text-lg text-gray-900">
             {video.title}
            </h2>
    <p className="mb-2">
     {video.tag}
    </p>
    <p className="text-base font-medium underline">
    <Link href={video.fullPalylist} target='_blank'> {video.playList}</Link>
    </p>

 
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

export default VideosPage