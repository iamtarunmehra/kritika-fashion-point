"use client"
import Image from "next/image";
import React from "react";
import { gold } from "../colors/color";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { DecorativeLine } from "../common/DecorativeLine";


export default function ShopByCategory() {

    const categories = [
        { id: 1, title: "Kundan", image: "/p2.webp" },
        { id: 2, title: "Choker", image: "/p2.webp" },
        { id: 3, title: "Jhumka", image: "/p2.webp" },
        { id: 4, title: "Necklace", image: "/p2.webp" },
        { id: 5, title: "Bangles", image: "/p2.webp" },
        { id: 6, title: "Maang Tikka", image: "/p2.webp" },
        { id: 7, title: "Temple", image: "/p2.webp" },
        { id: 8, title: "Temple", image: "/p2.webp" },
        { id: 9, title: "Temple", image: "/p2.webp" },
        { id: 10, title: "Temple", image: "/p2.webp" },
        { id: 11, title: "Temple", image: "/p2.webp" },
        { id: 12, title: "Temple", image: "/p2.webp" },
        { id: 13, title: "Temple", image: "/p2.webp" },
        { id: 14, title: "Temple", image: "/p2.webp" },
    ];

    return (
        <section className="w-screen bg-black h-full lg:my-16 my-12 relative">

            {/* <div style={{background:gold.dark}} className="absolute top-0 left-1/2 -translate-1/2 w-[200] h-[5] rounded-full "></div> */}

            <div className="absolute lg:w-[500] md:w-full w-full h-[400]  -rotate-90 top-0 -right-30">
                <Image src={'/designs/d1.png'} sizes="full" alt="designs" fill className="absolute opacity-5 bottom-0 right-0 w-full h-full object-cover object-top" />
            </div>

            <div className="max-w-330 mx-auto lg:px-6 px-4">

                {/* Heading */}
                <h1 className="relative flex flex-col items-center justify-center lg:mb-14 mb-8">

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
                        Shop By Category
                    </span>

                    {/* Glow Effect
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 w-72 h-16 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #d4af37, #fff2b3, #d4af37)"
                        }}
                    /> */}

                    {/* Decorative Line */}
                    <DecorativeLine />
                </h1>


                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                >

                    {categories.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>

                                <Link href={'/categories'}>
                                    <div className="flex flex-col px-10 lg:py-5 py-0 items-center group cursor-pointer">

                                        {/* Image Circle */}
                                        <div
                                            style={{
                                                borderColor: gold.mid,
                                            }}
                                            className="
                                        relative 
                                        lg:w-[200] 
                                        lg:h-[200]
                                        sm:w-[180]
                                        sm:h-[180]
                                        w-[150]
                                        h-[150]
                                        rounded-full 
                                        overflow-hidden 
                                        border-2
                                        duration-500
                                        hover:scale-105
                                        hover:rotate-3
                                        shadow-[0_0_10px_rgba(212,175,55,0.15)]
                                        hover:shadow-[0_0_25px_rgba(212,175,55,0.55)]
                                    "
                                        >

                                            {/* Gold Glow Ring */}
                                            <div className="absolute inset-0 rounded-full border border-[#fff2b3]/30 z-20 scale-90 group-hover:scale-100 duration-500" />

                                            {/* Image */}
                                            <Image
                                                src={item.image}
                                                fill
                                                sizes="full"
                                                alt={item.title}
                                                className="
                                            object-cover
                                            object-center
                                            group-hover:scale-125
                                            duration-700
                                            w-full h-full
                                        "
                                            />

                                            {/* Overlay */}
                                            <div className="
                                        absolute 
                                        inset-0 
                                        bg-linear-to-t 
                                        from-black/70 
                                        via-black/10 
                                        to-transparent
                                        opacity-70
                                        group-hover:opacity-40
                                        duration-500
                                    " />

                                        </div>

                                        {/* Title */}
                                        <h2
                                            className="
                                        mt-5
                                        text-center
                                        tracking-[0.18em]
                                        uppercase
                                        text-sm
                                        sm:text-base
                                        font-semibold
                                        duration-300
                                        group-hover:scale-110
                                    "
                                            style={{
                                                color: gold.light,
                                                textShadow:
                                                    "0px 0px 12px rgba(212,175,55,0.4)",
                                            }}
                                        >
                                            {item.title}
                                        </h2>

                                        {/* Underline */}
                                        <div
                                            className="
                                        mt-2
                                        h-0.5
                                        w-0
                                        group-hover:w-16
                                        duration-500
                                        rounded-full
                                    "
                                            style={{
                                                background:
                                                    "linear-gradient(to right, #8a6a12, #d4af37, #fff2b3)",
                                            }}
                                        />
                                    </div>
                                </Link>

                            </SwiperSlide>
                        );
                    })}
                </Swiper>

            </div>
        </section>
    );
}