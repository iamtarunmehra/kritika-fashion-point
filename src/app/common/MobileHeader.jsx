"use client"
import React, { useState } from 'react'
import { Logo } from './PcHeader'
import { gold } from '../colors/color'
import Image from 'next/image'
import { FaBarsProgress } from 'react-icons/fa6'
import { IoCloseCircleSharp } from 'react-icons/io5'
import Link from 'next/link'

export default function MobileHeader() {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            <div
                // style={{ background: 'rgba(44, 15, 58, 1)', borderBottomColor: gold.base }}
                style={{ background: 'black', borderBottomColor: gold.base }}

                className='lg:hidden block w-full h-full py-4 border-b-2 px-4'>
                <div className='flex items-center justify-between'>
                    <div className='absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
                        <Image src={'/designs/d2.png'} sizes='full' alt='designs' fill className='opacity-[0.03] w-full h-full object-cover object-top' />
                    </div>
                    <div className=''>
                        <Logo />
                    </div>

                    <div onClick={() => setMobileMenu(true)}><FaBarsProgress style={{ color: gold.light }} size={20} /></div>
                </div>

            </div>
            {mobileMenu &&
                <div onClick={() => setMobileMenu(false)} className='w-full h-screen bg-[rgba(0,0,0,0.9)] fixed top-0 left-0'></div>

            }
            <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        </>
    )
}

export function MobileMenu({ mobileMenu, setMobileMenu }) {
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
                ${mobileMenu ? 'translate-y-0' : '-translate-y-full'}
                transition-transform duration-500 ease-in-out origin-top
                w-full h-fit
                bg-black text-white border-b-4
                lg:hidden block
                transform-gpu
                z-50
                            `}
        >
            <div className='flex justify-between items-center p-5'>
                <Logo />
                <button style={{ color: gold.base }} onClick={() => setMobileMenu(false)}><IoCloseCircleSharp size={25} /></button>
            </div>
            <ul className='px-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-xl font-semibold space-y-10 pb-10'>
                {Data.map((item, index) => {
                    return (
                        <Link key={index} href={item.link}><li className='py-2 capitalize text-xl'>{item.title}</li></Link>

                    )
                })}
            </ul>
        </div>
    )

} 