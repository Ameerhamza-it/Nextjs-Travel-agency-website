import Link from 'next/link';
import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";


function Navbar() {
  return (
    <>
    

<div className="w-full h-[70px] border-[1px] border-gray-300 bg-blue-500 flex items-center gap-8 mr-10">
  <div><img src="./img/lb.jpeg" alt="" className='bg-white ml-[40px]' /></div>

  <ul className='text-white text-[15px] flex gap-[40px] ml-[230px]'>
    
    <li><Link href="/">Home</Link></li>
    <li ><Link href="/Page/About">page</Link></li>
    <li ><Link href="/Page/Menu">Portfolio</Link></li>
    <li ><Link href="/Page/Profile">Elements</Link></li>
    <li ><Link href="/Page/Finder">Features</Link></li>
    <li ><Link href="/Page/Store">Blog</Link></li>
    <li ><Link href="/Page/Custom">Shop</Link></li>
  </ul>
  <div className='text-white  ml-40 flex items-center gap-3'><FaPhoneVolume />
  <h4 className='text-white'>03263398773</h4>
  </div>


</div>
      
    </>
  )
}

export default Navbar
