import React, { use, useEffect, useState } from 'react'
import ProductCard from './ProductCard';

interface Product {
    image: string;
    title: string;
    price: number;
}

export default function Products() {
    const [userData, setUserData] =useState("")
    const [products, setProducts] = React.useState<Product[]>([]);
    const [error, setError] = useState(Number)
    const [loading, setLoading] = React.useState(true);
    const [productSlice, setProductSlice] = React.useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) {
                    setLoading(false)
                    setError(res.status)
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    let fullProducts = productSlice ? products.slice(0, 8) : products;

    if (loading) {
        // return <h1>Loading...</h1>
        return (
            <div className='flex justify-center h-[50vh]'>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        )
    }
    if (error) {
        return (
            <div className='flex justify-center  items-center flex-col'>
                <p className='text-4xl'>{error}</p>
            </div>
        )
    }

    return (
        <div>
            <ul className='grid grid-cols-4 gap-4 p-10'>
                {fullProducts.map((product) => (
                    <ProductCard
                        pImage={product.image}
                        pTitle={product.title}
                        pPrice={product.price}
                    />
                ))}
            </ul>

            <div className='flex justify-center py-3' onClick={() => setProductSlice(!productSlice)}>
                <button className={`btn ${productSlice ? "btn-success" : "btn-error"} font-bold`}>Show {productSlice ? "More" : "Less"}</button>
            </div>

            <form action="">
                <input type="text" className='border' value={userData} onChange={(e)=> {setUserData(e.target.value)}} />
                <input type="Submit" className='btn' />
            </form>
            <p>{userData}</p>
        </div>
    )
}
