import React from 'react'
import activity from '../ColgPics/Activity.jpg'
import activity1 from '../ColgPics/activity1.jpg'
import activity2 from '../ColgPics/activity2.jpg'
import activity4 from '../ColgPics/activity4.jpg'
import sport from '../ColgPics/sport.jpg'

import activity3 from '../ColgPics/activity3.jpg'
import activity6 from '../ColgPics/activity6.jpg'
import mela1 from '../ColgPics/mela1.jpg'
import mela from '../ColgPics/mela.jpg'
import mela2 from '../ColgPics/mela2.jpg'
import mela3 from '../ColgPics/mela3.jpg'

function Events() {
  return (
    <>
       <div className='flex flex-col w-full  my-3 p-2'>
              <div> 
                  <h1 className='text-center text-orange-700 text-3xl font-serif my-4 font-bold'>News & Events</h1>
              </div>
              <div class="p-4">
        <div class="columns-2 md:columns-3 lg:columns-4  gap-4">
        <div class="mb-4">
            <img src={sport} alt="Image 3" class="w-full hover:scale-125 transition-all duration-100 cursor-pointer rounded-lg" />
          </div>
          <div class=" mb-4">
            <img src={activity} alt="Image 1" class="w-full  hover:scale-125  transition-all duration-100 cursor-pointer rounded-lg" />
          </div>
          <div class="mb-4">
            <img src={activity1} alt="Image 2" class="w-full  hover:scale-125  transition-all duration-100 cursor-pointer rounded-lg" />
          </div>
          <div class="mb-4">
            <img src={activity2} alt="Image 3" class="w-full hover:scale-125 transition-all duration-100 cursor-pointer rounded-lg" />
          </div>

          <div class="mb-4">
            <img src={activity3} alt="Image 4" class="w-full hover:scale-125 transition-all duration-100 cursor-pointer rounded-lg" />
          </div>
          <div class=" mb-4">
            <img src={activity4} alt="Image 1" class="w-full  hover:scale-125  transition-all duration-100 cursor-pointer rounded-lg" />
          </div>
          <div class="mb-4">
            <img src={activity6} alt="Image 4" class="w-full hover:scale-125 transition-all duration-100 cursor-pointer rounded-lg" />
          </div>
          <div class="mb-4">
            <img src={mela1} alt="Image 4" class="w-full hover:scale-125 transition-all duration-100 cursor-pointer rounded-lg" />
          </div>
          <div class="mb-4">
            <img src={mela} alt="Image 4" class="w-full cursor-pointer hover:scale-125 transition-all duration-100 rounded-lg" />
          </div>
          
          <div class="mb-4">
            <img src={mela2} alt="Image 4" class="w-full cursor-pointer hover:scale-125 transition-all duration-100 rounded-lg" />
          </div>
          <div class="mb-4">
            <img src={mela3} alt="Image 4" class="w-full cursor-pointer hover:scale-125 transition-all duration-100 rounded-lg" />
          </div>
        </div>
      </div>
            </div>
    </>
  )
}

export default Events
