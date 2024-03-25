import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productsActionsDetail } from '../redux/action/products'
import { productsCard } from '../redux/action/card'
import Header from '../components/Header'
import { MdFavoriteBorder } from 'react-icons/md'
import { FaShippingFast } from 'react-icons/fa'
import ProductCarousel from '../components/ProductCarousel'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Footer from '../components/Footer'

function Details() {

  const dispatch = useDispatch()
  const {id} = useParams()
  const {product} = useSelector(state => state.product)
  const [count, setCount] = useState(0)

  useEffect(() => {
    dispatch(productsActionsDetail(id))
  }, [dispatch])

  
  const increment = (stock) => {
    if(count <= stock){
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  const addCard = () => {
    dispatch(productsCard(id,count))
    dispatch({type:'DRAWER', payload: true})
  }
 return (
  <div className='font-roboto'>
    <Header />
    <div className='container'>
      {product ? (
        <>
          <div className='flex items-center'>
              <img src={product.image} className='border-2 p-4 hover:border-orange-400 duration-200 shadow-lg mt-14' alt={product.title} style={{ maxWidth: '300px' }} />
              <div className='ml-10'>
                <h1 className='m-14 text-2xl font-semibold text-center'>{product.title}</h1>
                <div className='ml-14 flex items-center -mt-10 font-bold'>
                  <h1 className='text-sm p-1 mt-1 mr-1'></h1>
                  
                  <p className='text-xs mt-0.5 ml-1 text-gray-800  opacity-80 hover:text-orange-400 duration-200 cursor-pointer'>Rate:  {product?.rating?.rate} </p>
                  {Array.from({ length: Math.floor(product?.rating?.rate) }, (_, index) => (
                    <span key={index} className="text-xs ml-1 text-orange-400">⭐</span>
                  ))}
                  <div className='flex cursor-pointer hover:text-orange-400 duration-200'>
                    <MdFavoriteBorder className='ml-8 text-gray-800 hover:text-orange-400 duration-200 opacity-80 border-orange-400 rounded-full border-' size={20} />
                    <p className='ml-2 pt-0.5 text-gray-800  opacity-80 hover:text-orange-400 duration-200  text-xs'>Add to favorites</p>
                  </div>
              </div>
              <div className='flex justify-between'>
                <h1 className='ml-14 mt-8 text-3xl font-bold text-orange-300'>{product.price}$</h1>
                <div className='flex mt-10 items-center space-x-4'>
                  <FaMinus onClick={decrement} size={30} className='cursor-pointer border rounded-full shadow p-1'></FaMinus>
                  <span className='text-2xl'>{count}</span>
                  <FaPlus onClick={() => increment(product?.rating?.count)} size={30} className='cursor-pointer border rounded-full shadow p-1'></FaPlus>
                </div>
                
              </div>
              <hr className=' ml-4 mt-8' />
              <div className='flex'>
                <button onClick={addCard} className='ml-14 mt-8 shadow-md w-10/12 h-11 font-bold bg-orange-400 border border-orange-400 text-white px-8 rounded-lg hover:bg-orange-300 hover-text-orange-400 transition duration-200' >Add to cart</button>
                <MdFavoriteBorder  className='ml-4 shadow-sm mt-7 text-orange-400 border-orange-400 rounded-full text-2xl hover:text-orange-600 duration-200 cursor-pointer' size={50}  />
              </div>
             <div>

             </div>
              </div>

              <div className='pl-32 mt-20'>
                <div className='flex w-56 shadow-xs bg-green-100 pt-1 h-8 text-xs rounded-md'>
                  <FaShippingFast className='ml-2 mr-3 mt-1 text-green-500' size={20} />
                  <p className='mt-1'>Free shipping and returns</p>

                  
                </div>
                <div className='flex w-56 shadow-xs bg-green-100 mt-2 pt-1 h-8 text-xs rounded-md'>
                  <FaShippingFast className='ml-2 mr-3 mt-1 text-green-500' size={20} />
                  <p className='mt-1'>Fast and secure shipping</p>
                </div>
                <div className='w-56 p-3 border-2 mt-6 shadow-md mt-2 pt-1 h-44 text-xs rounded-xl'>
                    <div className='w-36 h-28'>
                      <div className='flex p-2'>
                        <h1 className='hover:underline text-sm text-blue-400 cursor-pointer'>YB Product</h1>
                        <h1 className='bg-green-500 text-white ml-2 h-4 w-8 mt-0.5 text-center rounded-md cursor-pointer font-bold'>4.4</h1>
                      </div>
                      <p className='ml-2 text-xs'>118 followers</p>
                      <div className='flex h-9 pt-2 cursor-pointer bg-gray-100 shadow-md hover:shadow-lg duration-200 p-1 text-center mt-2 rounded-md'>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/3vjia-icon-line/follow-42.png" className='w-5 cursor-pointer h-5 ml-2' alt="" />
                        <p className='ml-2 mt-0.5 text-xs'>Follow the seller</p>
                      </div>
                      <div className='flex h-9 pt-2 cursor-pointer bg-gray-100 shadow-md hover:shadow-lg duration-200 p-1 text-center mt-3 rounded-md'>
                        <img src="https://static-00.iconduck.com/assets.00/message-icon-512x463-tqzmxrt7.png" className='w-5 cursor-pointer h-5 ml-2' alt="" />
                        <p className='ml-2 mt-0.5 text-xs'>Ask a question</p>
                      </div>

                    </div>
                </div>
              </div>
                  
          </div>
          <div className='p-10'>
                <h1 className='text-2xl font-bold text-center p-3'>Description</h1>
                <p className='text-center'>{product.description}</p>
                
              </div>
        </>
      ) : (
        <p className='text-center mt-20'>Yükleniyor...</p>
      )}
    </div>
    <ProductCarousel />
    <Footer/>
  </div>
)
}

export default Details
