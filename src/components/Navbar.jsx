import React from 'react';
import {MobileCartIcon, MenuIcon, MenuItems, NavbarTitle} from './Icons';
import Link from 'next/link';
import NavIcons from './NavIcons';
import Container from './Layout';



const Navbar = () => {
    return ( 
         <div
            className='px-3 h-20 md:px-8 lg:px-12 py-2 bg-[#FF5733] flex items-center relative'>
            {/* Mobile Navbar */}
            <div
                className='flex md:hidden overflow-hidden w-full items-center justify-between'>
                <MobileCartIcon/>
                <h1 className='text-xl text-white font-extralight underline-offset-8 underline'>
                    <Link href='/'>Ladakh-e-hatti</Link>
                </h1>
                <MenuIcon/>
            </div>

            {/* Big Screens Navbar */}
            <div className='hidden md:flex w-full items-center justify-between'>
                
                <NavbarTitle/>
                <MenuItems/>
                 <NavIcons/>
                
            </div>
        </div> 
    );
};

export default Navbar;
