"use client";

import { useState } from "react";

const ShopHeader = () => {

    const [open, setopen] = useState(false); 

    const handleOpen=()=>{ 
        setopen((prev)=>!prev); 
        
    }
    return (
      <>
          <div className="flex py-4 items-center justify-between ">
            <Icon1 open={open} setopen={handleOpen} />
            <SearchInput/>
            <ButtonNow/>
        </div>
        {
            open &&  <FIlterMenu/>
        }
      </>
    )
}
export default ShopHeader
const Icon1 = ({setopen, open}) => {
    return (
    <span onClick={setopen}>
          {
            open ? ( 
  <svg viewBox="0 0 1024 1024" className="icon" width={32} height={32}  version="1.1" xmlns="http://www.w3.org/2000/svg" 
  fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" 
  strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier">
  <path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" 
  fill="#000000" /></g></svg>) : ( <svg fill="#000000" width={32} height={32}  viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="m0 .011 741.97 984.808v673.566l502.665 251.332V984.82l675.332-896.544-88.154-66.308-697.508 925.891v783.345L852.301 1590.2V947.858L221.322 110.341h1262.289V.011z" fillRule="evenodd" /> </g></svg>

)
          }
    </span>

    )
}
const SearchInput = () => {
    return (
        <div className="  ">
            <input
                placeholder="search by name / description"
                className=" shadow-inner font-light px-4 py-1 border-[1px] outline-none border-black bg-white rounded-full h-10 w-96"/>
        </div>
    )
}
const ButtonNow = () => {
    return (
        <button
            className='text-center text-base font-semibold bg-[#FF5733] text-white duration-500 border-[2px] px-4 py-2 hover:text-[#FF5733] rounded-full w-max hover:bg-white hover:border-[#FF5733]'>
            Shop Now
        </button>
    )
}

const FIlterMenu = ()=>{
    return(
        <div>
            <form className="flex justify-between">
            {/* Categories */}
            <div>
            <label for="cars"></label>
                <select>
                <option  value="sadcab">category</option>
                        <option value="volvo">Herbal</option>
                        <option value="saab">Jams</option>
                        <option value="mercedes">Pickles</option>
                        <option value="audi">Shawls</option>
                </select>
            </div>
            {/* Brands */}
            <div>
            <label for="cars"></label>
                <select>
                <option  value="sadcab">Brands</option>
                        <option value="volvo">Herbal</option>
                        <option value="saab">Jams</option>
                        <option value="mercedes">Pickles</option>
                        <option value="audi">Shawls</option>
                </select>
            </div>
            {/* in stock */}
            <div className="flex items-center gap-4">
            <label for="cars">In Stock</label>
                <input type="checkbox" />
            </div>

            {/* Price */}
            <div className="flex items-center gap-4"> 
            <label for="vol">Price ₹ (between 100 and 999):</label>
            <input type="range" id="vol" name="vol" min="0" max="50"/>
            </div>
            </form>    
        </div>
    )
}