import React from 'react'

function ChooseCard(props) {
  return (
    <>
      <div className='flex flex-col hover:scale-110   py-4 h-40% w-40% items-center justify-center'>
        <div className='h-[30%]  w-[30%]'>
            <img src={props.image} alt="" className='h-full border rounded-full w-full' />
        </div>
        <h1 className='my-4 font-bold font-sans '>{props.name}</h1>
        <span className=' text-wrap text-center w-[70%] text-slate-600'>{props.detail}</span>
      </div>
    </>
  )
}

export default ChooseCard
