import React from 'react';
import useProducts from '../../../Shared/Hooks/useProducts';
import InventoryCart from '../../Inventory/InventoryCart/InventoryCart';
import Banner from '../Banner/Banner';

const Home = () => {
    const [products] = useProducts([])
    return (
        <div>
            <Banner></Banner>
            <div className='mx-5'>
                <p className='text-4xl font-medium text-[#ff634e]'>Inventory Items</p>
                <div className='flex justify-center mt-5'>
                    <div className='grid grid-cols-3 gap-10'>
                        {
                            products.slice(3, 9).map(product =>
                                <InventoryCart product={product} key={product._id}></InventoryCart>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;