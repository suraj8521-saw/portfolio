import React from 'react'
function About() {
  return (
    <div name="About" className=' flex flex-col  pt-[4%] md:pt-[3%] pb-[2%]   text-white' >
     <div className=' space-y-[2vh] ml-[3vw]'>
      <h1 className='text-[12px] sm:text-[2.8vw]  md:text-[2.2vw] xl:text-[1.8vw] font-bold text-[#1CC9D3]'>About me</h1>
      <p className='text-[9px] sm:text-[2vw]  md:text-[1.8vw] xl:text-[1.5vw] '>I am Suraj Kumar Saw from Jharkhand!</p>
     </div>
     <div className='text-[6px] sm:text-[1.9vw]  md:text-[1.7vw] xl:text-[1.2vw]  space-y-[2vh] mt-[2vh]'>
      <h1 className='text-[9px] sm:text-[2vw]  md:text-[1.8vw] xl:text-[1.5vw] ml-[3vw] '>Education Qualification</h1>
      <div className='px-[2vw]'>
        <h2 className='text-[9px] sm:text-[2vw]  md:text-[1.8vw] xl:text-[1.5vw] font-bold text-emerald-400'>Matriculation</h2>
       <div className='px-[2vw]'>
       <table className='border-1 border-red-900'>
           <tr className='border-1'>
            <th className='border-1  px-[2vw] py-[1.5vh]'>School Name</th>
            <th className='border-1  px-[2vw] py-[1.5vh]'>Total Marks</th>
            <th className='border-1  px-[2vw] py-[1.5vh]'>Total Gain Marks</th>
          </tr>
          <tr className='border-1'>
            <td className='border-1  px-[2vw] py-[1.5vh]'>UHS Napo Khurd</td >
            <td className='border-1  px-[2vw] py-[1.5vh]'>500</td>
            <td className='border-1  px-[2vw] py-[1.5vh]  '>420</td>
          </tr>
        </table>
       </div>
      </div>
      <div className='px-[2vw]'>
        <h2 className='text-[9px] sm:text-[2vw]  md:text-[1.8vw] xl:text-[1.5vw] font-bold text-emerald-400'>Intermediate</h2>
       <div className='px-[2vw]'>
       <table className='border-1 border-red-900  '>
          
          <tr className='border-1'>
            <th className='border-1  px-[2vw] py-[1.5vh]'>College Name</th>
            <th className='border-1  px-[2vw] py-[1.5vh]'>Total Marks</th>
            <th className='border-1  px-[2vw] py-[1.5vh]'>Total Gain Marks</th>
          </tr>
         <tr className='border-1'>
            <td className='border-1  px-[2vw] py-[1.5vh]'>Inter Science College Hazaribagh</td >
            <td className='border-1  px-[2vw] py-[1.5vh]'>500</td>
            <td className='border-1  px-[2vw] py-[1.5vh]  '>440</td>
          </tr>
        
          
        </table>
       </div>
      </div>
      <div className='px-[2vw]' >
        <h2 className='text-[9px] sm:text-[2vw]  md:text-[1.8vw] xl:text-[1.5vw] font-bold text-emerald-400'>Graduation</h2>
        <p className='text-[6px] sm:text-[1.9vw]  md:text-[1.7vw] xl:text-[1.2vw]'>From Markham College of commerce Under Vinoba Bhave University  Hazibagh (session 2022-25)</p>
      </div>
     </div>
    </div>
  )
}

export default About
