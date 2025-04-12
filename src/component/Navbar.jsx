import React, { useState } from 'react'
import { RiMenuFold4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import {Link} from "react-scroll"
import firstimg from "../assets/firstimg.jpg"
function Navbar() 
 {

  const [menu,setmenu]=useState(false)
  const navItems=[
   {
     id:1,
    text:"Home"
   },
   {
    id:2,
   text:"About"
  },
  {
    id:3,
   text:"Portfolio"
  },
  {
    id:4,
   text:"Experience"
  },
  {
    id:5,
   text:"Contact"
  }
  ]
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 right-0 left-0 bg-amber-300'>

   <div className='flex justify-between items-center p-1  h-16'>
<div className='flex space-x-2'>
<img src={firstimg} alt="load error"  className='h-12 w-12 rounded-full'/>
<h1 className='font-semibold text-xl cursor-pointer'>Suraj
<p className=' text-sm'>Portfolio</p>
</h1>

</div>
<div >
<ul className='hidden md:flex space-x-2'>
{
  navItems.map(({id,text})=>(
    <li key={id} className='hover:scale-120 duration-200 cursor-pointer'>
      <Link to={text}
      smooth={true}
      duration={500}
      offset={-70}
      activeClass="active"
       >
      {text}
      </Link>
    </li>
  ))
}
</ul>

</div>

{

menu&&(<div>
  <ul className='md:hidden flex   flex-col items-center justify-center h-400 w-150 bg-amber-300 opacity-87 pt-25 space-y-2   '>
  {
  navItems.map(({id,text})=>(
    <li  key={id}className='hover:scale-120 duration-200 cursor-pointer'>
      
      <Link onClick={()=>setmenu(!menu)} to={text}
      
      smooth={true}
      duration={500}
      offset={-70}
      activeClass="active"
       >
      {text}
      </Link>
      
      </li>
  ))
}
  </ul>
  </div>)
}
<div onClick={()=>setmenu(!menu)} className='md:hidden  '>{menu?<RxCross2 size={24} />:< RiMenuFold4Fill size={24} /> }
</div>
   </div>
   </div>
   
   </>
  )
}

export default Navbar
