"use client";

import React, { useState } from "react";
import {
    Mail,
    Lock,
    User,
    Phone,
    ArrowRight
} from "lucide-react";

export default function LoginClient() {

    const [activeTab, setActiveTab] = useState("login");

    return (
        <section
            className="
                min-h-screen
                text-white
                flex
                items-center
                justify-center
                px-4
                py-10
                overflow-hidden
                relative
            "
            style={{
                background:
                    "linear-gradient(to bottom, #050505, #000000, #050505)"
            }}
        >

            {/* Luxury Glow */}
            {/* <div
                className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[700]
                    h-[700]
                    rounded-full
                    blur-3xl
                    opacity-10
                "
                style={{
                    background: "#d4af37"
                }}
            /> */}

            {/* Main Card */}
            <div
                className="
                    relative
                    w-full
                    max-w-7xl
                    rounded-xl
                    overflow-hidden
                    border
                    border-[#d4af37]/20
                    bg-[#050505]
                    shadow-[0_0_100px_rgba(212,175,55,0.08)]
                    grid
                    lg:grid-cols-2
                "
            >

                {/* LEFT SIDE */}
                <div
                    className="
                        hidden
                        lg:flex
                        flex-col
                        justify-center
                        px-16
                        py-20
                        relative
                        overflow-hidden
                        border-r
                        border-[#d4af37]/10
                    "
                >

                    {/* Gradient Overlay */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-linear-to-br
                            from-[#0a0a0a]
                            via-black
                            to-[#111111]
                        "
                    />

                    {/* Decorative Circle */}
                    <div
                        className="
                            absolute
                            top-10
                            right-10
                            w-52
                            h-52
                            rounded-full
                            blur-3xl
                            opacity-10
                        "
                        style={{
                            background: "#d4af37"
                        }}
                    />

                    <div className="relative z-10">

                        {/* Small Heading */}
                        <p
                            className="
                                uppercase
                                tracking-[10px]
                                text-sm
                                mb-6
                            "
                            style={{
                                color: "#d4af37"
                            }}
                        >
                            Kritika Fashion Point
                        </p>

                        {/* Main Heading */}
                        <h1
                            className="
                                text-6xl
                                font-bold
                                leading-[1.15]
                                mb-8
                            "
                        >
                            Luxury Jewellery
                            <br />
                            Shopping
                            <br />
                            Experience
                        </h1>

                        {/* Description */}
                        <p
                            className="
                                text-gray-400
                                text-lg
                                leading-9
                                max-w-lg
                            "
                        >
                            Login or create your account to access premium
                            jewellery collections, wishlist, orders and
                            exclusive fashion offers.
                        </p>

                        {/* Bottom Premium Text */}
                        <div className="mt-14 flex items-center gap-5">

                            <div
                                className="w-16 h-[2]"
                                style={{
                                    background: "#d4af37"
                                }}
                            />

                            <span
                                className="
                                    uppercase
                                    tracking-[6px]
                                    text-sm
                                "
                                style={{
                                    color: "#d4af37"
                                }}
                            >
                                Premium Collection
                            </span>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div
                    className="
                        flex
                        items-center
                        justify-center
                        p-5
                        sm:p-10
                        lg:p-16
                    "
                >

                    <div className="w-full max-w-xl">

                        {/* Tabs */}
                        <div
                            className="
                                flex
                                rounded-2xl
                                p-1
                                mb-10
                                border
                                border-[#d4af37]/20
                                bg-[#111111]
                            "
                        >

                            <button
                                onClick={() => setActiveTab("login")}
                                className={`
                                    flex-1
                                    py-3
                                    rounded-xl
                                    lg:text-lg
                                    text-md
                                    font-semibold
                                    duration-300
                                    ${activeTab === "login"
                                        ? "bg-[#d4af37] text-black"
                                        : "text-white"
                                    }
                                `}
                            >
                                Login
                            </button>

                            <button
                                onClick={() => setActiveTab("register")}
                                className={`
                                    flex-1
                                    py-4
                                    rounded-xl
                                    lg:text-lg
                                    text-md
                                    font-semibold
                                    duration-300
                                    ${activeTab === "register"
                                        ? "bg-[#d4af37] text-black"
                                        : "text-white"
                                    }
                                `}
                            >
                                Register
                            </button>

                        </div>

                        {/* LOGIN */}
                        {activeTab === "login" && (

                            <div className="animate-in fade-in duration-500">

                                <h2
                                    className="
                                        text-5xl
                                        font-bold
                                        mb-3
                                    "
                                >
                                    Welcome Back
                                </h2>

                                <p className="text-gray-400 mb-10 text-lg">
                                    Login to continue shopping
                                </p>

                                <form className="space-y-6">

                                    {/* Email */}
                                    <div>

                                        <label className="text-sm text-gray-300 mb-3 block">
                                            Email Address
                                        </label>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                bg-[#111111]
                                                border
                                                border-[#d4af37]/20
                                                rounded-2xl
                                                px-5
                                            "
                                        >
                                            <Mail
                                                size={18}
                                                color="#d4af37"
                                            />

                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="
                                                    w-full
                                                    bg-transparent
                                                    outline-none
                                                    lg:py-4 py-3
                                                    text-white
                                                "
                                            />

                                        </div>

                                    </div>

                                    {/* Password */}
                                    <div>

                                        <label className="text-sm text-gray-300 mb-3 block">
                                            Password
                                        </label>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                bg-[#111111]
                                                border
                                                border-[#d4af37]/20
                                                rounded-2xl
                                                px-5
                                            "
                                        >
                                            <Lock
                                                size={18}
                                                color="#d4af37"
                                            />

                                            <input
                                                type="password"
                                                placeholder="Enter password"
                                                className="
                                                    w-full
                                                    bg-transparent
                                                    outline-none
                                                    lg:py-4 py-3
                                                    text-white
                                                "
                                            />

                                        </div>

                                    </div>

                                    {/* Button */}
                                    <button
                                        className="
                                            w-full
                                            mt-4
                                            lg:py-4 py-3
                                            rounded-2xl
                                            text-black
                                            font-bold
                                            text-lg
                                            flex
                                            items-center
                                            justify-center
                                            gap-3
                                            hover:scale-[1.01]
                                            duration-300
                                        "
                                        style={{
                                            background: "#d4af37"
                                        }}
                                    >
                                        Login
                                        <ArrowRight size={20} />
                                    </button>

                                </form>

                            </div>
                        )}

                        {/* REGISTER */}
                        {activeTab === "register" && (

                            <div className="animate-in fade-in duration-500">

                                <h2
                                    className="
                                        text-5xl
                                        font-bold
                                        mb-3
                                    "
                                >
                                    Create Account
                                </h2>

                                <p className="text-gray-400 mb-10 text-lg">
                                    Register to start shopping
                                </p>

                                <form className="space-y-6">

                                    {/* Name */}
                                    <div>

                                        <label className="text-sm text-gray-300 mb-3 block">
                                            Full Name
                                        </label>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                bg-[#111111]
                                                border
                                                border-[#d4af37]/20
                                                rounded-2xl
                                                px-5
                                            "
                                        >
                                            <User
                                                size={18}
                                                color="#d4af37"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Enter full name"
                                                className="
                                                    w-full
                                                    bg-transparent
                                                    outline-none
                                                    lg:py-4 py-3
                                                    text-white
                                                "
                                            />

                                        </div>

                                    </div>

                                    {/* Phone */}
                                    <div>

                                        <label className="text-sm text-gray-300 mb-3 block">
                                            Phone Number
                                        </label>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                bg-[#111111]
                                                border
                                                border-[#d4af37]/20
                                                rounded-2xl
                                                px-5
                                            "
                                        >
                                            <Phone
                                                size={18}
                                                color="#d4af37"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Enter phone number"
                                                className="
                                                    w-full
                                                    bg-transparent
                                                    outline-none
                                                    lg:py-4 py-3
                                                    text-white
                                                "
                                            />

                                        </div>

                                    </div>

                                    {/* Email */}
                                    <div>

                                        <label className="text-sm text-gray-300 mb-3 block">
                                            Email Address
                                        </label>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                bg-[#111111]
                                                border
                                                border-[#d4af37]/20
                                                rounded-2xl
                                                px-5
                                            "
                                        >
                                            <Mail
                                                size={18}
                                                color="#d4af37"
                                            />

                                            <input
                                                type="email"
                                                placeholder="Enter email"
                                                className="
                                                    w-full
                                                    bg-transparent
                                                    outline-none
                                                    lg:py-4 py-3
                                                    text-white
                                                "
                                            />

                                        </div>

                                    </div>

                                    {/* Password */}
                                    <div>

                                        <label className="text-sm text-gray-300 mb-3 block">
                                            Password
                                        </label>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                bg-[#111111]
                                                border
                                                border-[#d4af37]/20
                                                rounded-2xl
                                                px-5
                                            "
                                        >
                                            <Lock
                                                size={18}
                                                color="#d4af37"
                                            />

                                            <input
                                                type="password"
                                                placeholder="Create password"
                                                className="
                                                    w-full
                                                    bg-transparent
                                                    outline-none
                                                    lg:py-4 py-3
                                                    text-white
                                                "
                                            />

                                        </div>

                                    </div>

                                    {/* Button */}
                                    <button
                                        className="
                                            w-full
                                            mt-4
                                            lg:py-4 py-3
                                            rounded-2xl
                                            text-black
                                            font-bold
                                            text-lg
                                            flex
                                            items-center
                                            justify-center
                                            gap-3
                                            hover:scale-[1.01]
                                            duration-300
                                        "
                                        style={{
                                            background: "#d4af37"
                                        }}
                                    >
                                        Register
                                        <ArrowRight size={20} />
                                    </button>

                                </form>

                            </div>
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
}