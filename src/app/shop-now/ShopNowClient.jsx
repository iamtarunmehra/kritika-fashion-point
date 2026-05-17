'use client'
import React, { useState } from 'react'
import { gold } from '../colors/color'
import Link from 'next/link'
import Image from 'next/image';
import Overlay from '../common/Overlay';
import GetNow from '../common/GetNow';
import { FaSortAmountUp } from 'react-icons/fa';
import AddToCartButton from '../common/AddToCartButton';
import BuyNowButton from '../common/BuyNowButton';
import { FilterModel } from '../common/FilterModel';

export default function ShopNowClient() {

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
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
        {
            id: 1,
            title: 'Kundan Bridal Necklace Set',
            price: '4,999',
            description: 'Elegant kundan necklace set with matching earrings for bridal look',
            image: '/p1.jpg',
            category: 'Necklace',
        },
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
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },

        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
        },
        {
            id: 7,
            title: 'Maang Tikka Bridal',
            price: '499',
            description: 'Beautiful maang tikka for bridal and festive wear',
            image: '/p1.jpg',
            category: 'Maang Tikka',
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


    const [getNowModel, setGetNowModel] = useState(false)

    const [filterModelOpen, setFilterModelOpen] = useState(false)

    return (
        <section className='w-full h-full bg-black text-white'>

            <GetNow />

            <FilterModel filterModelOpen={filterModelOpen} setFilterModelOpen={setFilterModelOpen} />
            {getNowModel && <Overlay />}
            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} />
            <div className='max-w-330 mx-auto lg:px-6 px-4'>
                <div className='lg:my-10 my-5'>
                    <div className='flex gap-5 justify-between items-center'>
                        <div>
                            <h1
                                className='lg:text-5xl md:text-4xl text-3xl  text-center font-semibold tracking-wide text-white leading-tight'
                            >
                                Our
                                <span style={{ color: gold.mid }} className='ml-2'>
                                    Collection
                                </span>
                            </h1>

                            <div
                                style={{
                                    background: `linear-gradient(to right, ${gold.dark}, transparent)`
                                }}
                                className='w-52 h-[2] mt-2'
                            >

                            </div>
                        </div>

                        <button
                            onClick={() => setFilterModelOpen(true)}
                            // style={{
                            //     borderColor: "rgba(212,175,55,0.25)",
                            //     background:
                            //         `linear-gradient(to bottom, ${gold.dark},${'black'}`
                            // }}
                            style={{
                                background: `linear-gradient(
                                    135deg,
                                    #4d3900 0%,
                                    #7a5a08 18%,
                                    #b8860b 38%,
                                    #d4af37 50%,
                                    #e8cf6a 58%,
                                    #c9971a 72%,
                                    #7a5a08 88%,
                                    #4d3900 100%
                                )`
                            }}
                            className='flex text-black  hover:scale-[1.05] duration-100 ease-in-out items-center sm:px-10 px-2 py-1.5 rounded-md cursor-pointer gap-2 text-lg'>
                            <span className='sm:block hidden font-extrabold'>Filter
                            </span>
                            <FaSortAmountUp />

                        </button>
                    </div>


                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3 lg:my-10 my-5'>
                        {top_selling_data.map((item, index) => {
                            return (
                                <Link key={index} href={`/categories/${item.title}`}>
                                    <div
                                        style={{ borderColor: gold.dark }}
                                        className="bg-white border  cursor-pointer rounded-xl shadow-md hover:shadow-xl transition group h-auto flex flex-col justify-between overflow-hidden">

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
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}


