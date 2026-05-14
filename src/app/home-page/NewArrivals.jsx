"use client"
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import { gold } from '../colors/color';
import Image from 'next/image';
import GetNow from '../common/GetNow';
import Overlay from '../common/Overlay';


export default function NewArrivals() {

    const swiperRef = useRef(null)
    const top_selling_data = [
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 2,
            title: 'Gold Plated Jhumka',
            price: '799',
            description: 'Traditional jhumka with antique gold finish',
            image: '/p1.jpg',
            category: 'Earrings',
        },
        {
            id: 3,
            title: 'Polki Choker Set',
            price: '2,499',
            description: 'Premium polki choker perfect for wedding functions',
            image: '/p1.jpg',
            category: 'Choker',
        },
        {
            id: 4,
            title: 'Temple Jewellery Necklace',
            price: '3,299',
            description: 'South Indian temple design necklace with detailed carvings',
            image: '/p1.jpg',
            category: 'Temple Jewellery',
        },
        {
            id: 5,
            title: 'Oxidised Silver Necklace',
            price: '1,299',
            description: 'Trendy oxidised necklace for casual & ethnic wear',
            image: '/p1.jpg',
            category: 'Oxidised',
        },
        {
            id: 6,
            title: 'Bangles Set (Pack of 4)',
            price: '999',
            description: 'Stylish bangles set with golden polish',
            image: '/p1.jpg',
            category: 'Bangles',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
    ];

    const [getNowModel, setGetNowModel] = useState(false)

    return (
        <section className="w-full bg-black lg:mt-10 mt-10 overflow-hidden relative">
            {getNowModel && <Overlay/>}

            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} />

            <div className='flex justify-center relative z-40 lg:mt-12 mt-30'>
                <span style={{
                    background: `
                    linear-gradient(
                        to left,
                        #8a6a12 0%,
                        #b8860b 20%,
                        #d4af37 40%,
                        #fff2b3 50%,
                        #d4af37 60%,
                        #b8860b 80%,
                        #8a6a12 100%
                    )`}} className='font-semibold rounded-md bg-black lg:text-3xl md:text-2xl text-lg py-1.5 lg:px-20 md:px-10 px-5 lg:my-10 my-5'>New Arrivals
                    <div style={{ background: gold.base }} className='absolute top-1/2 left-0 w-screen h-px -z-10'></div>
                </span>
            </div>
            <div className='max-w-330 mx-auto lg:px-6 px-4 '>

                <div className='lg:mb-5 mb-16 lg:p-0 p-3'>
                    <Swiper
                        modules={[Autoplay]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {top_selling_data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link href={`/categories/${item.title}`}>
                                    <div
                                        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                                        onMouseLeave={() => swiperRef.current?.autoplay.start()}
                                        style={{ borderColor: gold.base }}
                                        className="bg-white border-2  cursor-pointer rounded-xl shadow-md hover:shadow-xl transition group h-auto flex flex-col justify-between overflow-hidden">

                                        <div className='p-5 bg-black'>
                                            <div className='h-[200] relative'>
                                                <Image src={item.image} alt={item.title} fill sizes='full' className='w-full h-full object-cover duration-300 hover:scale-[1.05] rounded-2xl hover:rounded-none' />
                                            </div>
                                        </div>

                                        <div style={{ borderTopColor: gold.base }} className='border-t-2 p-5 bg-black '>
                                            <h2 className="text-xl text-[#E6C766] font-extrabold mb-3 relative mt-3 duration-300">{item.title}

                                                <div style={{ background: gold.base }} className='absolute top-[105%] left-0 w-[20] h-[3] group-hover:w-[70] duration-500 rounded-full transition-all'></div>
                                            </h2>
                                            <p className="text-lg text-white mb-2 line-clamp-1">{item.description}</p>
                                            <p style={{ color: gold.base }} className="text-2xl font-extrabold ">Price - ₹{item.price}</p>
                                        </div>

                                        <div className='grid grid-cols-2 gap-3 px-5 pb-5 bg-black'>
                                            <button onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                            }}
                                                className='hover:scale-105 rounded py-1 cursor-pointer bg-white duration-300'>Add to Cart</button>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setGetNowModel(true)
                                                    e.stopPropagation()
                                                }}
                                                className="relative px-6 py-2 text-black font-bold rounded-md cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                                                style={{
                                                    background: `linear-gradient(
                                                        to left,
                                                        #8a6a12 0%,
                                                        #b8860b 20%,
                                                        #d4af37 40%,
                                                        #fff2b3 50%,
                                                        #d4af37 60%,
                                                        #b8860b 80%,
                                                        #8a6a12 100%
                                                    )`
                                                }}
                                            >
                                                <span className="relative z-10">Get Now</span>

                                                {/* Shine Effect */}
                                                <span
                                                    className="absolute top-0 left-full w-full h-full"
                                                    style={{
                                                        background: 'linear-gradient(120deg, transparent, #FFFFFF99, transparent)',
                                                        transition: 'all 1s'
                                                    }}
                                                ></span>
                                            </button>
                                        </div>
                                    </div></Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}