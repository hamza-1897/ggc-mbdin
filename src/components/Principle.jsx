import React from 'react'
import photo from '../ColgPics/principl.jpg'
function Principle() {
  return (
    <>
      <div id='container' className='flex flex-col w-full  my-3 p-2'>
<div > 
    <h1 className='text-center text-green-700 text-2xl font-serif underline font-bold'>Message From Principal</h1>
</div>
     <div className='flex justify-center  p-5 items-center'>
     <div id='image' className='flex flex-col justify-center  items-center h-full w-[40%]'>
        <img src={photo} alt="" className='h-60 shadow-xl  rounded-md'  />
        <h1 className='font-serif font-medium mt-4'>Prof. Inayat Ullah (Qari) </h1>
        </div>

        <div id='message' className='w-[60%] border-x-4 border-green-700 px-3   py-6'>

        <p className='text-center font-semibold font-sans text-xl w-full h-full'> Outstanding performance of educational institutions goes a long way towards achieving the cherished goals of national development. By the grace of Allah, Government Graduate College Mandi Bahauddin serves as a beacon of knowledge for male and female students. Achieving new milestones in academic excellence and firm discipline, the college has become one of the best institutions in Mandi Bahauddin by virtue of its infrastructure and the scholarship of committed faculty members.</p>
        </div>
        </div>   
      </div>
    </>
  )
}

export default Principle
