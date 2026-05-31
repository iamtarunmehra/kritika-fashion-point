"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import { gold } from '../colors/color';
import Image from 'next/image';
import GetNow from '../common/GetNow';
import Overlay from '../common/Overlay';
import { DecorativeLine } from '../common/DecorativeLine';
import BuyNowButton from '../common/BuyNowButton';
import AddToCartButton from '../common/AddToCartButton';
import ProductCard from '../categories/[slug]/ProductCard';
import { get_api } from '../api_helper/api_helper';


export default function CategoryWiseSections({ item, index, loading, setLoading }) {

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
        <section className="w-full bg-black overflow-hidden relative">
            {getNowModel && <Overlay />}
            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} />

            <div className='flex justify-center relative z-40'>
                <span style={{
                    fontFamily: 'Poppins',
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
                    )`}} className='font-bold rounded-full text-black lg:text-2xl md:text-xl text-lg lg:py-2 py-1.5 lg:px-16 md:px-12 px-10 lg:my-10 my-5 capitalize'>{item.category_name}
                    <div
                        className="
                                    absolute
                                    top-1/2
                                    left-1/2
                                    -translate-x-1/2
                                    w-screen
                                    h-[0.5]
                                    -z-10
                                "
                        style={{
                            background: `
                                        linear-gradient(
                                            90deg,
                                            transparent 0%,
                                            rgba(245,223,139,0.15) 20%,
                                            rgba(245,223,139,1) 50%,
                                            rgba(245,223,139,0.15) 80%,
                                            transparent 100%
                                        )
                                    `
                        }}
                    >

                    </div>
                </span>
            </div>




            <div className='max-w-330 mx-auto lg:px-6 px-4 '>

                <div className='lg:mb-5 mb-5'>
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
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {item?.products?.map((product, index) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard
                                    item={{
                                        ...product,
                                        index_image: product.images?.index_image,
                                        gallery_images: product.images?.gallery_images || []
                                    }}
                                    index={index}
                                    getNowModel={getNowModel}
                                    setGetNowModel={setGetNowModel}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}