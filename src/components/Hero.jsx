"use client"
import Image from 'next/image'
import {useState} from 'react'; 
import { NextIcon, PrevIcon } from './SliderIcons';
import Link from 'next/link';
import { SliderItems } from '@/shared/itemsSlider';

const HeroComponent = () => {
  const [current, setcurrent] = useState(0);
  const [items, setItems] = useState(SliderItems);
  let length = items?.length;

  function handlePrev() { 
    setcurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
}

function handleNext() {
    setcurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
}

  return ( 
    <> <div className='hidden md:block h-[70vh] relative'> 
    <Slider item={items[current]}/>
    <div className=' absolute flex gap-8 items-center right-2 bottom-2'>
    <PrevIcon onHandle={handlePrev} color='#800000'/>
        <span className='w-8 h-8 border-2 border-lh font-bold text-lh rounded-full flex items-center justify-center'>{current+1}</span>
      <NextIcon onHandle={handleNext} color='#800000'/>
    </div>
    
</div>
{/* mobile */}
   <div className=' md:hidden h-[30vh] relative'> 
   <MobileSlider/>
          {/* <Slider item={items[current]}/>
          <div className=' absolute flex gap-8 items-center right-2 bottom-2'>
          <PrevIcon onHandle={handlePrev} color='#800000'/>
              <span className='w-8 h-8 border-2 border-lh font-bold text-lh rounded-full flex items-center justify-center'>{current+1}</span>
            <NextIcon onHandle={handleNext} color='#800000'/>
          </div>
           */}
    </div>
</>
  )
}

export const Slider=({item})=>{
  return(
    <div className='my-4 shadow-md transition-all ease-out duration-500 h-full w-full'>
    <h1 className='px-12 text-base font-light text-lh'>{item?.label}</h1>
     <div className='bg-[#80000034] px-12 shadow-xl h-[25vh] mt-6 relative flex items-center'> 
         <h1 className='text-3xl text-gray-700 w-1/2 font-medium leading-10'>{item?.title}</h1>
         <Image className='absolute -top-[50px] right-0' src={item?.src} width={380} height={380} alt='product image' />
     </div>
     <div className='px-12 pt-6 w-2/3'>
         <p className='leading-7 text-base text-gray-600 font-light'>{item?.desc}</p>
         <button className='bg-lh w-max font-medium py-2 px-6 mt-4 hover:text-lh hover:bg-white transition-all ease-in-out duration-400 text-white rounded-full '>
             <Link href={'/'}>Shop now</Link>
         </button>
     </div>
    </div>
  )
}


export const MobileSlider=()=>{
  return(
    <div className='w-full h-full bg-slate-500'>
ggg
    </div>
  )
}

export default HeroComponent