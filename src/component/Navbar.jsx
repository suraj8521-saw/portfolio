import React, { useState } from "react";
import { RiMenuFold4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import firstimg from "../assets/firstimg.jpg";
import { FaFileDownload } from "react-icons/fa";
import Surajresume from "../assets/Surajresume.pdf";
function Navbar() {
  const [menu, setmenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="flex flex-row  text-white ">
        <div className="flex flex-row h-[70px] bg-gradient-to-br from-gray-900 via-purple-950 to-blue-900 w-[100%] items-center justify-start pl-[3%] pt-[3%] pb-[3%] fixed top-0 left-0 right-0 absolute ">
          <div className="flex flex-row w-[50%]  ">
          
            <Link to="Home" smooth={true} duration={500} 
             className="h-[40px] w-[40px] rounded-[50%] hover:cursor-pointer">
            <img
              className="h-[40px] w-[40px] rounded-[50%] hover:cursor-pointer"
              src={firstimg}
              alt="load error"
            />
        </Link>
            <div className="flex flex-col ml-[2%] hover:cursor-pointer">
           <Link to="Home" smooth={true} duration={500} >
           <h1 className=" text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw]">
              Suraj
              </h1>
              <p className=" text-[10px] sm:text-[2vw] md:text-[1.8vw] xl:text-[1.4vw]">Portfolio</p>
           </Link>
            </div>
            <div className="flex flex-col items-center justify-center pl-[2vw]">
              <h2 className="text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw]">Dawnload CV</h2>
              <button  className='text-white h-[18px] md:h-[3.5vh] xl:h-[3.5vh] bg-emerald-400 flex items-center justify-center w-[28px] md:w-[7vw] xl:w-[6vw] hover:cursor-pointer '>
                <a href={Surajresume} download={"Surajresume"}><FaFileDownload className="className='h-[2.5vh] w-[2.5vw] bg-gradient-to-br from-black to-blue-800" /></a>
              </button>
            </div>
          </div>
          <div className=" hidden md:block w-[50%] ">
            <ul className=" flex flex-row gap-[8%] justify-end pr-[10%] font-bold  text-[2vw] xl:text-[1.5vw] hover:cursor-pointer">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {menu && (
          <div className=" flex absolute h-[100%] w-[70%] justify-end top-0 right-0 bg-gradient-to-br from-gray-800 via-purple-700 to-blue-800 fixed">
            <ul className="flex flex-col  mt-[10%] items-center pr-[30%] text-[25px] gap-[2%] hover:cursor-pointer">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    onClick={() => setmenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
       
       
        </div>
        <div className=" flex flex-auto md:hidden absolute top-[1%] right-[1%]  fixed top-0 right-0 bg-[#1CC9D3] hover:cursor-pointer" onClick={() => setmenu(!menu)}>
          {menu ? <RxCross2 size={24} /> : <RiMenuFold4Fill size={24} />}
        </div>
    </>
  );
}

export default Navbar;
