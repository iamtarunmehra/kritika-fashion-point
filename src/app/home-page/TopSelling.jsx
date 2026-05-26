"use client"
import React, { useState } from 'react'
import { gold } from '../colors/color'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { useRef } from 'react'
import Link from 'next/link';
import Overlay from '../common/Overlay';
import GetNow from '../common/GetNow';
import { DecorativeLine } from '../common/DecorativeLine';
import BuyNowButton from '../common/BuyNowButton';
import AddToCartButton from '../common/AddToCartButton';

export default function TopSelling() {
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

    const addToCart = (e) => {

        e.preventDefault()
        e.stopPropagation()
        // if (token) {
        //     add to cart api
        // }
        // else {
        //     redirect login page
        // }
    }


    return (
        <section style={{ background: 'black' }} className="w-screen overflow-x-hidden  pb-5 relative ">

            {getNowModel && <Overlay />}

            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} />
            {/* <div className="absolute lg:w-[500] w-full bottom-0 left-0">
                <Image src={'/designs/d1.png'} sizes="full" alt="designs" fill className="absolute opacity-[0.05] bottom-0 right-0 w-full h-full object-cover object-bottom" />
            </div> */}


            {/* <div style={{ background: gold.base }} className='w-[300] lg:block hidden mx-auto h-[1.5] rounded-full absolute top-full left-0'></div>
            <div style={{ background: gold.base }} className='w-[300] lg:block hidden mx-auto h-[1.5] rounded-full absolute top-full right-0'></div> */}

            <div style={{
                borderImage: `linear-gradient(
                    to right,
                    transparent,
                    ${gold.dark}55,
                    transparent
                ) 1`
            }} className="max-w-330 mx-auto lg:px-6 px-4">

                <h1 className="relative flex flex-col items-center justify-center">

                    {/* Main Heading */}
                    <span
                        className="relative z-10 lg:text-4xl text-3xl font-extrabold tracking-wide inline-block bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                `linear-gradient(90deg,${gold.dark},${gold.base},${gold.dark})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            display: "inline-block",
                            fontFamily: "serif",
                        }}
                    >
                        Top Selling Products
                    </span>

                    <DecorativeLine />
                </h1>

                <div className='lg:p-0 p-3'>
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
                                <Link key={index} href={`/categories/${item.title}`}>
                                    <div
                                        style={{ borderColor: gold.dark }}
                                        className="bg-white border lg:my-7 my-0 cursor-pointer rounded-xl shadow-md hover:shadow-xl transition group h-auto flex flex-col justify-between overflow-hidden relative">

                                        {/* DISCOUNT BUTTON */}
                                        <button style={{ background: 'linear-gradient(135deg, #ff3b3b, #8b0000)' }} className='absolute top-0 right-0 py-1  z-50 px-5 rounded-l-lg text-white'>Discount -35%</button>

                                        <div className='p-5 bg-black'>
                                            <div className='h-[200] relative'>
                                                <Image src={item.image} alt={item.title} fill sizes='full' className='w-full h-full object-cover duration-300 hover:scale-[1.05] rounded-2xl hover:rounded-none' />
                                            </div>
                                        </div>

                                        <div style={{ borderTopColor: gold.dark }} className='border-t p-5 bg-black '>
                                            <h2 className="text-xl text-[#E6C766] font-extrabold mb-3 relative mt-3 duration-300">{item.title}

                                                <div style={{ background: gold.base }} className='absolute top-[105%] left-0 w-[20] h-[3] group-hover:w-[70] duration-500 rounded-full transition-all'></div>
                                            </h2>
                                            <p className="text-lg text-white mb-2 line-clamp-1">{item.description}</p>
                                            <p style={{ color: gold.base }} className="text-2xl font-extrabold ">Price - ₹ {item.price}</p>
                                        </div>

                                        <div className='grid grid-cols-2 gap-3 px-5 pb-5 bg-black'>
                                            <AddToCartButton />
                                            <BuyNowButton getNowModel={getNowModel} setGetNowModel={setGetNowModel} />
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}


