"use client";
import React, { useEffect, useState } from "react";
import { gold } from "../colors/color";
import {
    Heart,
    ShoppingBag,
    ShoppingBagIcon,
    ShoppingCart,
    Trash2,
    X,
} from "lucide-react";
import Image from "next/image";
import BuyNowButton from "./BuyNowButton";
import Link from "next/link";
import GetNow from "./GetNow";
import { useDispatch, useSelector } from "react-redux";
import { post_api } from "../api_helper/api_helper";
import { toast } from "react-toastify";

import {
    setCartData,
    removeFromCart as removeFromCartAction
} from "../redux/slices/cartSlice";
import Loading from "../../../Loading";

export default function CartModel({ cartModelOpen, setCartModelOpen }) {
    const CartData = useSelector((state) => state.cart.cartData);
    const TotalAmount = useSelector((state) => state.cart.total_amount_of_cart);

    const token = useSelector((state) => state.user.token)

    const [getNowModel, setGetNowModel] = useState(false);
    const [removingId, setRemovingId] = useState(null);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [quantity, setQuantity] = useState(null)


    const cartDataLoading = useSelector((state) => state.cart.cart_data_loading)

    const dispatch = useDispatch()


    const removeFromCart = async (id) => {

        try {
            setRemovingId(id);

            const response = await post_api({
                body: {},
                params: id,
                path: "user/remove-from-cart",
                token,
            });

            const message =
                response?.data?.message ||
                response?.message ||
                "Item removed successfully";

            toast.success(message);

            dispatch(removeFromCartAction(id))

        } catch (error) {
            console.error("Remove cart error:", error);

            const errorMessage =
                error?.response?.data?.message ||
                error?.message ||
                "Something went wrong";

            toast.error(errorMessage);
        } finally {
            setRemovingId(null);
        }
    };

    return (
        <>
            <GetNow quantity={quantity} getNowModel={getNowModel} setGetNowModel={setGetNowModel} selectedProduct={selectedProduct} />

            {/* Overlay */}
            <div
                onClick={() => setCartModelOpen(false)}
                className={`
                    fixed inset-0 z-105
                    bg-black/90 backdrop-blur-sm
                    duration-1000
                    top-0 left-0
                    ${cartModelOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
                `}
            />

            {/* Model */}
            <div
                className={`
                    fixed top-0 right-0
                    lg:w-[25%] md:w-[40%] sm:w-[40%] w-[80%]
                    h-screen
                    z-110
                    duration-500
                    overflow-hidden
                    ${cartModelOpen ? "translate-x-0" : "translate-x-full"}
                  
                `}
                style={{
                    background: `
                        linear-gradient(
                            180deg,
                            #050505 0%,
                            #0b0b0b 35%,
                            #120d02 100%
                        )
                    `,
                    borderLeft: `1px solid ${gold.base}40`,
                }}
            >
                {/* Glow */}
                <div
                    style={{ background: gold.base }}
                    className="absolute top-0 right-0 w-[250] h-[250] rounded-full blur-[120px] opacity-10"
                />

                {/* Header */}
                <div
                    style={{
                        borderBottom: `1px solid ${gold.base}25`,
                    }}
                    className="flex items-center justify-between px-6 py-5 relative z-10"
                >
                    <div className="flex items-center gap-3">
                        <div
                            style={{
                                background: `linear-gradient(
                                    135deg,
                                    #4d3900 0%,
                                    #7a5a08 18%,
                                    #b8860b 38%,
                                    #d4af37 50%,
                                    #e8cf6a 58%,
                                    #c9971a 72%,
                                    #7a5a08 88%,
                                    #4d3900 100%
                                )`,
                            }}
                            className="w-12 h-12 rounded-full flex items-center justify-center "
                        >
                            <ShoppingCart className="text-black fill-black" size={22} />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#F5D97A] tracking-wide">
                                Cart
                            </h2>

                            <p className="text-sm text-gray-400 tracking-wide">
                                Your Premium Collection
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setCartModelOpen(false)}
                        className="
                            w-10 h-10
                            rounded-full
                            bg-white/5
                            border border-white/10
                            flex items-center justify-center
                            text-[#F5D97A]
                            hover:rotate-90
                            hover:bg-[#d4af37]
                            hover:text-black
                            duration-300
                            cursor-pointer
                        "
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Cart Items */}
                {cartDataLoading ?
                    (<div className="lg:p-10 p-5 text-white text-lg tracking-wide">
                        Loading Cart...
                    </div>)
                    :
                    (
                        <div>
                            <div>
                                {CartData.length == 0 ?
                                    <CartEmpty setCartModelOpen={setCartModelOpen} />
                                    :
                                    <div className="h-[calc(100vh-180px)] overflow-y-auto px-5 py-5 space-y-5 custom-scrollbar">
                                        {CartData.map((item, index) => {
                                            return (
                                                <div
                                                    key={`${item.cart_id}-${index}`}
                                                    style={{
                                                        border: `1px solid ${gold.base}20`,
                                                        background: `
                                                            linear-gradient(
                                                                to bottom,
                                                                rgba(255,255,255,0.03),
                                                                rgba(255,255,255,0.01)
                                                            )
                                                        `,
                                                    }}
                                                    className="rounded-2xl p-4 backdrop-blur-xl hover:-translate-y-1 duration-300 group relative overflow-hidden"
                                                >

                                                    {/* TOP SELLING BADGE */}
                                                    {item.is_top_selling && (
                                                        <div className="absolute top-3 left-3 z-40">
                                                            <p
                                                                style={{ fontFamily: "Poppins" }}
                                                                className="
                                                                    text-black
                                                                    bg-amber-300
                                                                    tracking-wide
                                                                    py-1
                                                                    px-3
                                                                    rounded-full
                                                                    font-semibold
                                                                    text-sm
                                                                    shadow-md
                                                                    shadow-black/30
                                                                "
                                                            >
                                                                Top Selling
                                                            </p>
                                                        </div>
                                                    )}

                                                    <div
                                                        style={{
                                                            background:
                                                                "linear-gradient(135deg, #CC1B1B, #540202)",
                                                            fontFamily: "Poppins",
                                                        }}
                                                        className="
                                                                    absolute
                                                                    top-0
                                                                    right-0
                                                                    py-1
                                                                    px-2
                                                                    rounded-bl-lg
                                                                    tracking-wider
                                                                    text-white
                                                                    z-50
                                                                    text-[13px]
                                                                    font-normal
                                                            "
                                                    >
                                                        - {item.p_discount}%
                                                    </div>


                                                    <div className="flex flex-col gap-4 relative z-10">
                                                        {/* IMAGE */}
                                                        <Link href={`/product/${item.p_slug}`}>
                                                            <div
                                                                onClick={() => setCartModelOpen(false)}
                                                                style={{ border: `1px solid ${gold.base}30` }}
                                                                className="relative w-full h-[200] rounded-xl overflow-hidden bg-black"
                                                            >
                                                                <Image
                                                                    sizes="full"
                                                                    src={item?.images?.index_image}
                                                                    alt={item.p_title}
                                                                    fill
                                                                    className="object-cover hover:scale-105 duration-500"
                                                                />
                                                            </div>
                                                        </Link>

                                                        {/* CONTENT */}
                                                        <div className="flex-1 flex flex-col justify-between">
                                                            <div>
                                                                <h3 className="text-[#F5D97A] text-lg font-bold">
                                                                    {item.p_title}
                                                                </h3>

                                                                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                                                                    {item.p_short_description}
                                                                </p>
                                                            </div>

                                                            <div className="mt-3 flex items-center gap-2">
                                                                <span className="text-gray-200 text-[18px] tracking-wide">
                                                                    Quantity
                                                                </span>

                                                                <div
                                                                    className="
                                                                                    w-6 h-6
                                                                                    flex items-center justify-center
                                                                                    rounded-full
                                                                                    text-sm font-normal
                                                                                    shadow-lg
                                                                                    bg-green-800 text-white border border-green-700
                                                                                "
                                                                    style={{
                                                                        fontFamily: "Poppins",
                                                                    }}
                                                                >
                                                                    {item.quantity}
                                                                </div>
                                                            </div>

                                                            <div className="mt-4">
                                                                <h2
                                                                    style={{ color: gold.base }}
                                                                    className="text-2xl font-extrabold flex items-baseline gap-3"
                                                                >
                                                                    <span> ₹ {item.p_customer_price} </span>
                                                                    <span className="line-through text-gray-500 text-xl">
                                                                        ₹{item.p_sale_price}
                                                                    </span>
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* ACTIONS */}
                                                    <div className="grid grid-cols-2 gap-3 mt-5 relative z-10">
                                                        <button
                                                            disabled={removingId === item.product_id}
                                                            onClick={() => removeFromCart(item.product_id)}
                                                            className="w-full h-full cursor-pointer px-4 py-1 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center font-bold"
                                                        >
                                                            {removingId === item.product_id ? "Removing..." : "Remove"}
                                                        </button>

                                                        <BuyNowButton
                                                            setQuantity={setQuantity}
                                                            setSelectedProduct={setSelectedProduct}
                                                            item={item}
                                                            getNowModel={getNowModel}
                                                            setGetNowModel={setGetNowModel}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}

                                        <div className="flex items-center justify-between px-5 py-5 rounded-2xl bg-black border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                                            <div
                                                style={{ fontFamily: "Poppins" }}
                                                className="text-lg font-semibold tracking-wide text-amber-100"
                                            >
                                                Total
                                            </div>

                                            <span
                                                style={{ fontFamily: "Poppins" }}
                                                className="text-3xl font-semibold tracking-normal text-amber-300"
                                            >
                                                ₹ {TotalAmount}.00
                                            </span>
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Footer */}
                            <div
                                style={{
                                    borderTop: `1px solid ${gold.base}20`,
                                }}
                                className="
        w-full
        flex
        justify-center
        items-center
        py-4 sm:py-5
        px-4
        bg-black/40
        backdrop-blur-xl
    "
                            >
                                <Link href="/cart" className="w-full sm:w-auto flex justify-center">
                                    <button
                                        style={{
                                            background: `
                    linear-gradient(
                        135deg,
                        #4d3900 0%,
                        #7a5a08 18%,
                        #b8860b 38%,
                        #d4af37 50%,
                        #f5df8b 58%,
                        #c9971a 72%,
                        #7a5a08 88%,
                        #4d3900 100%
                    )
                `,
                                        }}
                                        className="
                w-full sm:w-auto
                px-6 sm:px-10 md:px-20
                py-3
                rounded-full
                text-black
                font-bold
                text-base sm:text-lg
                tracking-wide
                hover:scale-[1.02]
                transition-transform
                duration-300
            "
                                    >
                                        Explore Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    );
}

export function CartEmpty({ setCartModelOpen }) {
    return (
        <div className="flex flex-col items-center justify-center h-[68vh] py-10 px-6 text-center">
            {/* Icon */}
            <div
                className="
            w-20 h-20
            rounded-full
            flex items-center justify-center
            bg-linear-to-tl
            from-[#000000]
            via-[#D4AF37]
            to-[#D4AF37]
        "
            >
                <ShoppingCart size={40} className="text-black" />
            </div>

            {/* Title */}
            <h2 className="mt-8 text-3xl font-bold text-[#F5D97A]">
                Your Cart is Empty
            </h2>

            {/* Subtitle */}


            {/* Button */}
            <Link href="/shop-now">
                <button
                    onClick={() => setCartModelOpen(false)}
                    className="
                        mt-8
                        px-10
                        py-3
                        rounded-full
                        text-black
                        font-bold
                        tracking-wide
                        hover:scale-105
                        duration-300
                    "
                    style={{
                        background: `
                    linear-gradient(
                        135deg,
                        #4d3900 0%,
                        #7a5a08 18%,
                        #b8860b 38%,
                        #d4af37 50%,
                        #f5df8b 58%,
                        #c9971a 72%,
                        #7a5a08 88%,
                        #4d3900 100%
                    )
                `,
                    }}
                >
                    Continue Shopping
                </button>
            </Link>
        </div>
    )
}
