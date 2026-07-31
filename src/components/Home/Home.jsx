import React from 'react'
import Benner from '../../assets/image/Benner.jpg'
import { BrowserRouter, Link } from 'react-router-dom'
const Home = () => {
  return (
      <div className='w-full h-[700px] md:h-[630px] lg:px-24 relative'>
          <img className='w-full h-full object-cover' src={Benner} alt="Banner" />
          <div className='absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 w-full max-w-lg px-4'>
               <div className='flex flex-col md:flex-row justify-center gap-4 w-full'>
                    <Link to={"/product/men"} className='w-full md:w-auto text-center px-4 md:px-8 lg:px-10 py-3 md:py-2 border-3 font-bold shadow-md
                     hover:shadow-black/50 hover:shadow-xl transition-transform hover:-translate-y-2
                     shadow-white text-white duration-500 ease-in-out'
                  >SHOP MEN</Link> 
                    <Link to={"/product/women"} className='w-full md:w-auto text-center px-4 md:px-8 lg:px-10 py-3 md:py-2 border-3 font-bold shadow-md
                     hover:shadow-black/50 hover:shadow-xl transition-transform hover:-translate-y-2
                     shadow-white text-white duration-500 ease-in-out'
                  >SHOP WOMEN</Link> 
               </div>
          </div>
      </div>
  )
}

export default Home