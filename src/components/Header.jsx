import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { searchAction } from '../redux/action/search';
import { Link } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();
    const {cardItems} = useSelector(state => state.card)
    const [search, setSearch] = useState('')

   

    const searchPost = (e) => {
        if(e.key === 'Enter'){
            dispatch(searchAction(search))
        }
    }

    return (
        <div className='font-roboto shadow'>
            <div className='md:container flex'>
                <Link to="/" className='font-bold text-3xl mt-6'>trendie</Link>
                
                <div className='invisible md:visible w-full text-md'>
                    <FaSearch className='absolute mt-8 text-orange-400 ml-20 ' />
                    <input value={search} onKeyPress={searchPost} onChange={e => setSearch(e.target.value)} type="text" className='w-8/12 h-10 mt-5 ml-16 bg-gray-100 outline-none border-0 shadow pl-10' placeholder='Search any product...' />
                </div>
                <div className='flex items-center justify-center'>  
                <div className=' md:visible flex whitespace-nowrap mt-4 font-semibold space-x-2 md:space-x-8'>
                    <Link to="/login" className='text-md flex hover:text-orange-400 duration-200 cursor-pointer'> 
                        <FaRegUser className='md:absolute -ml-20 md:-ml-0 mt-4 mr-1 md:mr-8 hover:text-orange-400 duration-200' />
                        <p className='md:ml-6 mt-3 hover:text-orange-400 duration-200'>Login</p>
                    </Link>
                    <div className='invisible md:visible text-md flex hover:text-orange-400 duration-200 cursor-pointer'> 
                        <MdFavoriteBorder  className='mt-3.5 mr-2 text-xl hover:text-orange-400 duration-200'/>
                        <p className='hover:text-orange-400  mt-3 duration-200'>Favorites</p>
                    </div>
                    <div onClick={() => dispatch({type: `DRAWER`, payload: true})} className='text-md flex hover:text-orange-400 duration-200 cursor-pointer'> 
                        <FiShoppingCart  className='mt-3 mr-2 -ml-20 md:-ml-0 text-2xl hover:text-orange-400 duration-200' />
                        <span className='absolute mt-1 px-2 bg-red-600 -ml-16 md:-ml-0  text-white rounded-full text-sm'>{cardItems?.length}</span>
                        <p className='hover:text-orange-400 duration-200  mt-3'>Cart</p>
                    </div>
                </div>
                </div>
                
            </div>


            <div className='bg-orange-400 '>
            <div className='container'>
                <ul className='flex  font-semibold list-none ml-8 md:ml-40 mt-4 pb-2 pt-3 space-x-2 md:space-x-12'>
                    <li className='cursor-pointer text-white text-xs md:text-lg hover:text-gray-200 duration-200'>Woman</li>
                    <li className='cursor-pointer text-white text-xs md:text-lg hover:text-gray-200 duration-200'>Man</li>
                    <li className='cursor-pointer text-white text-xs md:text-lg hover:text-gray-200 duration-200'>Technologies</li>
                    <li className='cursor-pointer text-white text-xs md:text-lg hover:text-gray-200 duration-200'>Supermarket</li>
                    <li className='cursor-pointer text-white text-xs md:text-lg hover:text-gray-200 duration-200'>Deals</li>
                    <li className='cursor-pointer text-white text-xs md:text-lg hover:text-gray-200 duration-200'>Services</li>
                    <li className='invisible md:visible cursor-pointer text-white text-xs md:text-lg hover:text-gray-200 duration-200'>Blog</li>
                    <li className='invisible md:visible cursor-pointer text-white text-xs md:text-lg hover:text-gray-200 duration-200'>Contact</li>
                    <li className='invisible md:visible cursor-pointer text-white text-xs md:text-lg hover:text-gray-200 duration-200'>About</li>
                </ul>
            </div>
            </div>
            
        </div>
    )
}

export default Header
