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
    <div name="Experience" className=' bg-indigo-200 max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className=' text-3xl font-bold mb-5'>Experience</h1>
        <span className='underline font-semibold'>Experience and sumarry</span>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-3 my-5'>
        {
          cardItem.map(({id,logo,name,para})=>(
            <div  className=' md:w[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300' key={id}>
              <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt=" load error" />
              <div>
                <div className='font-bold mb-2 text-xl px-1'>{name}</div>
              <p className=' px-2 text-gray-700'>{para}</p>
              </div>
              <div className='flex items-center justify-center p-2'>
                <button className=' bg-blue-500 text-white font-bold px-4 py-2 rounded-2xl'> Sumarry</button>
              </div>
            </div>
          ))}
  
        </div>
      </div>
    </div>
  );
}

export default Portfoliosec

