import {
    Mail,
    Lock,
    User,
    Phone,
    ArrowRight
} from "lucide-react";

import React, { useState } from "react";

export const RegisterForm = () => {

    const [showOtp, setShowOtp] = useState(false)

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