import React from 'react'

function Profile() {
    const cardList = [
        {
            image: "./img/travil 4.jpg",
            heading: "Discover Forest",
            pera: "+990 Distination"
        },
        {
            image: "./img/travil 13.jpg",
            heading: "Mountain madness",
            pera: "+990 Distination"
        },
        {
            image: "./img/travil 8.jpg",
            heading: "Air line travlling",
            pera: "+990 Distination"
        },
        {
            image: "./img/travil 9.jpg",
            heading: "Romantic Forest",
            pera: "+990 Distination"
        }
    ]
  return (
    <>
     <div className="w-full h-[100vh] mt-20 flex   justify-center items-center">
     <div className="img2 travil-slide w-[55%] h-[93vh]  shadow-2xl shadow-gray-500 bg-white  ">
      <div className="w-[55%] h-[67vh] bg-white ml-[21rem] mt-[260px]">
        <div className="flex text-red-500 font-bold gap-24 text-[14px] ">
            <h3 className='mt-[50px] ml-7 hover:text-black'>03</h3>
            <h3 className='mt-[50px] hover:text-black'>FAMILY</h3>
        </div>
        <div className="ml-7 mt-8 ">
        <h1 className='font-bold text-[30px] text-gray-800'>Explore incledable </h1>
        <h1 className='font-bold text-[30px] text-gray-800'>deals on a tours</h1>
        <p className='text-[17px] mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet aliquid  perspiciatis architecto, sequi perferendis.</p>
        <br />

 <div className='btn-slide'>
 <div className="scene">
<div className="cube">
<span className="side top">happy</span>
<span className="side front">Vacations</span>
 </div>
</div>
 </div>


      </div>


      </div>

    
       </div> 
    
       
     </div>

     <div className="w-full h-[100vh] ">
        <div className="text-[30px] font-bold ml-[24rem] ">
            <h1 className='mt-16'>CHOOSE THE PROFECT TRIP WITH</h1>
            <h1 className=' ml-8 mt-2'>YOUR INCREDABLE INTERESTS</h1>
        </div>

<div className="flex justify-center    items-center mt-20 gap-[20px] ">
    {cardList.map((data) => {
        const {image, heading, pera} = data;
        return (
            <>
            <div className="w-[20%] h-[55vh] bg-white  shadow-2xl shadow-gray-300 ">
        
        <div className="w-[150px] h-[150px]  rounded-[50%] ml-[60px] mt-6 ">
           <img src={image} alt="" className='rounded-[50%] w-[150px] h-[150px] border-2 border-red-500' />
        </div>
        <h1 className='font-bold text-[17px] mt-8 ml-[60px]'>{heading}</h1>
        <p className='text-gray-400  text-[13px]  ml-[75px] hover:text-red-500'>{pera}</p>
<div className="flex justify-center items-center mt-28 ">
 <div className='btn-slide'>
 <div className="scene">
<div className="cube">
<span className="side top">happy</span>
<span className="side front">Explore Tours</span>
 </div>
</div>
 </div>

 </div>

       </div>
            </>
        )
    })}



</div>

     </div>
    
    </>
  )
}

export default Profile

