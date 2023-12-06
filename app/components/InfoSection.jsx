import Image from 'next/image'
import React from 'react'


const InfoSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:gap-6 my-10 md:my-32'>
      <div className='flex items-center justify-center md:-ml-72'>
        <Image
        className='min-w-[135%] lg:hidden'
        src='/images/illustration-laptop-mobile.svg'
        alt='laptop picture'
        width={800}
        height={800}
        />
        <Image
        className='hidden lg:block lg:-ml-40'
        src='/images/illustration-laptop-desktop.svg'
        alt='laptop picture'
        width={1000}
        height={1000}
        />
      </div>
      <div className=' max-w-[600px] text-center lg:text-left mt-10 mb-10 md:mt-20 px-2'>
        <section className='mb-12 md:mb-16'>
          <h2 className='text-3xl font-semibold text-[#233e57] mb-6'>Free, open, simple</h2>
          <p className='text-lg text-[#808281] font-normal px-3 md:px-0 md:pr-4'>Blogr is a free and open source application backed by a large community of helpful developers. It supports
          features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
          and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
        </section>
        <section className='mb-10'>
          <h2 className='text-3xl font-semibold text-[#233e57] mb-6'>Powerful tooling</h2>
          <p className='text-lg text-[#808281] font-normal px-2 md:px-0 md:pr-4'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites.</p>
        </section>
      </div>
    </div>
  )
}

export default InfoSection