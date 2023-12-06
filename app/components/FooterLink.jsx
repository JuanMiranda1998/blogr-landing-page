import Link from 'next/link'
import React from 'react'

const FooterLink = ({ title }) => {
  return (
    <li className='text-lg text-[#ccccd4] mb-1 hover:underline'>
        <Link href="/">{title}</Link>
    </li>
  )
}

export default FooterLink