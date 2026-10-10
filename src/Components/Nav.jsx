import React from 'react'
import { MdFastfood } from "react-icons/md"; 
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";




function Nav() {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8 '>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl '>

        <MdFastfood className='w-[30px] h-[30px] text-green-500 ' />

      </div>

      <form className='w-[55%] h-[60%] bg-white flex items-center px-5 gap-5 rounded-md shadow-md '>
        <FaSearch className=' text-green-500 h-[20px] w-[20px]  ' />
        <input type="text" placeholder='Search Items..' className='w-[100%] outline-none text-[20px]' />
      </form>
  
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative '>
        <span className='absolute top-0 right-2 text-green-500 font-bold text-18px ' >0</span>
        <MdOutlineShoppingCart className='w-[30px] h-[30px] text-green-500  ' />

         
      </div>
    </div>
  )
}

export default Nav 