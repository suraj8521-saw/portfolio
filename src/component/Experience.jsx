import React from 'react'
import clogo from "../assets/clogo.png"
import cpluslogo from "../assets/cpluslogo.png"
import javalogo from "../assets/javalogo.png"
import cSharp from "../assets/cSharp.png"
import reactlogo from "../assets/reactlogo.png"

import html from "../assets/html.png"
import tailwind from "../assets/tailwind.png"
function Portfoliosec()
 {
const cardItem=[
  {
    id:1,
  logo:clogo,
  name:"c",
  para:"No industrial experiance but 3 year of coding experiance",
  },
  {
    id:2,
  logo:cpluslogo,
  name:"c++",
  para:"No industrial experiance but 3 year of coding experiance",
  },
  {
    id:3,
  logo:javalogo,
  name:"java",
  para:"No industrial experiance but 2 year of coding experiance",
  },
  {
    id:4,
  logo:reactlogo,
  name:"react",
  para:"No industrial experiance but 2 months of coding experiance",
  },
  {
    id:5,
  logo:cSharp,
  name:"C#",
  para:"1 year of coding experiance but 6 month of  industrial experiance  ",
  },
  {
    id:6,
  logo:html,
  name:"html",
  para:"1 year of coding experiance but 6 month of  industrial experiance  ",
  },
  {
    id:7,
  logo:tailwind,
  name:"tailwind",
  para:"1 year of coding experiance but 6 month of  industrial experiance  ",
  },
 
];
  return (
    <div name="Experience" className='flex flex-col  pt-[4%] md:pt-[3%] pb-[2%]  text-white'>
      <div className='overflow-hidden px-[3vw]'>
        <h1 className='text-[10px] sm:text-[2.8vw]  md:text-[2vw] xl:text-[1.6vw] font-bold 	text-purple-400' >Experience</h1>
        <span className='text-[9px] sm:text-[2vw]  md:text-[1.8vw] xl:text-[1.5vw] underline'>Experience and sumarry</span>
        <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-3 my-5 '>
        {
          cardItem.map(({id,logo,name,para})=>(
            <div  className='w-[90vw] h-[23vh] md:w-[45vw] md:h-[34vh] xl:w-[23vw] xl:h-[35vh] border-[3px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105  duration-300 ' key={id}>
              <img src={logo}className='h-[13vh] w-[23vw] rounded-full md:h-[20vh] md:w-[22vw] xl:h-[20vh] xl:w-[10vw] ' alt=" load error" />
              <div>
                <div  className='text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw] font-bold  	text-orange-400'>{name}</div>
              <p className='text-[6px] sm:text-[1.9vw]  md:text-[1.7vw] xl:text-[1.2vw]'>{para}</p>
              </div>
             
            </div>
          ))}
  
        </div>
      </div>
    </div>
  );
}

export default Portfoliosec

