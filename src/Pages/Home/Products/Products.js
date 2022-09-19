import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Shared/Hooks/useProducts';
import ProductCart from '../../AllProduct/ProductCart/ProductCart';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Products = () => {
    const [products] = useProducts([])
    const navigate = useNavigate();

    return (
        <div>
            <div className='mb-12'>
                <h1 className='text-center text-3xl text-[#ff634e] font-medium mb-1 tracking-wider uppercase'>Recent Stock</h1>
                <div className='h-[3px] w-[250px] mx-auto my-2 bg-[#ff634e]'></div>
                <h1 className='text-center text-xl text-gray-500 tracking-wider'>Most Recently Added Products</h1>
            </div>

            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items:center '>
                    {
                        products.slice(0, 8).map(product =>
                            <ProductCart product={product} key={product._id}></ProductCart>)
                    }
                </div>
                <button onClick={() => navigate('/allProducts')} className='p-2 rounded leading-none text-[#ff634e] text-xl hover:bg-[#ff634e] hover:text-white border-2 border-primary mt-8 shadow-lg flex gap-2 '><span>All Products</span><AiOutlineArrowRight /></button>
            </div>
        </div>
    );
};

export default Products;