import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { gold } from '../colors/color'

export default function AddToCartButton({ customClasses, icon }) {
    return (
        <button onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            alert('Successfully Added to Cart')
        }}

            className={`${customClasses} rounded-full cursor-pointer text-lg border-2 hover:scale-[1.02] duration-300 flex items-center justify-center gap-2`}
            style={{
                borderColor: gold.base,
                color: gold.light,
            }}

        >
            <ShoppingCart size={18} />
            Cart
        </button>
    )
}
