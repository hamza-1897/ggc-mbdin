import React from 'react'
import main from '../ColgPics/mainHome.jpg'
import main2 from '../ColgPics/home01.jpg'
import Principle from '../components/Principle'
import Choose from '../components/Choose'


function Home() {
  return (
    <div className=" z-10">
      <div className='z-10'>
      <img src={main} alt="" />
      </div>
     
 <Principle />
      <Choose/>
      </div>
     
    
  )
}

export default Home
