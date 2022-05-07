import React from 'react';
import useProducts from '../../../Shared/Hooks/useProducts';
import InventoryCart from '../InventoryCart/InventoryCart';

const Inventory = () => {
    const [products] = useProducts([]);

    return (
        <div className='mx-10 mb-10 flex items-center justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    products.map(product =>
                        <InventoryCart product={product} key={product._id}></InventoryCart>)
                }
            </div>
        </div>
    );
};

export default Inventory;