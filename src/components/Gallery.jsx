import React from 'react'
import home from '../ColgPics/home.jpg'
import home0 from '../ColgPics/home1.jpg'
import home1 from '../ColgPics/home2.jpg'
import home2 from '../ColgPics/home3.jpg'
import home3 from '../ColgPics/home4.jpg'
import home01 from '../ColgPics/home01.jpg'
import home5 from '../ColgPics/home6.jpg'

function Gallery() {
  return (
    <>
      <div className='flex flex-col w-full  my-3 p-2'>
        <div> 
            <h1 className='text-center my-3 text-orange-700 text-3xl font-serif underline font-bold'>Gallery</h1>
        </div>
        <div class="p-4">
  <div class="columns-2 md:columns-3 lg:columns-4  gap-4">
    <div class=" mb-4">
      <img src={home} alt="Image 1" class="w-full  hover:scale-125  transition-all duration-100 cursor-pointer rounded-lg" />
    </div>
    <div class="mb-4">
      <img src={home0} alt="Image 2" class="w-full  hover:scale-125  transition-all duration-100 cursor-pointer rounded-lg" />
    </div>
    <div class="mb-4">
      <img src={home1} alt="Image 3" class="w-full hover:scale-125 transition-all duration-100 cursor-pointer rounded-lg" />
    </div>
    <div class="mb-4">
      <img src={home2} alt="Image 4" class="w-full hover:scale-125 transition-all duration-100 cursor-pointer rounded-lg" />
    </div>
    <div class="mb-4">
      <img src={home3} alt="Image 4" class="w-full hover:scale-125 transition-all duration-100 cursor-pointer rounded-lg" />
    </div>
    <div class="mb-4">
      <img src={home01} alt="Image 4" class="w-full hover:scale-125 transition-all duration-100 cursor-pointer rounded-lg" />
    </div>
    <div class="mb-4">
      <img src={home5} alt="Image 4" class="w-full cursor-pointer hover:scale-125 transition-all duration-100 rounded-lg" />
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Gallery
