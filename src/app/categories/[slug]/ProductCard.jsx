"use client"
import { gold } from '@/app/colors/color'
import AddToCartButton from '@/app/common/AddToCartButton'
import BuyNowButton from '@/app/common/BuyNowButton'
import GetNow from '@/app/common/GetNow'
import Overlay from '@/app/common/Overlay'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ item, index, getNowModel, setGetNowModel }) {
    return (

        <>

            <Link key={index} href={`/categories/${item.title}`}>

                <div
                    style={{ borderColor: gold.dark }}
                    className="bg-white border  cursor-pointer rounded-xl shadow-md transition group h-auto flex flex-col justify-between overflow-hidden relative">

                    {/* DISCOUNT BUTTON */}
                    <button style={{ background: 'linear-gradient(135deg, #ff3b3b, #8b0000)' }} className='absolute top-0 right-0 py-1  z-50 px-5 rounded-l-lg text-white'>Discount -35%</button>

                    <div className='p-5 bg-black'>
                        <div className='h-[200] relative'>
                            <Image src={item.image} alt={item.title} fill sizes='full' className='w-full h-full object-cover duration-300 hover:scale-[1.05] rounded-2xl hover:rounded-none' />
                        </div>
                    </div>

                    <div style={{ borderTopColor: gold.dark }} className='border-t p-5 bg-black '>
                        <h2 className="text-xl text-[#E6C766] font-extrabold mb-3 relative mt-3 duration-300">{item.title}

                            <div style={{ background: gold.base }} className='absolute top-[105%] left-0 w-[20] h-[3] group-hover:w-[70] duration-500 rounded-full transition-all'></div>
                        </h2>
                        <p className="text-lg text-white mb-2 line-clamp-1">{item.description}</p>
                        <p style={{ color: gold.base }} className="text-2xl font-extrabold ">Price - ₹ {item.price}</p>
                    </div>

                    <div className='grid grid-cols-2 gap-3 px-5 pb-5 bg-black'>
                        <AddToCartButton />
                        <BuyNowButton getNowModel={getNowModel} setGetNowModel={setGetNowModel} />
                    </div>
                </div>
            </Link>
        </>
    )
}
