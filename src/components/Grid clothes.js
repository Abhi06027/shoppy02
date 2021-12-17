const Grid    = () => {
    return ( 
<div  >

<div className=" text-black lg:flex block justify-center  items-center   gap-8  mb-10 " >

<div className="bg-gray-100 h-64 w-64 lg:ml-0 ml-10  rounded-md mt-11 flex justify-center items-center  " > 

<div className=" cursor-pointer flex "  > <img className="w-64    "  src=" ./images/Hoodie.png " alt=""/>   
</div>
</div>

<div className="bg-gray-100 h-64 w-64 lg:ml-0 ml-10    rounded-md mt-11 flex justify-center items-center  " > 
<div className=" cursor-pointer "  > <img className="w-56  mt-2  "  src="./images/t-shert.png " alt=""/>   
 </div>
</div>

<div className=" bg-gray-100 h-64 w-64 lg:ml-0 ml-10   rounded-md mt-11 flex justify-center items-center   " >
<div className="cursor-pointer "  > <img className="w-56  mt-2  "  src="./images/shorts.png " alt=""/> </div>

</div>


</div>

</div>

     );
}
 
export default Grid  ;