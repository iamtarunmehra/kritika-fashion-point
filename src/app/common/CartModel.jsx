'use client'
import React, { useState } from 'react'
import { gold } from '../colors/color'
import { Heart, ShoppingBag, ShoppingBagIcon, ShoppingCart, Trash2, X } from 'lucide-react'
import Image from 'next/image'
import BuyNowButton from './BuyNowButton'
import AddToCartButton from './AddToCartButton'
import Link from 'next/link'
import GetNow from './GetNow'

export default function CartModel({ cartModelOpen, setCartModelOpen }) {

    const CartData = [
        {
            id: 1,
            title: 'Luxury Kundan Necklace',
            price: '4,999',
            image: '/p1.jpg'
        },
        {
            id: 2,
            title: 'Royal Bridal Choker',
            price: '2,499',
            image: '/p1.jpg'
        },
        {
            id: 3,
            title: 'Premium Gold Jhumka',
            price: '999',
            image: '/p1.jpg'
        },
    ]


    const totalAmount = CartData.reduce(
        (acc, item) => acc + Number(item.price.replace(/,/g, '')),
        0
    )

    const [getNowModel, setGetNowModel] = useState(false)

    return (
        <>

            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} />

            {/* Overlay */}
            <div
                onClick={() => setCartModelOpen(false)}
                className={`
                    fixed inset-0 z-105
                    bg-black/90 backdrop-blur-sm
                    duration-1000
                    top-0 left-0
                    ${cartModelOpen
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'}
                `}
            />

            {/* Model */}
            <div
                className={`
                    fixed top-0 right-0
                    lg:w-[25%] md:w-[40%] sm:w-[40%] w-[80%]
                    h-screen
                    z-110
                    duration-500
                    overflow-hidden
                    ${cartModelOpen
                        ? 'translate-x-0'
                        : 'translate-x-full'}
                  
                `}
                style={{
                    background: `
                        linear-gradient(
                            180deg,
                            #050505 0%,
                            #0b0b0b 35%,
                            #120d02 100%
                        )
                    `,
                    borderLeft: `1px solid ${gold.base}40`
                }}
            >

                {/* Glow */}
                <div
                    style={{ background: gold.base }}
                    className='absolute top-0 right-0 w-[250] h-[250] rounded-full blur-[120px] opacity-10'
                />

                {/* Header */}
                <div
                    style={{
                        borderBottom: `1px solid ${gold.base}25`
                    }}
                    className='flex items-center justify-between px-6 py-5 relative z-10'
                >

                    <div className='flex items-center gap-3'>

                        <div
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
                            className='w-12 h-12 rounded-full flex items-center justify-center '
                        >
                            <ShoppingCart className='text-black fill-black' size={22} />
                        </div>

                        <div>
                            <h2 className='text-2xl font-bold text-[#F5D97A] tracking-wide'>
                                Cart
                            </h2>

                            <p className='text-sm text-gray-400 tracking-wide'>
                                Your Premium Collection
                            </p>
                        </div>

                    </div>

                    <button
                        onClick={() => setCartModelOpen(false)}
                        className='
                            w-10 h-10
                            rounded-full
                            bg-white/5
                            border border-white/10
                            flex items-center justify-center
                            text-[#F5D97A]
                            hover:rotate-90
                            hover:bg-[#d4af37]
                            hover:text-black
                            duration-300
                            cursor-pointer
                        '
                    >
                        <X size={18} />
                    </button>

                </div>

                {/* Cart Items */}
                <div className='h-[calc(100vh-180px)] overflow-y-auto px-5 py-5 space-y-5 custom-scrollbar'>

                    {CartData.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                border: `1px solid ${gold.base}20`,
                                background: `
                                    linear-gradient(
                                        to bottom,
                                        rgba(255,255,255,0.03),
                                        rgba(255,255,255,0.01)
                                    )
                                `
                            }}
                            className='
                                rounded-3xl
                                p-4
                                backdrop-blur-xl
                                hover:-translate-y-1
                                duration-300
                                group
                                relative
                                overflow-hidden
                            '
                        >

                            {/* Shine */}
                            {/* <div
                                className='
                                    absolute top-0 -left-full
                                    w-full h-full
                                    group-hover:left-full
                                    duration-1000
                                '
                                style={{
                                    background:
                                        'linear-gradient(120deg, transparent, rgba(255,255,255,0.06), transparent)'
                                }}
                            /> */}

                            <div className='flex flex-col gap-4 relative z-10'>

                                {/* Image */}
                                <Link href={`/categories/${item.title}`}>
                                    <div
                                        onClick={() => {
                                            setCartModelOpen(false)
                                        }}
                                        style={{
                                            border: `1px solid ${gold.base}30`
                                        }}
                                        className='relative min-w-[110] h-[200] rounded-2xl overflow-hidden bg-black'
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes='full'
                                            className='sm:object-cover object-contain object-center hover:scale-105 duration-500'
                                        />
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className='flex-1 flex flex-col justify-between'>

                                    <div>


                                        <h3 className='text-[#F5D97A] hover:ml-3 duration-300 text-lg font-bold leading-7'>
                                            {item.title}
                                        </h3>
                                        <p className='text-gray-400 text-sm mt-2 leading-6'>
                                            Premium luxury artificial jewellery
                                            crafted for elegant occasions.
                                        </p>

                                    </div>

                                    <div className='flex items-center justify-between mt-4'>

                                        <h2
                                            style={{ color: gold.base }}
                                            className='text-2xl font-extrabold'
                                        >
                                            Price - ₹ {item.price}
                                        </h2>

                                        <button
                                            className='
                                                w-10 h-10
                                                rounded-full
                                                border border-red-500/20
                                                bg-red-500/10
                                                text-red-400
                                                hover:bg-red-500
                                                hover:text-white
                                                duration-300
                                                flex items-center justify-center
                                                cursor-pointer
                                            '
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                    </div>

                                </div>

                            </div>

                            {/* Buttons */}
                            <div className='grid grid-cols-2 gap-3 mt-5 relative z-10'>

                                <button className='w-full py-1 rounded-full bg-red-800 tracking-wider hover:scale-[1.03] duration-300 text-white cursor-pointer'>
                                    Remove
                                </button>

                                <BuyNowButton getNowModel={getNowModel} setGetNowModel={setGetNowModel} />

                            </div>

                        </div>
                    ))}

                    {/* TOTAL SECTION */}
                    <div className='px-5 pb-5'>

                        <div
                            style={{
                                border: `1px solid ${gold.base}20`,
                                background: `
                linear-gradient(
                    to bottom right,
                    rgba(255,255,255,0.03),
                    rgba(255,255,255,0.01)
                )
            `
                            }}
                            className='
            rounded-3xl
            p-5
            backdrop-blur-xl
        '
                        >

                            {/* Subtotal */}
                            <div className='flex items-center justify-between mb-4'>

                                <p className='text-gray-400 tracking-wide text-sm'>
                                    Sub Total
                                </p>

                                <h3
                                    style={{ color: gold.light }}
                                    className='text-xl font-bold'
                                >
                                    ₹ {totalAmount.toLocaleString()}
                                </h3>

                            </div>

                            {/* Delivery */}
                            <div className='flex items-center justify-between mb-4'>

                                <p className='text-gray-400 tracking-wide text-sm'>
                                    Delivery Charges
                                </p>

                                <h3 className='text-green-400 text-sm font-semibold'>
                                    Free
                                </h3>

                            </div>

                            {/* Divider */}
                            <div
                                className='w-full h-px my-4'
                                style={{
                                    background: `
                    linear-gradient(
                        to right,
                        transparent,
                        ${gold.base},
                        transparent
                    )
                `
                                }}
                            />

                            {/* Total */}
                            <div className='flex items-center justify-between'>

                                <div>
                                    <p className='text-gray-400 text-sm tracking-wide'>
                                        Total Amount
                                    </p>

                                    <h2
                                        style={{ color: gold.light }}
                                        className='text-3xl font-extrabold mt-1'
                                    >
                                        ₹ {totalAmount.toLocaleString()}
                                    </h2>
                                </div>

                                <div
                                    style={{
                                        background: `
                        linear-gradient(
                            135deg,
                            ${gold.dark},
                            ${gold.base},
                            ${gold.light}
                        )
                    `
                                    }}
                                    className='
                    w-14
                    h-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                '
                                >
                                    <ShoppingBagIcon
                                        size={24}
                                        className='text-black'
                                    />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>




                {/* Footer */}
                <div
                    style={{
                        borderTop: `1px solid ${gold.base}20`
                    }}
                    className='px-5 py-5 bg-black/40 backdrop-blur-xl'
                >

                    <Link href={'/cart'}>
                        <button
                            style={{
                                background: `linear-gradient(
                                135deg,
                                #4d3900 0%,
                                #7a5a08 18%,
                                #b8860b 38%,
                                #d4af37 50%,
                                #f5df8b 58%,
                                #c9971a 72%,
                                #7a5a08 88%,
                                #4d3900 100%
                            )`
                            }}
                            className='
                            w-full
                            py-3
                            rounded-full
                            text-black
                            font-bold
                            text-lg
                            tracking-wide
                            hover:scale-[1.01]
                            duration-300
                            cursor-pointer
                        '
                        >
                            Explore Cart
                        </button>
                    </Link>

                </div>

            </div>
        </>
    )
}