"use client";

import { menu, mneuweb } from '@/shared/menulist';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, {useState} from 'react';

export const MobileCartIcon = ({
    bg = "#FFFFFF",
    size = 34
}) => {
    return (
        <Link href='/cart'>
        <div className="flex items-center">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M20.0164 16.2572C19.5294 18.5297 19.2859 19.666 18.4608 20.333C17.6357 21 16.4737 21 14.1495 21H9.85053C7.52639 21 6.36432 21 5.53925 20.333C4.71418 19.666 4.47069 18.5297 3.98372 16.2572L3.55514 14.2572C2.83668 10.9043 2.47745 9.22793 3.378 8.11397C4.27855 7 5.99302 7 9.42196 7H14.5781C18.0071 7 19.7215 7 20.6221 8.11397C21.2929 8.94376 21.2647 10.0856 20.9097 12"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"></path>
                    <path
                        d="M16 12H12M9 12H8"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                    <path
                        d="M10 15H14"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                    <path
                        d="M18 9L15 3"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                    <path
                        d="M6 9L9 3"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                </g>
            </svg>
        </div></Link>
    );
};

export const MenuIcon = ({
    bg = "#FFFFFF",
    size = 34
}) => {
    const [open,
        setOpen] = useState(false);
const router = useRouter();
const pathname = usePathname();
 

    return (
        <div className="">
            <button onClick={() => setOpen((prev) => !prev)}>
                {open
                    ? (
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            enable-background="new 0 0 32 32"
                            width={size}
                            height={size}
                            fill="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path
                                        fill="#FFFFFF"
                                        d="M16,0C7.178,0,0,7.178,0,16s7.178,16,16,16s16-7.178,16-16S24.822,0,16,0z M16,31C7.729,31,1,24.271,1,16 S7.729,1,16,1s15,6.729,15,15S24.271,31,16,31z"></path>
                                    <path
                                        fill="#FFFFFF"
                                        d="M17.657,16.95c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707l4.243,4.242 c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L17.657,16.95z"></path>
                                    <path
                                        fill="#FFFFFF"
                                        d="M10.808,10.101c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707l4.243,4.242 c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L10.808,10.101z"></path>
                                    <path
                                        fill="#FFFFFF"
                                        d="M14.343,16.95l-4.243,4.242c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146 s0.256-0.049,0.354-0.146l4.243-4.242c0.195-0.195,0.195-0.512,0-0.707S14.539,16.755,14.343,16.95z"></path>
                                    <path
                                        fill="#FFFFFF"
                                        d="M21.192,10.101l-4.243,4.242c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146 s0.256-0.049,0.354-0.146l4.243-4.242c0.195-0.195,0.195-0.512,0-0.707S21.388,9.905,21.192,10.101z"></path>
                                </g>
                            </g>
                        </svg>
                    )
                    : (
                        <svg
                            viewBox="0 0 24 24"
                            width={size}
                            height={size}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Menu / Menu_Alt_05">
                                    <path
                                        id="Vector"
                                        d="M5 17H13M5 12H19M11 7H19"
                                        stroke="#FFFFFF"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </g>
                            </g>
                        </svg>
                    )}
            </button>
            <div
                className={`transition-transform duration-300 ease-in-out ${open
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'} absolute bg-neutral-100 left-0 w-full top-20 h-[calc(100vh-80px)] z-50`}>
                <div className="p-4 flex flex-col py-12 gap-8"> 
                    {
                        menu.map((item)=><p className={`${pathname == item.path ? "text-[#800000] font-medium underline text-lg underline-offset-4 ":"text-lg"}`} onClick={()=>{
                            router.push(item.path);
                            setOpen(false)
                        }} key={item.id} >{item.name}</p>)
                    }
                </div>
            </div>

        </div>
    );
};


export const MenuItems = () => {
    const pathname = usePathname();
 
    return (
        <div className='flex gap-12'>
            {
                mneuweb.map((item) => 
                <Link 
                href={item.path}
                className={`${pathname == item.path ? "underline underline-offset-8" : ""} text-[#FFFAFA] text-lg font-light`}
                key={item.id} >{item.name}</Link>)
            }
        </div>
    )
}

export const NavbarTitle = () => {
    const pathname = usePathname();
     return (
        <h1 className={`${pathname === '/' ? "underline underline-offset-8" : ""} text-xl text-white font-extralight`}>
            <Link href='/'>Ladakh-e-hatti</Link>
        </h1>
    );
};