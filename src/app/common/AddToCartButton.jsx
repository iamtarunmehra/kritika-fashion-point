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

            className={`${customClasses} rounded-full cursor-pointer font-normal text-lg border-2 hover:scale-[1.02] duration-300 flex items-center justify-center gap-3`}
            style={{
                borderColor: gold.base,
                color: gold.light,
            }}

        >
            {icon && <ShoppingCart size={22} />}
            Add to cart
        </button>
    )
}
