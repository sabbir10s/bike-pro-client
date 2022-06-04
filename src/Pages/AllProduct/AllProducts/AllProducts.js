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
        <div className='mx-10 mb-10 flex items-center justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    products.map(product =>
                        <ProductCart product={product} key={product._id}></ProductCart>)
                }
            </div>
        </div>
    );
};

export default AllProducts;