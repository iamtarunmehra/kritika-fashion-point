import React from 'react'
import { gold, purple } from '../colors/color'
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoDiamond } from 'react-icons/io5';
import Image from 'next/image';
import { BiLocationPlus } from 'react-icons/bi';
import Link from 'next/link';

export default function Footer() {
    const QuickLinks = [
        { title: 'home', link: '/' },
        { title: 'shop now', link: '/' },
        { title: 'categories', link: '/' },
        { title: 'about', link: '/' },
        { title: 'contact us', link: '/' },
    ]

    const categories = [
        { id: 1, title: 'Kamar Band', link: '/category/kamar-band' },
        { id: 2, title: 'Bajuband', link: '/category/bajuband' },
        { id: 3, title: 'Necklace Set', link: '/category/necklace-set' },
        { id: 4, title: 'Choker', link: '/category/choker' },
        { id: 5, title: 'Earrings', link: '/category/earrings' },
        { id: 6, title: 'Jhumka', link: '/category/jhumka' },
        { id: 7, title: 'Maang Tikka', link: '/category/maang-tikka' },
        { id: 8, title: 'Nath (Nose Ring)', link: '/category/nath' },
        { id: 9, title: 'Bangles', link: '/category/bangles' },
        { id: 10, title: 'Bracelet', link: '/category/bracelet' },
        { id: 11, title: 'Anklet (Payal)', link: '/category/anklet' },
        { id: 12, title: 'Toe Rings', link: '/category/toe-rings' },
        { id: 13, title: 'Hair Accessories', link: '/category/hair-accessories' },
        { id: 14, title: 'Brooch', link: '/category/brooch' },
        { id: 15, title: 'Temple Jewellery', link: '/category/temple-jewellery' },
        { id: 16, title: 'Oxidised Jewellery', link: '/category/oxidised-jewellery' },
        { id: 17, title: 'Polki Jewellery', link: '/category/polki-jewellery' },
        { id: 18, title: 'Kundan Jewellery', link: '/category/kundan-jewellery' },
    ];

    return (
        <footer
            // style={{ background: `rgba(44, 15, 40, 10)`, borderColor: gold.base }}
            style={{ background: `black`, borderColor: gold.base }}

            className={`tracking-widest w-full h-full border-t border-x py-5 relative overflow-hidden`}>

            <div className="absolute -top-15 -left-15 w-[350] h-[350] pointer-events-none z-0 overflow-hidden">
                <Image

                    fill
                    alt="design"
                    src="/designs/d1.png"
                    className="object-contain object-top-left opacity-15 w-full h-full"
                />
            </div>

            <div className="absolute -bottom-15 -right-15 rotate-180 w-[350] h-[350] pointer-events-none z-0 overflow-hidden">
                <Image
                    fill
                    alt="design"
                    src="/designs/d1.png"
                    className="object-contain object-top-left opacity-15 w-full h-full"
                />
            </div>

            <div style={{ color: gold }} className="max-w-330 mx-auto lg:px-6 px-4 lg:py-10 py-5">
                <div className='grid lg:grid-cols-[25%_45%_auto] sm:grid-cols-2 grid-cols-1 justify-between'>
                    <ul style={{ color: gold.light }}>
                        <li style={{ color: gold.base }} className='text-2xl my-5 group relative'>
                            <b>
                                Quick Links
                            </b>
                        </li>
                        {QuickLinks.map((item, index) => {
                            return (
                                <Link key={index} href={item.link}>
                                    <li className='text-md my-4 capitalize font-light cursor-pointer hover:text-[#E6C766] duration-300 group relative'>
                                        <b>
                                            {item.title}
                                            <div style={{ background: gold.base }} className='w-0 group-hover:w-[30] rounded-full absolute top-full duration-300 left-0 h-[2]'></div>
                                        </b>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>

                    <ul style={{ color: gold.light }} className='grid sm:grid-cols-2 grid-cols-1'>
                        <li style={{ color: gold.base }} className='text-2xl my-5 md:col-span-2 cursor-pointer group relative'>
                            <b>
                                Categories
                            </b>
                        </li>
                        {categories.map((item, index) => {
                            return (
                                <Link key={index} href={item.link}>
                                    <li className='text-md my-2 capitalize font-light cursor-pointer hover:text-[#E6C766] duration-300 group relative'>
                                        <b>
                                            {item.title}
                                            <div style={{ background: gold.base }} className='w-0 group-hover:w-[30] rounded-full absolute top-full duration-300 left-0 h-[2]'></div>
                                        </b>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>

                    {/* <ul style={{ color: gold.light }} className='grid grid-cols-2'>
                        <li style={{ color: gold.base }} className='lg:text-2xl my-5 col-span-2 text-xl cursor-pointer group relative'>
                            <b>
                                Top Selling
                            </b>
                        </li>
                    </ul> */}

                    <ul className=''>
                        <li style={{ color: gold.base }} className='text-2xl my-5 col-span-2 cursor-pointer group relative'>
                            <b>
                                Contact Us
                            </b>
                        </li>
                        <li className='grid grid-cols-[6.5%_auto] text-[#FFF2B3] my-5 items-center gap-2  text-md  font-semibold tracking-widest'>
                            <FaLocationDot style={{ color: gold.base }} size={20} className='mt-1' />

                            New Pal Road Opposite Barktullah khan stadium Jodhpur, Rajasthan
                        </li>
                        <li className='grid grid-cols-[6.5%_auto] text-[#FFF2B3] my-5 items-center gap-2  text-md  font-semibold tracking-widest'>
                            <FaPhoneAlt size={20} style={{ color: gold.base }} className='mt-1' />

                            <div>
                                Mobile - +91 80799994755 , <span>+91 80799994755</span>
                            </div>
                        </li>

                        <li className='grid grid-cols-[6.5%_auto] text-[#FFF2B3] my-5 items-center gap-2  text-sm  font-semibold tracking-widest'>
                            <MdEmail size={20} style={{ color: gold.base }} className='mt-1' />
                            tarunmehra80790@gmail.com
                        </li>

                        <Link target='_blank' href={'https://maps.app.goo.gl/r1r9LLd13biD4sJh8'}><li className='grid grid-cols-[6.5%_auto] cursor-pointer hover:text-[#D4AF37] duration-300 text-[#FFF2B3] my-5 items-center gap-2  text-md  font-semibold tracking-widest'>
                            <BiLocationPlus size={20} style={{ color: gold.base }} className='mt-1' />
                            Live Location
                        </li></Link>




                        {/* <li>
                            <iframe className='rounded-md my-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.2650757375723!2d72.95737367541564!3d26.21718797706857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418900516b59c7%3A0x6e9bade8be3a59da!2sKritika%20fashion%20point!5e1!3m2!1sen!2sin!4v1778040407194!5m2!1sen!2sin" width="100%" height="200" allowFullScreen loading="lazy" ></iframe>
                        </li> */}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
