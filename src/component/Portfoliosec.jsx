import React from 'react'
import clogo from "../assets/clogo.png"
import cpluslogo from "../assets/cpluslogo.png"
import javalogo from "../assets/javalogo.png"
import cSharp from "../assets/cSharp.png"
import reactlogo from "../assets/reactlogo.png"
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaSms } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import { ReactTyped } from "react-typed";
function Portfoliosec()
 {
 
const cardItem=[
  {
    id:1,
  logo:clogo,
  name:"c",
  para:"i am a coder i have coding experience in c language",
  },
  {
    id:2,
  logo:cpluslogo,
  name:"c++",
  para:"i am a coder i have coding experience in c++ language",
  },
  {
    id:3,
  logo:javalogo,
  name:"java",
  para:"i am a coder i have coding experience in c language",
  },
  {
    id:4,
  logo:reactlogo,
  name:"react",
  para:"i am a coder i have coding experience in c language",
  },
  {
    id:5,
  logo:cSharp,
  name:"C#",
  para:"i am a coder i have coding experience in c language",
  },
];
  return (
    <div name="Portfolio" className='flex flex-col  pt-[4%] md:pt-[3%] pb-[2%] px-[3vw] gap-[2vh]  text-white'  >
      {/* <div>
        <h1>Portfolio</h1>
        <span >Featured and Projects</span>
        <div>
        {
          cardItem.map(({id,logo,name,para})=>(
            <div  key={id}>
              <img src={logo} alt=" load error"  className='h-[13vh] w-[23vw] rounded-full md:h-[20vh] md:w-[22vw] xl:h-[25vh] xl:w-[15vw]'/>
              <div>
                <div>{name}</div>
              <p >{para}</p>
              </div>
              <div >
                <button>  Projects</button>
              </div>
            </div>
          ))}
  
        </div>
      </div> */}

<div  className=''>
<h1 className='text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw]  font-bold text-[#FFB300]' >Portfolio</h1>
<p className='text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw] mt-[1vh]'>Projects , Technology & Features</p>
</div>

<div className='space-y-[2vh] ' >
  <div className='flex flex-col xl:h-[175px]  h-[165px] sm:h-[195px] md:h-[180px] bg-zinc-800 border border-orange-700 text-neutral-100 w-[90vw] md:w-[70vw] xl:w-[70vw] py-[2vh]  pl-[2vw] space-y-[1vh] rounded-2xl '>
    <h2 className='text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw]' >Sales Management</h2>
    <p className='text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw]'>Technology & Features: <span className='text-[9px] sm:text-[2vw]  md:text-[1.8vw] xl:text-[1.5vw]'>
      
       <ReactTyped
               className=' 	text-cyan-400'
               strings={["C# MySQL SMS Alert Reporting"]}
               typeSpeed={40}
               backSpeed={50}
               loop={true}
             /></span></p>
    <div className='flex flex-col md:gap-[1vw] gap-[1vw]  md:flex-row mt-0 md:mt-[20px] sm:flex-col xl:flex-row' >
    <TbBrandCSharp  className='h-[20px] w-[25px] md:h-[30px] md:w-[30px] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 '/>
    <SiMysql className='h-[20px] w-[25px] md:h-[30px] md:w-[30px]bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700' />
    <FaSms className='h-[20px] w-[25px] md:h-[30px] md:w-[30px]bg-gradient-to-br from-blue-400 via-teal-400 to-green-400 ' />
    <FcPrint  className='h-[20px] w-[25px] md:h-[30px] md:w-[30px]bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500'/>
    </div>
  </div>
  <div className='flex flex-col xl:h-[175px]  h-[175px] sm:h-[205px] md:h-[180px] bg-zinc-800 border border-orange-700 text-neutral-100 w-[90vw] md:w-[70vw] xl:w-[70vw] py-[2vh]  pl-[2vw] space-y-[1vh] rounded-2xl '>
    <h2 className='text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw]' >Portfolio</h2>
    <p className='text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw]'>Technology & Features: <span className='text-[9px] sm:text-[2vw]  md:text-[1.8vw] xl:text-[1.5vw]'>
    <ReactTyped
               className='	text-cyan-400'
               strings={["HTML JavaScript React Tailwindcss"]}
               typeSpeed={40}
               backSpeed={50}
               loop={true}
             />
      </span></p>
    <div className='flex flex-col md:gap-[1vw] gap-[1vw]  md:flex-row mt-0 md:mt-[20px] sm:flex-col xl:flex-row'>
    <FaHtml5 className='h-[20px] w-[25px] md:h-[30px] md:w-[30px]   bg-gradient-to-br from-orange-500 via-orange-600 to-red-600' />
    <TbBrandJavascript className='h-[30px] w-[30px] bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500' />
    <FaReact className='h-[20px] w-[23px] md:h-[25px] md:w-[25px] bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500' />
    <RiTailwindCssFill className=' h-[20px] w-[23px] md:h-[30px] md:w-[30px] bg-gradient-to-br from-sky-400 to-cyan-500' />
    </div>
  </div>
</div>

    </div>
  );
}

export default Portfoliosec

