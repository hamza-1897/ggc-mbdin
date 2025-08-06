import React from 'react'

import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { NavLink , Link} from 'react-router-dom'

import { IoMdCall } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
function Footer() {
  return (
    <>

      <div className='flex bg-[#353A4A] flex-col'>
      <div id='footer' className=' flex  md:flex-row flex-col h-[80vh] justify-around w-full md:h-[40vh]'>
        <div id='rightFoot' className='md:h-full  md:w-[30%]  h-[30%] w-full flex flex-col items-center justify-center'>
            
              <h1 className='text-white text-2xl font-serif font-semibold '>Governmet</h1>
        <h1 className='text-white  text-2xl font-semibold  font-serif'> GRADUATE COLLEGE</h1>
        <h1 className='text-white font-semibold '>Mandi Bahauddin</h1>
            
        </div>

        <div id='LeftFoot' className='md:h-full  md:w-[30%]  h-[30%] w-full  flex text-white  px-4 flex-col justify-start pt-4'>
        <h1 className='font-bold text-xl mb-4 underline'>Social</h1>
          
          <li className='flex items-center'>  <FaFacebook className='mr-2 cursor-pointer' /><a href="#"  className='hover:text-slate-400 fon'> Facebook</a>
          </li>
          <li className='flex items-center'> <FaInstagram className='mr-2 cursor-pointer' /> <a href="#" className='hover:text-slate-400'>Instagram</a></li>
          <li className='flex items-center'> <FaYoutube  className='mr-2 cursor-pointer' /> <a href="#" className='hover:text-slate-400'>Youtube</a></li>

        </div>

        <div id='centerFoot' className='md:h-full  md:w-[30%]  h-[30%] w-full  flex text-white  px-4 flex-col justify-start pt-4 '>
            <h1 className='font-bold text-xl mb-4 underline'>Contact</h1>
          
          <li className='flex'>  <IoMdCall className='mr-2' /><a href="#"  className='hover:text-slate-400 fon'> 0546 504504</a>
          </li>
          <li className='flex items-center'><IoMdMail className='mr-2 cursor-pointer' /> <a href="#" className='hover:text-slate-400'>ggcmbdin@gmail.com</a></li>
           
            
        </div>

        <div id='centerFoot' className='md:h-full  md:w-[30%]  h-[30%] w-full  flex text-white  px-4 flex-col justify-start pt-4 '>
            <h1 className='font-bold text-xl mb-4 underline'>Quik links</h1>
          
          <li className='hover:underline'><Link to="/" >Home</Link></li>
            <li className='hover:underline'><Link to="/faculty">Faculty</Link></li>
            <li className='hover:underline'><Link to="/bsprograms">Bs Programs</Link></li>
            <li className='hover:underline'><Link to="/gallery">Gallery</Link></li>
            <li className='hover:underline'><Link to="/contact">Contact Us</Link></li>


            
        </div>

        <div className='md:h-full  md:w-[30%]  h-[30%] w-full  flex text-white  px-4 flex-col justify-start pt-4 '>
        <h1 className='font-bold text-xl mb-4 underline'>Location</h1>
        <li className='flex items-center'><FaLocationDot className='mr-2 cursor-pointer' /> <p className='text-wrap  w-32 '>Right in front of General Bus Stand, Mandi Bahauddin. </p></li>
        </div>
      
      </div>


      <div className='border-t-2 w-full  py-3 text-white border-white'>
<h1 className='text-center'>© Developed By IT Department G.G.C MBDin. All Rights Reserved 2025.</h1>
        </div>
      </div>

     
    </>
  )
}

export default Footer
