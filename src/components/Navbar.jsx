import React from 'react';
import { MobileCartIcon, MenuIcon } from './Icons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='px-3  h-20 md:px-8 lg:px-12 py-2 bg-red-800 flex items-center relative'>
      {/* mobile */}
      <div className='flex overflow-hidden w-full items-center justify-between'>
        <Link href='/cart'><MobileCartIcon /></Link> 
        <h1 className='text-xl text-white font-extralight underline-offset-8 underline'><Link href='/'>Ladakh-e-hatti</Link></h1>
        <MenuIcon/>
      </div>
    {/* big screens */}
    </div>
  );
};

export default Navbar;
