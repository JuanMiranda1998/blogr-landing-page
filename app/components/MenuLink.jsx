import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const MenuLink = ({title, items}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  return (
    <div className='w-full flex flex-col justify-center items-center md:hidden'>
        <div className='flex flex-row items-center'>
          <button className={`flex flex-row justify-between gap-2 items-center ${!menuOpen?'text-[#223847]':'text-[#5f6774]'} text-base transition-colors ease-in 150ms`} onClick={()=>toggleMenu()}>
            {title}
            <div>
            <Image
              className={`${menuOpen?' transition-all ease-in 200ms rotate-180 -translate-y-[2px] ':''}`}
              src='/images/icon-arrow-dark.svg'
              alt=''
              width={10}
              height={2}
              />
          </div>
          </button>
          
        </div>
        <div className={`w-[80%] ${menuOpen?'py-4 mt-3':''} flex flex-col gap-3 rounded-md bg-[#efeff1]`}>
            {menuOpen&&items.map(item=><Link className='py-1 text-sm font-semibold text-[#4b5e70]' href='/' key={item}>{item}</Link>)}
        </div>         
    </div>
  )
}

export default MenuLink