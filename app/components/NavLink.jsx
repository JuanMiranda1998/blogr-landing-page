"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const NavLink = ({title, items}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  return (
    <div className='hidden md:block relative'>
        <div>
          <button className='flex flex-row items-center hover:cursor-pointer hover:underline decoration-2' onClick={()=>toggleMenu()}>
            {title}
            <div className='ml-2'>
              <Image
                className={`${menuOpen?' transition-all ease-in 150ms rotate-180':''}`}
                src='/images/icon-arrow-light.svg'
                alt=''
                width={12}
                height={3}
                />
            </div>
          </button>
          
        </div>
        <div className={`${menuOpen?'p-4 min-w-[8rem]':''} flex flex-col gap-2 rounded-md bg-[#efeff1] shadow-md absolute top-8 left-0`}>
            {menuOpen&&items.map(item=><Link className='py-1 text-sm font-medium text-[#3a3841] hover:font-bold hover:text-[#19181f]' href='/' key={item}>{item}</Link>)}
        </div>         
    </div>
  )
}

export default NavLink