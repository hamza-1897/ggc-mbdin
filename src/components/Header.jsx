import React from 'react'
import logo from '../ColgPics/logo.jpg'
import { IoMdMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { NavLink , Link} from 'react-router-dom'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

function Header() {

const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <>
      <div id='header' className='bg-white  w-full h-[25vh] md:h-28'>
        <div id='upperHeader' className='w-full h-[80%] md:h-[75%] flex md:flex-row flex-col-reverse md:justify-start justify-center items-center '>
           <div className='flex justify-center  gap-4 py-2 items-center  md:gap-2 overflow-hidden md:h-full h-60% w-full md:w-[60%]'>
            <div id='logo' className='h-full flex items-center justify-center ml-4 w-[30%] md:w-[10%]'>
                <img src={logo} alt="logo"  className='h-full  w-auto ml-3'/>
            </div>
            <div id='colgName'  >
                <h1 className='text-[#13325E]  font-bold font-serif text-md w-[70%] md:ml-1 md:text-lg lg:text-xl'>GOVT. GRADUATE COLLEGE, MANDI BAHAUDDIN</h1>
           
           </div>
          </div>
            <div id='contact-info' className=' h-[20%] px-3 w-full justify-center md:mr-3 my-2 md:my-0  md:h-full md:w-[40%] flex items-center md:justify-end'>
            <IoMdCall className='mr-2' />
            <h2 className=' cursor-pointer mr-3 text-sm md:text-md md:mr-6'>0546 504504</h2>
            <h1 className='text-orange-600 mr-4 text-lg'>l</h1>
            <IoMdMail className='mr-2 cursor-pointer' />
            <h2>ggcmbdin@gmail.com</h2>
            </div>
        </div>

        {/* desktop view*/}
        <div id='lowerHead' className='hidden md:visible bg-black w-full h-[15%] md:h-[25%] border-b-2 md:flex items-center justify-center  border-orange-500'>
          <ul className='list-none flex gap-3 md:gap-8 font-serif text-sm md:text-lg font-normal text-white'>
            <li className='hover:text-slate-300'><Link to="/" >Home</Link></li>
            <li className='hover:text-slate-300'><Link to="/faculty">Faculty</Link></li>
            <li className='hover:text-slate-300'><Link to="/bsprograms">Bs Programs</Link></li>
            <li className='hover:text-slate-300'><Link to="/intermediate">Intermediate</Link></li>
            <li className='hover:text-slate-300'><Link to="/contact">Contact Us</Link></li>

          </ul>
        </div>
          <button className="md:hidden ml-4 text-2xl" onClick={toggleMenu}>
          {isOpen ? <RxCross2 /> : <FaBars />}
        </button>
        <div className="md:hidden  h-10vh z-50 w-full ">
                {isOpen && (
        <div className="bg-slate-300 z-50 absolute px-4  py-6 shadow-md ">
          <li onClick={toggleMenu} className="block py-2 border-b"><Link to="/" >Home</Link></li>
                    <li onClick={toggleMenu} className="block py-2 border-b"><Link to="/bsprograms">Bs Programs</Link></li>
          <li onClick={toggleMenu} className="block py-2 border-b"><Link to="/faculty">Faculty</Link></li>
          <li onClick={toggleMenu} className="block py-2 border-b"><Link to="/intermediate">Intermediate</Link></li>
          <li onClick={toggleMenu} className="block py-2 border-b"><Link to="/contact">Contact Us</Link></li>
        </div>
      )}
        </div>
       
{/*mobile view  */}




      </div>
    </>
    
  )
}

export default Header
