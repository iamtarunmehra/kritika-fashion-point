'use client'
import React, { useEffect } from 'react'
import PcHeader from './PcHeader'
import MobileHeader from './MobileHeader'
import { FixedButtons } from './FixedBottomButtons'
import { setCategories, setCategoryLoading } from '../redux/slices/categorySlice'
import { useDispatch } from 'react-redux'
import { get_api } from '../api_helper/api_helper'
import { setProductLoading, setProducts } from '../redux/slices/productSlice'

export default function Header() {

    const dispatch = useDispatch();

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

