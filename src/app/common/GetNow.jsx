"use client"

import React, { useState } from "react";
import {
    X,
    Wallet,
    BadgeIndianRupee,
    MessageCircle,
    ShieldCheck
} from "lucide-react";

export default function GetNow({ getNowModel, setGetNowModel }) {

    const [QrCodeOpen, setQrCodeOpen] = useState(false)

    const [activePaymentOption, setActivePaymentOption] = useState(null)


    const HandleUpiPayment = () => {

        const isMobile =
            /Android|iPhone|iPad|iPod/i.test(
                navigator.userAgent
            );

        // const upiLink =
        //     "upi://pay?pa=mehratarun80@ybl&pn=Kritika Fashion Point&am=499&tn=Advance Payment&cu=INR";

        const upiLink =
            "upi://pay?pa=mehratarun80@ybl&pn=Kritika%20Fashion%20Point&am=499&tn=Advance%20Payment&cu=INR";

        if (isMobile) {
            window.location.href = upiLink;
        } else {
            setQrCodeOpen(true);
        }
    }

    return (
        <>
            {/* Backdrop */}
            <QrCodeModel QrCodeOpen={QrCodeOpen} setQrCodeOpen={setQrCodeOpen} />
            <div
                onClick={() => setGetNowModel(false)}
                className={`
                    fixed inset-0 z-110
                    bg-black/5 backdrop-blur-sm
                    duration-300
                    ${getNowModel
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
                `}
            />

            {/* Modal */}
            <div
                className={`
                    fixed top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    z-120
                    lg:w-[500]
                    sm:w-[90%]
                    w-full
                    bg-black
                    border
                    sm:rounded-[32]
                    overflow-hidden
                    duration-300
                    origin-center
                    ${getNowModel
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 pointer-events-none"
                    }
                `}
                style={{
                    borderColor: "#d4af37",
                    boxShadow: "0 0 40px rgba(212,175,55,0.18)",
                }}
            >

                {/* Top Gradient */}
                <div
                    className="h-1 w-full"
                    style={{
                        background:
                            "linear-gradient(to right,#8a6a12,#d4af37,#fff2b3,#b8860b)"
                    }}
                />

                <div className="p-7">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">

                        <div>
                            <h2
                                className="lg:text-3xl text-2xl font-bold"
                                style={{
                                    color: "#f5d97b"
                                }}
                            >
                                Complete Your Order
                            </h2>

                            <p className="text-gray-400 mt-2 text-sm">
                                Choose your preferred payment option
                            </p>
                        </div>

                        {/* Close */}
                        <button
                            onClick={() => setGetNowModel(false)}
                            className="
                                w-11 h-11 rounded-full
                                flex items-center justify-center
                                bg-white/5 hover:bg-white/10
                                duration-200 cursor-pointer  hover:rotate-90
                            "
                        >
                            <X
                                size={22}
                                color="#f5d97b"
                            />
                        </button>

                    </div>

                    {/* Product Summary */}
                    <div
                        className="
                            rounded-2xl
                            border
                            p-3
                            mb-7
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.25)",
                            background:
                                "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.01))"
                        }}
                    >

                        <div className="flex items-center justify-between">

                            <div>
                                <h3
                                    className="text-lg font-semibold"
                                    style={{
                                        color: "#f5d97b"
                                    }}
                                >
                                    Premium Jewellery Set
                                </h3>

                                <p className="text-gray-400 text-sm mt-1">
                                    Luxury Collection
                                </p>
                            </div>

                            <h2
                                className="text-2xl font-bold"
                                style={{
                                    color: "#d4af37"
                                }}
                            >
                                ₹2,499
                            </h2>

                        </div>

                    </div>

                    {/* Payment Options */}
                    <div className="space-y-4">

                        {/* Advance Payment */}
                        <button
                            onClick={HandleUpiPayment}
                            className="
                                w-full
                                rounded-2xl
                                border
                                p-3
                                flex items-center justify-between
                                hover:scale-[1.02]
                                duration-300
                                cursor-pointer
                                group
                            "
                            style={{
                                borderColor: "#d4af37",
                                background:
                                    "linear-gradient(to right, rgba(212,175,55,0.08), transparent)"
                            }}
                        >

                            <div

                                className="flex items-center gap-4">

                                <div
                                    className="
                                        w-14 h-14 rounded-full
                                        flex items-center justify-center
                                    "
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#8a6a12,#d4af37,#fff2b3)"
                                    }}
                                >
                                    <Wallet color="#000" />
                                </div>

                                <div className="text-left"

                                >

                                    <h3


                                        className="font-bold text-lg"
                                        style={{
                                            color: "#f5d97b"
                                        }}
                                    >
                                        Pay Advance
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        Book product with partial payment
                                    </p>

                                </div>

                            </div>

                            <span
                                className="font-bold text-lg"
                                style={{
                                    color: "#d4af37"
                                }}
                            >
                                ₹499
                            </span>

                        </button>

                        {/* Full Payment */}
                        <button
                            onClick={HandleUpiPayment}
                            className="
                                w-full
                                rounded-2xl
                                p-3
                                flex items-center justify-between
                                hover:scale-[1.02]
                                duration-300
                                cursor-pointer
                                group
                                overflow-hidden
                                relative
                            "
                            style={{
                                background:
                                    "linear-gradient(to right,#8a6a12,#b8860b,#d4af37,#fff2b3,#d4af37)"
                            }}
                        >

                            <div className="flex items-center gap-4 relative z-10">

                                <div
                                    className="
                                        w-14 h-14 rounded-full
                                        bg-black/20
                                        flex items-center justify-center
                                    "
                                >
                                    <BadgeIndianRupee color="#000" />
                                </div>

                                <div className="text-left">

                                    <h3 className="font-bold text-lg text-black">
                                        Pay Full Payment
                                    </h3>

                                    <p className="text-black/70 text-sm">
                                        Instant order confirmation
                                    </p>

                                </div>

                            </div>

                            <span className="font-bold text-2xl text-black relative z-10">
                                ₹2,499
                            </span>

                        </button>

                        {/* WhatsApp */}
                        <button
                            className="
                                w-full
                                rounded-2xl
                                border
                                p-3
                                flex items-center justify-between
                                hover:scale-[1.02]
                                duration-300
                                cursor-pointer
                            "
                            style={{
                                borderColor: "#25D366",
                                background:
                                    "linear-gradient(to right, rgba(37,211,102,0.15), transparent)"
                            }}
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        w-14 h-14 rounded-full
                                        bg-[#25D366]
                                        flex items-center justify-center
                                    "
                                >
                                    <MessageCircle color="#fff" />
                                </div>

                                <div className="text-left">

                                    <h3 className="font-bold text-lg text-white">
                                        Order via WhatsApp
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        Talk directly with our team
                                    </p>

                                </div>

                            </div>

                            <span className="bg-[#25D366] text-white px-4 py-1 rounded font-semibold">
                                Send
                            </span>

                        </button>

                    </div>

                    {/* Secure Info */}

                    <div className="lg:block hidden">
                        <div
                            className="
                        
                            mt-7
                            flex items-center gap-3
                            rounded-xl
                            p-4
                        "
                            style={{
                                background:
                                    "rgba(212,175,55,0.08)"
                            }}
                        >

                            <ShieldCheck
                                size={22}
                                color="#d4af37"
                            />

                            <p className=" text-sm text-gray-300 leading-6">
                                100% secure checkout with premium customer support.
                            </p>

                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}



export function QrCodeModel({ QrCodeOpen, setQrCodeOpen }) {
    return (
        <>
            {/* Backdrop */}
            <div
                onClick={() => setQrCodeOpen(false)}
                className={`
                    fixed inset-0 z-125
                    bg-black/80 backdrop-blur-sm
                    duration-300
                    ${QrCodeOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
                `}
            />

            {/* QR Modal */}
            <div
                className={`
                    fixed top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    z-130
                    duration-300
                    ${QrCodeOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 pointer-events-none"
                    }
                `}
            >
                <div className="lg:w-[520] w-full h-fit bg-[#0D0D0D] rounded-2xl p-10 relative">

                    <div>
                        <div className="relative rounded-3xl border border-amber-500/20 bg-black p-6 overflow-hidden shadow-[0_0_30px_rgba(251,191,36,0.08)]">

                            {/* Close Button */}
                            <button
                                onClick={() => setQrCodeOpen(false)}
                                className="absolute top-4 right-4 p-2 cursor-pointer rounded-full border border-amber-400/30 bg-zinc-900 hover:bg-amber-400 hover:text-black duration-300"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Brand */}
                            <div className="text-center mb-6">
                                <p className="text-amber-400 text-xs tracking-[5px] uppercase mb-2">
                                    Premium Jewellery
                                </p>

                                <h1 className="text-3xl font-bold tracking-wide text-white">
                                    KRITIKA <span className="text-amber-400">FASHION POINT</span>
                                </h1>

                                <p className="text-zinc-400 text-sm mt-3">
                                    Scan & Pay for Your Exclusive Order
                                </p>
                            </div>

                            {/* QR */}
                            <div className="bg-white rounded-2xl p-4 w-fit mx-auto">
                                <img
                                    src="/other/qr.png"
                                    alt="QR Code"
                                    className="w-[240] h-[240] object-contain"
                                />
                            </div>

                            {/* Footer */}
                            <p className="text-center text-zinc-500 text-xs tracking-wide mt-5">
                                Secure • Trusted • Quick Payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}