import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterLink from './FooterLink'


const Footer = () => {
  return (
    <div className='w-full text-white bg-[#24242c] py-10 rounded-tr-[5rem]'>
      <div className='flex flex-col md:flex-row gap-10 text-center md:text-left items-center md:items-start justify-center md:justify-evenly py-6 mt-6'>
        <div className='mb-6'>
          <Image
          src='/images/logo.svg'
          alt=''
          width={100}
          height={100}
          />
        </div>
        <section>
          <h2 className='text-lg font-semibold mb-6'>Product</h2>
          <ul>
            <FooterLink title='Overview' />
            <FooterLink title='Pricing' />
            <FooterLink title='Marketplace' />
            <FooterLink title='Features' />
            <FooterLink title='Integrations' />
          </ul>
        </section>
        <section>
          <h2 className='text-lg font-semibold mb-6'>Company</h2>
          <ul>
            <FooterLink title='About' />
            <FooterLink title='Team' />
            <FooterLink title='Blog' />
            <FooterLink title='Careers' />
          </ul>
        </section>
        <section>
          <h2 className='text-lg font-semibold mb-6'>Connect</h2>
          <ul>
            <FooterLink title='Contact' />
            <FooterLink title='Newsletter' />
            <FooterLink title='LinkedIn' />
          </ul>
        </section>
      </div>    
    </div>
  )
}

export default Footer