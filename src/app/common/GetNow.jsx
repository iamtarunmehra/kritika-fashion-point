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


    return (
        <>
            {/* Backdrop */}
            <QrCodeModel QrCodeOpen={QrCodeOpen} setQrCodeOpen={setQrCodeOpen} />
            <div
                onClick={() => setGetNowModel(false)}
                className={`
                    fixed inset-0 z-110
                    bg-black/70 backdrop-blur-sm
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
                    w-[92%]
                    bg-black
                    border
                    rounded-[32]
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
                                duration-300 cursor-pointer
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

                            <div className="flex items-center gap-4">

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
                                    onClick={() => {
                                        const isMobile =
                                            /Android|iPhone|iPad|iPod/i.test(
                                                navigator.userAgent
                                            );

                                        const upiLink =
                                            "upi://pay?pa=mehratarun80@ybl&pn=Kritika Fashion Point&am=499&tn=Advance Payment&cu=INR";

                                        if (isMobile) {
                                            window.location.href = upiLink;
                                        } else {
                                            setQrCodeOpen(true);
                                        }
                                    }}
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

                        <p className="text-sm text-gray-300 leading-6">
                            100% secure checkout with premium customer support.
                        </p>

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
                <div className="w-[300] h-[300] bg-white rounded-2xl p-4 relative">

                    {/* Close */}
                    <button
                        onClick={() => setQrCodeOpen(false)}
                        className="absolute top-3 right-3"
                    >
                        <X className="text-black" />
                    </button>

                    {/* QR Image */}
                    <img
                        src="/qr.png"
                        alt="QR Code"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </>
    );
}