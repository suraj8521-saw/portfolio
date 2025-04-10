import React from 'react'
import axios from "axios"
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
function Contact () {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit= async(data) => {
        const userinfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{

             await axios.post("https://getform.io/f/allyngja",userinfo);
toast.success("your message has been send")
        }
        catch(error)
        {
toast.error(error);
        }
      }
  return (
   <>
   <div name="Contact" className=' bg-cyan-300 max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
<p className='font-bold text-2xl text-red-600 '>Contact me</p>
<span>Please fill free to contact me</span>
<div className='flex items-center justify-center flex-col mt-5'>
    <form 
    onSubmit={handleSubmit(onSubmit)}
    //  action="https://getform.io/f/allyngja"
//   method="POST"
     className='bg-slate-200 w-96  px-8 py-6 rounded-xl'>
<h1 className=' text-xl font-semibold mb-4'> send your message </h1>
<div className='flex flex-col mb-4'>
    <label className='black text-gray-700 '> Full Name</label>
<input 
{...register("name",{required:true})}
className='shadow rounded-lg appearance-none border  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
 id="name"
 name="name"
type="text"
placeholder="Enter full name"
/>
{errors.name && <span> this field required</span>}
</div>
<div className='flex flex-col mb-4'>
    <label className='black text-gray-700 '> Email Address</label>
<input 
{...register("email",{required:true})}
className='shadow rounded-lg appearance-none border  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
 id="email"
name="email"
type="text"
placeholder='Enter your email address'
/>
{errors.email && <span> this field required</span>}
</div>
<div className='flex flex-col mb-4'>
    <label className='black text-gray-700 '> Message</label>
<textarea
{...register("message",{required:true})}
className='shadow rounded-lg appearance-none border  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
id="message"
name="message" 
type="text"
placeholder='Write your message'
/>
{errors.message && <span> this field required</span>}
</div>
<button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>send</button>
    </form>
</div>
   </div>
   </>
  )
}

export default Contact
