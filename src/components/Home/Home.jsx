import React from 'react'
import Benner from '../../assets/image/Benner.jpg'
import { BrowserRouter, Link } from 'react-router-dom'
const Home = () => {
  return (
      <div className='w-full h-[700px] md:h-[630px] lg:px-24 relative'>
          <img className='w-full h-full object-cover' src={Benner} alt="" />
          <div className='lg:w-[50%] h-30 absolute bottom-0 left-[30%] lg:left-[50%] translate-y-[-30%] md:translate-y-[-20%] lg:translate-y-[-10%] translate-x-[-20%] md:translate-x-[0%] lg:translate-x-[-50%]'>
               <div className='w-full flex justify-center gap-4 items-center h-full'>
                    <Link to={"/product/men"} className='px-3 md:px-8 lg:px-10 py-2 border-3 font-bold shadow-md
                     hover:shadow-black/50 hover:shadow-xl transition-transform hover:-translate-y-2
                     shadow-white text-white duration-500 ease-in-out'
                  >SHOP MEN</Link> 
                    <Link to={"/product/women"} className='px-3 md:px-8 lg:px-10 py-2 border-3 font-bold shadow-md
                     hover:shadow-black/50 hover:shadow-xl transition-transform hover:-translate-y-2
                     shadow-white text-white duration-500 ease-in-out'
                  >SHOP WOMEN</Link> 
               </div>
          </div>
      </div>
  )
}

export default Home