import React from 'react'


const Navmob = () => {
    return (
        <div className="  h-60 bg-black bg-blend-multiply flex pl-10 pt-10 text-xl lg:xl  w-full text-white hidden   " >
         
        

         <div className="  gap-10 items-center cursor-pointer text-lg    "   >
          <div className="   "   >  Home    </div>  
          <div className="   "   > Category      </div>  
          <div className="   "   >   Latest      </div>  
          <div className="   "   >  Blog    </div>  
          <div className="   "   >  Pages    </div>  
          <div className="   "   >  Contact    </div>  
         </div>  



          <div className='items-center  gap-5 hidden  ' >
         <div className="  text-xs flex items-center   " >
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4 ml-36 hidden lg:flex  font-bold   absolute    " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
           </svg>
          
        <input className="  hidden lg:flex   text-xs py-3 pl-4 w-44 border border-gray-300   rounded-full  " type="text" placeholder="Search product" />         
          
          </div>
        
        
        <div className="  justify-center items-center  cursor-pointer     "   >
        <div className=" flex justify-center items-center   bg-white border border-gray-300   h-8 w-8  rounded-full   "    >
         
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
   </svg>  

   </div>
   </div> 
   <div className=" flex justify-center items-center    "   >
        <div className=" flex justify-center items-center cursor-pointer    bg-white border border-gray-300   lg:h-8 lg:w-8 h-12 w-12  rounded-full   "    >
         
        <svg xmlns="http://www.w3.org/2000/svg" class="lg:h-4 lg:w-4 h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>

   </div>
   </div> 

   <div className="  justify-center items-center hidden lg:flex   "   >
        <div className=" flex justify-center items-center cursor-pointer   bg-blue-700 text-white  rounded-full py-2 px-5 hover:bg-red-500 "    >
         
        <div className=" ">  Sign In     </div>  

   </div>
   </div> 
          
          </div>
          
          
          </div> 


        
    )
}

export default Navmob