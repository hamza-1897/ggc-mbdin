import React from 'react'
import { motion } from 'framer-motion';
import post from '../ColgPics/poster.jpg'
import { useState } from 'react';


const Announcement = () => {

 const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }





  return (
     <motion.div
      className="fixed inset-0 w-full h-full justify-around bg-black bg-opacity-50 text-white flex flex-col z-50"
      
      initial={{ left: '-100vw' }}
      
      animate={{ left: '0' }}
      
      exit={{ left: '-100vw' }}
      
      transition={{ 
        duration: 0.8, 
        delay:1,
        ease: "easeOut" 
      }}
    >
      <div className="w-full h-[10vh] flex items-center justify-end">
        <button
          onClick={handleClose}
          className="mr-20 text-2xl cursor-pointer p-4 rounded-full hover:bg-gray-700 transition-colors"
        >
          X
        </button>
      </div>

      <div className="w-full h-[80vh] flex items-center justify-center">
        <div className="h-[95%] w-[80%] max-w-4xl">
          <img src={post} className="h-full w-full object-contain rounded-lg shadow-xl" alt="Announcement" />
        </div>
      </div>
    </motion.div>

  )
}

export default Announcement
