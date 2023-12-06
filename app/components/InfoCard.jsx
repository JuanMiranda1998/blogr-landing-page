import Image from 'next/image'
import React from 'react'


const InfoCard = () => {
  return (
    <div className='card w-full lg:max-h-[450px] flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-10 mt-32 bg-[#333449] bg-[url(/images/bg-pattern-circles.svg)] bg-cover bg-no-repeat rounded-tr-[5rem] rounded-bl-[5rem] pt-6 pb-32 lg:pb-2' >
      <div className='flex items-center justify-center'>
        <Image
        className='lg:hidden -mt-48'
        src='/images/illustration-phones.svg'
        alt='phones illustration'
        width={400}
        height={400}
        />
        <Image
        className='hidden lg:block -mb-5'
        src='/images/illustration-phones.svg'
        alt='phones illustration'
        width={600}
        height={600}
        />
      </div>
      <section className='mt-4 lg:mt-0 px-6 lg:px-0 lg:max-w-xl text-white text-center lg:text-left'>
        <h1 className='text-4xl lg:text-[2.5rem] mb-6 font-bold leading-normal'>State of the Art Infrastructure</h1>
        <p className='text-lg font-normal leading-normal'>
          With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
          This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        </p>
      </section>
      <style>
        {`.card{
                background-position: -8rem -17rem;
            }
            @media (min-width: 1024px){
              .card{
                background-size: 90%;
                background-position: -25rem -45rem;
            }
            }
        `}
      </style>
    </div>
  )
}


export default InfoCard