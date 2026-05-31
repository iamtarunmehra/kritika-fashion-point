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
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCategoryLoading } from '../redux/slices/categorySlice';
import { setProductLoading, setProducts } from '../redux/slices/productSlice';
import ProductCardSkeleton from '../categories/[slug]/ProductSkelaton';


export default function NewArrivals() {


    //get products and categories
    const { categories, category_loading } = useSelector(
        (state) => state.categories
    );
    const { products, products_loading } = useSelector(
        (state) => state.products
    );

    const new_arrivals = products.slice(0, 10)
    // console.log('check', products, new_arrivals)


    const swiperRef = useRef(null)

    const [getNowModel, setGetNowModel] = useState(false)

    return (
        <section className="w-full bg-black lg:mt-28 md:mt-40 mt-48 overflow-hidden relative">
            {getNowModel && <Overlay />}
            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} />

            {/* Heading */}
            <h1 className="relative flex flex-col items-center justify-center lg:mb-14 mb-8">

                {/* Main Heading */}
                <span
                    className="relative z-10 lg:text-4xl text-3xl border-x-[4] rounded-tr-full  rounded-bl-full rounded-md lg:px-16 md:px-10 px-10 py-2 font-extrabold tracking-wide inline-block bg-clip-text text-transparent"
                    style={{
                        borderColor: gold.dark,
                        backgroundImage:
                            `linear-gradient(90deg,${gold.dark},${gold.base},${gold.dark})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                        fontFamily: "serif",
                    }}
                >
                    New Arrivals
                </span>

                {/* Glow Effect
                               <div
                                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 w-72 h-16 rounded-full"
                                   style={{
                                       background: "linear-gradient(90deg, #d4af37, #fff2b3, #d4af37)"
                                   }}
                               /> */}

                {/* Decorative Line */}
                {/* <DecorativeLine /> */}
            </h1>




            <div className='max-w-330 mx-auto lg:px-6 px-4 '>

                <div>
                    {products_loading ? (

                        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-x-5 gap-y-8'>
                            {[...Array(10)].map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </div>

                    ) : new_arrivals.length === 0 ? (

                        <NoNewArrFound title={'No Top Selling Products Yet'} />

                    ) : (

                        <Swiper
                            modules={[Autoplay]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            spaceBetween={20}
                            slidesPerView={4}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                640: { slidesPerView: 3 },
                                1024: { slidesPerView: 5 },
                            }}
                        >
                            {new_arrivals.map((item, index) => (
                                <SwiperSlide key={item.product_id || index}>
                                    <ProductCard
                                        item={item}
                                        index={index}
                                        getNowModel={getNowModel}
                                        setGetNowModel={setGetNowModel}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
    )
}

export function NoNewArrFound({ title }) {
    return (
        <div
            className='
        w-full
        flex
        items-center
        justify-center
    '
        >
            <div
                className='
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[#5c4308]
            bg-black
            px-10
            py-5
            text-center
            max-w-4xl
            w-full
            shadow-2xl
        '
            >

                {/* GLOW EFFECT */}
                <div
                    className='
                absolute
                top-[-100]
                left-1/2
                -translate-x-1/2
                w-[300]
                h-[300]
                rounded-full
                blur-3xl
                opacity-20
            '
                    style={{
                        background:
                            "linear-gradient(135deg,#d4af37,#fff2b3)"
                    }}
                />

                {/* ICON */}
                <div
                    className='
                relative
                z-10
                w-20
                h-20
                mx-auto
                rounded-full
                flex
                items-center
                justify-center
                text-4xl
                mb-6
            '
                    style={{
                        background: `
                    linear-gradient(
                        135deg,
                        #8a6a12,
                        #d4af37,
                        #fff2b3
                    )
                `,
                        color: "#000"
                    }}
                >
                    ✦
                </div>

                {/* TITLE */}
                <h2
                    className='
                relative
                z-10
                text-3xl
                font-extrabold
                mb-4
                tracking-wide
            '
                    style={{
                        color: "#E6C766"
                    }}
                >
                    {title ? title : 'No Products Found'}
                </h2>

                {/* DESCRIPTION */}
                <p
                    className='
                relative
                z-10
                text-gray-400
                text-lg
                leading-relaxed
                max-w-xl
                mx-auto
            '
                >
                    Fresh luxury collections are on the way.
                    Stay tuned for our latest premium arrivals and
                    exclusive designs.
                </p>

                {/* DECORATIVE LINE */}
                <div
                    className='
                relative
                z-10
                w-40
                h-[2]
                mx-auto
                mt-8
                rounded-full
            '
                    style={{
                        background: `
                    linear-gradient(
                        to right,
                        transparent,
                        #d4af37,
                        transparent
                    )
                `
                    }}
                />
            </div>
        </div>
    )
} 