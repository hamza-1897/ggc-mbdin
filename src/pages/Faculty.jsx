import React from 'react'
import Card from '../components/Card'
import urdu from '../ColgPics/principl.jpg'
import islamiyat from '../ColgPics/saifShb.jpg'
import pakStudy from '../ColgPics/saqibShb.jpg'
function Faculty() {
  return (
    <>
      <div className='flex flex-col my-4'>
      <div className='my-4'>  
            <h1 className='text-center text-green-700 text-3xl font-serif  font-bold'>Heads Of Departments</h1>
        </div>
<div className=' py-3 px-5 columns-2 md:columns-3 lg:columns-4 gap-8 md:gap-3'>
<Card   name="Prof. Inayat Ullah shb" depart="Urdu" image={urdu}/>
<Card  name="Prof. Saif Ullah shb" depart="Islamiyat" image={islamiyat}/>
<Card  name="Prof. Saqib shb" depart="Pak Studies" image={pakStudy}/>


</div>
      </div>
    </>
  )
}

export default Faculty
