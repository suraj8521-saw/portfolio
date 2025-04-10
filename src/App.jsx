import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Portfoliosec from './component/Portfoliosec'
import Experience from './component/Experience'
import Footerbotom from './component/Footerbotom'
import Contact from './component/contact'
import {Toaster} from "react-hot-toast"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <div className='bg-red-200'>
     <Navbar/>
     <Home/>
     <About/>
     <Portfoliosec/>
     <Experience/>
     <Contact/>
   <Footerbotom/>
     </div>
   <Toaster/>
    </>
  )
}

export default App
