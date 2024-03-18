import React from 'react'

function ProductCard({prd}) {
    
  return (
    <div className='w-1/4 font-roboto mt-5'>
      <div onClick={() => window.location = `detail/${prd.id}`} className=' h-[350px] cursor-pointer border-2 hover:border-orange-300 duration-200 shadow-lg space-y-2 rounded-lg m-2 flex flex-col items-center p-1'>
        <img src={prd.image} className='h-40 object-fit' alt="" />
        <div className='font-bold h-16 mt-2 p-2 text-center'>
            {(prd.title.substring(0, 40))}
        </div>
       
        <div className='font-bold text-xl'>
            {prd.price}$
        </div>
        <button className='bg-orange-400 w-full text-white p-2 rounded-lg'>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
