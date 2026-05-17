'use client'
import React, { useState } from 'react'
import { gold } from '../colors/color'
import Link from 'next/link'
import Image from 'next/image';
import Overlay from '../common/Overlay';
import GetNow from '../common/GetNow';
import { FaSortAmountUp } from 'react-icons/fa';
import AddToCartButton from '../common/AddToCartButton';

export default function ShopNowClient() {

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
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
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
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },

        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
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

    const [filterModelOpen, setFilterModelOpen] = useState(false)

    return (
        <section className='w-full h-full bg-black text-white'>


            <FilterModel filterModelOpen={filterModelOpen} setFilterModelOpen={setFilterModelOpen} />
            {getNowModel && <Overlay />}
            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} />
            <div className='max-w-330 mx-auto lg:px-6 px-4'>
                <div className='lg:my-10 my-5'>
                    <div className='flex gap-5 justify-between items-center'>
                        <div>
                            <h1
                                className='lg:text-5xl md:text-4xl text-3xl  text-center font-semibold tracking-wide text-white leading-tight'
                            >
                                Our
                                <span style={{ color: gold.mid }} className='ml-2'>
                                    Collection
                                </span>
                            </h1>

                            <div
                                style={{
                                    background: `linear-gradient(to right, ${gold.dark}, transparent)`
                                }}
                                className='w-52 h-[2] mt-2'
                            >

                            </div>
                        </div>

                        <button
                            onClick={() => setFilterModelOpen(true)}
                            // style={{
                            //     borderColor: "rgba(212,175,55,0.25)",
                            //     background:
                            //         `linear-gradient(to bottom, ${gold.dark},${'black'}`
                            // }}
                            style={{
                                background: `linear-gradient(
                                    135deg,
                                    #4d3900 0%,
                                    #7a5a08 18%,
                                    #b8860b 38%,
                                    #d4af37 50%,
                                    #e8cf6a 58%,
                                    #c9971a 72%,
                                    #7a5a08 88%,
                                    #4d3900 100%
                                )`
                            }}
                            className='flex text-black  hover:scale-[1.05] duration-100 ease-in-out items-center sm:px-10 px-2 py-1.5 rounded-md cursor-pointer gap-2 text-lg'>
                            <span className='sm:block hidden font-extrabold'>Filter
                            </span>
                            <FaSortAmountUp />

                        </button>
                    </div>


                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3 lg:my-10 my-5'>
                        {top_selling_data.map((item, index) => {
                            return (
                                <Link key={index} href={`/categories/${item.title}`}>
                                    <div
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
                                            <p style={{ color: gold.base }} className="text-2xl font-extrabold ">Price - ₹ {item.price}</p>
                                        </div>

                                        <div className='grid grid-cols-2 gap-3 px-5 pb-5 bg-black'>
                                            <AddToCartButton />
                                            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export function FilterModel({ filterModelOpen, setFilterModelOpen }) {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setFilterModelOpen(false)}
                className={`
                    fixed inset-0 bg-black backdrop-blur-sm z-120
                    duration-300
                    ${filterModelOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"}
                `}
            />

            {/* Modal */}
            <div
                className={`
                    fixed top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    z-130
                    duration-300
                    w-[95%] max-w-[500]
                    rounded-3xl overflow-hidden
                    border
                    ${filterModelOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90 pointer-events-none"}
                `}
                style={{
                    borderColor: "#b8860b",
                    background: `
                        linear-gradient(
                            145deg,
                            #050505 0%,
                            #111111 35%,
                            #1a1405 100%
                        )
                    `,
                    boxShadow: "0 0 40px rgba(212,175,55,0.15)"
                }}
            >

                {/* Header */}
                <div
                    className="flex items-center justify-between px-6 py-5 border-b"
                    style={{
                        borderColor: "rgba(212,175,55,0.15)"
                    }}
                >
                    <div>
                        <h2 className="text-2xl font-bold text-[#E6C766] tracking-wide">
                            Filter Collection
                        </h2>

                        <p className="text-sm text-gray-400 mt-1">
                            Find your perfect jewellery style
                        </p>
                    </div>

                    <button
                        onClick={() => setFilterModelOpen(false)}
                        className="w-10 h-10 rounded-full bg-[#1a1a1a] text-[#E6C766] hover:rotate-90 duration-300 cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">

                    {/* Category */}
                    <div>
                        <h3 className="text-[#E6C766] font-semibold mb-3 tracking-wide">
                            Category
                        </h3>

                        <div
                            className="
                                    flex flex-wrap gap-3
                                    lg:h-[150]
                                    h-[120]
                                    overflow-y-auto
                                    pr-3
                                    custom-scrollbar
                                "
                        >                            {
                                [
                                    "Necklace",
                                    "Jhumka",
                                    "Choker",
                                    "Bangles",
                                    "Temple",
                                    "Bridal",

                                    "Kundan",
                                    "Polki",
                                    "Oxidised",
                                    "Anklet",
                                    "Bracelet",
                                    "Pendant",
                                    "Chain",
                                    "Ring",
                                    "Nose Ring",
                                    "Maang Tikka",
                                    "Passa",
                                    "Matha Patti",
                                    "Earcuff",
                                    "Stud Earrings",
                                    "Hoop Earrings",
                                    "Pearl Set",
                                    "American Diamond",
                                    "Minimal Jewellery",
                                    "Cocktail Ring",
                                    "Layered Necklace",
                                    "Hasli",
                                    "Traditional Set",
                                    "Rajwadi",
                                    "Meenakari",
                                    "Stone Work",
                                ]
                                    .map((item, index) => (
                                        <button
                                            key={index}
                                            className="
                                        px-4 py-2
                                        rounded-full
                                        border
                                        border-[#7a5a08]
                                        text-sm
                                        text-[#E6C766]
                                        hover:bg-[#b8860b]
                                        hover:text-black
                                        duration-300
                                        cursor-pointer
                                    "
                                        >
                                            {item}
                                        </button>
                                    ))}
                        </div>
                    </div>

                    {/* Price */}
                    <div>
                        <h3 className="text-[#E6C766] font-semibold mb-3 tracking-wide">
                            Price Range
                        </h3>

                        <div className="relative">
                            <select
                                className="
                                w-full
                                appearance-none
                                bg-[#0f0f0f]
                                border
                                border-[#7a5a08]
                                text-[#E6C766]
                                px-5
                                py-3
                                rounded-xl
                                outline-none
                                cursor-pointer
                                tracking-wide
                                focus:border-[#d4af37]
                                focus:shadow-[0_0_20px_rgba(212,175,55,0.15)]
                                duration-300
                            "
                            >
                                <option className="bg-black text-white">
                                    Select Price Range
                                </option>

                                <option className="bg-black text-white">
                                    ₹0 - ₹499
                                </option>

                                <option className="bg-black text-white">
                                    ₹499 - ₹999
                                </option>

                                <option className="bg-black text-white">
                                    ₹999 - ₹1499
                                </option>

                                <option className="bg-black text-white">
                                    ₹1499 - ₹1999
                                </option>

                                <option className="bg-black text-white">
                                    ₹1999 Above
                                </option>
                            </select>

                            {/* Custom Arrow */}
                            <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-[#E6C766] text-sm">
                                ▼
                            </div>
                        </div>
                    </div>

                    {/* combo and single */}
                    {/* Item Type */}
                    <div>
                        <h3 className="text-[#E6C766] font-semibold mb-3 tracking-wide">
                            Item Type
                        </h3>

                        <div className="grid grid-cols-2 gap-4">

                            {/* Single */}
                            <label
                                className="
                                    relative
                                    flex items-center justify-center gap-3
                                    border border-[#7a5a08]
                                    bg-[#0f0f0f]
                                    rounded-xl
                                    py-3 px-4
                                    cursor-pointer
                                    hover:border-[#d4af37]
                                    hover:bg-[#151515]
                                    duration-300
                                    group
                                "
                            >
                                <input
                                    type="radio"
                                    name="item-type"
                                    className="hidden peer"
                                />

                                {/* Custom Radio */}
                                <div
                                    className="
                            w-5 h-5 rounded-full
                            border-2 border-[#b8860b]
                            flex items-center justify-center
                            bg-[#111]
                            peer-checked:bg-[#6b4f00]
                            peer-checked:border-[#d4af37]
                            duration-300
                        "
                                >
                                    <div
                                        className="
                                w-2.5 h-2.5 rounded-full
                                bg-[#f5d76e]
                                scale-0
                                peer-checked:scale-100
                                duration-300
                            "
                                    />
                                </div>
                                <span className="text-[#E6C766] tracking-wide font-medium">
                                    Single
                                </span>
                            </label>

                            {/* Combo */}
                            <label
                                className="
                                    relative
                                    flex items-center justify-center gap-3
                                    border border-[#7a5a08]
                                    bg-[#0f0f0f]
                                    rounded-xl
                                    py-3 px-4
                                    cursor-pointer
                                    hover:border-[#d4af37]
                                    hover:bg-[#151515]
                                    duration-300
                                "
                            >
                                <input
                                    type="radio"
                                    name="item-type"
                                    className="hidden peer"
                                />

                                {/* Custom Radio */}
                                <div
                                    className="
                            w-5 h-5 rounded-full
                            border-2 border-[#b8860b]
                            flex items-center justify-center
                            bg-[#111]
                            peer-checked:bg-[#6b4f00]
                            peer-checked:border-[#d4af37]
                            duration-300
                        "
                                >
                                    <div
                                        className="
                                w-2.5 h-2.5 rounded-full
                                bg-[#f5d76e]
                                scale-0
                                peer-checked:scale-100
                                duration-300
                            "
                                    />
                                </div>

                                <span className="text-[#E6C766] tracking-wide font-medium">
                                    Combo
                                </span>
                            </label>

                        </div>
                    </div>


                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-4 pt-3">

                        <button
                            className="
                                py-3 rounded-xl
                                bg-[#111]
                                border border-[#333]
                                text-white
                                hover:border-[#b8860b]
                                duration-300
                                cursor-pointer
                            "
                        >
                            Reset
                        </button>

                        <button
                            style={{
                                background: `linear-gradient(
                                    135deg,
                                    #4d3900 0%,
                                    #7a5a08 18%,
                                    #b8860b 38%,
                                    #d4af37 50%,
                                    #e8cf6a 58%,
                                    #c9971a 72%,
                                    #7a5a08 88%,
                                    #4d3900 100%
                                )`
                            }}
                            className="
                                py-3 rounded-xl
                                text-black
                                font-bold
                                hover:scale-[1.03]
                                duration-300
                                cursor-pointer
                            "
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}