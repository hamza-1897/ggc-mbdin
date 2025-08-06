import React from 'react'
import main from '../ColgPics/mainHome.jpg'
import main2 from '../ColgPics/home01.jpg'
import Principle from '../components/Principle'
import Choose from '../components/Choose'
import {motion } from "framer-motion"

function Home() {
  return (
    <div className=" z-10 ">
      <motion.div
      
       initial={{ opacity: 0, scale: 0.2  }} 
       animate = {{ opacity:1, scale: 1}}

       transition={{ 
        duration: 1.5, 
        ease: "easeOut" 
      }}
      
      viewport={{ 
        once: true, 
        amount: 0.2
      }}

      className=' h-[85vh]'>
      <img src={main} alt="" className='h-full w-full' />
      </motion.div>
     
 <Principle />
      <Choose/>
      </div>
     
    
  )
}

export default Home
