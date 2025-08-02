import React from 'react'

function ChooseCard(props) {
  return (
    <>
      <div className='flex flex-col hover:scale-110  py-4 h-full w-full items-center justify-center'>
        <div className='h-[30%]  w-[30%]'>
            <img src={props.image} alt="" className='h-full border rounded-full w-full' />
        </div>
        <h1 className='my-4 text-center font-bold font-sans '>{props.name}</h1>
        <span className=' text-wrap text-center w-[70%] text-slate-600'>{props.detail}</span>
      </div>
    </>
  )
}

export default ChooseCard
