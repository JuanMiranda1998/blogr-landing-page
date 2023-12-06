import React from 'react'
import MenuLink from './MenuLink'


const MenuOverlay = ({ links }) => {
  return (
    <div className='flex flex-col items-center w-[90%] gap-6 py-8 bg-white text-[#1f3f5b] absolute top-28 rounded-md text-center text-xl font-semibold md:hidden'>
      {links.map(link=><MenuLink key={link.title} title={link.title} items={link.items} />)}
      <span className='w-[85%] h-[2px] bg-[#e5e5e5]'></span>
      <div className='flex flex-col gap-2'>
          <button className='py-3 px-10 rounded-full'>Login</button>
          <button className='rounded-full bg-gradient-to-r from-[#ff866d] to-[#f74454] text-white py-3 px-10'>Sign Up</button>
      </div>
    </div>
  )
}

export default MenuOverlay