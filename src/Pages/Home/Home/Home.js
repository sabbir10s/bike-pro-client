import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Shared/Hooks/useProducts';
import InventoryCart from '../../Inventory/InventoryCart/InventoryCart';
import Banner from '../Banner/Banner';
import Supplier from '../Suppliers/Supplier';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Brands from '../Brands/Brands';


const Home = () => {
    const [products] = useProducts([])
    const navigate = useNavigate()
    return (
        <div>
            <Banner></Banner>
            <div className=''>
                <div className='mb-10'>
                    <h1 className='text-center text-4xl text-[#ff634e] font-medium mb-1 tracking-wider'>PRODUCTS</h1>
                    <div className='h-[3px] w-[250px] mx-auto my-2 bg-[#ff634e]'></div>
                    {/* <h1 className='text-center text-xl text-gray-500 mb-5 tracking-wider'>Best product</h1> */}
                </div>
                <div className='mx-10'>
                    <div className='grid grid-cols-3 gap-12'>
                        {
                            products.slice(3, 9).map(product =>
                                <InventoryCart product={product} key={product._id}></InventoryCart>)
                        }
                    </div>
                    <button onClick={() => navigate('/inventory')} className='p-2 rounded leading-none text-[#ff634e] text-xl hover:bg-[#ff634e] hover:text-white border-2 border-[#ff634e] mt-8 shadow-lg flex gap-2 '><span>All Products</span><AiOutlineArrowRight /></button>
                </div>
            </div>
            <Supplier />
            <Brands />
        </div>
    );
};

export default Home;