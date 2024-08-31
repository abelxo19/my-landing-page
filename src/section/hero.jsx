import { ArrowRight } from 'lucide-react';
import Image from 'next/image'
import Hero from '@/assets/img/hero.png'
const hero = () => {
  return (
  <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip'>
    <div className='container'>
        <div className='md:flex items-center lg:justify-between'>
          <div className='md:w-[478px]'>
            <div className='text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight'>Version 4.0 is here</div>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-tran sparent bg-clip-text mt-6'>Journey to success</h1>
            <p className='text-xl text-[#010d3E] tracking-tight mt-6'> 
                Celebrate the joy of accomplishement with an an app designed to track progress ,
                motivate your efforts and celebrate your success.
            </p>
            <div className='flex gap-1 item-center mt-[30px]'>
                <button className='btn btn-primary'>Get for free</button>
                <button className='btn btn-text gap-1'><span>learn more</span>
                <ArrowRight className='h-5 w-5 inline-flex '/></button>
            </div>
          </div>   
            <div className='mt-20 md:mt-8 md:h-[648px] md:flex-1 relative lg:left-0'>
              <Image
              src={Hero} 
              alt='no_image'
               className='md:absolute md:h-full md:w-auto md:max-w-none lg:max-w-nonemd:-left-6 lg:left-0'
              />
            </div>
        </div>
      
    </div>
   </section> 
  )
}

export default hero
