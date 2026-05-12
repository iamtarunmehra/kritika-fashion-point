import Link from "next/link";
import { gold } from "../colors/color";

export default function LuxuryGlowBanner() {
    return (
        <div className="bg-black pb-10 w-full lg:h-[85vh] md:h-[70vh] sm:h-[50vh] h-[40vh]">
            <section style={{
                backgroundImage: "url('/banner/b4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
                className="w-full lg:pb-10 mb-10 lg:h-[60vh] md:h-[60vh] sm:h-[40vh] h-[30vh] py-16 lg:py-24 overflow-hidde n relative z-40">
                <div className="absolute top-0 left-0 bg-linear-to-t from-black via-black/80 to-black/5 w-full h-full">

                </div>
                <div className="text-white absolute top-3/5 left-1/2 -translate-x-1/2 z-20 text-center w-full px-4">

                    {/* Premium Tag */}
                    <div
                        style={{
                            borderColor: gold.base,
                            color: gold.light,
                            background: "rgba(255,255,255,0.08)",
                            boxShadow: `0 0 30px ${gold.base}30`
                        }}
                        className="inline-flex items-center gap-2 border px-5 py-2 rounded-full backdrop-blur-md mb-5 lg:text-sm text-[10px] tracking-[4px] uppercase font-medium"
                    >
                        ✨ Premium Luxury Collection
                    </div>

                    {/* Main Heading */}
                    <h1
                        style={{
                            background: `linear-gradient(to right, ${gold.light}, ${gold.base}, #fff7d6, ${gold.base})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "0 0 25px rgba(212,175,55,0.35)"
                        }}
                        className="lg:text-6xl md:text-5xl text-2xl tracking-widest font-extrabold tracking leading-tight"
                    >
                        Luxury Artificial
                        <span className="block lg:mt-2 mt-1 ">
                            Jewellery Accessories
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        style={{ color: gold.light }}
                        className="text-center mt-4 lg:text-lg md:text-base text-sm tracking-[5px] uppercase font-light"
                    >
                        Look • Shine • Elegance
                    </p>

                    {/* Decorative Golden Divider */}
                    <div className="flex items-center justify-center gap-3 mt-5">

                        <div
                            style={{
                                background: `linear-gradient(to right, transparent, ${gold.base})`
                            }}
                            className="w-16 h-[1]"
                        ></div>

                        <div
                            style={{
                                background: gold.base,
                                boxShadow: `0 0 20px ${gold.base}`
                            }}
                            className="w-2 h-2 rounded-full"
                        ></div>

                        <div
                            style={{
                                background: `linear-gradient(to left, transparent, ${gold.base})`
                            }}
                            className="w-16 h-[1]"
                        ></div>

                    </div>
                    <div className="flex items-center gap-4 justify-center mt-6">
                        <Link href={'/shop-now'}><button
                            style={{
                                background: gold.base,
                                boxShadow: `0 0 20px ${gold.base}55`
                            }}
                            className="px-8 py-3 rounded-full cursor-pointer text-black font-semibold tracking-wide hover:scale-105 duration-300"
                        >
                            Shop Now
                        </button></Link>

                        <Link href={'/categories'}><button
                            style={{
                                border: `1px solid ${gold.base}`,
                                color: gold.light
                            }}
                            className="px-8 py-3 rounded-full cursor-pointer backdrop-blur-md font-medium tracking-wide hover:bg-white/10 duration-300"
                        >
                            Explore All
                        </button></Link>
                    </div>
                </div>
            </section>
        </div>

    )
}
