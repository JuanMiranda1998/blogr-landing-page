import React from 'react'
import Navbar from './Navbar'



const Header = () => {
  return (
    <div className='w-full bg-gradient-to-tl md:bg-gradient-to-l from-[#ff4658] via-[#fa6860] to-[#ff9470] rounded-bl-[6rem] overflow-hidden'>
        <div className='backgroundPattern pt-4 pb-32 px-4'>
            <Navbar />
            <div className='text-white text-center'>
                <h1 className='text-[2rem] lg:text-5xl font-medium mt-16 mb-4 px-4'>A modern publishing platform</h1>
                <p className='text-lg font-light mb-12'>Grow your audience and build your online brand</p>
                <div className='flex flex-row items-center justify-center gap-2 my-5'>
                    <button className=' bg-white border-transparent text-[#d6525d] rounded-full pt-3 pb-2 px-5 font-base font-semibold hover:bg-[#ff7b86] hover:text-white hover:cursor-pointer transition-all ease-in 200ms'>Start for Free</button>
                    <button className=' rounded-full border border-white pt-3 pb-2 px-5 font-bold hover:bg-white hover:text-[#ff7b86] hover:cursor-pointer transition-all ease-in 200ms'>Learn More</button>
                </div>
            </div>
        </div>
        <style>
          {`.backgroundPattern{
              background-image: url(/images/bg-pattern-intro-mobile.svg);
              background-size: 365%;
              background-position: 35% 34%;
          }
          @media (min-width: 768px){
            .backgroundPattern{
              background-image: url(/images/bg-pattern-intro-desktop.svg);
              background-size: 200%;
              background-position: 20% 50%;
          }
          }
          `}
        </style>
    </div>
  )
}

export default Header