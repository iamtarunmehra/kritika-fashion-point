"use client"
import Image from "next/image";
import React from "react";
import { gold } from "../colors/color";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
        <section className="w-full h-full lg:py-16 py-6 bg-black overflow-hidden relative">

            <div className="absolute w-[800]  h-full bottom-0 right-0">
                <Image src={'/designs/d1.png'} alt="designs" fill className="absolute opacity-5 bottom-0 right-0 w-full h-full object-cover object-bottom" />
            </div>

            <div className="max-w-330 mx-auto lg:px-6 px-4">

                {/* Heading */}
                <h1 className="relative flex flex-col items-center justify-center lg:mb-14 mb-8">

                    {/* Main Heading */}
                    <span
                        className="relative z-10 lg:text-4xl text-3xl font-extrabold tracking-wide inline-block bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #7a5a0a 0%, #b8860b 25%, #d4af37 50%, #c9971a 75%, #8a6a12 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            display: "inline-block",
                            fontFamily: "serif",
                            textShadow: "0px 2px 10px rgba(212,175,55,0.22)"
                        }}
                    >
                        Shop By Category
                    </span>

                    {/* Glow Effect */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 w-72 h-16 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #d4af37, #fff2b3, #d4af37)"
                        }}
                    />

                    {/* Decorative Line */}
                    <div className="relative mt-5 w-full flex items-center justify-center">

                        {/* Left Line */}
                        <div
                            className="h-px lg:w-52 w-20"
                            style={{
                                background:
                                    "linear-gradient(to right, transparent, #d4af37)"
                            }}
                        />

                        {/* Diamond Center */}
                        <div
                            className="mx-4 w-3 h-3 rotate-45 rounded-sm"
                            style={{
                                background:
                                    "linear-gradient(135deg, #fff2b3, #d4af37, #8a6a12)",
                                boxShadow: "0 0 12px rgba(212,175,55,0.6)"
                            }}
                        />

                        {/* Right Line */}
                        <div
                            className="h-px lg:w-52 w-20"
                            style={{
                                background:
                                    "linear-gradient(to left, transparent, #d4af37)"
                            }}
                        />
                    </div>
                </h1>


                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    // onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={20}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >

                    {categories.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>

                                <div className="flex flex-col lg:py-5 py-0 items-center group cursor-pointer">

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
                                        w-[180]
                                        h-[180]
                                        rounded-full 
                                        overflow-hidden 
                                        border-2
                                        duration-500
                                        hover:scale-110
                                        hover:rotate-3
                                        shadow-[0_0_25px_rgba(212,175,55,0.15)]
                                        hover:shadow-[0_0_45px_rgba(212,175,55,0.55)]
                                    "
                                    >

                                        {/* Gold Glow Ring */}
                                        <div className="absolute inset-0 rounded-full border border-[#fff2b3]/30 z-20 scale-90 group-hover:scale-100 duration-500" />

                                        {/* Image */}
                                        <Image
                                            src={item.image}
                                            fill
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

                            </SwiperSlide>
                        );
                    })}
                </Swiper>

            </div>
        </section>
    );
}