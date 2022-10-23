import React from 'react';
import useProducts from '../../../Shared/Hooks/useProducts';
import { BsBagCheck, BsArrowRight } from 'react-icons/bs';
import { AiOutlineStock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
    const [products] = useProducts([])
    const [deliver, setDeliver] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/deliver')
            .then(res => res.json())
            .then(data => setDeliver(data))
    }, [])

    const productQuantity = products.map((p) => p.quantity)
    const deliverQuantity = deliver.map((d) => d.quantity)
    // const maxValue = Math.min(...quantity)
    // const minProduct = products.filter((p) => p.quantity === maxValue)

    // let totalQuantity = 0;
    // let i = 0;
    // while (i < quantity.length) {
    //     const element = quantity[i];
    //     i++;
    //     totalQuantity = totalQuantity + element;
    // }

    const itemsQuantity = (item) => {
        let totalQuantity = 0;
        let i = 0;
        while (i < item.length) {
            const element = item[i];
            i++;
            totalQuantity = totalQuantity + element;
        }
        return totalQuantity
    }

    const totalProducts = products.length

    return (
        <div className='pt-5 pb-5 md:pt-0'>
            <div className='bg-base-100 p-5 rounded-lg'>
                <div className='flex justify-center gap-10'>
                    <div className='bg-secondary w-[300px] rounded'>
                        <div className='grid grid-cols-3  p-5 '>
                            <div className='col-span-2'>
                                <h2 className='text-3xl font-bold text-white'>{itemsQuantity(deliverQuantity)}</h2>
                                <p className='text-white text-sm mt-3'>Total Delivered</p>
                            </div>
                            <div>
                                <BsBagCheck className='text-base-100/30 text-8xl font-bold' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-primary w-[300px] rounded'>
                        <div className='grid grid-cols-3  p-5 '>
                            <div className='col-span-2'>
                                <h2 className='text-3xl font-bold text-white'>{itemsQuantity(productQuantity)}</h2>
                                <p className='text-white text-sm mt-3'>Available Stock</p>
                            </div>
                            <div>
                                <AiOutlineStock className='text-gray-500 text-8xl font-bold' />
                            </div>
                        </div>
                        <Link to='/products'><div className='bg-secondary/20 hover:bg-[#0e8aaf] duration-300 text-white text-lg text-center py-1 flex items-center justify-center gap-1'> <span>Update Stock</span> <BsArrowRight className='text-2xl' /> </div>  </Link>
                    </div>
                    <div className='bg-[#078b47] w-[300px] rounded'>
                        <div className='grid grid-cols-3  p-5 '>
                            <div className='col-span-2'>
                                <h2 className='text-3xl font-bold text-white'>{totalProducts}</h2>
                                <p className='text-white text-sm mt-3'>Total Products</p>
                            </div>
                            <div>
                                <BsBagCheck className='text-base-100/30 text-8xl font-bold' />
                            </div>
                        </div>
                        <Link to='/addProduct'><div className='bg-[#017a3cea] hover:bg-[#036331ea] duration-300 text-white text-lg text-center py-1 flex items-center justify-center gap-1'> <span>Add New Product</span> <BsArrowRight className='text-2xl' /> </div>  </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;