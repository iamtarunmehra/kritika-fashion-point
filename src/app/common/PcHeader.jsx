'use client'
import React, { useState } from 'react'
import { gold } from '../colors/color'
import { IoDiamond } from 'react-icons/io5'
import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import Image from 'next/image'
import WishListModel from './WishListModel'

export default function PcHeader() {

    const [wishListModelOpen, setWishListModelOpen] = useState(false)


    const premiumGoldGradient = `
        linear-gradient(
            135deg,
            #4d3900 0%,
            #8c670a 18%,
            #d4af37 38%,
            #f5df8b 50%,
            #e6c766 58%,
            #c9971a 72%,
            #7a5a08 88%,
            #4d3900 100%
        )
    `

    return (
        <>
            <WishListModel wishListModelOpen={wishListModelOpen} setWishListModelOpen={setWishListModelOpen} />
            <div
                className='
                    lg:block hidden
                    w-full
                    border-b
                    relative
                    overflow-hidden
                    z-50
                    backdrop-blur-xl
                    
                '
                style={{
                    borderBottomColor: 'rgba(230,199,102,0.18)',
                    background: `
                        linear-gradient(
                            to bottom,
                            rgba(5,5,5,0.98),
                            rgba(0,0,0,0.98)
                        )
                    `,
                    boxShadow: '0 10px 40px rgba(0,0,0,0.35)'
                }}
            >

                {/* Premium Background Glow */}
                <div
                    className='
                        absolute
                        top-[-120]
                        left-1/2
                        -translate-x-1/2
                        w-[600]
                        h-[300]
                        rounded-full
                        blur-3xl
                        opacity-10
                        pointer-events-none
                    '
                    style={{
                        background: '#d4af37'
                    }}
                />

                {/* Texture */}
                <div className='absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden'>
                    <Image
                        src={'/designs/d2.png'}
                        sizes='full'
                        alt='designs'
                        fill
                        className='opacity-[0.01] w-full h-full object-cover object-top'
                    />
                </div>

                <div className='max-w-330 mx-auto lg:px-6 px-4 lg:py-4 py-3'>
                    <div className='flex items-center justify-between'>

                        <Logo premiumGoldGradient={premiumGoldGradient} />

                        <NavBar premiumGoldGradient={premiumGoldGradient} />

                        <UserPoints wishListModelOpen={wishListModelOpen} setWishListModelOpen={setWishListModelOpen} premiumGoldGradient={premiumGoldGradient} />

                    </div>
                </div>
            </div>
        </>
    )
}

export function Logo({ premiumGoldGradient }) {

    return (
        <Link href={'/'}>
            <div className='cursor-pointer group'>

                <div className='flex items-center gap-3'>

                    {/* Premium Diamond */}
                    <div
                        className='
                            relative
                            w-10
                            h-10
                            rounded-full
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                            border
                            duration-300
                            group-hover:scale-110
                            group-hover:rotate-6
                        '
                        style={{
                            background: premiumGoldGradient,
                            borderColor: '#e6c766',
                            boxShadow: '0 0 25px rgba(245,223,139,0.18)'
                        }}
                    >

                        {/* Shine */}
                        <div
                            className='
                                absolute
                                top-0
                                -left-full
                                w-full
                                h-full
                                rotate-12
                                group-hover:left-full
                                duration-700
                            '
                            style={{
                                background:
                                    'linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)'
                            }}
                        />

                        <IoDiamond
                            className='relative z-10 text-black'
                            size={22}
                        />
                    </div>

                    {/* Logo Text */}
                    <div
                        className='
                            text-[20px]
                            tracking-[2px]
                            font-extrabold
                            
                            duration-300
                        '
                        style={{
                            color: '#f5df8b',
                            textShadow: '0 0 15px rgba(245,223,139,0.12)'
                        }}
                    >

                        <span style={{ color: '#fff2b3' }}>K</span>
                        ritika{" "}

                        <span style={{ color: '#fff2b3' }}>F</span>
                        ashion{" "}

                        <span style={{ color: '#fff2b3' }}>P</span>
                        oint

                    </div>

                </div>

            </div>
        </Link>
    )
}

const nav_bar_data = [
    { title: 'home', link: '/' },
    { title: 'about', link: '/about' },
    { title: 'shop now', link: '/shop-now' },
    { title: 'categories', link: '/categories' },
    { title: 'contact us', link: '/contact-us' },
]

function NavBar() {

    return (
        <div>
            <ul
                className='
                    flex
                    items-center
                    gap-5
                    bg-[#080808]
                    border
                    rounded-full
                    px-3
                    py-2
                    backdrop-blur-xl
                '
                style={{
                    borderColor: 'rgba(230,199,102,0.10)'
                }}
            >

                {nav_bar_data.map((item, index) => {

                    return (
                        <Link href={item.link} key={index}>

                            <li
                                className='
                                    relative
                                    px-5
                                    py-2
                                    rounded-full
                                    text-[16px]
                                    tracking-wide
                                    font-semibold
                                    capitalize
                                    text-[#f5df8b]
                                    overflow-hidden
                                    cursor-pointer
                                    duration-300
                                    hover:text-black
                                    hover:scale-105
                                    group
                                '
                            >

                                {/* Background Hover */}
                                <div
                                    className='
                                        absolute
                                        inset-0
                                        scale-0
                                        group-hover:scale-100
                                        duration-300
                                        rounded-full
                                    '
                                    style={{
                                        background: `
                                            linear-gradient(
                                                135deg,
                                                #4d3900 0%,
                                                #8c670a 20%,
                                                #d4af37 45%,
                                                #f5df8b 55%,
                                                #c9971a 75%,
                                                #6a4f00 100%
                                            )
                                        `
                                    }}
                                />

                                {/* Shine */}
                                <div
                                    className='
                                        absolute
                                        top-0
                                        -left-full
                                        w-full
                                        h-full
                                        rotate-12
                                        group-hover:left-full
                                        duration-700
                                    '
                                    style={{
                                        background:
                                            'linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)'
                                    }}
                                />

                                <span className='relative z-10'>
                                    {item.title}
                                </span>

                            </li>

                        </Link>
                    )
                })}

            </ul>
        </div>
    )
}

function UserPoints({ premiumGoldGradient, wishListModelOpen, setWishListModelOpen }) {

    return (
        <div className='flex items-center gap-5'>

            {/* Wishlist */}
            <div
                onClick={() => setWishListModelOpen(true)}
                className='
                    relative
                    w-10
                    h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    border
                    bg-[#0b0b0b]
                    cursor-pointer
                    overflow-hidden
                    duration-300
                    hover:scale-110
                    hover:border-[#f5df8b]
                '
                style={{
                    borderColor: 'rgba(230,199,102,0.18)'
                }}
            >

                {/* Glow */}
                <div
                    className='
                        absolute
                        inset-0
                        opacity-0
                        hover:opacity-100
                        duration-500
                    '
                    style={{
                        background:
                            'radial-gradient(circle, rgba(255,235,160,0.20) 0%, transparent 70%)'
                    }}
                />

                <FaRegHeart
                    size={17}
                    className='relative z-10 text-[#f5df8b]'
                />
            </div>

            {/* User */}
            <Link href="/login">

                <div
                    className="
                        relative
                        w-10
                        h-10
                        flex
                        items-center
                        justify-center
                        rounded-full
                        border
                        overflow-hidden
                        cursor-pointer
                        group
                        duration-300
                        hover:scale-110
                        hover:shadow-[0_0_25px_rgba(245,223,139,0.28)]
                    "
                    style={{
                        borderColor: "#c9971a",
                        background: premiumGoldGradient
                    }}
                >

                    {/* Glow */}
                    <div
                        className="
                            absolute inset-0
                            opacity-0
                            group-hover:opacity-100
                            duration-500
                        "
                        style={{
                            background:
                                "radial-gradient(circle, rgba(255,235,160,0.35) 0%, transparent 70%)"
                        }}
                    />

                    {/* Shine */}
                    <div
                        className="
                            absolute
                            top-0
                            -left-full
                            w-full
                            h-full
                            rotate-12
                            group-hover:left-full
                            duration-700
                        "
                        style={{
                            background:
                                "linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)"
                        }}
                    />

                    <FaUser
                        className="
                            relative z-10
                            text-black
                            group-hover:scale-110
                            duration-300
                        "
                        size={16}
                    />
                </div>

            </Link>

        </div>
    )
}