import React from 'react'
import PcHeader from './PcHeader'
import MobileHeader from './MobileHeader'

export default function Header() {

    return (
        <>
            <header className='sticky top-0 z-100'>
                <PcHeader />
                <MobileHeader />
            </header>
            <div className="offer-strip bg-black Z-100">
                <div className="offer-text">
                    ✨ Exclusive Offers • Up to 70% OFF • Limited Time Deals • Premium Collection • Free Shipping ✨
                </div>
            </div>
        </>
    )
}
