import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import {productsActions} from '../redux/action/products'
import ProductCard from '../components/ProductCard'
import {searchAction} from '../redux/action/search'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'


function Home() {
  const dispatch = useDispatch()
  const {products} = useSelector((state) => state.products)
  const {search} = useSelector(state => state.search)

  useEffect(() => {
    dispatch(productsActions())
    dispatch(searchAction())

  }, [dispatch])

   console.log(search)
  return (
    <motion.div className=''
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    >
      <Header></Header>
      <Carousel></Carousel>
      <div className='md:container'>
        <div className='flex flex-wrap mb-5 justify-center'>
          {
            search.length > 0 ? 
            search.map((prd, i) => (
              <ProductCard prd={prd} key={i}/>
            )) :
          products && products.map((prd, i) => (
              <ProductCard 
               prd={prd} key={i}/>
          ))
          }
        </div>
      </div>
      <Footer></Footer>
    </motion.div>
  )
}

export default Home
