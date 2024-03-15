import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';

function Card() {
    const dispatch = useDispatch()
  return (
    <div className='w-1/4 h-full border fixed top-0 right-0 z-50 bg-white duration-200 p-3 font-roboto'>
        <div className='flex items-center justify-between h-20'>
            <h1>
            Cart
            </h1>
            <IoMdClose onClick={() => dispatch({type: `DRAWER`, payload: false})} size={25} className='cursor-pointer'/>
        </div>
      

    </div>
  )
}

export default Card
