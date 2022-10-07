import React from 'react';
import useProducts from '../../../Shared/Hooks/useProducts';
import Loading from '../../../Shared/Loading/Loading';
import ProductCart from '../ProductCart/ProductCart';

const AllProducts = () => {
    const [products] = useProducts([]);
    if (products.length === 0) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-xl font-medium text-left p-3 md:p-5'>All Products</h1>
            <div className='bg-base-100 rounded-lg p-5 md:mx-5'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center justify-items-center container mx-auto'>
                    {
                        products.map(product =>
                            <ProductCart product={product} key={product._id}></ProductCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;