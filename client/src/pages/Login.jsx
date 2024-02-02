import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import ads from "../images/ads.jpg";
function Login() {
  const [show, setshow] = useState(true);
  const handlehide = () => {
    localStorage.setItem("show", "false");
    if (localStorage.getItem("show") == "true") {
      setshow(!show);
    } else {
      setshow(false);
    }
  };
  return (
    <>
      {show && (
        <div className=" max-sm:px-3 px-20 text-black pt-5 py-2 h-auto rounded-md transparent-form">
          {/* <h1>hello mr mpyisi</h1> */}
          <FaUserAlt
            className="mx-auto text-slate-300 animate-bounce"
            size={56}
          />
          <div className=" w-full">
            <div className=" pt-6">
              <input
                type="text"
                className=" rounded-sm px-7 py-1 capitalize outline-none mb-3 w-full"
                placeholder="Enter Names"
                required
              />
            </div>
            <div className=" pt-6">
              <input
                type="email"
                className=" rounded-sm px-7 py-1 outline-none mb-2 w-full"
                placeholder="Enter email"
                required
              />
            </div>
            <div className=" pt-5">
              <button className=" py-2 font-bold capitalize rounded-sm w-full bg-orange-600 active:bg-slate-400 ease-in-out duration-300 mb-10">
                continue
              </button>
            </div>
          </div>

          <div>
            <img
              src={ads}
              alt="no internet connection"
              width={230}
              className=" mb-6 max-sm:w-full"
            />
          </div>
          <button
            className=" bg-orange-600 font-bold rounded-sm text-white py-1 px-24 max-sm:w-full"
            onClick={handlehide}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default Login;
