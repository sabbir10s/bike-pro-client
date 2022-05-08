import React, { useEffect, useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Supplier = () => {
    const [suppliers, setSuppliers] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSuppliers(data))
    }, [])
    return (
        <div className='mx-10 py-10'>
            <div className='mb-10'>
                <h1 className='text-center text-3xl text-[#ff634e] font-medium mb-1 tracking-wider'>SUPPLIERS</h1>
                <div className='h-[3px] w-[200px] mx-auto my-2 bg-[#ff634e]'></div>
                <h1 className='text-center text-xl text-gray-500 tracking-wider'>All of my product suppliers</h1>
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-[3px] h-[150px] hidden lg:block bg-[#ff634e]'></div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols gap-10'>

                    {
                        suppliers.map(supplier =>
                            <div className='bg-white shadow-2xl rounded border hover:bg-slate-200 p-8'>
                                <img className='w-[200px] h-[200px] rounded-full border border-[#ff634e] mb-3' src={supplier.picture} alt="" />
                                <p>{supplier.name}</p>
                                <address>{supplier.address}</address>
                                <div className='flex gap-5 mt-3'>
                                    <button className='hover:text-[#ff634e] text-[#1b3e41] text-xl'><BsFacebook /></button>
                                    <button className='hover:text-[#ff634e] text-[#1b3e41] text-xl'><FaTwitter /></button>
                                    <button className='hover:text-[#ff634e] text-[#1b3e41] text-xl'><AiFillInstagram /></button>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className='w-[3px] h-[150px] hidden lg:block bg-[#ff634e]'></div>
            </div>
        </div>
    );
};

export default Supplier;