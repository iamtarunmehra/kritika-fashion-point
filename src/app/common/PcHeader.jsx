'use client'
import React from 'react'
import { gold, purple } from '../colors/color'
import { IoDiamond } from 'react-icons/io5';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa';
import { FaCartShopping, FaUser } from 'react-icons/fa6';
import Image from 'next/image';

export default function PcHeader() {
    return (
        <>
            <div
                style={{ background: 'black', borderBottomColor: gold.base }}
                className='lg:block hidden w-full h-full border-b-[1.5] relative overflow-hidden z-50'>

                <div className='absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden '>
                    <Image src={'/designs/d2.png'} sizes='full' alt='designs' fill className='opacity-[0.03] w-full h-full object-cover object-top' />
                </div>
                <div className='max-w-330 mx-auto lg:px-6 px-4 lg:py-3 py-3'>
                    <div className='flex items-center justify-between'>
                        <Logo />
                        <NavBar />
                        <UserPoints />
                    </div>
                </div>
            </div>
        </>

    )
}


export function Logo() {
    return (
        <Link href={'/'}><div className='cursor-pointer'>
            <div className='flex items-center gap-1'>
                <p style={{ borderBottomColor: gold.light }} className={`p-2 rounded-r-full border-b-2`}><IoDiamond style={{ color: gold.base }} size={25} />
                </p>
                <div className='text-xl tracking-widest' style={{ color: gold.light }}>
                    <span style={{ color: gold.base }}>K</span>
                    ritika {''}
                    <span style={{ color: gold.base }}>F</span>
                    ashion {''}
                    <span style={{ color: gold.base }}>P</span>
                    oint
                </div>

            </div>

        </div></Link>
    );
}

const nav_bar_data = [
    { title: 'home', link: '/' },
    { title: 'about', link: '/about' },
    { title: 'Shop Now', link: '/shop-now' },
    { title: 'categories', link: '/categories' },
    { title: 'contact us', link: '/contact-us' },
]

function NavBar() {
    return (
        <div >
            <ul className='flex py-3 tracking-wide items-center justify-between gap-3 font-semibold'>
                {nav_bar_data.map((item, index) => {
                    return (
                        <Link href={item.link} key={index}>
                            <li
                                className="text-lg  cursor-pointer capitalize text-[#FFF2B3] transition-all duration-100 px-4 group relative"
                            >
                                <div style={{ background: gold.light }} className='w-0 group-hover:w-2/4 h-[2] duration-300 absolute top-[105%] left-1/2 -translate-x-1/2  rounded-full '></div>
                                {item.title}
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

function UserPoints() {
    return (
        <div className='flex items-center gap-8'>
            <FaRegHeart
                // style={{ color: gold.base }}
                size={25}
                className='text-white cursor-pointer hover:text-[#E6C766]'
            />
            <div className='relative'>
                {/* <FaCartShopping
                    size={25}
                    className='hover:scale-110 duration-100 cursor-pointer text-[#FFF2B3] '
                /> */}
                {/* <span className='bg-[#8A6A12] absolute -top-2 -right-3.5 rounded-full w-5 h-5 text-white flex items-center justify-center'>0</span> */}

                <div style={{ borderColor: gold.light, background: gold.base }} className='p-2 hover:scale-110 duration-300 cursor-pointer group border rounded-full'>
                    <FaUser className='text-black' size={16} />
                </div>
            </div>
        </div>
    )
}