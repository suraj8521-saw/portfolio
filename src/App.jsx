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
import Contact from './component/Contact'
import {Toaster} from "react-hot-toast"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <div className='bg-gradient-to-r from-neutral-950 via-orange-950 to-zinc-950 min-h-screen '>
     <Navbar />
     <Home/>
     <About/>
     <Portfoliosec/>
     <Experience />
     <Contact/>
   <Footerbotom/>
     </div>
   <Toaster/>
    </>
  )
}

export default App
