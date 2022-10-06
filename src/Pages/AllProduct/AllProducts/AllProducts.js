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
            <h1 className='text-xl font-medium text-left pb-3'>All Products</h1>
            <div className='flex items-center justify-center container mx-auto bg-base-100 p-5 rounded-lg'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
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