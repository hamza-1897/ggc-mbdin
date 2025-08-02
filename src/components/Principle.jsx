import React from 'react'
import photo from '../ColgPics/principl.jpg'
function Principle() {
  return (
    <>
      <div id='container' className='flex flex-col w-full h-[95vh] my-10 md:h-[60vh]  md:my-3 md:p-2'>
<div > 
    <h1 className='text-center text-green-700 text-2xl font-serif underline font-bold'>Message From Principal</h1>
</div>
     <div className='flex flex-col md:flex-row justify-center md:w-full my-12 md:my-0 p-5 items-center'>
     <div id='image' className='flex flex-col justify-center  items-center h-[20%] md:h-full w-[40%]'>
        <img src={photo} alt="" className='h-60 shadow-xl  rounded-md'  />
        <h1 className='font-serif font-medium mt-4'>Prof. Inayat Ullah (Qari) </h1>
        </div>

        <div id='message' className='md:w-[60%] w-[90%] mt-14 px-3 md:my-0 py-1 h-[60%] md:h-[80%] border-x-4 border-green-700 md:px-3 md:py-6'>

        <p className='text-justify font-semibold font-sans text-xl h-[60%] w-full md:h-full'> Outstanding performance of educational institutions goes a long way towards achieving the cherished goals of national development. By the grace of Allah, Government Graduate College Mandi Bahauddin serves as a beacon of knowledge for male and female students. Achieving new milestones in academic excellence and firm discipline, the college has become one of the best institutions in Mandi Bahauddin by virtue of its infrastructure and the scholarship of committed faculty members.</p>
        </div>
        </div>   
      </div>
    </>
  )
}

export default Principle
