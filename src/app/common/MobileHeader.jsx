"use client"
import React from 'react'
import { Logo } from './PcHeader'
import { gold } from '../colors/color'
import Image from 'next/image'
import { FaBarsProgress } from 'react-icons/fa6'

export default function MobileHeader() {
    return (
        <div
            // style={{ background: 'rgba(44, 15, 58, 1)', borderBottomColor: gold.base }}
            style={{ background: 'black', borderBottomColor: gold.base }}

            className='lg:hidden block w-full h-full py-4 border-b-2 px-4'>
            <div className='flex items-center justify-between'>
                <div className='absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
                    <Image src={'/designs/d2.png'} alt='designs' fill className='opacity-[0.07] w-full h-full object-cover object-top' />
                </div>
                <div className=''>
                    <Logo />
                </div>

                <div><FaBarsProgress style={{ color: gold.light }} size={20} /></div>
            </div>

        </div>
    )
}
