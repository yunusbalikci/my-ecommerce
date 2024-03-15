import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import productsActions from '../redux/action/products'

function Home() {
  const dispatch = useDispatch()
  const {products} = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(productsActions())
  }, [dispatch])
  console.log(products)
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
    </div>
  )
}

export default Home
