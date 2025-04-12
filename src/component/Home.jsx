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
import secondimg from "../assets/secondimg.jpg"
import { Link } from "react-scroll";
import Contact from './Contact';
function Home() {
  
  return (
   <>
   
   <div name="Home" >
    <div className='flex flex-col  pt-[20%] md:pt-[10%] xl:pt-[9%] pb-[2%]'>
    <div className='flex flex-col w-[100%] md:flex-row items-center'>
    <div className=' w-[80%] md:w-[60%] xl:w-[70%] pl-[3%] md:pr-[2%]'>
    <span className='text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw] text-white' >Hii,</span>
   <div className='' > 
    
   <h1 className='text-[9px] sm:text-[2vw]  md:text-[1.8vw] xl:text-[1.5vw]  text-white'>I am <ReactTyped
         className=' text-red-500'
         strings={["Web Developer", "coder","programmer"]}
         typeSpeed={40}
         backSpeed={50}
         loop={true}
       />
  </h1>
   
   </div>
   
    <p className='text-[6px] sm:text-[1.9vw]  md:text-[1.7vw] xl:text-[1.2vw]  text-white'>Highly motivated and detail-oriented BCA student with a
 strong foundation in programming languages (C, C++,java,JavaScript) and
 web development technologies (HTML, CSS, JavaScript,react.js).
 Proficient in complete Java, HTML, and CSS, with intermediate
 skills in C#, Java,  JavaScript. Passionate about software
 development and eager to apply skills and knowledge in real
world projects.</p>
    <br />
    </div>
    <div className='w-[50%] md:w-[40%] xl:w-[30%] pl-[10%]'>
    <img src={secondimg} alt="load error"  className='rounded-full w-[80%] h-[30%] md:w-[70%] md:h-[35%]  border-[5px] border-amber-600 shadow-amber-500 shadow-2xl '/>
    </div>
    </div>
    
    <div  className='flex flex-col gap-[2vh] items-center md:flex-row  text-white'>
   <div className='flex justify-start flex-col w-[50%] pl-[9%] gap-[1vh] '>
  
        <div className='flex flex-col pl-[10%]'>
        <div className='text-white h-[3vh] bg-emerald-400 flex items-center justify-center w-[31vw] md:w-[20vw] xl:w-[7vw] hover:cursor-pointer '>
       <Link to="Contact" smooth={true} duration={500}>
         Hire Me
        </Link>
       </div ><h1 className='text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw] pl-[15%]' >Available on </h1>
      
        </div>
       <ul className=' flex space-x-[4vw] pl-[12%]'>
       <li>
        <a href="https://www.facebook.com/share/16S9bYv5WP/" target='blank'>   <FaFacebookF className='text-2xl cursor-pointer bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500  ' /></a>
      </li>
        <li>
        <a href="https://www.instagram.com/suraj_96083?igsh=MThyaDN5MWE2czhybw==" target='blank'>   <FaInstagram  className='text-2xl cursor-pointer bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600' /></a></li>
        <li>
        <a href="https://Telegram.com" target='blank'>  <FaTelegramPlane className='text-2xl cursor-pointer bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600' /></a></li>
        <li>
        <a href="https://www.linkedin.com/in/suraj-kumar-384182215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>  <CiLinkedin  className='text-2xl cursor-pointer bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 ' /></a></li>
       </ul>
    </div>  
    <div className='flex flex-col w-[50%] pl-[9%] gap-[1vh]'>
        <h1 className='text-[10px] sm:text-[2.2vw]  md:text-[2vw] xl:text-[1.6vw] pl-[12%]' >Currently working on </h1>
       <ul className=' flex space-x-[4vw] pl-[12%]'>
       <li> <IoLogoHtml5  className='text-2xl cursor-pointer bg-gradient-to-br from-orange-500 via-orange-600 to-red-600' /></li>
        <li> <RiTailwindCssLine  className='text-2xl  cursor-pointer bg-gradient-to-br from-sky-400 to-cyan-500 '/></li>
        <li><IoLogoJavascript  className='text-2xl  cursor-pointer bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500' /></li>
        <li> <FaReact  className='text-2xl cursor-pointer bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 '/></li>
       </ul>
    </div>
   </div>
    </div>
  
    <hr />
    </div>
    
    </>
  )
}

export default Home
