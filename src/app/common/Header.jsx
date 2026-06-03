'use client'
import React, { useEffect, useState } from 'react'
import PcHeader from './PcHeader'
import MobileHeader from './MobileHeader'
import { FixedButtons } from './FixedBottomButtons'
import { setCategories, setCategoryLoading } from '../redux/slices/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { get_api, post_api } from '../api_helper/api_helper'
import { setProductLoading, setProducts } from '../redux/slices/productSlice'
import { setCartData, setCartDataLoading, setTotalAmountOfCart } from '../redux/slices/cartSlice'

export default function Header() {

    const dispatch = useDispatch();

    const token = useSelector((state) => state.user.token)


    const fetchCategories = async () => {

        try {

            dispatch(setCategoryLoading(true));

            const response = await get_api({
                path: "admin/category/view-categories",
            });

            if (response.data.success) {

                dispatch(
                    setCategories(
                        response.data.data
                    )
                );
            }

        } catch (error) {
            console.log(error);
        } finally {

            dispatch(
                setCategoryLoading(false)
            );
        }
    };

    const fetchProducts = async () => {

        try {

            dispatch(setProductLoading(true));

            const response = await get_api({
                path: "admin/product/view-products",
            });

            if (response.data.success) {

                dispatch(
                    setProducts(
                        response.data.data
                    )
                );
            }

        } catch (error) {

            console.log(error);

        } finally {

            dispatch(
                setProductLoading(false)
            );
        }
    };

    const fetchAllCartItems = async () => {
        try {
            dispatch(setCartDataLoading(true));

            const response = await post_api({
                body: {},
                params: null,
                path: "user/view-cart",
                token,
            })
            console.log('response', response.data.data.total)

            if (response?.data?.success) {

                dispatch(
                    setTotalAmountOfCart(
                        response.data.data.total || 0
                    )
                )

                dispatch(
                    setCartData(
                        response?.data?.data?.items || []
                    )
                );
            }

        } catch (error) {
            console.log(error);

        } finally {
            dispatch(setCartDataLoading(false));
        }
    };

    useEffect(() => {
        if (token) {
            fetchAllCartItems();
        }
    }, [token]);

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <>
            <div className="offer-strip fixed bottom-0 left-0 w-full z-100 bg-black/80 backdrop-blur-md overflow-hidden">

                <div className="marquee-track flex whitespace-nowrap animate-marquee">

                    <div className="marquee-content flex gap-10 px-10 py-2 text-[15px] tracking-wide text-white">
                        ✨ Exclusive Offers • Up to 70% OFF • Limited Time Deals • Premium Collection ✨
                    </div>

                    <div className="marquee-content flex gap-10 px-10 py-2 text-[15px] tracking-wide text-white">
                        ✨ Exclusive Offers • Up to 70% OFF • Limited Time Deals • Premium Collection ✨
                    </div>

                </div>
            </div>
            <header className='sticky top-0 z-100'>
                <PcHeader />
                <MobileHeader />
            </header>

            <FixedButtons />
        </>
    )
}

