import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";
import { removeCart } from '../redux/action/card';

function Card() {
    const dispatch = useDispatch()
    const {cardItems} = useSelector(state => state.card)
    const deleteCard = (id) => {
        dispatch(removeCart(id))
    }
  return (
    <div className='w-4/12 h-full border fixed top-0 right-0 z-50 bg-white duration-200 p-3 font-roboto'>
        <div className='flex items-center justify-between h-20'>
            <h1 className='font-bold text-2xl'>
            Cart
            </h1>
            <IoMdClose onClick={() => dispatch({type: `DRAWER`, payload: false})} size={25} className='cursor-pointer'/>
        </div>

        {
          cardItems?.map((card,i)=> {
            return (
              <div className='flex items-center justify-between pl-3 border-b border-orange-400 pr-3 h-28 py-4 mt-3' key={i}>
                <img className='h-24 w-24' src={card.image} alt="" />
                <h1 className='text-center text-sm'>{(card.title.substring(0,20))}</h1>
                <h1 className='whitespace-nowrap'>{card.price} $</h1>
                <MdDeleteForever onClick={() => deleteCard(card.id)} className='text-red-500 cursor-pointer' size={30} />

              </div>
            )
          })
        }
      

    </div>
  )
}

export default Card
