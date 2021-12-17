const Category = () => {
    return ( 
        
  
        <div >

        <div className=" text-black lg:flex justify-center  block px-5  gap-8  " >
        
        <div className="bg-gray-100 h-64 w-full rounded-md mt-11 flex justify-center items-center   " > 
        
        <div className=" cursor-pointer "  > <img className="lg:w-32 w-32  m lg:ml-0    "  src=" ./images/s.png " alt=""/> 
            
        </div>
        <div className="flex flex-col items-center text-center  p-4 lg:p-10 " >
           <p className=" text-black italic lg:text-3xl text-2xl pb-2 font-bold " >Women'S</p> 
        <p className=" text-black bg-yellow-400 font-bold lg:text-sm text-xs rounded-full  cursor-pointer py-3 w-32  " >Best New Deals </p> 
        <p className=" text-blue-500  font-bold lg:text-lg text-base italic rounded-xl " >New Collection</p>
        </div>
        </div>
        <div className="bg-gridsecond h-64 w-full rounded-md mt-11 flex justify-center items-center   " > 
        <div className=" cursor-pointer "  > <img className="lg:w-36 w-32  lg:mt-6  mt-12 lg:ml-0  ml-5"  src=" ./images/shocked.png " alt=""/> 
</div>
       
       <div className=" flex flex-col items-center text-center p-2  " >
        <p className=" text-blue-500  italic lg:text-2xl text-xl font-bold ">Discount! </p> 
        <p className=" text-black font-bold lg:text-3xl text-xl     cursor-pointer   " >Winter Clothing</p> 
        <p className=" text-black pb-4 font-bold text-lg rounded-xl " >New Collection</p> 
        </div>
        </div>
        
        <div className=" bg-gray-100 h-64 w-full rounded-md mt-11 flex justify-center items-center   " >
        <div className="cursor-pointer   "  > <img className="w-36   lg:mt-8 mt-8 lg:ml-0  ml-3  "  src=" ./images/mens.png" alt=""/> 
        </div>

        <div className=" flex flex-col items-center text-center p-2 " >
        <p className=" text-black italic lg:text-3xl text-xl pb-2 font-bold  " >Men's Clothing </p> 
        <p className=" text-black bg-yellow-400 font-bold text-xs rounded-full  px-3 cursor-pointer py-3 w-32  " >Best New Deals </p> 
        <p className=" text-blue-500  font-bold  lg:text-lg text-base  italic rounded-xl " >New Collection</p>
        </div>
        </div>
        
        </div>
        
        </div>

    );
}
 
export default Category ;