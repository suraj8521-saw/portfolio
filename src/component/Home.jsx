import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";
function Home() {
  
  return (
   <>
   
   <div name="Home" 
   style={{backgroundImage:'url(image.png)'}}
   className=' bg-cover max-w-screen-2xl container mx-auto px-4 md:px-20 my-20  bg-amber-50'>
    <div className='flex  flex-col md:flex-row'>
    <div className='md:w-1/2 mt-12 md:mt-20 space-y-2 order-2 md:order-1'>
    <span className='text-xl'>Hii,</span>
   <div className='flex space-x-1 text-2xl md:text-4xl'> 
    
   <h1>I am <ReactTyped
         className=' text-red-500'
         strings={["Web Developer", "coder","programmer"]}
         typeSpeed={40}
         backSpeed={50}
         loop={true}
       />
  </h1>
   
   </div>
   
    <p className='text-sm md:text-md text-justify'>Highly motivated and detail-oriented BCA student with a
 strong foundation in programming languages (C, C++,java,JavaScript) and
 web development technologies (HTML, CSS, JavaScript,react.js).
 Proficient in complete Java, HTML, and CSS, with intermediate
 skills in C#, Java,  JavaScript. Passionate about software
 development and eager to apply skills and knowledge in real
world projects.</p>
    <br />
   <div className='flex flex-col md:flex-row justify-betweenbdbd space-y-6 md:space-y-0 items-center'>
   <div className=' space-y-5'>
        <h1 className='font-bold flex justify-center'>Available on</h1>
       <ul className=' flex space-x-5'>
       <li>
        <a href="https://facebook.com" target='blank'>   <FaFacebookF className='text-2xl cursor-pointer' /></a>
      </li>
        <li>
        <a href="https://Instagram.com" target='blank'>   <FaInstagram  className='text-2xl cursor-pointer' /></a></li>
        <li>
        <a href="https://Telegram.com" target='blank'>  <FaTelegramPlane className='text-2xl cursor-pointer' /></a></li>
        <li>
        <a href="https://Linkedin .com" target='blank'>  <CiLinkedin  className='text-2xl cursor-pointer'/></a></li>
       </ul>
    </div>
    <div>
    <div className=' space-y-5'>
        <h1 className='font-bold flex justify-center'>Currently working on </h1>
       <ul className=' flex space-x-5'>
       <li> <IoLogoHtml5  className='text-2xl cursor-pointer' /></li>
        <li> <RiTailwindCssLine  className='text-2xl cursor-pointer'/></li>
        <li><IoLogoJavascript  className='text-2xl cursor-pointer' /></li>
        <li> <FaReact  className='text-2xl cursor-pointer'/></li>
       </ul>
    </div>
    </div>
   </div>
    </div>
    <div className='md:w-1/2 md:mt-18 md:ml-20 order-1 mt-8 flex items-center justify-center'>
    <img src="secondimg.jpg" alt=""  className='rounded-full w-80 h-80'/>
    </div>
    </div>
    <br />
    <hr />
    </div>
    
    </>
  )
}

export default Home
