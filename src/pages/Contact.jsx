import React from 'react'
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div>
       <div id='contact' className='flex   flex-col w-full md:h-[90vh] h-[75vh] '>
            <div className='flex justify-center items-center w-full md:h-[10%]'>
              <h1 className='md:text-3xl  text-2xl text-orange-700 font-bold'> Get In Touch</h1>
            </div>
            <div className=' flex justify-center items-center w-full h-[80%]'>
                  <div className='md:w-[60%] w-[75%] rounded-lg flex bg-slate-400 flex-col gap-3.5 items-center shadow-[5px_5px_10px_rgba(0,0,0,0.3),_-5px_-5px_15px_rgba(255,255,255,0.3)] h-[80%] md:h-[75%]'>
      
                      <div id='name' className='w-full flex pt-2 md:pt-0 md:flex-row flex-col justify-center items-center md:gap-0.5 gap-2 md:h-[20%] h-[35%]'>
                          <div className='md:w-[50%] w-[90%] flex md:flex-row flex-col justify-center items-center h-full'>
                              <div className='flex flex-col gap-2 text-white w-full md:w-[90%] h-[50%]'>
                                  <h1 className='text-sm'>Name*</h1>
                                  <input type="text" name="name" placeholder='Enter Your Name...' className='rounded px-3 py-2 bg-slate-950' />
                              </div>
                          </div>
                          <div className='md:w-[50%] w-[90%] flex justify-center items-center  h-full'>
                              <div className='flex flex-col gap-2 text-white w-full md:w-[90%] h-[50%]'>
                                  <h1 className='text-sm'>Email*</h1>
                                  <input type="text" name="email" placeholder='Enter Your Email...' className='rounded px-3 py-2 bg-slate-950' />
                              </div>
                          </div>      
                                    </div>
      
      
      
                      <div id='mes' className='w-full h-[40%] md:my-0  mt-6 md:h-[50%]  flex justify-center'>
                           <div className='md:w-[95%] w-[90%] flex flex-col gap-2 text-white  h-full'>
                              
                                  <h1 className='text-sm'>Your Message*</h1>
                                      <textarea name="Message" placeholder='Write Your Message here.....' id="message" rows={7} className='rounded px-3 py-3   bg-slate-950'/>
                                       
                          </div>   
      
                      </div>
                      <div id='send' className='w-full h-[15%]  flex items-center justify-center'>
                          <button type="submit" className='flex cursor-pointer justify-center md:h-[60%] py-1 h-[55%] mb-3 rounded w-[85%] font-bold items-center bg-blue-500 text-white hover:shadow-blue-400 gap-1 hover:bg-blue-700'><span className='text-lg md:text-xl'><IoIosSend /></span><h1>Send Message</h1></button>
                      </div>
      
                  </div>
            </div>
          </div>
    </div>
  )
}

export default Contact
