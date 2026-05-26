"use client"
import React, { useState } from 'react'
import { gold } from '../colors/color'
import Image from 'next/image'
import { FaBars, FaBarsProgress, FaBarsStaggered, FaRegHeart, FaUser } from 'react-icons/fa6'
import { IoCloseCircleSharp, IoDiamond } from 'react-icons/io5'
import Link from 'next/link'
import { VscTriangleRight } from 'react-icons/vsc'
import { Logo } from './PcHeader'
import { FaShoppingCart } from 'react-icons/fa'

export default function MobileHeader() {
    const [mobileMenu, setMobileMenu] = useState(false)

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
            <div
                // style={{ background: 'rgba(44, 15, 58, 1)', borderBottomColor: gold.base }}
                style={{ background: 'black', borderColor: gold.base }}

                className='lg:hidden block w-full h-full py-3.5 border-b px-4'>
                <div className='flex items-center justify-between'>
                    <div className='absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
                        <Image src={'/designs/d2.png'} sizes='full' alt='designs' fill className='opacity-[0.05] w-full h-full object-cover object-top' />
                    </div>
                    <Link href={'/'}>
                        <div className='cursor-pointer group'>

                            <div className='flex items-center sm:gap-5 gap-3'>

                                <div onClick={() => setMobileMenu(true)}>
                                    <FaBarsStaggered style={{ color: gold.base }} size={20} />
                                </div>

                                {/* Premium Diamond */}
                                <div
                                    className='
                                        relative
                                        w-9
                                        h-9
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
                                            sm:tracking-[2]
                                            tracking-[3]
                                            font-extrabold
                                            duration-300
                                            '
                                    style={{
                                        color: '#f5df8b',
                                        textShadow: `
            0 2px 4px rgba(0,0,0,0.9),
            0 6px 12px rgba(0,0,0,0.8),
            0 0 25px rgba(0,0,0,0.7)
        `

                                    }}
                                >

                                    <span style={{ color: '#fff2b3' }}>K</span>
                                    <span className='sm:inline hidden'>ritika{" "}</span>

                                    <span style={{ color: '#fff2b3' }}>F</span>
                                    <span className='sm:inline hidden'>ashion{" "}</span>

                                    <span style={{ color: '#fff2b3' }}>P</span>
                                    <span className='sm:inline hidden'>oint</span>

                                </div>

                            </div>

                        </div>
                    </Link>

                    <div className='flex items-center sm:gap-5 gap-4'>

                        <FaRegHeart
                            style={{ color: gold.base }}
                            size={25}
                            className='relative z-10 text-[#f5df8b]'
                        />

                        <FaShoppingCart
                            style={{ color: gold.base }}
                            size={22}
                            className='relative z-10 '
                        />

                        <Link href="/login">

                            <div
                                className="
                        relative
                        w-7
                        h-7
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
                </div>

            </div>
            {mobileMenu &&
                <div onClick={() => setMobileMenu(false)} className='w-full h-screen bg-[rgba(0,0,0,0.6)] backdrop-blur-sm fixed top-0 left-0'></div>

            }
            <MobileMenu premiumGoldGradient={premiumGoldGradient} mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        </>
    )
}

export function MobileMenu({ mobileMenu, setMobileMenu, premiumGoldGradient }) {
    const Data = [
        { title: 'home', link: '/' },
        { title: 'Shop Now', link: '/shop-now' },
        { title: 'Categories', link: '/categories' },
        { title: 'About', link: '/about' },
        { title: 'Contact Us', link: '/contact-us' },
    ]
    return (
        <div
            style={{ borderBottomColor: gold.base }}
            className={`
                fixed inset-0
                transform
                ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}
                transition-transform duration-300 ease-in-out
                w-full h-fit
                bg-black text-white border-b-4
                lg:hidden block
                transform-gpu
                z-100
                            `}
        >
            <div className='flex justify-between items-center py-7 px-5'>
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
                <button style={{ color: gold.base }} onClick={() => setMobileMenu(false)}><IoCloseCircleSharp size={25} /></button>
            </div>
            <ul className='px-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-5 text-xl font-semibold space-y-7 pb-10'>
                {Data.map((item, index) => {
                    return (
                        <Link key={index} href={item.link}>
                            <li
                                onClick={() => setMobileMenu(false)}
                                className="
                            group
                            relative
                            overflow-hidden
                            py-3 px-8
                            rounded-full
                            border border-[#D4AF37]/40
                            bg-white/5
                            backdrop-blur-md
                            
                            capitalize
                            text-lg
                            font-medium
                            tracking-wide
                            transition-all duration-500
                            hover:scale-105
                            hover:border-[#D4AF37]
                            hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]
                        "
                            >
                                {/* Glow Background */}
                                <span
                                    className="
                                absolute inset-0
                                bg-linear-to-r
                                from-[#D4AF37]/0
                                via-[#D4AF37]/20
                                to-[#D4AF37]/0
                                translate-x-[-120%]
                                group-hover:translate-x-[120%]
                                transition-transform duration-1000
                            "
                                />

                                {/* Dot */}
                                <span
                                    className="
                                absolute left-4 top-1/2
                                -translate-y-1/2
                                w-2 h-2
                                rounded-full
                                bg-[#D4AF37]
                                shadow-[0_0_10px_#D4AF37]
                            "
                                />

                                {/* Text */}
                                <span style={{ color: gold.light }} className="relative z-10 pl-3 flex items-center gap-2 ">
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