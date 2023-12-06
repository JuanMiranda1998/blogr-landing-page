import Image from 'next/image'
import React from 'react'


const MainSection = () => {
  return (
    <div className='mt-24 py-6 text-center'>
        <h1 className='text-3xl lg:text-4xl font-semibold text-[#233e57] lg:-mb-12'>Designed for the future</h1>
        <div className='flex flex-col lg:flex-row-reverse justify-center items-center gap-4 my-10 lg:my-0'>
            <div className='overflow-hidden lg:-mr-96'>
                <Image
                className='drop-shadow-xl lg:hidden'
                src='/images/illustration-editor-mobile.svg'
                alt='editor illustration'
                width={800}
                height={200}
                />
                <Image
                className='drop-shadow-xl hidden lg:block lg:ml-24'
                src='/images/illustration-editor-desktop.svg'
                alt='editor illustration'
                width={800}
                height={800}
                />
            </div>
            <div className='flex flex-col gap-4 md:text-left md:max-w-[600px] lg:pl-6'>
                <section className='mt-8 mb-6 px-3'>
                    <h2 className='text-3xl text-[#233e57] font-semibold mb-6 px-1'>Introducing an extensible editor</h2>
                    <p className='text-lg text-[#808281] font-light px-1'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                    change the looks of a blog.
                    </p>
                </section>
                <section className='mb-6 px-3'>
                    <h2 className='text-3xl text-[#233e57] font-semibold mb-6'>Robust content management</h2>
                    <p className='text-lg text-[#808281] font-light px-1'>
                        Flexible content management enables users to easily move through posts. Increase the usability of your blog
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                    </p>
                </section>
            </div>
        </div>

    </div>
  )
}

export default MainSection