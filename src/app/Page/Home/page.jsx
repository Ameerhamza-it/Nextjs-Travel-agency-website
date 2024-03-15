import React from 'react'
import { FaHeadphonesAlt } from "react-icons/fa";
import { PiArrowCircleUpRightFill } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { HiOutlineCurrencyDollar } from "react-icons/hi";



export default function Home() {
  return (
    <>
    <div className=" img h-screen w-full  bg-cover  bg-repeat-round  items-center justify-center flex" >
      <div className="flex  flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col">
    <p className='text-[11px] text-white font-bold tracking-[6px]'>PACKAGE START ONLY $250</p>
    <h2 className='text-[90px] text-white font-bold'>BEACHES</h2> 
    <h1 className='text-[110px] text-white font-blod mt-[-30px]'>DISCOVER</h1>
    {/* <button className='w-[190px] h-[50px] bg-black text-white text-[14px]'>DISCOVER TOUR</button> */}
    <div className='btn-slide'>
      <div className="scene">
  <div className="cube">
    <span className="side top">happy</span>
    <span className="side front">DISCOVER TOUR</span>
  </div>
</div>
      </div>





    </div>
    </div>
    </div>


<div className="w-full h-[33vh]  flex justify-center gap-32 ">

<div className='flex mt-16'>
    <div className="text-orange-400 text-[40px]"><FaHeadphonesAlt /></div>
    <div>
    <h3 className='text-black text-[16px] flex ml-6 font-bold'>Expert Support</h3>
    <p className='text-gray-400 text-[13px] ml-6 mt-[3px]'>Contect support team</p>
    </div>

    </div>

    <div className='flex mt-16'>
    <div className="text-orange-400 text-[50px]"><PiArrowCircleUpRightFill /></div>
    <div>
    <h3 className='text-black text-[16px] flex ml-6 font-bold'>Expert Support</h3>
    <p className='text-gray-400 text-[13px] ml-6 mt-[3px]'>Contect support team</p>
    </div>

    </div>

    <div className='flex mt-16'>
    <div className="text-orange-400 text-[40px]"><RiContactsLine />
</div>
    <div>
    <h3 className='text-black text-[16px] flex ml-6 font-bold'>Expert Support</h3>
    <p className='text-gray-400 text-[13px] ml-6 mt-[3px]'>Contect support team</p>
    </div>

    </div>

    <div className='flex mt-16'>
    <div className="text-orange-400 text-[50px]"><HiOutlineCurrencyDollar /></div>
    <div>
    <h3 className='text-black text-[16px] flex ml-6 font-bold'>Expert Support</h3>
    <p className='text-gray-400 text-[13px] ml-6 mt-[3px]'>Contect support team</p>
    </div>

    </div>

  </div>

<div className="w-full h-[2px] bg-slate-200 mt-[-30px]"></div>

      
    </>
  )
}
