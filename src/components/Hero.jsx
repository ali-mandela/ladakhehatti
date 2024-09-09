import Image from 'next/image'
import React from 'react';
import img from '../assests/productdemo.png'

const HeroComponent = () => {
  return (
    // h-[30vh] md:h-[40vh] lg:h-[40vh]
    <div className=' shadow-xl h-[70vh] py-2 border-[1px] border-red-600 rounded-lg'>
            <h1 className='px-12 text-white font-extralight'>New product</h1>
            <div className='bg-[#8000003a] h-[25vh] mt-8 rounded-md relative flex items-center'>
            <div className='p-12'>
                <h1>Spciest  then ever</h1>
                <h1>From the roots of Ladakh.</h1>
            </div>
                <Image className='absolute right-0' src={img} width={500} height={500} alt='image' />
            </div>
            <div className='p-12 w-2/3'>
                <p>Free Download User 1600 SVG vector file in monocolor and multicolor 
                type for Sketch and Figma from User 1600 Vectors svg vector collection.
                User 1600 Vectors SVG vector illustration</p>
                <button className='bg-red-800 p-2 text-white rounded-full '>
                    Shop now
                </button>
            </div>
    </div>
  )
}

export default HeroComponent