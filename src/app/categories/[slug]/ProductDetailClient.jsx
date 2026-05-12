"use client"

import Image from "next/image";
import React from "react";
import {
    Heart,
    ShoppingCart,
    Star,
    Truck,
    ShieldCheck,
    RotateCcw,
    Minus,
    Plus
} from "lucide-react";
import { gold } from "@/app/colors/color";
import Link from "next/link";

export default function ProductDetailClient() {

    return (
        <section
            className="w-full min-h-screen bg-black text-white"
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-lg text-white mb-8">
                    <Link href={'/'} className="hover:text-[#FFF2B3] cursor-pointer"><span>Home</span></Link>
                    <span>/</span>
                    <Link href={'/categories'}><span className="hover:text-[#FFF2B3] cursor-pointer">Category</span></Link>
                    <span>/</span>
                    <span style={{ color: gold.light }}>
                        Polki Choker Set
                    </span>
                </div>

                {/* Main Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    {/* LEFT IMAGES */}
                    <div className="w-full">

                        {/* Main Image */}
                        <div
                            className="relative overflow-hidden rounded-3xl border-2 p-3"
                            style={{ borderColor: gold.base }}
                        >
                            <Image
                                src="/p2.webp"
                                alt="product"
                                width={800}
                                height={800}
                                className="w-full lg:h-[500] h-full object-cover rounded-2xl"
                            />

                            <button
                                className="cursor-pointer  absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center border hover:scale-110 border-[#FFF2B3]  duration-200"
                                style={{
                                    background:
                                        "rgba(0,0,0,0.7)",
                                }}
                            >
                                <Heart
                                    size={22}
                                />
                            </button>
                        </div>

                        {/* Thumbnail Images */}
                        <div className="grid md:grid-cols-4  grid-cols-2 gap-4 lg:mt-8 mt-5">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="border-2 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 duration-300"
                                    style={{
                                        borderColor: gold.base,
                                    }}
                                >
                                    <Image
                                        src="/p2.webp"
                                        alt="thumb"
                                        width={200}
                                        height={200}
                                        className="w-full md:h-28 h-44 object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT DETAILS */}
                    <div className="flex flex-col justify-start">

                        {/* Badge */}
                        <div
                            className="w-fit px-5 py-2 rounded-full text-sm font-semibold mb-4"
                            style={{
                                background:
                                    "linear-gradient(to right,#8B6B00,#F7E7A1,#8B6B00)",
                                color: "#000",
                            }}
                        >
                            Premium Collection
                        </div>

                        {/* Title */}
                        <h1
                            className="text-3xl lg:text-5xl font-bold leading-tight"
                            style={{ color: gold.light }}
                        >
                            Polki Choker Necklace Set
                        </h1>


                        {/* Price */}
                        <div className="flex items-center gap-4 mt-6">
                            <h2
                                className="text-4xl font-bold"
                                style={{ color: gold.light }}
                            >
                                ₹2,499
                            </h2>

                            <span className="line-through text-gray-500 text-xl">
                                ₹3,999
                            </span>

                            <span
                                className="px-3 py-1 rounded-full text-sm font-semibold"
                                style={{
                                    backgroundColor: "#1a1a1a",
                                    color: gold.light,
                                    border: `1px solid ${gold.base}`,
                                }}
                            >
                                38% OFF
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-8 mt-6 text-lg">
                            Elegant handcrafted Polki Choker Set designed
                            with premium stones and luxury gold plating.
                            Perfect for weddings, festive occasions,
                            parties, and royal traditional looks.
                        </p>

                        {/* Quantity */}
                        <div className="mt-8">
                            <h3
                                className="text-lg font-semibold mb-4"
                                style={{ color: gold.light }}
                            >
                                Quantity
                            </h3>

                            <div
                                className="flex items-center w-fit border rounded-xl overflow-hidden"
                                style={{
                                    borderColor: gold.base,
                                }}
                            >
                                <button className="w-14 h-14 flex items-center justify-center hover:bg-[#111] duration-300">
                                    <Minus />
                                </button>

                                <div className="w-16 text-center text-xl font-semibold">
                                    1
                                </div>

                                <button className="w-14 h-14 flex items-center justify-center hover:bg-[#111] duration-300">
                                    <Plus />
                                </button>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-row gap-5 mt-10">

                            {/* Add to Cart */}
                            <button
                                className="py-2.5 flex-1 rounded-xl font-semibold text-lg border-2 hover:scale-[1.02] duration-300 flex items-center justify-center gap-3"
                                style={{
                                    borderColor: gold.base,
                                    color: gold.light,
                                }}
                            >
                                <ShoppingCart size={22} />
                                Add To Cart
                            </button>

                            {/* Buy Now */}
                            <button
                                className="py-2.5 flex-1 rounded-xl font-bold text-lg hover:scale-[1.02] duration-300"
                                style={{
                                    background:
                                        "linear-gradient(to right,#8B6B00,#F7E7A1,#B8860B)",
                                    color: "#000",
                                }}
                            >
                                Buy Now
                            </button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

                            <div
                                className="border rounded-2xl p-5 flex flex-col items-center text-center"
                                style={{ borderColor: gold.base }}
                            >
                                <Truck
                                    size={35}
                                    style={{ color: gold.light }}
                                />
                                <h4
                                    className="mt-3 font-semibold"
                                    style={{ color: gold.light }}
                                >
                                    Free Delivery
                                </h4>
                            </div>

                            <div
                                className="border rounded-2xl p-5 flex flex-col items-center text-center"
                                style={{ borderColor: gold.base }}
                            >
                                <ShieldCheck
                                    size={35}
                                    style={{ color: gold.light }}
                                />
                                <h4
                                    className="mt-3 font-semibold"
                                    style={{ color: gold.light }}
                                >
                                    Premium Quality
                                </h4>
                            </div>

                            <div
                                className="border rounded-2xl p-5 flex flex-col items-center text-center"
                                style={{ borderColor: gold.base }}
                            >
                                <RotateCcw
                                    size={35}
                                    style={{ color: gold.light }}
                                />
                                <h4
                                    className="mt-3 font-semibold"
                                    style={{ color: gold.light }}
                                >
                                    Advance Booking
                                </h4>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 lg:gap-10 gap-0 grid-cols-1">
                    {/* Product Description */}
                    <div
                        className="mt-20 border rounded-3xl p-8"
                        style={{ borderColor: `${gold.base}` }}
                    >
                        <h2
                            className="text-3xl font-bold mb-6"
                            style={{ color: gold.base }}
                        >
                            Product Details
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 bg-black backdrop-blur-2xl gap-3 text-[17px] text-gray-300 leading-8">

                            <div>
                                <p>
                                    • Category : Artificial Jewellery
                                </p>

                                <p>
                                    • Type : Polki Choker Set
                                </p>

                                <p>
                                    • Material : Premium Alloy
                                </p>

                                <p>
                                    • Finish : Gold Plated
                                </p>

                                <p>
                                    • Occasion : Wedding / Party / Festive
                                </p>
                            </div>

                            <div>


                                <p>
                                    • Package Includes : Necklace + Earrings
                                </p>

                                <p>
                                    • Dispatch Time : 2-3 Working Days
                                </p>

                                <p>
                                    • Cash On Delivery Available
                                </p>
                            </div>

                        </div>
                    </div>

                    {/*Note*/}
                    <div
                        className="mt-20 rounded-3xl p-[1]"
                        style={{
                            background:
                                "linear-gradient(135deg, #8A6A01, #F7E7A1, #8A6A01)",
                        }}
                    >
                        <div className="w-full h-full rounded-3xl p-8">

                            <h2
                                className="lg:text-3xl text-2xl font-bold mb-6"
                                style={{ color: "#000" }}
                            >
                                Read Before Use
                            </h2>

                            <div className="text-black leading-8 text-[17px]">

                                <p>
                                    • Keep the jewellery away from water, perfume, and
                                    chemicals to maintain its shine and finish.
                                </p>

                                <p>
                                    • Store the product in an airtight box or soft pouch
                                    after use to avoid scratches and tarnishing.
                                </p>

                                <p>
                                    • This jewellery is crafted for fashion and occasional
                                    wear, not for daily rough usage.
                                </p>

                                <p>
                                    • Cash On Delivery Available
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}