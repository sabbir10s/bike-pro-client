import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Shared/Hooks/useProducts';
import Banner from '../Banner/Banner';
import Supplier from '../Suppliers/Supplier';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Brands from '../Brands/Brands';
import ProductCart from '../../AllProduct/ProductCart/ProductCart';
import Loading from '../../../Shared/Loading/Loading';
import Footer from '../../../Shared/Footer/Footer';


const Home = () => {
    const [products] = useProducts([])
    const navigate = useNavigate();
    if (products.length === 0) {
        return <Loading />
    }
    return (
        <div>
            <Banner></Banner>
            <div className=''>
                <div className='mb-12'>
                    <h1 className='text-center text-3xl text-[#ff634e] font-medium mb-1 tracking-wider'>PRODUCTS</h1>
                    <div className='h-[3px] w-[250px] mx-auto my-2 bg-[#ff634e]'></div>
                </div>

                <div className='mx-10'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 justify-items: center'>
                        {
                            products.slice(3, 9).map(product =>
                                <ProductCart product={product} key={product._id}></ProductCart>)
                        }
                    </div>
                    <button onClick={() => navigate('/allProducts')} className='p-2 rounded leading-none text-[#ff634e] text-xl hover:bg-[#ff634e] hover:text-white border-2 border-primary mt-8 shadow-lg flex gap-2 '><span>All Products</span><AiOutlineArrowRight /></button>
                </div>
            </div>
            <Supplier />
            <Brands />
            <Footer />
        </div>
    );
};

export default Home;