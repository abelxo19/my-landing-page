import { Star } from 'lucide-react';
import i1 from '@/assets/img/review-1.jpg'
import i2 from '@/assets/img/review-2.jpg'
import i3 from '@/assets/img/review-3.jpg'
import i4 from '@/assets/img/review-4.jpg'
import Image from 'next/image'
const testimonial = () => {
  return (
    <div className='container'>
      <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
        <div className='flex -space-x-4'>
                 <Image
                  src={i1}
                  alt='no_image'
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' 
                  /><Image
                  src={i2}
                  alt='no_image'
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' 
                  /><Image
                  src={i3}
                  alt='no_image'
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' 
                  /><Image
                  src={i4}
                  alt='no_image'
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' 
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-[#001e80] fill-[#001e80]' />
                    <Star className='h-4 w-4 text-[#001e80] fill-[#001e80]' />
                    <Star className='h-4 w-4 text-[#001e80] fill-[#001e80]' />
                    <Star className='h-4 w-4 text-[#001e80] fill-[#001e80]' />
                    <Star className='h-4 w-4 text-[#001e80] fill-[#001e80]' />
                  </div>

                  <p>
                    <span className='font-semibold'>1.250</span> happy customers
                  </p>
                </div>
                </div>
    </div>
  )
}

export default testimonial
