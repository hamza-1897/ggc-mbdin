import React from 'react'
import Card from '../components/Card'
import urdu from '../ColgPics/principl.jpg'
import islamiyat from '../ColgPics/saifShb.jpg'
import pakStudy from '../ColgPics/saqibShb.jpg'
function Faculty() {

const prof = [
  {id:'1',name:'Prof. Inayat Ullah',depart:'Urdu' , pic: urdu},
  {id:'2',name:'Prof. Saif Ullah ' ,depart:"Islamiyat", pic: islamiyat},
  {id:'3',name:'Prof. Saqib' , depart :"Pak Studies",pic: pakStudy},

]


  return (
    <>
      <div className='flex flex-col my-4'>
      <div className='my-4'>  
            <h1 className='text-center text-green-700 text-xl md:text-3xl font-serif  font-bold'>Heads Of Departments</h1>
        </div>
<div className=' py-3 px-5 columns-2 md:columns-3 lg:columns-4 gap-8 md:gap-3'>

{
  prof.map( val => (
    <Card  key={val.id}  name={val.name} depart={val.depart} image={val.pic}/>

  ))
}



</div>
      </div>
    </>
  )
}

export default Faculty
