import React from 'react'
import PcHeader from './PcHeader'
import MobileHeader from './MobileHeader'

export default function Header() {

    return (
        <header className='sticky top-0 z-100'>
            <PcHeader />
            <MobileHeader />
        </header>
    )
}
