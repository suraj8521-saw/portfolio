import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
function Footerbotom() {
  return (
  <>
  <hr />
  <footer className='flex flex-col  pt-[4%] md:pt-[3%] pb-[2%] px-[3vw] gap-[2vh]  text-white'>
    <div  name="Footerbotom" >

<div className=' flex items-center justify-center flex-col'>
  <div className=' flex flex-row space-x-4  '>
     <a href="https://www.facebook.com/share/16S9bYv5WP/" target='blank'>   <FaFacebookF size={24}  className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 '/></a>
   <a href="https://www.instagram.com/suraj_96083?igsh=MThyaDN5MWE2czhybw==" target='blank'>   <FaInstagram  size={24} className='bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600' /></a>
    <FaTelegramPlane size={24} className='bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600'/>
    <a href="https://www.linkedin.com/in/suraj-kumar-384182215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>  <CiLinkedin  size={24} className='bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 '/></a>
  </div>
  <div >
 <p className='text-[9px] sm:text-[2vw]  md:text-[1.8vw] xl:text-[1.5vw]'>
  &copy;2025 All right reserved
 </p>
 <p className='text-[9px] sm:text-[2vw]  md:text-[1.8vw] xl:text-[1.5vw]'>Thanks for visiting me😊</p>
  </div>
</div>
    </div>
  </footer>
  </>
  )
}

export default Footerbotom
