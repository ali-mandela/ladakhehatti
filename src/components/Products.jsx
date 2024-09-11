import React from 'react'
import Container from './Layout'
import Image from 'next/image'
import { ProductItems } from '@/shared/itemsSlider'
import Button from './Button'

const Products = ({
    title = ''
}) => {
    return (
        <Container>
            <div className='my-12'>
                <h1
                    className='text-2xl md:text-3xl text-center text-clip font-bold text-[#C70039]'>{title}</h1>
                <div className='my-12 grid grid-cols-2 md:grid-cols-4 gap-4'>
                     {
                        ProductItems.map((item)=><ProductItem key={item.id} data={item} />)
                     }
                </div>
                <Button/>

            </div>
        </Container>
    )
}

export default Products

const ProductItem = ({data}) => {
    let src1 = 'https://img.freepik.com/free-photo/assorted-pickles-vegetables-placed-stone-surf' +
            'ace_2831-8379.jpg?t=st=1726075290~exp=1726078890~hmac=e0b63cb47d5a4123e745d564a0' +
            'f3d846132d85d0de1f986851b495029aace92a&w=900';
    let src2 = 'https://img.freepik.com/free-psd/pickle-jar-bottle-isolated-transparent-backgrou' +
            'nd_191095-28560.jpg?t=st=1726075301~exp=1726078901~hmac=bd3a31a30500bae294f5aaa5' +
            '2db13c472aedaf2f2ba7d3c0a0fd9a526a2d10bb&w=740';
    return (
        <div className='hover:shadow-lg bg-zinc-200 rounded-sm shadow-inner '>
            <div className='relative cursor-pointer'>
                <Image
                    src={src1}
                    width={0}
                    height={0}
                    sizes="100%"
                    className='object-cover rounded-sm  '
                    style={{
                    width: '100%',
                    height: '200px'
                }}
                    alt="Picture of the camel"/>
                <Image
                    src={src2}
                    width={0}
                    height={0}
                    sizes="100%"
                    className='object-cover  z-2  delay-75  ease-in-out rounded-sm duration-700 absolute top-0 w-full h-full opacity-0 hover:opacity-100'
                    style={{
                    width: '100%',
                    height: '200px'
                }}
                    alt="Picture of the camel"/>

            </div>
            <div className='px-1 py-4'>
            <h2 className='text-lg font-medium text-[#FF5733] '>{data.name}</h2>
            <p className='text-sm text-slate-600 leading-6'>{data.description.slice(0, 50)}...</p>
            <p className='flex my-2 items-center justify-between pr-4'><span>₹ <span className='line-through'>{data.discountPrice} </span>{data.price}</span></p>
            </div>
            <div className='mx-2 rounded-sm hover:bg-[#C70039] transition-all duration-300 shadow-inner flex items-center justify-center my-1 bg-[#FF5733]'>
                <button className='text-white p-2'>Add to cart</button>
            </div>
        </div>
    )
}