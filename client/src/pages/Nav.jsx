import React , {useState} from "react";
import { FaLifeRing } from "react-icons/fa";
import { AiOutlineClockCircle, AiOutlineMenu } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
function Nav() {
  const [show , setshow] = useState(false)
  const handleshow = ()=>{
     setshow(!show)
  }
  const handlehide = ()=>{
     setshow(!show)
  }
  return (
    <>
      <div className="max-sm:hidden sm:hidden lg:block py-4 px-20 select-none trans">
        <div className=" flex justify-between">
          <div>
            <h1 className=" text-white font-bold cursor-pointer capitalize flex">
              <FaLifeRing size={23} className="animate-spin" />
              <span className=" ml-2">SRMS</span>
            </h1>
          </div>
          <div className=" w-1/2 flex justify-between">
            <h1 className=" text-white font-bold cursor-pointer hover:text-orange-600 ease-in-out duration-300 capitalize">
              developers
            </h1>
            <h1 className=" text-white font-bold cursor-pointer hover:text-orange-600 ease-in-out duration-300 capitalize">
              company
            </h1>
            <h1 className=" text-white font-bold cursor-pointer hover:text-orange-600 ease-in-out duration-300 capitalize">
              pricing
            </h1>
            <h1 className=" text-white font-bold cursor-pointer hover:text-orange-600 ease-in-out duration-300 capitalize">
              support
            </h1>
          </div>
        </div>
      </div>

      {/* for the small screen devices */}
        
      <div className="hidden max-sm:flex  justify-between select-none bg-blue-600">
        <h1 className="font-bold cursor-pointer capitalize flex">
          <FaLifeRing size={23} className="animate-spin" />
          <span className=" ml-2">SRMS</span>
        </h1>

        <h1 className=" font-bold cursor-pointer capitalize flex">
          <AiOutlineMenu size={23} onClick={handleshow}/>
        </h1>
      </div>
      
      {
        show&&
        <>

      {/* for hidden */}
      <div className="  max-sm:fixed w-full h-screen top-0 select-none bg-black">
        <div className=" flex justify-between bg-blue-600">
          <h1 className="font-bold cursor-pointer capitalize flex">
            <FaLifeRing size={23} className="animate-spin" />
            <span className=" ml-2">SRMS</span>
          </h1>
          <h1>
            <AiFillCloseCircle size={32} className=" text-slate-600"  onClick={handlehide}/>
          </h1>
        </div>

        <h1 className=" text-xl text-white font-bold border-b-2 border-b-slate-800 py-5 text-center hover:animate-pulse">
          developers
        </h1>
        <h1 className=" text-xl text-white font-bold border-b-2 border-b-slate-800 py-5 text-center hover:animate-pulse">
          company
        </h1>
        <h1 className=" text-xl text-white font-bold border-b-2 border-b-slate-800 py-5 text-center hover:animate-pulse">
          pricing
        </h1>
        <h1 className=" text-xl text-white font-bold border-b-2 border-b-slate-800 py-5 text-center hover:animate-pulse">
          support
        </h1>
      </div>
        </>
      }
    </>
  );
}

export default Nav;
