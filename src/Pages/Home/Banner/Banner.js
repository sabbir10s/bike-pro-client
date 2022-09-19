import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./banner.css"
import { AiOutlineArrowRight } from 'react-icons/ai';
import bike1 from '../../../image/banner/1.png'
import bike2 from '../../../image/banner/2.png'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='mb-20 px-4 py-16 lg:py-32 bg-slate-300'>
            <div className=" md:flex md:items-center justify-center container mx-auto ">
                <div className='md:w-[30%] block py-5 lg:py-0'>
                    <img className='w-[300px] lg:w-[350px]' src={bike1} alt="" />
                </div>

                <div className='w-[100%] md:w-[40%]'>
                    <h1 className='mb-1 font-medium text-[#1b3e41] md:text-center'>Bike Pro is one of the largest wholesale bicycle suppliers. We supply different types of brands of bicycles.  On this website, we manage our all product inventory.</h1>
                    <div className='flex md:justify-center'>
                        <button onClick={() => navigate('/menageProducts')} className='rounded-lg leading-none text-white text-xl hover:bg-secondary hover:text-white bg-primary mt-4  '>
                            <div className='flex gap-2 py-3 px-5'>
                                <span>Manage Products</span><AiOutlineArrowRight />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='w-[30%] hidden md:flex md:justify-end'>
                    <img className='w-[350px]' src={bike2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;