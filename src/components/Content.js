import React from 'react'

const Content = () => {
    return (
        <div className=' lg:flex   justify-center lg:py-0 py-4   bg-secondary  text-white'>
        
        <div className=" w-2/4 mt-8   " >
        <img className=" hidden lg:flex  "  src="./images/girl.png " alt=""/> 
        </div>
        
        <div className=" flex flex-row   text-5xl ml-10   " >
        <div className=" flex  flex-col justify-center         "  >
        <p className=" text-blue-600 text-4xl py-2 italic   " >60% discount</p> 
        <p className=" text-black font-bold text-5xl lg:text-8xl " >Winter</p> 
        <p className=" text-black font-bold text-5xl lg:text-8xl   "   >Collection</p> 
        
        <p className=" text-black text-lg italic py-2    "   > Best Both Collection By 2021!</p> 
        <p className="  bg-blue-500 rounded-full  text-white  py-3 w-36 mb-  text-center  text-xl hover:bg-red-500  "   >Shop Now</p> 
      
        </div>
        </div>
      </div>
     
    )
}

export default Content