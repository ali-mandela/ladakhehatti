import React from 'react'
import Container from './Layout'
import { Value } from '@/shared/value'
import Image from 'next/image'

const Values = () => {
  return (
    <section className='bg-[#FF5733] py-12  px-3 md:px-8 lg:px-12  ' >
      <div className='grid md:grid-cols-4 grid-cols-2 justify-evenly gap-2 md:gap-8'>
      {
        Value.map((item)=><Item key={item.id} item={item}/>)
      }
      </div>
    </section>
  )
}

const Item=({item})=>{
  return(
    <div className='bg-slate-100 rounded-md relative w-full'>
      <Image src={item.src}   
      width={0}
  height={0}
  sizes="100%"
  className='object-cover rounded-md hidden md:block'
  style={{ width: '100%', height: '200px' }}  
      alt="Picture of the camel"  />
      <Image src={item.src}   
      width={0}
  height={0}
  sizes="100%"
  className='object-cover md:hidden rounded-md  '
  style={{ width: '100%', height: '200px' }}  
      alt="Picture of the camel"  />
      <div className='bg-red-100 z-2  delay-75 scale-105	hover:scale-100		ease-in-out rounded-md p-2 	duration-300	absolute top-0 w-full h-full opacity-0 hover:opacity-80'>
        <h2 className='text-center font-semibold'>{item.name}</h2>
        <p className=' leading-6 mt-1 text-sm md:text-base'>{item.desc}</p>
      </div>
    </div>
  )
}
export default Values