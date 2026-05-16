"use client";
import React, { useEffect } from "react";
import { gold } from "../colors/color";
import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";


export default function ContactClient() {



    return (
        <section className="w-full bg-black text-white relative overflow-hidden">

            {/* Background Design */}
            <div className="absolute inset-0 -z-10 opacity-[0.04]">
                <Image
                    src={"/designs/d3.png"}
                    fill
                    alt="design"
                    className="object-cover object-center"
                />
            </div>

            <div className="max-w-330 mx-auto lg:px-6 px-4 lg:py-16 md:py-12 py-10">

                {/* Heading */}
                <div className="text-center mb-10">

                    <p
                        style={{ color: gold.light }}
                        className="uppercase tracking-[6px] text-xs mb-3"
                    >
                        Contact Us
                    </p>

                    <h2
                        style={{ color: gold.base }}
                        className="lg:text-5xl md:text-4xl text-3xl font-bold"
                    >
                        Visit Our Store
                    </h2>

                    <div className="flex items-center justify-center gap-3 mt-5">

                        <div
                            style={{
                                background: `linear-gradient(to right, transparent, ${gold.base})`,
                            }}
                            className="w-14 h-[1]"
                        ></div>

                        <div
                            style={{
                                background: gold.base,
                                boxShadow: `0 0 15px ${gold.base}`,
                            }}
                            className="w-2 h-2 rounded-full"
                        ></div>

                        <div
                            style={{
                                background: `linear-gradient(to left, transparent, ${gold.base})`,
                            }}
                            className="w-14 h-[1]"
                        ></div>

                    </div>

                </div>

                {/* Map */}
                <div
                    style={{
                        borderColor: `${gold.base}90`,
                        boxShadow: `0 0 40px rgba(212,175,55,0.08)`,
                    }}
                    className="
                        overflow-hidden
                        border
                        rounded-3xl
                        lg:h-[500]
                        md:h-[400]
                        h-[280]
                        lg:p-10 md:p-4
                        backdrop-blur-md
                    "
                >
                    <iframe
                        className="w-full h-full rounded-2xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.615315924874!2d72.95737832394734!3d26.21720004176421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418900516b59c7%3A0x6e9bade8be3a59da!2sKritika%20fashion%20point!5e1!3m2!1sen!2sin!4v1778667101417!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Cards */}
                <div className="lg:mt-16 md:mt-12 mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">

                    {/* Visit Us */}
                    <div
                        style={{
                            borderColor: `${gold.base}70`,
                            background:
                                "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                        }}
                        className="
                            border
                            rounded-3xl
                            md:p-8 p-5
                            backdrop-blur-md
                            hover:-translate-y-2
                            duration-300
                            group
                        "
                    >

                        <div
                            style={{
                                background: `${gold.base}15`,
                                color: gold.base,
                            }}
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                        >
                            <MapPin size={30} />
                        </div>

                        <h2
                            style={{ color: gold.base }}
                            className="text-2xl font-bold mb-5"
                        >
                            Visit Us
                        </h2>

                        <p className="text-gray-300 leading-8 text-lg">
                            Phase I, Pal Gaon, Pal Road,
                            <br />
                            Jodhpur, Rajasthan 342014
                        </p>

                        <div className="mt-6 space-y-4">

                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone size={18} />
                                <span>+91 8079994755</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone size={18} />
                                <span>+91 8095684587</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-300 break-all">
                                <Mail size={18} />
                                <span>kritikafashionpoint@gmail.com</span>
                            </div>

                        </div>

                    </div>

                    {/* Social Media */}
                    <div
                        style={{
                            borderColor: `${gold.base}70`,
                            background:
                                "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                        }}
                        className="
                            border
                            rounded-3xl
                           md:p-8 p-5
                            backdrop-blur-md
                            hover:-translate-y-2
                            duration-300
                        "
                    >

                        <div
                            style={{
                                background: `${gold.base}15`,
                                color: gold.base,
                            }}
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                        >
                            <BsInstagram size={30} />
                        </div>

                        <h2
                            style={{ color: gold.base }}
                            className="text-2xl font-bold mb-2"
                        >
                            Follow Us On Instagram
                        </h2>
                        <p className="text-sm tracking-wider text-gray-300">For Treding Designs and Updates</p>

                        <Link target="_blank" href={'https://www.instagram.com/kritika_fashion_point/'}><h2
                            // style={{ color: gold.base }}
                            className="text-lg cursor-pointer hover:scale-105 hover:underline duration-300 font-semibold tracking-widest mb-5"
                        >
                            @kritika_fashion_point
                        </h2></Link>

                        <div style={{ borderColor: gold.dark }} className="p-5 border-[0.5] rounded-2xl"> <img src="/other/instagram.png" className="w-[200] h-[200] cursor-pointer hover:ml-3 duration-300 object-cover object-top my-5 rounded-2xl" /></div>


                        {/* <div className="flex flex-wrap gap-4">

                            <button
                                style={{
                                    borderColor: gold.base,
                                    color: gold.light,
                                }}
                                className="
                                    border
                                    px-5
                                    py-3
                                    rounded-full
                                    flex
                                    items-center
                                    gap-2
                                    hover:bg-white/10
                                    duration-300
                                "
                            >
                                <CgInstagram size={18} />
                                Instagram
                            </button>

                            <button
                                style={{
                                    borderColor: gold.base,
                                    color: gold.light,
                                }}
                                className="
                                    border
                                    px-5
                                    py-3
                                    rounded-full
                                    flex
                                    items-center
                                    gap-2
                                    hover:bg-white/10
                                    duration-300
                                "
                            >
                                <FaFacebook size={18} />
                                Facebook
                            </button>

                        </div> */}

                    </div>

                    {/* Contact Form */}
                    <div
                        style={{
                            borderColor: `${gold.base}70`,
                            background:
                                "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                        }}
                        className="
                            border
                            rounded-3xl
                            md:p-8 p-5
                            backdrop-blur-md
                            hover:-translate-y-2
                            duration-300
                        "
                    >


                        <h2
                            style={{ color: gold.base }}
                            className="text-2xl font-bold mb-6"
                        >
                            Send Message
                        </h2>

                        <form className="space-y-3">

                            <div>
                                <label className="text-sm text-gray-300 mb-2 block">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="
                                        w-full
                                        bg-white/5
                                        border
                                        border-white/10
                                        rounded-xl
                                        px-4
                                        py-2
                                        outline-none
                                        focus:border-yellow-600
                                    "
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-300 mb-2 block">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter phone number"
                                    className="
                                        w-full
                                        bg-white/5
                                        border
                                        border-white/10
                                        rounded-xl
                                        px-4
                                        py-2
                                        outline-none
                                        focus:border-yellow-600
                                    "
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-300 mb-2 block">
                                    Message
                                </label>

                                <textarea
                                    rows={4}
                                    placeholder="Write your message..."
                                    className="
                                        w-full
                                        bg-white/5
                                        border
                                        border-white/10
                                        rounded-xl
                                        px-4
                                        py-2
                                        outline-none
                                        resize-none
                                        focus:border-yellow-600
                                    "
                                ></textarea>
                            </div>

                            <button
                                style={{
                                    background: gold.base,
                                    boxShadow: `0 0 20px ${gold.base}40`,
                                }}
                                className="
                                    w-full
                                    py-2
                                    rounded-xl
                                    text-black
                                    font-semibold
                                    text-lg
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    hover:scale-[1.02]
                                    duration-300
                                "
                            >
                                <Send size={20} />
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>



            </div>

        </section>
    );
}