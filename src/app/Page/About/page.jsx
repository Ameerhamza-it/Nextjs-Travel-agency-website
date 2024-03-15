import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


function About() {
  return (
    <>
     <div className=" w-full h-[80vh] flex justify-center items-center">
      <div className="w-[40%] h-[70vh] ">
        <img src="./img/travil 14.jpg" alt="" className='w-[100%] h-[70vh]'/>
      </div>





      <div className="w-[40%] h-[70vh] ">
        <h1 className='text-[30px] ml-[100px] '>Litho Specializes in </h1>
        <h1 className='font-bold text-[33px] ml-[100px] mt-[-10px]'>Small group vacations</h1>

<div className=" flex justify-center items-center flex-col">
      <div className='flex mt-16'>
    <div className="text-orange-400 text-[27px]"><FaCheckCircle /></div>
    <div>
    <h3 className='text-black text-[16px] flex ml-6 font-bold'>A good traveler has no fixed plans</h3>
    <p className='text-gray-400 text-[13px] ml-6 mt-[3px]'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit  amet consectetur adipisicing elit. </p>
    </div>

    </div>

    <div className='flex mt-16'>
    <div className="text-orange-400 text-[27px]"><FaCheckCircle /></div>
    <div>
    <h3 className='text-black text-[16px] flex ml-6 font-bold'>A good traveler has no fixed plans</h3>
    <p className='text-gray-400 text-[13px] ml-6 mt-[3px]'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit  amet consectetur adipisicing elit. </p>
    </div>

    </div>
    </div>

    <div className=" flex justify-center items-center mt-7">
      <div className='btn-slide'>
      <div className="scene">
  <div className="cube">
    <span className="side top">Easter</span>
    <span className="side front">About Company</span>
  </div>
</div>
      </div>
      <div className='w-[160px] h-[20px] ml-4 '><a href=" " className='border-b-[2px]  border-black hover:text-red-500'>Discover TOUR</a></div> 
      
    </div>
      </div>
     </div>



   
    </>
  )
}

export default About
