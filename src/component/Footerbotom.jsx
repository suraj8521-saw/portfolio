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
    <FaFacebookF size={24}/>
    <FaInstagram size={24}/>
    <FaTelegramPlane size={24}/>
    <CiLinkedin size={24}/>
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
