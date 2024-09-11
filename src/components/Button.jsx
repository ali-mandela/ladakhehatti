'use client'

import { useRouter } from "next/navigation"

const Button = ({title='Shop Now',path='/shop'}) => {
    const router = useRouter();

    function handleClick(){
        router.push(path)
    }
    
    return (
        <div className='w-full flex my-8 justify-center'>
            <button 
                onClick={handleClick} 
                className='text-center text-base font-semibold bg-[#FF5733] text-white duration-500 border-[2px] px-4 py-2 hover:text-[#FF5733] rounded-full w-max hover:bg-white hover:border-[#FF5733]'
            >
                {title}
            </button>
        </div>
    )
}

export default Button