import React from 'react'
import clogo from "../assets/clogo.png"
import cpluslogo from "../../public/cpluslogo.png"
import javalogo from "../../public/javalogo.png"
import cSharp from "../../public/cSharp.png"
import reactlogo from "../../public/reactlogo.png"

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
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 bg-amber-50'>
      <div>
        <h1 className=' text-3xl font-bold mb-5 '>Portfolio</h1>
        <span className='underline font-semibold'>Featured and Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
        {
          cardItem.map(({id,logo,name,para})=>(
            <div  className=' md:w[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300' key={id}>
              <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt=" load error" />
              <div>
                <div className='font-bold mb-2 text-xl px-1'>{name}</div>
              <p className=' px-2 text-gray-700'>{para}</p>
              </div>
              <div className='flex items-center justify-center p-2'>
                <button
                 className=' bg-blue-500 text-white font-bold px-4 py-2 rounded-2xl'> 
                  Projects</button>
              </div>
            </div>
          ))}
  
        </div>
      </div>
    </div>
  );
}

export default Portfoliosec

