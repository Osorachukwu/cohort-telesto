import React from 'react'
import Products from './Products'

interface ProductsCardProp {
    pImage: string;
    pTitle: string;
    pPrice: string;

}

export default function ProductCard({ pImage, pTitle, pPrice }: ProductsCardProp) {
    return (
        <li className='border-4'>
            <figure className='h-56'>
                <img src={pImage} alt="" className='h-full' />
            </figure>
            <p>{pTitle}</p>
            <p>{pPrice}</p>
            <button className='btn btn-xs bg-pink-500'>Read more</button>
        </li>
    )
}
