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
import home from '../ColgPics/home.jpg'
import home0 from '../ColgPics/home1.jpg'
import home1 from '../ColgPics/home2.jpg'
import home2 from '../ColgPics/home3.jpg'
import home3 from '../ColgPics/home4.jpg'
import home01 from '../ColgPics/home01.jpg'
import home5 from '../ColgPics/home6.jpg'



const Photos = () => {

     const pics = [
    { id: 'a1', src: activity },
    { id: 'a2', src: activity1 },
    { id: 'a3', src: activity2 },
    { id: 'a4', src: activity3 },
    { id: 'a5', src: activity4 },
    { id: 'a6', src: activity6 },
    { id: 'a7', src: sport },
    { id: 'a8', src: mela },
    { id: 'a9', src: mela1 },
    { id: 'a10', src: mela2 },
    { id: 'a11', src: mela3 },



  ];

  return (
    <>
      <div className='flex flex-col w-full  my-3 p-2'>
                    <div> 
                        <h1 className='text-center text-orange-700 text-3xl font-serif my-4 font-bold'>News & Events</h1>
                    </div>
                     <div class="p-4">
      
      
      
                      
                 <div class="columns-2 md:columns-3 lg:columns-4  gap-4">

                   {pics.map(item => (
                     <div class="mb-4">
                  <img key={item.id} src={item.src} alt="Image 3" class="w-full hover:scale-125 transition-all duration-100 cursor-pointer rounded-lg" />
                </div>

                   ))}

               
                 </div>
            </div>
         </div>
    </>
  )
}

export default Photos
