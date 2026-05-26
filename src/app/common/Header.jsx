import React from 'react'
import PcHeader from './PcHeader'
import MobileHeader from './MobileHeader'
import { FixedButtons } from './FixedBottomButtons'

export default function Header() {

    return (
        <>
            <div className="offer-strip fixed bottom-0 left-0 w-full z-100 bg-black/80 backdrop-blur-md overflow-hidden">

                <div className="marquee-track flex whitespace-nowrap animate-marquee">

                    <div className="marquee-content flex gap-10 px-10 py-2 text-[15px] tracking-wide text-white">
                        ✨ Exclusive Offers • Up to 70% OFF • Limited Time Deals • Premium Collection ✨
                    </div>

                    <div className="marquee-content flex gap-10 px-10 py-2 text-[15px] tracking-wide text-white">
                        ✨ Exclusive Offers • Up to 70% OFF • Limited Time Deals • Premium Collection ✨
                    </div>

                </div>
            </div>
            <header className='sticky top-0 z-100'>
                <PcHeader />
                <MobileHeader />
            </header>

            <FixedButtons />
        </>
    )
}

