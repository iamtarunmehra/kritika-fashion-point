import React from 'react'

export default function AddToCartButton() {
    return (
        <button onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}
            className='hover:scale-105 rounded-full py-1 cursor-pointer bg-white duration-300 capitalize font-extrabold'>Add to cart</button>
    )
}
