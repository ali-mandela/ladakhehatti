"use client"
import Image from 'next/image'
import {useEffect, useState} from 'react'; 
import { NextIcon, PrevIcon } from './SliderIcons';
import Link from 'next/link';
import { SliderItems } from '@/shared/itemsSlider';
import Container from './Layout';


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
useEffect(() => {
  let intervalId = setInterval(() => {
      setcurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, 4000);

  return () => clearInterval(intervalId);   
}, [length]);  

  return ( <>
    <div className='hidden shadow-sm bg-zinc-50 md:block h-[70vh] relative  	'> 
    <Slider item={items[current]}/>
    <div className=' absolute flex gap-8 items-center right-2 bottom-2'>
    <PrevIcon onHandle={handlePrev} color='#800000'/>
        <span className='w-8 h-8 border-2 border-lh font-bold text-lh rounded-full flex items-center justify-center'>{current+1}</span>
      <NextIcon onHandle={handleNext} color='#800000'/>
    </div>
    
</div>
{/* mobile */}
   <div className=' md:hidden w-full bg-zinc-50  shadow-md h-[30vh] relative'> 
   <MobileSlider item={items[current]}/>
   <div className=' absolute flex gap-8 items-center right-[30%] bottom-1'>
          <PrevIcon size={22} onHandle={handlePrev} color='grey'/>
              <span className='w-6 h-6 text-base border-2 border-[grey] font-bold text-[grey] rounded-full flex items-center justify-center'>{current+1}</span>
            <NextIcon size={22} onHandle={handleNext} color='grey'/>
          </div>
                 
    </div>  
    </>
  )
}

export const Slider=({item})=>{
  return(
    <div className='my-4   transition-all ease-out duration-500 h-full w-full'>
    <h1 className='px-12 text-base font-light text-lh'>{item?.label}</h1>
     <div className='bg-[#80000034] px-12 shadow-xl h-[25vh] mt-6 relative flex items-center'> 
         <h1 className='text-3xl text-gray-700 w-1/2 font-medium leading-10'>{item?.title}</h1>
         <Image className='absolute -top-[50px] right-0 mix-blend-multiply	' src={item?.src} width={380} height={380} alt='product image' />
     </div>
     <div className='px-12 pt-6 w-2/3'>
         <p className='leading-7 text-base text-gray-600 font-light'>{item?.desc}</p>
         <button className='text-center text-base font-semibold bg-[#FF5733] text-white duration-500 border-[2px] px-4 py-2 hover:text-[#FF5733] rounded-full w-max hover:bg-white hover:border-[#FF5733]'>
             <Link href={'/'}>Shop now</Link>
         </button>
     </div>
    </div>
  )
}


export const MobileSlider = ({ item }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${item?.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    color: 'white',
  };

  return (
    <div className='w-full h-full'>
      <div style={backgroundImageStyle} className="h-full w-full relative ">
        <p className='p-2 bg-black '>{item?.label}</p>
        <div className=' p-2 absolute bottom-0 w-full  items-center'>
            <h1 className=' text-black text-lg  font-semibold'>{item?.title}</h1>
            <button className='bg-lh w-max font-light py-1 px-4 mt-1 hover:text-white hover:bg-slate-900 transition-all ease-in-out duration-400 text-white rounded-full '>
             <Link href={'/'}>Shop now</Link>
         </button>
        </div>
      </div>
    </div>
  );
};


export default HeroComponent