import React from 'react'
import ChooseCard from './ChooseCard'
import sport from '../ColgPics/sporticon.jpeg'
import structure from '../ColgPics/structure.jpeg'
import academic from '../ColgPics/academic.jpeg'
import logo from '../ColgPics/logo.jpg'
import career from '../ColgPics/career.jpeg'
import {motion } from "framer-motion"

function Choose() {
  return (
    <>
<div className=' h-[90vh] my-8'>
    <div className=' my-8 py-2'> <h1 className='text-center  text-3xl font-bold motion-safe:animate-bounce  text-orange-600'>Why Choose US ?</h1></div>

      <div className='w-full flex items-center my-4  justify-around '>
        
        <motion.div
        initial={{ opacity: 0, x: -100 }} 
       whileInView = {{ opacity:1, x: 0}}

       transition={{ 
        duration: 2, 
        ease: "easeOut" 
      }}
      
      viewport={{ 
        always: true, 
        amount: 0.3
      }}
        className='md:h-full h-[50%] w-[30%] flex items-center gap-7 justify-center  flex-col'>
          <ChooseCard image={academic} name="Academic Excellence" detail="Highly qualified and experienced faculty"/> 
         <ChooseCard image={sport} name="Extracurricular Activities" detail="Sports facilities including gymnasium, cricket, football, etc. "/>
        </motion.div>

        <div className='h-full w-[30%] flex'>
          <img src={logo} alt="logo" className=''/>
        </div>
        <motion.div
        initial={{ opacity: 0, x: 100 }} 
       whileInView = {{ opacity:1, x: 0}}

       transition={{ 
        duration: 2, 
        ease: "easeOut" 
      }}
      
      viewport={{ 
        always: true, 
        amount: 0.3
      }}
        className=' h-full  w-[30%] flex items-center gap-7 justify-center  flex-col'>
        <ChooseCard image={structure} name=" Modern Infrastructure"  detail="Smart classrooms with digital learning tools"/> 
        <ChooseCard image={career} name=" Career Opportunities" detail="Career counseling and skill development workshops " />
        </motion.div>
      </div>

</div>

    </>
  )
}

export default Choose
