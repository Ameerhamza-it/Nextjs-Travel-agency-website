import React from 'react'

function Menu() {
  return (
    <>
    <div className="w-full h-[124vh] bg-slate-200">
        <div className="flex justify-around items-center w-[100%] h-[26vh] ">
            <div className=''>
            <h1 className='font-bold text-[30px]'>TOP DESTINATION</h1> 
            <p className='text-gray-500 text-[14px] '>This is the most Papular distination in the last month</p>
            </div>

            <div className='w-[160px] h-[20px] ml-36'><a href=" " className='border-b-[2px]  border-black hover:text-red-500'>ALL DESTINATIONS</a></div> 

        </div>
        <div className="w-full h-[90vh] ">

            <div className="flex justify-center items-center flex-row gap-[20px]">
              <div className="w-[20%] h-[38vh]">
                <img src="./img/travil 5.jpg" alt=""  className=' h-[38vh] rounded-[5px]'/>

                </div>  
              <div className="w-[20%] h-[38vh]">
              <img src="./img/travil 6.jpg" alt=""  className=' h-[38vh] rounded-[5px]'/>

              </div>
               <div className="w-[20%] h-[38vh]">
               <img src="./img/travil 7.jpg" alt=""  className=' h-[38vh] rounded-[5px]'/>

               </div>
               <div className="w-[20%] h-[38vh]">
               <img src="./img/travil 10.jpg" alt=""  className=' h-[38vh] rounded-[5px]'/>

                </div> 
               </div>
               <div className="flex justify-center items-center flex-row mt-[10vh] gap-[20px]">
               <div className="w-[20%] h-[38vh]">
               <img src="./img/travil 13.jpg" alt=""  className=' h-[38vh] rounded-[5px]'/>

                </div> 
               <div className="w-[20%] h-[38vh]">
               <img src="./img/travil 14.jpg" alt=""  className=' h-[38vh] rounded-[5px]'/>

                </div> 
               <div className="w-[20%] h-[38vh]">
               <img src="./img/travil 18.jpg" alt=""  className=' h-[38vh] w-full rounded-[5px]'/>

                </div> 
               <div className="w-[20%] h-[38vh]">
               <img src="./img/travil 17.jpg" alt=""  className=' h-[38vh] rounded-[5px]'/>

               </div>
               </div>  
           
        </div>







    </div>
    </>
  )
}

export default Menu
