'use client'
import { FaPhone } from 'react-icons/fa6'
import { gold } from '../colors/color'
import { IoChatbubble } from 'react-icons/io5'

export function FixedButtons() {
    return (
        <div className='relative z-80'>
            <div
                className="w-14 h-14 rounded-full cursor-pointer fixed bottom-[110] lg:right-10 md:right-5 right-3 z-40 
                    flex items-center justify-center
                    shadow-[0_0_25px_rgba(0,0,0,0.25)]
                    hover:scale-110 transition-all duration-300 ease-in-out
                    border border-white/10"
                style={{
                    background: `
                    linear-gradient(
                        to bottom right,
                        #8a6a12 0%,
                        #b8860b 20%,
                        #d4af37 40%,
                        #fff2b3 50%,
                        #d4af37 60%,
                        #b8860b 80%,
                        #8a6a12 100%
                    )`}}
            >
                <FaPhone size={25} className="text-black" />
            </div>

            <div
                className="w-14 h-14 rounded-full fixed bottom-[40] lg:right-10 md:right-5 right-3 z-40 
                    flex items-center justify-center
                    shadow-[0_0_25px_rgba(0,0,0,0.25)]
                    hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out
                    border border-white/10"
                style={{
                    background: `
                    linear-gradient(
                        to bottom right,
                        #8a6a12 0%,
                        #b8860b 20%,
                        #d4af37 40%,
                        #fff2b3 50%,
                        #d4af37 60%,
                        #b8860b 80%,
                        #8a6a12 100%
                    )`}}
            >
                <IoChatbubble size={25} className="text-black" />
            </div>
        </div>
    )
}