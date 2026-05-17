import React from 'react'

export default function AddToCartButton() {
    return (
        <button onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}
            className='hover:scale-105 rounded-full text-gray-900 py-2 cursor-pointer bg-white duration-300 capitalize font-bold'>Add to cart</button>
    )
}
