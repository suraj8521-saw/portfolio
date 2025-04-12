import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
function Footerbotom() {
  return (
  <>
  <hr />
  <footer className='py-12  bg-gray-500'>
    <div  name="Footerbotom" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20  '>

<div className=' flex items-center justify-center flex-col'>
  <div className=' flex flex-row space-x-4  '>
     <a href="https://www.facebook.com/share/16S9bYv5WP/" target='blank'>   <FaFacebookF size={24} /></a>
   <a href="https://www.instagram.com/suraj_96083?igsh=MThyaDN5MWE2czhybw==" target='blank'>   <FaInstagram  size={24} /></a>
    <FaTelegramPlane size={24}/>
    <a href="https://www.linkedin.com/in/suraj-kumar-384182215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>  <CiLinkedin  size={24}/></a>
  </div>
  <div className='mt-8 border-t border-gray-700 pt-8  flex flex-col items-center'>
 <p>
  &copy;2025 All right reserved
 </p>
 <p className=' text-sm'>Thanks for visiting me😊</p>
  </div>
</div>
    </div>
  </footer>
  </>
  )
}

export default Footerbotom
