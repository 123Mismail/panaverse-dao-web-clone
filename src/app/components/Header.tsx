
import React from 'react'
//  import Logo from "/Logo.png"
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='  lg:sticky lg:top-0 lg:z-10' >
        <header className="body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'} className="flex title-font font-medium items-center   mb-4 md:mb-0">
    <Image src={'/Logo.png'} height={100} width={100} alt='logo panaverse dao' className='scroll-smooth'/>
      {/* <span className="ml-3 text-xl">Tailblocks</span> */}
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-medium hover:text-[#2ccfe4]">
      <Link href={'/'} className="mr-5 hover:text-gray-700 hover:scale-105 duration-300 ease-in">Home</Link> 
      <Link href={'#courses'} className="mr-5 hover:text-gray-700 hover:scale-105 duration-300 ease-in">Courses</Link> 
      <Link href={'#blogs'} className="mr-5 hover:text-gray-700 hover:scale-105 duration-300 ease-in">Blogs</Link>
      <Link href={'#videos'} className="mr-5 hover:text-gray-700 hover:scale-105 duration-300 ease-in">Videos</Link>
    </nav>
    
  </div>
</header>
    </div>
  )
}
 
export default Header


