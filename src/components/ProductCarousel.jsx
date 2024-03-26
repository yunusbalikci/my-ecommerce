import React, { useEffect } from 'react'
import {productsActions} from '../redux/action/products'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function ProductCarousel({prd}) {
  const dispatch = useDispatch()
  const {products} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(productsActions())
  }, [dispatch])

  return (
    <div className='font-roboto mt-12 items-center justify-center mx-auto'>
            <h1 className='text-center text-4xl bg-orange-400 p-2 text-white'>Sale Products</h1>

      <div  className='md:flex mx-center mt-10  items-center justify-center ml-10 md:ml-0 md:space-x-16'>
      {products
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(product => (
          <Link onClick={() => window.location = `detail/${prd.id}`} key={product.id} to={`/detail/${product.id}`}  className="flex flex-col  cursor-pointer shadow-md hover:border-orange-400 duration-200 m-4 p-4 border h-72 w-72">
            <p className=" font-bold text-center font-roboto">{(product.title).substring(0, 20)}</p>
            <img src={product.image} alt={product.title} className="h-28 w-28 mt-5 items-center justify-center mx-auto owerflow-hidden mb-4" />
            <button className='bg-orange-400 border h-10 mt-5 border-orange-400 text-white p-2 mb-2 px-8 mx-auto rounded-lg hover:bg-orange-300 hover-text-orange-400 transition duration-200'>Details</button>
          </Link>
        ))}
      </div>
     

    </div>
  )
}

export default ProductCarousel
