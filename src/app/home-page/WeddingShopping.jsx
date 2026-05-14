import React from 'react'

export default function WeddingShopping() {
    return (

        <section className="w-screen overflow-x-hidden h-full lg:py-16 py-6 bg-black overflow-hidden relative">
            <div className='max-w-330 mx-auto lg:px-6 px-4'>
                {/* Heading */}
                <h1 className="relative flex flex-col items-center justify-center lg:mb-14 mb-8">

                    {/* Main Heading */}
                    <span
                        className="relative z-10 lg:text-4xl text-3xl font-extrabold tracking-wide inline-block bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #7a5a0a 0%, #b8860b 25%, #d4af37 50%, #c9971a 75%, #8a6a12 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            display: "inline-block",
                            fontFamily: "serif",
                            textShadow: "0px 2px 10px rgba(212,175,55,0.22)"
                        }}
                    >
                        Wedding Special
                    </span>

                    {/* Glow Effect */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 w-72 h-16 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #d4af37, #fff2b3, #d4af37)"
                        }}
                    />

                    {/* Decorative Line */}
                    <div className="relative mt-5 w-full flex items-center justify-center">

                        {/* Left Line */}
                        <div
                            className="h-px lg:w-52 w-20"
                            style={{
                                background:
                                    "linear-gradient(to right, transparent, #d4af37)"
                            }}
                        />

                        {/* Diamond Center */}
                        <div
                            className="mx-4 w-3 h-3 rotate-45 rounded-sm"
                            style={{
                                background:
                                    "linear-gradient(135deg, #fff2b3, #d4af37, #8a6a12)",
                                boxShadow: "0 0 12px rgba(212,175,55,0.6)"
                            }}
                        />

                        {/* Right Line */}
                        <div
                            className="h-px lg:w-52 w-20"
                            style={{
                                background:
                                    "linear-gradient(to left, transparent, #d4af37)"
                            }}
                        />
                    </div>
                </h1>
            </div>
        </section>
    )
}
