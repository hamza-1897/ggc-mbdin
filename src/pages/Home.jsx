import React from 'react'
import main from '../ColgPics/mainHome.jpg'
import main2 from '../ColgPics/home01.jpg'
import Principle from '../components/Principle'
import Gallery from '../components/Gallery'
import Events from '../components/Events'
import Choose from '../components/Choose'


function Home() {
  return (
    <div className=" z-10">
      <div className='z-10'>
      <img src={main} alt="" />
      </div>
     
 <Principle />
      <Choose/>
      <Events/>
      </div>
     
    
  )
}

export default Home
