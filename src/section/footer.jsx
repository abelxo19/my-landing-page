import Log from '@/assets/img/log.png'
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Pin } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Twitch } from 'lucide-react';
import Image from 'next/image';

const footer = () => {
  return (
    <footer className='bg-black mt-8 text-sm py-10 text-center text-[#BCBCBC] '>
    <div className='container'>
      <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0  before:w-full before:blur before:bg-[linear-gradient(to_right,#F878FF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute">
       <Image 
       src={Log}
       alt='no'
       className='w-9 h-9'
      />
      </div> 
       <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
         <a href='#'>Feutures</a>
         <a href='#'>Customers</a>
         <a href='#'>Pricing</a>
         <a href='#'>Help</a>
         <a href='#'>Careers</a>
       </nav> 
       <div className='flex justify-center gap-4 mt-6'>
        <Instagram/>
        <Linkedin/>
        <Pin/>
        <Youtube/>
        <Twitch/>
       </div>
       <p className='mt-6'>&copy; 2024 Yor Company Inc. All right reserved </p>
    </div>
    </footer>
  )
}

export default footer
