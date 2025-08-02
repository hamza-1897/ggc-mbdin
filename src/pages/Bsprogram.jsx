import React from 'react'
import ProgramCard from '../components/ProgramCard'
import bsit from '../ColgPics/bsit.jpeg'
import bsislamiyat from '../ColgPics/bsislam.jpeg'
import bschemist from '../ColgPics/bschemistry.jpeg'
import bsphysics from '../ColgPics/bsphysics.jpeg'
import bsbotany from '../ColgPics/bsbotany.jpeg'
import bsenglish from '../ColgPics/bsenglish.jpeg'
import bsurdu from '../ColgPics/bsurdu.jpeg'
import bszoology from '../ColgPics/bszoology.jpeg'
import polscince from '../ColgPics/polscince.jpeg'
import bsmath from '../ColgPics/bsmath.jpeg'
function Bsprogram() {
  return (
    <>
        <div className='mb-4 mt-8'>  
            <h1 className=' text-center text-orange-700 text-3xl font-serif  font-bold'>Bs Programs (MORNING)</h1>
        </div>

        <div className='grid grid-cols-5 pl-7'>
        <ProgramCard name="BS IT" image={bsit}/>
        <ProgramCard name="BS PHYSICS" image={bsphysics}/>
        <ProgramCard name="BS CHEMISTRY" image={bschemist}/>
        <ProgramCard name="BS ZOOLOGY" image={bszoology}/>
        <ProgramCard name="BS BOTANY" image={bsbotany}/>
        <ProgramCard name="BS POLITICAL SCINCE" image={polscince}/>
        <ProgramCard name="BS MATH" image={bsmath}/>
        <ProgramCard name="BS URDU" image={bsurdu}/>
        <ProgramCard name="BS ISLAMIYAT" image={bsislamiyat}/>
        <ProgramCard name="BS ENGLISH" image={bsenglish}/>
        </div>
        <div className='mb-4 mt-10'>  
            <h1 className=' text-center text-orange-700 text-3xl font-serif  font-bold'>Bs Programs (EVENING)</h1>
        </div>
<div className='grid mb-5 grid-cols-5 pl-7'>
<ProgramCard name="BS IT" image={bsit}/>
<ProgramCard name="BS CHEMISTRY" image={bschemist}/>

<ProgramCard name="BS POLITICAL SCINCE" image={polscince}/>
<ProgramCard name="BS ENGLISH" image={bsenglish}/>

</div>

    </>
  )
}

export default Bsprogram
