import React from 'react'

function ProgramCard(props) {
  return (
    <>
      <div className='flex flex-col w-40  border m-3 py-4 px-4 gap-3 items-center justify-center'>
            <div>
            <img src={props.image} alt="" />    
            </div>    
            <h1 className='font-semibold  font-serif my-2'>{props.name}</h1>
            <button className='border text-orange-700 duration-500 border-orange-700 p-2 rounded-lg hover:bg-orange-700 hover:text-white'>View More</button> 
      </div>
    </>
  )
}

export default ProgramCard
