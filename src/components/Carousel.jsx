import React from 'react'

const brands = [
  {
        id: 1,
        name: 'Adidas',
        image: 'https://turbologo.com/articles/wp-content/uploads/2019/07/Three-Bars-adidas-logo-1.jpg.webp',
        },
    {
        id: 2,
        name: 'Nike',
        image: 'https://seeklogo.com/images/N/nike-logo-47A65A59D5-seeklogo.com.png',
    },
    {
        id: 3,
        name: 'Puma',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puma-Logo.png/1200px-Puma-Logo.png',
    },
    {
        id: 4,
        name: 'Samsung',
        image: 'https://www.hatchwise.com/wp-content/uploads/2022/10/Samsung-Logo-2005-present-1024x576.jpeg',
    },
    {
        id: 5,
        name: 'Zara',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/800px-Zara_Logo.svg.png'
    },
    {
        id: 6,
        name: 'H&M',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'
    },
    {
        id:7,
        name: 'Apple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
    },
    {
        id:8,
        name: 'Asus',
        image: 'https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png'
    },
    {
      id:9,
      name: 'Xiaomi',
      image:'https://logolook.net/wp-content/uploads/2022/10/Xiaomi-Logo.png'
    }
    
]
function Carousel() {
  return (
    <div className='md:container font-roboto'>
      <div className='flex flex-wrap md:flex-nowrap gap-3 space-x-7 md:space-x-10 space-y-6 md:space-y-0 mt-6 '>
        {brands.map((brand , index) => (
          <div className='h-20 w-20 hover:border-orange-400 hover:text-orange-400 ml-6 mt-6 md:mt-0 md:ml-0'  key={index}>
            <div className='border-2 hover:border-orange-400 duration-200 rounded-full object-scale-down overflow-hidden cursor-pointer hover:shadow-xl'>
              <img src={brand.image} alt={brand.name} className='h-20 w-30 object-scale-down p-2 items-center justify-center mx-auto' />
            </div>
            <p className='text-center mt-1 hover:text-orange-400 duration-200 font-semibold'>{brand.name}</p>
          </div>
        ))}

      </div>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 ml-6 md:ml-0 space-x-4 mt-20'>
          <div className='ml-4 w-80 md:w-4/12 h-12 cursor-pointer hover:shadow-lg duration-200 rounded-xl shadow bg-green-100'>
            <p className='text-center text-green-400  font-bold mt-2 text-2xl'>The Latest in Fashion</p>
          </div>
          <div className='ml-2 w-80 mr-2 md:w-4/12 h-12 rounded-xl  cursor-pointer hover:shadow-lg duration-200 shadow bg-orange-100'>
            <p className='text-center text-orange-400  font-bold mt-2 text-2xl'>The Most Added the Cart</p>
          </div>
          <div className='ml-2 w-80 pr-4 md:w-4/12 h-12 rounded-xl cursor-pointer hover:shadow-lg duration-200 shadow bg-pink-100'>
            <p className='text-center text-pink-500  font-bold mt-2 text-2xl'>Products on Sale</p>
          </div>
      </div>
    </div>
  )
}

export default Carousel
