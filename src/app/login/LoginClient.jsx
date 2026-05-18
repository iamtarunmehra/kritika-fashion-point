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

    const premiumGoldGradient = `
        linear-gradient(
            135deg,
            #4d3900 0%,
            #8c670a 18%,
            #d4af37 38%,
            #f5df8b 50%,
            #e6c766 58%,
            #c9971a 72%,
            #7a5a08 88%,
            #4d3900 100%
        )
    `;

    const PremiumIcon = ({ children }) => (
        <div
            className="
                relative
                min-w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                overflow-hidden
            "
            style={{
                background: premiumGoldGradient,
            }}
        >
            {children}
        </div>
    );

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
                background: `
                    radial-gradient(circle at top, rgba(212,175,55,0.08), transparent 30%),
                    linear-gradient(to bottom, #020202, #000000, #050505)
                `
            }}
        >

            {/* Glow */}
            <div
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
            />

            {/* Main Card */}
            <div
                className="
                    relative
                    w-full
                    max-w-7xl
                    rounded-[32]
                    overflow-hidden
                    border
                    backdrop-blur-xl
                    grid
                    lg:grid-cols-2
                "
                style={{
                    borderColor: "rgba(230,199,102,0.25)",
                    background: `
                        linear-gradient(
                            145deg,
                            rgba(5,5,5,0.96) 0%,
                            rgba(15,15,15,0.98) 45%,
                            rgba(26,20,5,1) 100%
                        )
                    `
                }}
            >

                {/* RIGHT */}
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
                                p-1.5
                                mb-10
                                border
                                bg-[#0b0b0b]
                            "
                            style={{
                                borderColor: "rgba(230,199,102,0.15)"
                            }}
                        >

                            <button
                                onClick={() => setActiveTab("login")}
                                className={`
                                    flex-1
                                    py-3
                                    rounded-xl
                                    text-md
                                    lg:text-lg
                                    font-semibold
                                    duration-300
                                    ${activeTab === "login"
                                        ? "text-black"
                                        : "text-[#f5df8b]"
                                    }
                                `}
                                style={
                                    activeTab === "login"
                                        ? { background: premiumGoldGradient }
                                        : {}
                                }
                            >
                                Login
                            </button>

                            <button
                                onClick={() => setActiveTab("register")}
                                className={`
                                    flex-1
                                    py-3
                                    rounded-xl
                                    text-md
                                    lg:text-lg
                                    font-semibold
                                    duration-300
                                    ${activeTab === "register"
                                        ? "text-black"
                                        : "text-[#f5df8b]"
                                    }
                                `}
                                style={
                                    activeTab === "register"
                                        ? { background: premiumGoldGradient }
                                        : {}
                                }
                            >
                                Register
                            </button>

                        </div>

                        {/* LOGIN */}
                        {activeTab === "login" &&

                            <LoginForm PremiumIcon={PremiumIcon} premiumGoldGradient={premiumGoldGradient} />
                        }



                        {/* REGISTER */}
                        {activeTab === 'register' && <RegisterForm />}

                    </div>

                </div>

                {/* LEFT */}
                <div
                    className="
                        
                        lg:flex
                        flex-col
                        justify-center
                        px-16
                        lg:py-20
                        py-10
                        relative
                        overflow-hidden
                        border-l
                    "
                    style={{
                        borderColor: "rgba(230,199,102,0.10)"
                    }}
                >

                    <div
                        className="
                            absolute
                            top-10
                            right-10
                            w-52
                            h-52
                            rounded-full
                            blur-3xl
                            opacity-20
                        "
                        style={{
                            background: "#d4af37"
                        }}
                    />

                    <div className="relative z-10">

                        <p
                            className="
                                uppercase
                                text-sm
                                mb-6
                            "
                            style={{
                                color: "#f5df8b",
                                letterSpacing: "8px"
                            }}
                        >
                            Kritika Fashion Point
                        </p>

                        <h1
                            className="
                                text-6xl
                                font-bold
                                leading-[1.15]
                                mb-8
                                text-[#f8e7a1]
                            "
                        >
                            Luxury Jewellery
                            <br />
                            Shopping
                            <br />
                            Experience
                        </h1>

                        <p
                            className="
                                text-[#b8b8b8]
                                text-lg
                                leading-9
                                max-w-lg
                            "
                        >
                            Login or create your account to access premium
                            jewellery collections, wishlist, orders and
                            exclusive fashion offers.
                        </p>

                        <div className="mt-14 flex items-center gap-5">

                            <div
                                className="w-16 h-[2]"
                                style={{
                                    background: premiumGoldGradient
                                }}
                            />

                            <span
                                className="
                                    uppercase
                                    text-sm
                                    text-[#f5df8b]
                                "
                                style={{
                                    letterSpacing: "6px"
                                }}
                            >
                                Premium Collection
                            </span>

                        </div>

                    </div>

                </div>



            </div>

        </section>
    );
}

export const LoginForm = ({ PremiumIcon, premiumGoldGradient }) => {
    return (
        <div className="animate-in fade-in duration-500">

            <h2
                className="
                                        text-3xl
                                        md:text-4xl
                                        lg:text-5xl
                                        font-bold
                                        mb-3
                                        text-[#f8e7a1]
                                    "
            >
                Welcome Back
            </h2>

            <p className="text-[#9e9e9e] mb-10 text-lg">
                Login to continue shopping
            </p>

            <form className="space-y-6">

                {/* Email */}
                <div>

                    <label className="text-sm text-[#d6d6d6] mb-3 block">
                        Email Address
                    </label>

                    <div
                        className="
                                                flex
                                                items-center
                                                gap-4
                                                bg-[#0b0b0b]
                                                border
                                                rounded-2xl
                                                px-5
                                                hover:border-[#e6c766]
                                                focus-within:border-[#f5df8b]
                                                duration-300
                                            "
                        style={{
                            borderColor: "rgba(230,199,102,0.18)"
                        }}
                    >

                        <PremiumIcon>
                            <Mail
                                size={17}
                                className="text-black"
                            />
                        </PremiumIcon>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="
                                                    w-full
                                                    bg-transparent
                                                    outline-none
                                                    lg:py-5 py-4
                                                    text-white
                                                    tracking-wider
                                                    text-lg
                                                    placeholder:text-[#8f8f8f]
                                                "
                        />

                    </div>

                </div>

                {/* Password */}
                <div>

                    <label className="text-sm text-[#d6d6d6] mb-3 block">
                        Password
                    </label>

                    <div
                        className="
                                                flex
                                                items-center
                                                gap-4
                                                bg-[#0b0b0b]
                                                border
                                                rounded-2xl
                                                px-5
                                                hover:border-[#e6c766]
                                                focus-within:border-[#f5df8b]
                                                duration-300
                                            "
                        style={{
                            borderColor: "rgba(230,199,102,0.18)"
                        }}
                    >

                        <PremiumIcon>
                            <Lock
                                size={17}
                                className="text-black"
                            />
                        </PremiumIcon>

                        <input
                            type="password"
                            placeholder="Enter password"
                            className="
                                                    w-full
                                                    bg-transparent
                                                    outline-none
                                                    lg:py-5 py-4
                                                    tracking-wider
                                                    text-lg
                                                    text-white
                                                    placeholder:text-[#8f8f8f]
                                                "
                        />

                    </div>

                </div>

                {/* Button */}
                <button
                    className="
                                            relative
                                            group
                                            overflow-hidden
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
                                            hover:scale-[1.015]
                                            duration-300
                                        "
                    style={{
                        background: premiumGoldGradient
                    }}
                >

                    <div
                        className="
                                                absolute
                                                top-0
                                                -left-full
                                                w-full
                                                h-full
                                                rotate-12
                                                group-hover:left-full
                                                duration-700
                                            "
                        style={{
                            background:
                                "linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)"
                        }}
                    />

                    <span className="relative z-10">
                        Login
                    </span>

                    <ArrowRight
                        size={20}
                        className="relative z-10"
                    />

                </button>

            </form>

        </div>
    )
}




export const RegisterForm = () => {

    const [showOtp, setShowOtp] = React.useState(false)

    return (
        <div
            className="
                w-full
                rounded-[30px]
                border
                overflow-hidden
                relative
                backdrop-blur-xl
                p-6
                sm:p-8
                lg:p-10
            "
            style={{
                borderColor: "rgba(212,175,55,0.18)",
                background: `
                    linear-gradient(
                        145deg,
                        rgba(8,8,8,0.98) 0%,
                        rgba(15,15,15,0.98) 35%,
                        rgba(28,20,5,0.98) 100%
                    )
                `,
                boxShadow: `
                    0 0 40px rgba(212,175,55,0.08),
                    inset 0 0 30px rgba(255,255,255,0.02)
                `
            }}
        >

            {/* Glow */}
            <div
                className="
                    absolute
                    -top-24
                    -right-24
                    w-72
                    h-72
                    rounded-full
                    blur-3xl
                    opacity-20
                    pointer-events-none
                "
                style={{
                    background: "rgba(212,175,55,0.15)"
                }}
            />

            {/* Heading */}
            <div className="relative z-10 mb-8">

                <p
                    className="
                        uppercase
                        tracking-[6px]
                        text-xs
                        mb-3
                    "
                    style={{
                        color: "#c9971a"
                    }}
                >
                    Premium Account
                </p>

                <h2
                    className="
                        text-3xl
                        sm:text-4xl
                        font-bold
                        leading-tight
                    "
                >
                    Create Your
                    <span
                        className="ml-3"
                        style={{
                            color: "#e6c766"
                        }}
                    >
                        Account
                    </span>
                </h2>

                <div
                    className="w-32 h-[2] mt-4 rounded-full"
                    style={{
                        background: `
                            linear-gradient(
                                to right,
                                #6a4f00,
                                #d4af37,
                                transparent
                            )
                        `
                    }}
                />
            </div>

            {/* Form */}
            <form className="relative z-10 space-y-6">

                {/* Full Name */}
                <div>

                    <label className="text-[#f5df8b] text-sm tracking-wide mb-3 block">
                        Full Name
                    </label>

                    <div
                        className="
                            flex
                            items-center
                            rounded-2xl
                            border
                            px-5
                            bg-[#0d0d0d]
                            hover:border-[#d4af37]
                            focus-within:border-[#e6c766]
                            duration-300
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.15)"
                        }}
                    >

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="
                                w-full
                                bg-transparent
                                outline-none
                                py-4
                                text-white
                                placeholder:text-gray-500
                            "
                        />

                    </div>

                </div>

                {/* Mobile */}
                <div>

                    <label className="text-[#f5df8b] text-sm tracking-wide mb-3 block">
                        Mobile Number
                    </label>

                    <div
                        className="
                            flex
                            items-center
                            rounded-2xl
                            border
                            px-5
                            bg-[#0d0d0d]
                            hover:border-[#d4af37]
                            focus-within:border-[#e6c766]
                            duration-300
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.15)"
                        }}
                    >

                        <input
                            type="text"
                            placeholder="Enter mobile number"
                            className="
                                w-full
                                bg-transparent
                                outline-none
                                py-4
                                text-white
                                placeholder:text-gray-500
                            "
                        />

                    </div>

                </div>

                {/* Email + OTP Button */}
                <div>

                    <label className="text-[#f5df8b] text-sm tracking-wide mb-3 block">
                        Email Address
                    </label>

                    <div className="grid sm:grid-cols-[1fr_150px] gap-4">

                        {/* Email */}
                        <div
                            className="
                                flex
                                items-center
                                rounded-2xl
                                border
                                px-5
                                bg-[#0d0d0d]
                                hover:border-[#d4af37]
                                focus-within:border-[#e6c766]
                                duration-300
                            "
                            style={{
                                borderColor: "rgba(212,175,55,0.15)"
                            }}
                        >

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="
                                    w-full
                                    bg-transparent
                                    outline-none
                                    py-4
                                    text-white
                                    placeholder:text-gray-500
                                "
                            />

                        </div>

                        {/* Send OTP */}
                        <button
                            type="button"
                            onClick={() => setShowOtp(true)}
                            className="
                                relative
                                overflow-hidden
                                rounded-2xl
                                font-semibold
                                text-black
                                cursor-pointer
                                hover:scale-[1.02]
                                active:scale-[0.98]
                                duration-300
                                min-h-[56]
                            "
                            style={{
                                background: `
                                    linear-gradient(
                                        135deg,
                                        #5c4300 0%,
                                        #8c670a 15%,
                                        #b8860b 35%,
                                        #d4af37 50%,
                                        #e6c766 62%,
                                        #c9971a 78%,
                                        #7a5a08 100%
                                    )
                                `
                            }}
                        >



                            <span className="relative z-10">
                                Send OTP
                            </span>

                        </button>

                    </div>

                </div>

                {/* OTP Input */}
                {
                    showOtp && (
                        <div className="animate-in fade-in duration-300 mt-4">

                            <label className="text-[#f5df8b] text-sm tracking-wide mb-3 block">
                                Enter OTP
                            </label>

                            <div
                                className="
                    flex
                    items-center
                    rounded-2xl
                    border
                    px-5
                    bg-[#0d0d0d]
                    hover:border-[#d4af37]
                    focus-within:border-[#e6c766]
                    duration-300
                "
                                style={{
                                    borderColor: "rgba(212,175,55,0.15)"
                                }}
                            >

                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    className="
                        w-full
                        bg-transparent
                        outline-none
                        py-4
                        text-white
                        tracking-[8px]
                        placeholder:text-gray-500
                    "
                                />

                            </div>

                        </div>
                    )
                }

                {/* password */}
                <div>

                    <label className="text-[#f5df8b] text-sm tracking-wide mb-3 block">
                        Create a Strong Password
                    </label>

                    <div
                        className="
                            flex
                            items-center
                            rounded-2xl
                            border
                            px-5
                            bg-[#0d0d0d]
                            hover:border-[#d4af37]
                            focus-within:border-[#e6c766]
                            duration-300
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.15)"
                        }}
                    >

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="
                                w-full
                                bg-transparent
                                outline-none
                                py-4
                                text-white
                                placeholder:text-gray-500
                            "
                        />

                    </div>

                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="
                        relative
                        overflow-hidden
                        w-full
                        py-4
                        rounded-2xl
                        font-bold
                        text-lg
                        text-black
                        mt-3
                        cursor-pointer
                        hover:scale-[1.01]
                        active:scale-[0.99]
                        duration-300
                    "
                    style={{
                        background: `
                            linear-gradient(
                                135deg,
                                #5c4300 0%,
                                #8c670a 15%,
                                #b8860b 35%,
                                #d4af37 50%,
                                #f5df8b 60%,
                                #c9971a 78%,
                                #7a5a08 100%
                            )
                        `,
                        boxShadow:
                            "0 0 30px rgba(212,175,55,0.18)"
                    }}
                >

                    {/* Shine */}
                    <div
                        className="
                            absolute
                            top-0
                            -left-full
                            w-full
                            h-full
                            rotate-12
                            hover:left-full
                            duration-1000
                        "
                        style={{
                            background:
                                "linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)"
                        }}
                    />

                    <span className="relative z-10">
                        Create Account
                    </span>

                </button>

            </form>

        </div>
    )
}