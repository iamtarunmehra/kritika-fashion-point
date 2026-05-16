'use client'
import React from 'react'
import { gold } from '../colors/color'
import Image from 'next/image'

export default function AboutClient() {
    const data = [
        {
            title: 'Premium Quality',
            desc: 'Crafted with fine detailing, luxury finish, and long-lasting shine for every occasion.',
            src: '/banner/b1.jpg'
        },
        {
            title: 'High Contrast Items',
            desc: 'Elegant designs with rich color combinations that create a bold and royal appearance.',
            src: '/banner/b3.jpg'
        },
        {
            title: 'Trusted Products',
            desc: 'Thousands of happy customers trust our quality, authenticity, and premium craftsmanship.',
            src: '/banner/b4.jpg'
        },
    ]
    return (
        <section className='w-full h-full'>
            <div className='max-w-330 mx-auto lg:px-6 px-4'>

                {/* <div className='w-full lg:py-16 py-10 bg-black text-white overflow-hidden relative z-30'>
                    <h1
                        className='lg:text-4xl md:text-3xl text-2xl text-center font-semibold tracking-wide text-white leading-tight relative z-40'
                    >
                        ABOUT
                        <span style={{ color: gold.base }} className='ml-4'>
                            US
                        </span>

                    </h1>

                    <p className='my-5 text-justify text-lg tracking-wider'>
                        Kritika Fashion Point is a destination for women who love elegance, premium fashion, and timeless jewellery designs. Our collection is crafted to bring luxury and confidence into every look with a perfect blend of tradition and modern style.

                        We focus on premium quality, royal finishing, and carefully selected designs that make every occasion feel special. From statement jewellery to fashionable accessories, every product reflects beauty, trust, and sophistication.

                        With thousands of happy customers, our goal is to deliver not just products, but a premium shopping experience that feels luxurious from start to finish.
                        We focus on premium quality, royal finishing, and carefully selected designs that make every occasion feel special. From statement jewellery to fashionable accessories, every product reflects beauty, trust, and sophistication.

                        We focus on premium quality, royal finishing, and carefully selected designs that make every occasion feel special. From statement jewellery to fashionable accessories, every product reflects beauty, trust, and sophistication.

                    </p>

                    <div className='absolute -bottom-40 rotate-180 -right-3 z-30 w-[400] h-[500]'>
                        <Image alt='design' fill sizes='full' className='absolute top-0 left-0 opacity-20 w-full h-full object-contain object-center' src='/designs/d1.png' />
                    </div>
                </div> */}

                <div className='w-full lg:py-16 py-10 bg-black text-white overflow-hidden'>

                    <div
                        // style={{ borderColor: gold.base }}
                        className='max-w-330 mx-auto rounded-3xl relative bg-black'
                    >

                        {/* Top Glow */}
                        <div
                            style={{ background: gold.base }}
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 w-[300] h-[120] blur-3xl opacity-10'
                        ></div>

                        {/* Heading */}
                        <div className='relative z-10 mb-10'>



                            <h1
                                className='lg:text-5xl md:text-4xl text-3xl  text-center font-semibold tracking-wide text-white leading-tight'
                            >
                                About
                                <span style={{ color: gold.mid }} className='ml-4'>
                                    US
                                </span>
                            </h1>


                            <div className='flex  justify-center'>
                                <div
                                    style={{
                                        background: `linear-gradient(to right, ${gold.dark}, transparent)`
                                    }}
                                    className='w-52 h-[2] mt-5'
                                ></div>
                            </div>

                            {/* <div className='flex justify-center lg:my-10 my-5'>
                                <p
                                    style={{ color: gold.light }}
                                    className='uppercase tracking-[8px] text-xs mb-4 '
                                >
                                    Luxury • Elegance • Trust
                                </p>
                            </div> */}
                        </div>

                        {/* Main Layout */}
                        <div className='grid lg:grid-cols-2 gap-10 items-center relative z-10'>

                            {/* Left Content */}
                            <div>

                                <p className='text-gray-300 lg:text-lg text-base leading-9 tracking-wide'>

                                    Kritika Fashion Point is a destination for women who love
                                    elegance, premium fashion, and timeless jewellery designs.
                                    Our collection is crafted to bring luxury and confidence
                                    into every look with a perfect blend of tradition and
                                    modern style.

                                    <br /><br />

                                    We focus on premium quality, royal finishing, and carefully
                                    selected designs that make every occasion feel special.
                                    From statement jewellery to fashionable accessories,
                                    every product reflects beauty, trust, and sophistication.

                                    <br /><br />

                                    With thousands of happy customers, our goal is to deliver
                                    not just products, but a premium shopping experience that
                                    feels luxurious from start to finish.
                                </p>

                                {/* Features */}
                                <div className='grid grid-cols-2 gap-5 mt-10'>

                                    <div
                                        style={{
                                            borderColor: `${gold.base}60`,
                                            background: 'rgba(255,215,0,0.03)'
                                        }}
                                        className='border rounded-2xl p-5'
                                    >
                                        <h2
                                            style={{ color: gold.base }}
                                            className='text-2xl font-bold mb-2'
                                        >
                                            60k+
                                        </h2>

                                        <p className='text-gray-400 tracking-wide'>
                                            Instagram Family
                                        </p>
                                    </div>

                                    <div
                                        style={{
                                            borderColor: `${gold.base}60`,
                                            background: 'rgba(255,215,0,0.03)'
                                        }}
                                        className='border rounded-2xl p-5'
                                    >
                                        <h2
                                            style={{ color: gold.base }}
                                            className='text-2xl font-bold mb-2'
                                        >
                                            Premium
                                        </h2>

                                        <p className='text-gray-400 tracking-wide'>
                                            Luxury Collection
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Right Side Premium Card */}
                            <div
                                style={{
                                    background: `linear-gradient(135deg, #0a0a0a, ${gold.dark})`,
                                    borderColor: `${gold.base}80`
                                }}
                                className='border rounded-3xl hover:mb-3 duration-300 lg:p-10 p-6 relative overflow-hidden'
                            >

                                {/* Inner Glow */}
                                <div
                                    style={{ background: gold.base }}
                                    className='absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20'
                                ></div>

                                <h2
                                    style={{ color: gold.light }}
                                    className='text-3xl font-semibold mb-6 tracking-wide'
                                >
                                    Why Choose Us
                                </h2>

                                <div className='space-y-6'>

                                    <div className='flex gap-4 items-start'>
                                        <div
                                            style={{ background: gold.base }}
                                            className='w-3 h-3 rounded-full mt-2'
                                        ></div>

                                        <div>
                                            <h3 className='text-white text-xl mb-1 font-medium'>
                                                Premium Quality
                                            </h3>

                                            <p className='text-gray-400 leading-7'>
                                                Finest quality products with elegant and luxurious finishing.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex gap-4 items-start'>
                                        <div
                                            style={{ background: gold.base }}
                                            className='w-3 h-3 rounded-full mt-2'
                                        ></div>

                                        <div>
                                            <h3 className='text-white text-xl mb-1 font-medium'>
                                                Trusted Fashion Store
                                            </h3>

                                            <p className='text-gray-400 leading-7'>
                                                Trusted by customers for authenticity and premium service.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex gap-4 items-start'>
                                        <div
                                            style={{ background: gold.base }}
                                            className='w-3 h-3 rounded-full mt-2'
                                        ></div>

                                        <div>
                                            <h3 className='text-white text-xl mb-1 font-medium'>
                                                Royal Designs
                                            </h3>

                                            <p className='text-gray-400 leading-7'>
                                                Unique and elegant styles crafted for every special occasion.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='w-full h-full lg:my-10 my-5'>
                    <h1
                        className='lg:text-5xl md:text-4xl text-3xl  text-center font-semibold tracking-wide text-white leading-tight '
                    >
                        Our
                        <span style={{ color: gold.mid }} className='ml-4'>
                            Facilities
                        </span>
                    </h1>
                    <div className='flex justify-center mb-10'>
                        <div
                            style={{
                                background: `linear-gradient(to right, ${gold.dark}, transparent)`
                            }}
                            className='w-52 h-[2] mt-5'
                        ></div>
                    </div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5'>
                        {data.map((item, index) => {
                            return (
                                <div style={{ borderColor: gold.dark }} key={index} className='p-7 border rounded-lg hover:scale-105 duration-300'>
                                    <h2 style={{ color: gold.base }} className='text-2xl font-semibold tracking-wide pb-3'>{item.title}</h2>
                                    <p className='text-white mb-3'>{item.desc}</p>
                                    <div className='relative w-full h-[320] '>
                                        <Image alt='desiimages' src={item.src} fill sizes='full' className='w-full rounded-md h-full object-cover object-top absolute top-0 left-0' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>



            </div>


        </section>
    )
}
