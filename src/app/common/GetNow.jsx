"use client"

import React, { useState } from "react";
import {
    X,
    Wallet,
    BadgeIndianRupee,
    MessageCircle,
    ShieldCheck,
    Check
} from "lucide-react";


import {
    Building2,
    User,
    Landmark,
    CreditCard,
    Copy,
} from "lucide-react";



export default function GetNow({ getNowModel, setGetNowModel }) {


    const [paymentOptionModel, setPaymentOptionModel] = useState(false)




    const HandleUpiPayment = () => {

        const isMobile =
            /Android|iPhone|iPad|iPod/i.test(
                navigator.userAgent
            );

        // const upiLink =
        //     "upi://pay?pa=mehratarun80@ybl&pn=Kritika Fashion Point&am=499&tn=Advance Payment&cu=INR";

        // const upiLink =
        //     "upi://pay?pa=mehratarun80@ybl&pn=Kritika%20Fashion%20Point&am=499&tn=Advance%20Payment&cu=INR";

        const upiLink =
            "upi://pay?pa=mehratarun80@ybl&pn=Kritika%20Fashion%20Point&am=499&tn=Advance%20Payment%20for%20Exclusive%20Jewellery%20Order.%20Premium%20fashion%20accessories%20and%20bridal%20collection.%20Thank%20you%20for%20choosing%20Kritika%20Fashion%20Point.&cu=INR";

        if (isMobile) {
            window.location.href = upiLink;
        } else {
            setQrCodeOpen(true);
        }
    }

    return (
        <>

            {/* payment option model */}
            <PaymentOption paymentOptionModel={paymentOptionModel} setPaymentOptionModel={setPaymentOptionModel} />

            {/* Backdrop */}
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
                            onClick={() => setPaymentOptionModel(true)}
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
                                        w-10 h-10 sm:w-14 sm:h-14 rounded-full
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
                                className="font-bold text-2xl"
                                style={{
                                    color: "#d4af37"
                                }}
                            >
                                ₹499
                            </span>

                        </button>

                        {/* Full Payment */}
                        <button
                            onClick={() => setPaymentOptionModel(true)}
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
                                        w-10 h-10 sm:w-14 sm:h-14 rounded-full
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
                                        w-10 h-10 sm:w-14 sm:h-14 rounded-full
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


export function PaymentOption({ paymentOptionModel, setPaymentOptionModel }) {

    const [bankTransferModel, setBankTransferModel] = useState(null)
    const [QrCodeOpen, setQrCodeOpen] = useState(false)


    return (
        <>

            <QrCodeModel QrCodeOpen={QrCodeOpen} setQrCodeOpen={setQrCodeOpen} />
            <BankTransferModel bankTransferModel={bankTransferModel} setBankTransferModel={setBankTransferModel} />


            {/* Overlay */}
            <div
                onClick={() => setPaymentOptionModel(false)}
                className={`
                    fixed inset-0 z-125
                    bg-black/80 backdrop-blur-sm
                    duration-300
                    ${paymentOptionModel
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
                    z-130
                    duration-300
                    w-[95%] max-w-[520]
                    ${paymentOptionModel
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90 pointer-events-none"
                    }
                `}
            >
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[32]
                        border
                        p-7
                        md:p-8
                    "
                    style={{
                        borderColor: "rgba(212,175,55,0.18)",
                        background: `
                            linear-gradient(
                                180deg,
                                #050505 0%,
                                #0b0b0b 45%,
                                #120d02 100%
                            )
                        `,
                        boxShadow: "0 0 60px rgba(212,175,55,0.08)"
                    }}
                >

                    {/* Glow */}
                    <div
                        className="
                            absolute
                            top-[-120]
                            right-[-80]
                            w-[260]
                            h-[260]
                            rounded-full
                            blur-[120px]
                            opacity-10
                            pointer-events-none
                        "
                        style={{
                            background: "#d4af37"
                        }}
                    />

                    {/* Close */}
                    <button
                        onClick={() => setPaymentOptionModel(false)}
                        className="
                            absolute
                            top-5
                            right-5
                            w-10
                            h-10
                            rounded-full
                            border
                            flex
                            items-center
                            justify-center
                            text-[#f5df8b]
                            hover:bg-[#d4af37]
                            hover:text-black
                            duration-300
                            cursor-pointer
                        "
                        style={{
                            borderColor: "rgba(245,223,139,0.18)",
                            background: "rgba(255,255,255,0.03)"
                        }}
                    >
                        ✕
                    </button>

                    {/* Heading */}
                    <div className="text-center mb-8">

                        <p className="text-[#c9971a] tracking-[5px] uppercase text-xs mb-3">
                            Secure Payment
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Choose
                            <span className="text-[#f5df8b] ml-2">
                                Payment Method
                            </span>
                        </h2>

                        <div className="flex items-center justify-center gap-3 mt-5">

                            <div
                                className="w-16 h-[1]"
                                style={{
                                    background:
                                        "linear-gradient(to right, transparent, #d4af37)"
                                }}
                            />

                            <div
                                className="w-2 h-2 rounded-full"
                                style={{
                                    background: "#d4af37",
                                    boxShadow: "0 0 15px #d4af37"
                                }}
                            />

                            <div
                                className="w-16 h-[1]"
                                style={{
                                    background:
                                        "linear-gradient(to left, transparent, #d4af37)"
                                }}
                            />

                        </div>

                    </div>

                    {/* Options */}
                    <div className="space-y-5">

                        {/* UPI */}
                        <button
                            onClick={() => {
                                HandleUpiPayment()
                                setQrCodeOpen(true)
                            }

                            }
                            className="
                                w-full
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                p-5
                                text-left
                                cursor-pointer
                                duration-300
                                hover:-translate-y-1
                            "
                            style={{
                                borderColor: "rgba(212,175,55,0.18)",
                                background: `
                                    linear-gradient(
                                        to bottom,
                                        rgba(255,255,255,0.03),
                                        rgba(255,255,255,0.01)
                                    )
                                `
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
                                    group-hover:left-full
                                    duration-1000
                                "
                                style={{
                                    background:
                                        "linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent)"
                                }}
                            />

                            <div className="relative z-10 flex items-center gap-5">

                                <div
                                    className="
                                        min-w-[65]
                                        h-[65]
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        text-3xl
                                    "
                                    style={{
                                        background: `
                                            linear-gradient(
                                                135deg,
                                                #4d3900 0%,
                                                #7a5a08 20%,
                                                #d4af37 50%,
                                                #fff2b3 70%,
                                                #7a5a08 100%
                                            )
                                        `
                                    }}
                                >
                                    💳
                                </div>

                                <div>
                                    <h3 className="text-[#f5df8b] text-xl font-bold tracking-wide">
                                        Pay with UPI / Scanner
                                    </h3>

                                    <p className="text-gray-400 text-sm mt-2 leading-6">
                                        Fast & secure payment using any UPI app
                                        or scan QR code instantly.
                                    </p>
                                </div>

                            </div>

                        </button>

                        {/* Bank Transfer */}
                        <button
                            onClick={() => setBankTransferModel(true)}
                            className="
                                w-full
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                p-5
                                text-left
                                cursor-pointer
                                duration-300
                                hover:-translate-y-1
                            "
                            style={{
                                borderColor: "rgba(212,175,55,0.18)",
                                background: `
                                    linear-gradient(
                                        to bottom,
                                        rgba(255,255,255,0.03),
                                        rgba(255,255,255,0.01)
                                    )
                                `
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
                                    group-hover:left-full
                                    duration-1000
                                "
                                style={{
                                    background:
                                        "linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent)"
                                }}
                            />

                            <div className="relative z-10 flex items-center gap-5">

                                <div
                                    className="
                                        min-w-[65]
                                        h-[65]
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        text-3xl
                                    "
                                    style={{
                                        background: `
                                            linear-gradient(
                                                135deg,
                                                #4d3900 0%,
                                                #7a5a08 20%,
                                                #d4af37 50%,
                                                #fff2b3 70%,
                                                #7a5a08 100%
                                            )
                                        `
                                    }}
                                >
                                    🏦
                                </div>

                                <div>
                                    <h3 className="text-[#f5df8b] text-xl font-bold tracking-wide">
                                        Pay with Bank Transfer
                                    </h3>

                                    <p className="text-gray-400 text-sm mt-2 leading-6">
                                        Transfer payment directly to our bank
                                        account with complete security.
                                    </p>
                                </div>

                            </div>

                        </button>

                    </div>

                    {/* Footer */}
                    <p className="text-center text-gray-500 text-xs tracking-wide mt-7">
                        100% Secure • Trusted Payment Gateway
                    </p>

                </div>
            </div>
        </>
    )
}


export function QrCodeModel({ QrCodeOpen, setQrCodeOpen }) {
    return (
        <>
            {/* Backdrop */}
            <div
                onClick={() => setQrCodeOpen(false)}
                className={`
                    fixed inset-0 z-130
                    bg-black/90 backdrop-blur-md
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
                    z-140
                    duration-500
                    ${QrCodeOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 pointer-events-none"
                    }
                `}
            >
                <div
                    className="
                        lg:w-[520]
                        w-[95vw]
                        rounded-[32]
                        p-[1]
                        relative
                        overflow-hidden
                    "
                    style={{
                        background: `
                            linear-gradient(
                                135deg,
                                #4d3900 0%,
                                #8c670a 18%,
                                #d4af37 38%,
                                #f5df8b 50%,
                                #c9971a 72%,
                                #4d3900 100%
                            )
                        `,
                        boxShadow: "0 0 60px rgba(212,175,55,0.15)"
                    }}
                >

                    {/* Main Box */}
                    <div
                        className="
                            bg-[#050505]
                            rounded-[31px]
                            lg:p-10
                            p-6
                            relative
                            overflow-hidden
                        "
                    >

                        {/* Glow Effects */}
                        <div
                            className="
                                absolute
                                top-[-80]
                                right-[-80]
                                w-55
                                h-55
                                rounded-full
                                blur-[120px]
                                opacity-20
                            "
                            style={{
                                background: "#d4af37"
                            }}
                        />

                        <div
                            className="
                                absolute
                                -bottom-25
                                -left-25
                                w-60
                                h-60
                                rounded-full
                                blur-[120px]
                                opacity-10
                            "
                            style={{
                                background: "#f5df8b"
                            }}
                        />

                        {/* Border Shine */}
                        <div
                            className="
                                absolute
                                top-0
                                -left-full
                                w-full
                                h-full
                                rotate-12
                                animate-[shine_1s_linear_infinite]
                            "
                            style={{
                                background:
                                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent)"
                            }}
                        />

                        {/* Close Button */}
                        <button
                            onClick={() => setQrCodeOpen(false)}
                            className="
                                absolute
                                top-5
                                right-5
                                w-10
                                h-10
                                rounded-full
                                border
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                duration-300
                                hover:rotate-90
                                hover:scale-110
                            "
                            style={{
                                borderColor: "rgba(245,223,139,0.25)",
                                background:
                                    "linear-gradient(to bottom, #111, #050505)",
                                color: "#f5df8b"
                            }}
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Brand */}
                        <div className="text-center mb-8 relative z-10">

                            <p
                                className="
                                    text-xs
                                    tracking-[6px]
                                    uppercase
                                    mb-3
                                "
                                style={{
                                    color: "#d4af37"
                                }}
                            >
                                Premium Jewellery
                            </p>

                            <h1
                                className="
                                    lg:text-4xl
                                    text-3xl
                                    font-extrabold
                                    tracking-[2px]
                                "
                                style={{
                                    color: "#fff2b3",
                                    textShadow:
                                        "0 0 20px rgba(245,223,139,0.15)"
                                }}
                            >
                                KRITIKA{" "}
                                <span style={{ color: "#d4af37" }}>
                                    FASHION POINT
                                </span>
                            </h1>

                            <div className="flex items-center justify-center gap-3 mt-5">

                                <div
                                    className="w-14 h-[1]"
                                    style={{
                                        background:
                                            "linear-gradient(to right, transparent, #d4af37)"
                                    }}
                                />

                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{
                                        background: "#d4af37",
                                        boxShadow:
                                            "0 0 15px rgba(212,175,55,0.8)"
                                    }}
                                />

                                <div
                                    className="w-14 h-[1]"
                                    style={{
                                        background:
                                            "linear-gradient(to left, transparent, #d4af37)"
                                    }}
                                />

                            </div>

                            <p className="text-zinc-400 text-sm mt-5 tracking-wide">
                                Scan & Pay for Your Exclusive Order
                            </p>

                        </div>

                        {/* QR Section */}
                        <div
                            className="
                                relative
                                w-fit
                                mx-auto
                                p-[2]
                                rounded-[28]
                            "
                            style={{
                                background: `
                                    linear-gradient(
                                        135deg,
                                        #4d3900,
                                        #d4af37,
                                        #fff2b3,
                                        #b8860b
                                    )
                                `,
                                boxShadow:
                                    "0 0 40px rgba(212,175,55,0.18)"
                            }}
                        >

                            <div
                                className="
                                    bg-[#0b0b0b]
                                    rounded-[26px]
                                    p-5
                                    relative
                                    overflow-hidden
                                "
                            >

                                {/* Inner Glow */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        opacity-10
                                    "
                                    style={{
                                        background:
                                            "radial-gradient(circle at top, rgba(245,223,139,0.3), transparent 70%)"
                                    }}
                                />

                                <div className="bg-white rounded-2xl p-4 relative z-10">
                                    <img
                                        src="/other/qr.png"
                                        alt="QR Code"
                                        className="
                                            lg:w-[260]
                                            lg:h-[260]
                                            w-[220]
                                            h-[220]
                                            object-contain
                                        "
                                    />
                                </div>

                            </div>

                        </div>

                        {/* Footer */}
                        <div className="mt-7 text-center relative z-10">

                            <p
                                className="
                                    text-xs
                                    tracking-[4px]
                                    uppercase
                                "
                                style={{
                                    color: "#b8860b"
                                }}
                            >
                                Secure • Trusted • Quick Payment
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}


export function BankTransferModel({
    bankTransferModel,
    setBankTransferModel
}) {

    const bankDetails = {
        accountName: "Kritika Fashion Point",
        bankName: "State Bank of India",
        accountNumber: "XXXX XXXX XXXX",
        ifsc: "SBIN0000000",
    };

    const copyText = async (text) => {

        try {

            await navigator.clipboard.writeText(text);

            setCopyMessage(true)

            setTimeout(() => {
                setCopyMessage(false)
            }, 2000)

        } catch (err) {

            // fallback copy method
            const textArea = document.createElement("textarea");

            textArea.value = text;

            document.body.appendChild(textArea);

            textArea.select();

            document.execCommand("copy");

            document.body.removeChild(textArea);

            setCopyMessage(true)

            setTimeout(() => {
                setCopyMessage(false)
            }, 2000)
        }
    };

    const [copyMessage, setCopyMessage] = useState(false)

    return (
        <>
            <CopyMessageText copyMessage={copyMessage} setCopyMessage={setCopyMessage} />
            {/* Backdrop */}
            <div
                onClick={() => setBankTransferModel(false)}
                className={`
                    fixed inset-0 z-120
                    bg-black/80 backdrop-blur-sm
                    duration-300
                    ${bankTransferModel
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"}
                `}
            />

            {/* Modal */}
            <div
                className={`
                    fixed top-1/2 left-1/2 z-140
                    sm:w-[95%] w-full max-w-[520]
                    -translate-x-1/2 -translate-y-1/2
                    rounded-3xl overflow-hidden
                    border border-amber-400/30
                    bg-black text-white
                    shadow-[0_0_40px_rgba(251,191,36,0.15)]
                    duration-300
                    ${bankTransferModel
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90 pointer-events-none"}
                `}
            >

                {/* Golden Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 via-transparent to-yellow-300/10 pointer-events-none" />

                {/* Header */}
                <div className="relative flex items-center justify-between px-6 sm:py-4 py-2 border-b border-amber-400/20">
                    <div>
                        <h2 className="text-2xl font-bold tracking-wide text-amber-200">
                            Bank Transfer
                        </h2>

                        <p className="text-sm sm:block hidden text-amber-100/70 mt-1">
                            Secure direct bank payment for your jewellery order
                        </p>
                    </div>

                    <button
                        onClick={() => setBankTransferModel(false)}
                        className="w-10 h-10 rounded-full border border-amber-400/20 flex items-center justify-center hover:bg-amber-400/10 duration-300"
                    >
                        <X size={20} className="text-amber-200" />
                    </button>
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-5">

                    {/* Account Holder */}
                    <div className="border border-amber-400/20 rounded-2xl px-4 py-3 bg-white/3">
                        <div className="flex items-center gap-3 mb-2">
                            <User className="text-amber-300" size={20} />
                            <h3 className="text-amber-200 font-semibold">
                                Account Holder
                            </h3>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white tracking-wide">
                                {bankDetails.accountName}
                            </p>

                            <button
                                onClick={() => copyText(bankDetails.accountName)}
                                className="text-amber-300 hover:text-amber-200 duration-300 cursor-pointer hover:scale-110"
                            >
                                <Copy size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Bank Name */}
                    <div className="border border-amber-400/20 rounded-2xl px-4 py-3 bg-white/3">
                        <div className="flex items-center gap-3 mb-2">
                            <Building2 className="text-amber-300" size={20} />
                            <h3 className="text-amber-200 font-semibold">
                                Bank Name
                            </h3>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white tracking-wide">
                                {bankDetails.bankName}
                            </p>

                            <button
                                onClick={() => copyText(bankDetails.bankName)}
                                className="text-amber-300 hover:text-amber-200 duration-300 cursor-pointer hover:scale-110"
                            >
                                <Copy size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Account Number */}
                    <div className="border border-amber-400/20 rounded-2xl px-4 py-3 bg-white/3">
                        <div className="flex items-center gap-3 mb-2">
                            <CreditCard className="text-amber-300" size={20} />
                            <h3 className="text-amber-200 font-semibold">
                                Account Number
                            </h3>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white tracking-widest">
                                {bankDetails.accountNumber}
                            </p>

                            <button
                                onClick={() => {
                                    copyText(bankDetails.accountNumber)
                                    setCopyMessage(true)
                                }}
                                className="text-amber-300 hover:text-amber-200 duration-300 cursor-pointer hover:scale-110"
                            >
                                <Copy size={18} />
                            </button>
                        </div>
                    </div>

                    {/* IFSC */}
                    <div className="border border-amber-400/20 rounded-2xl px-4 py-3 bg-white/3">
                        <div className="flex items-center gap-3 mb-2">
                            <Landmark className="text-amber-300" size={20} />
                            <h3 className="text-amber-200 font-semibold">
                                IFSC Code
                            </h3>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white tracking-widest">
                                {bankDetails.ifsc}
                            </p>

                            <button
                                onClick={() => copyText(bankDetails.ifsc)}
                                className="text-amber-300 hover:text-amber-200 duration-300 cursor-pointer hover:scale-110"
                            >
                                <Copy size={18} />
                            </button>
                        </div>
                    </div>


                    {/* Security Note */}
                    <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 flex gap-3">
                        <ShieldCheck className="text-green-400 shrink-0 mt-1" size={22} />

                        <div>
                            <p className="text-green-300 font-semibold">
                                Secure Payment
                            </p>

                            <p className="text-sm text-green-100/70 mt-1 leading-relaxed">
                                After completing your payment, share the payment
                                screenshot with our support team for quick order
                                confirmation.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}




export function CopyMessageText({ copyMessage, setCopyMessage }) {

    return (
        <div
            className={`
                fixed top-6 right-6
                z-200
                duration-300
                ${copyMessage
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5 pointer-events-none"}
            `}
        >
            <div className="
                flex items-center gap-3
                bg-black border border-amber-400/30
                px-5 py-3 rounded-2xl
                shadow-[0_0_25px_rgba(251,191,36,0.15)]
                backdrop-blur-md
            ">
                <div className="
                    w-8 h-8 rounded-full
                    bg-amber-400/10
                    flex items-center justify-center
                ">
                    <Check size={18} className="text-amber-300" />
                </div>

                <p className="text-amber-100 tracking-wide text-sm font-medium">
                    Text Copied Successfully
                </p>
            </div>
        </div>
    );
}
