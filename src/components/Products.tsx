import React, { useEffect } from 'react'
import ProductCard from './ProductCard';

interface Product {
    image: string;
    title: string;
    price: number;
}

export default function Products() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            }
            )
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <ul className='grid grid-cols-4 gap-4 p-10'>
                {products.map((product) => (
                    <ProductCard 
                    pImage={product.image} 
                    pTitle={product.title} 
                    pPrice={product.price}
                    />
                ))}
            </ul>
        </div>
    )
}
