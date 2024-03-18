import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import productsActions from '../redux/action/products'
import ProductCard from '../components/ProductCard'

function Home() {
  const dispatch = useDispatch()
  const {products} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(productsActions())
  }, [dispatch])


  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <div className='container'>
        <div className='flex flex-wrap mb-5 justify-center'>
          {products && products.map((prd, i) => (
              <ProductCard prd={prd} key={i}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Home
