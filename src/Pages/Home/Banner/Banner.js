import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./banner.css"
import { AiOutlineArrowRight } from 'react-icons/ai';
import bike1 from '../../../image/banner/1.png'
import bike2 from '../../../image/banner/2.png'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='mb-20'>
            <div className="w-full h-[75vh] flex items-center justify-center bg-slate-300">
                <div className='w-[30%] hidden md:block'>
                    <img className='w-[350px]' src={bike1} alt="" />
                </div>

                <div className='w-[100%] md:w-[40%]'>
                    <h1 className='mb-1 font-medium text-[#1b3e41] mx-2 md:mx-0 lg:text-xl md:tex:xl text-center'>It is by riding a bicycle that you learn the contours of a country best, since you heave to sweat up the hills and can coast down them.</h1>
                    <div className='flex justify-center'>
                        <button onClick={() => navigate('/inventory')} className='rounded p-2 leading-none text-white text-xl hover:bg-secondary hover:text-white bg-primary mt-4 flex gap-2 '><span>Manage Product</span><AiOutlineArrowRight /></button>
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