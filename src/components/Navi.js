import React from 'react'

const Navi = () => {
    return (
        <div className="  h-16 w-auto text-white bg-black lg:flex hidden justify-between  text-sm px-32  " >
         
         
         <div className=" flex gap-7 items-center    "   >
         <img className=" w-7"  src="./images/flag.png " alt="" /> 
         
          <div className="   "   > INDIA  </div>  

          <div className="   "   >  +9739692584   </div>  
          </div>
         
         
         
          <div className=" flex gap-7 items-center cursor-pointer  "   >
          <div className="   "   >  My Account      </div>  
          <div className="   "   >  Wish List      </div>  
          <div className="   "   >   Shopping       </div>  
          <div className="   "   >  Cart      </div>  
          <div className="   "   >  Checkout    </div>  
         
          
          </div>   



        </div>
    )
}

export default Navi
