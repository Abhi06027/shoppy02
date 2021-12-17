const Latest = () => {
  return ( 
   
   
   
   <div className=" text-black  mt-11 flex justify-evenly  " >  
    <div className=" "> 
     <div className=" text-4xl font-bold "> Latest Products </div>
     <div className="text-sm  items-center gap-5 lg:hidden ml-2 flex mt-7  " >
     <div className="text-sm text-red-500" > All</div>
     <div className="text-sm" > New</div>
     <div className="text-sm" > Featured</div>
     <div className="text-sm" > Offer</div>
   
    
   </div>
    
</div> 
     <div className="text-sm   items-end gap-5 hidden lg:flex  " >
     <div className="text-sm text-red-500" > All</div>
     <div className="text-sm" > New</div>
     <div className="text-sm" > Featured</div>
     <div className="text-sm" > Offer</div>
   
    
   </div>
  
   </div>
   
   

   );
}
 
export default Latest;