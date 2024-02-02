import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Login from "./Login";

function Main() {
  const [show, setshow] = useState(false);
  const handlefirst = () => {
    localStorage.setItem("show", "true");
  };
  const handleshow = () => {
    if (localStorage.getItem("show") == "true") {
      setshow(!show);
    } else {
      setshow(true);
    }
  };
  return (
    <div className=" max-sm:block bg-neutral-950 text-white py-16 flex justify-between main select-none">
      <div className=" max-sm:w-full w-1/3 py-6">
        <h1 className=" max-sm:text-2xl uppercase font-bold text-orange-600 text-5xl text-center mb-3">
          sarms
        </h1>
        <h1
          className=" text-center text-xl text-slate-300 capitalize"
          style={{ fontFamily: "revie regular" }}
        >
          Student assessment result management system
        </h1>
        <h1 className=" max-sm:text-3xl sm:text-4xl md:text-6xl easy ml-5 font-semibold mb-8">
          Easy way to manage result for students
        </h1>

        <button
          onMouseOver={handlefirst}
          onClick={handleshow}
          className="max-sm:px-5 max-sm:py-2 sm:py-2 max-sm:ml-16 active:animate-ping md:py-4 px-28 intouch-btn border-2 border-blue-600 hover:bg-transparent ease-in-out duration-500 hover:animate-none font-bold capitalize flex"
        >
          get it now <FaArrowRight className="pt-2 anim-arrow" size={23} />
        </button>
      </div>
      <div>{
      
      show ?
        <Login />
              :
        <div className=" max-sm:float-left max-sm:w-full w-2/3 float-right pt-10 max-sm:mt-14 max-sm:pt-4 max-sm:bg-black">
        <h1 className=" font-bold max-sm:text-3xl max-sm:text-center text-3xl max-sm:mt-7 text-orange-600">The new standard in results managemenent</h1>
        <h1 className=" font-bold text-slate-800 pt-5 max-sm:text-3xl max-sm:mb-28 max-sm:ml-3">
          Our software is the best open source responsive platform for managing the students results. 
          We are able to manage more than 2M students in easy way
        </h1>
          </div>
      
      }</div>
    </div>
  );
}

export default Main;
