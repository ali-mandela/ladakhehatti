import Image from 'next/image'
import React from 'react'

const PagesHeader = ({title,src}) => {
  return (
    <div className='relative w-full h-full'>
    <Image
   src={src}
   width={0}
   height={0}
   sizes="100%"
   className='object-cover'
   style={{
    width: '100%',
    height: '240px'
   }}
   alt="Picture of the camel"/>
   <div className='absolute top-1/2 right-1/2 translate-x-1/2 '>
    <h2 className='text-4xl font-bold text-orange-600 shadow-md'>{title}</h2>
   </div>
    </div>
  )
}

export default PagesHeader