'use client'
import React, { useState } from 'react'
import { gold } from '../colors/color'
import Link from 'next/link'
import Image from 'next/image'
import BuyNowButton from '../common/BuyNowButton'
import AddToCartButton from '../common/AddToCartButton'
import Overlay from '../common/Overlay'
import GetNow from '../common/GetNow'


export default function CategoriesClient() {

    const [getNowModel, setGetNowModel] = useState(false)

    const categories = [
        'Gold',
        'Sliver',
        'BajuBand',
        'Kamarband',
        'hath chudi',
        'NeckLace'
    ]

    const top_selling_data = [
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 2,
            title: 'Gold Plated Jhumka',
            price: '799',
            description: 'Traditional jhumka with antique gold finish',
            image: '/p1.jpg',
            category: 'Earrings',
        },
        {
            id: 3,
            title: 'Polki Choker Set',
            price: '2,499',
            description: 'Premium polki choker perfect for wedding functions',
            image: '/p1.jpg',
            category: 'Choker',
        },
        {
            id: 4,
            title: 'Temple Jewellery Necklace',
            price: '3,299',
            description: 'South Indian temple design necklace with detailed carvings',
            image: '/p1.jpg',
            category: 'Temple Jewellery',
        },
        {
            id: 5,
            title: 'Oxidised Silver Necklace',
            price: '1,299',
            description: 'Trendy oxidised necklace for casual & ethnic wear',
            image: '/p1.jpg',
            category: 'Oxidised',
        },
        {
            id: 6,
            title: 'Bangles Set (Pack of 4)',
            price: '999',
            description: 'Stylish bangles set with golden polish',
            image: '/p1.jpg',
            category: 'Bangles',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState(null)

    return (
        <section className='w-full h-full relative bg-no-repeat bg-cover bg-center'>

            {getNowModel && <Overlay />}

            {<GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} />}

            <img sizes='full'
                src='/designs/d3.png'
                className='absolute top-0 right-0 w-full h-full -z-10 object-cover object-center opacity-[0.02]'
            />

            {/* <img sizes='full'
                src='/designs/d2.png'
                className='absolute top-0 left-0 w-full h-full -z-10 object-cover object-center opacity-[0.01]'
            /> */}

            {/* <div className='w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.9)]'></div> */}
            <div className='max-w-330 mx-auto lg:px-6 px-4 '>
                <div className=' lg:py-10 py-5'>
                    <div
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                            boxShadow: `0 0 40px ${gold.base}15`,
                        }}
                        className='w-full h-fit lg:mb-10 mb-5 z-50 border border-[#FFF2B3] rounded-3xl px-6 py-10 backdrop-blur-xl relative overflow-hidden'
                    >

                        {/* Glow Effect */}
                        <div
                            style={{ background: gold.base }}
                            className='absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[100px] opacity-10'
                        ></div>

                        {/* Heading */}
                        <div className='flex items-center gap-3 mb-6'>

                            <div
                                style={{
                                    background: `linear-gradient(to bottom, ${gold.light}, ${gold.dark})`
                                }}
                                className='w-1.5 h-8 rounded-full'
                            ></div>

                            <h1
                                style={{ color: gold.light }}
                                className='text-2xl font-bold tracking-[5px] uppercase'
                            >
                                All Categories
                            </h1>
                        </div>

                        {/* Categories */}
                        <ul className='flex flex-wrap items-center gap-4'>

                            <li
                                style={{
                                    background: `linear-gradient(135deg, ${gold.base}, ${gold.light})`,
                                    color: "#000",
                                    boxShadow: `0 0 25px ${gold.base}35`
                                }}
                                className='lg:px-8 lg:py-2 px-5 py-1 uppercase rounded-full backdrop-blur-md font-medium tracking-wide cursor-pointer hover:bg-white/10 hover:scale-105 duration-300'
                            >
                                All
                            </li>

                            {categories.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        style={{
                                            border: `1px solid ${gold.base}`,
                                            color: gold.light,
                                            background: "rgba(255,255,255,0.03)"
                                        }}
                                        className='lg:px-8 lg:py-2 px-5 py-1 uppercase rounded-full backdrop-blur-md font-medium tracking-wide cursor-pointer hover:bg-white/10 hover:scale-105 duration-300'
                                    >
                                        {item}
                                    </li>
                                )
                            })}




                        </ul>
                    </div>

                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-7 gap-5 z-50 relative'>

                        {top_selling_data.map((item, index) => {
                            return (
                                <Link key={index} href={`/categories/${item.title}`}>
                                    <div
                                        style={{ borderColor: gold.base }}
                                        className="bg-white border-2  cursor-pointer rounded-xl shadow-md hover:shadow-xl transition group h-auto flex flex-col justify-between overflow-hidden">

                                        <div className='p-5 bg-black'>
                                            <div className='h-[200] relative'>
                                                <Image src={item.image} alt={item.title} fill sizes='full' className='w-full h-full object-cover duration-300 hover:scale-[1.05] rounded-2xl hover:rounded-none' />
                                            </div>
                                        </div>

                                        <div style={{ borderTopColor: gold.base }} className='border-t-2 p-5 bg-black '>
                                            <h2 className="text-xl text-[#E6C766] font-extrabold mb-3 relative mt-3 duration-300">{item.title}

                                                <div style={{ background: gold.base }} className='absolute top-[105%] left-0 w-[20] h-[3] group-hover:w-[70] duration-500 rounded-full transition-all'></div>
                                            </h2>
                                            <p className="text-lg text-white mb-2 line-clamp-1">{item.description}</p>
                                            <p style={{ color: gold.base }} className="text-2xl font-extrabold ">Price - ₹{item.price}</p>
                                        </div>

                                        <div className='grid grid-cols-2 gap-3 px-5 pb-5 bg-black'>
                                            <AddToCartButton />

                                            <BuyNowButton getNowModel={getNowModel} setGetNowModel={setGetNowModel} />
                                        </div>
                                    </div></Link>
                            )
                        })}
                    </div>


                </div>

            </div>
        </section>
    )
}

