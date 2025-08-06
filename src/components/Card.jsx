import React from 'react'
import {motion} from "framer-motion"

function Card(props) {
  return (
    <>
      <motion.div 
      
      initial ={{opacity:0 , scale:0.7}}
      whileInView={ {opacity:1 , scale:1}}
    
      transition={ {
        duration : 1,
        ease : "easeOut"
      }}

      className='flex cursor-pointer hover:scale-105 mt-2 transition hover:shadow-lg hover:shadow-green-700 flex-col w-44 border overflow-hidden  border-green-800 rounded-lg'>
        <div className='w-full h-[40%]'>
        <img src={props.image} alt="image" className='h-full w-full' />

        </div>
        <div className='flex  flex-col justify-center items-center'>
        <h1 className='text-center font-semibold mt-5'>{props.name}</h1>
        <h1>{props.depart}</h1>
        </div>
       
      </motion.div>
    </>
  )
}

export default Card
