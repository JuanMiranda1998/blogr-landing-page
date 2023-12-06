"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'

const NAVLINKS = [
    {
        title: 'Product',
        items: [
            'Overview',
            'Pricing',
            'Marketplace',
            'Features',
            'Integrations'
        ]
    },
    {
        title: 'Company',
        items: [
            'About',
            'Team',
            'Blog',
            'Careers'
        ]
    },
    {
        title: 'Connect',
        items: [
            'Contact',
            'Newsletter',
            'LinkedIn'
        ]
    }
]


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  return (
    <div className='flex flex-row py-10 px-4 md:px-16 justify-between items-center relative'>
        <Image 
        src='/images/logo.svg'
        alt=''
        width={80}
        height={50}
        />
        <ul className='hidden md:flex flex-row grow gap-8 lg:gap-16 justify-start ml-2 lg:ml-10 px-8 text-white'>
            {NAVLINKS.map(link=><li key={link.title}><NavLink title={link.title} items={link.items} /></li>)}
        </ul>
        <button className='md:hidden h-10' onClick={()=>toggleMobileMenu()}>
            {!mobileMenuOpen?(<Image 
            src='/images/icon-hamburger.svg'
            alt=''
            width={35}
            height={35}
            />):
            (<Image 
                src='/images/icon-close.svg'
                alt=''
                width={30}
                height={30}
            />)}
        </button>
        {mobileMenuOpen&&<MenuOverlay links={NAVLINKS} />}
        <div className='hidden md:flex flex-row '>
            <button className='pt-3 pb-2 px-5 lg:px-10 rounded-full text-white font-semibold'>Login</button>
            <button className='rounded-full bg-white text-[#ff535b] font-semibold pt-3 pb-2 px-5 lg:px-10 hover:bg-[#ff7b86] hover:text-white hover:cursor-pointer transition-all ease-in 150ms'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar