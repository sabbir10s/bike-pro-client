import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./banner.css"
import { AiOutlineArrowRight } from 'react-icons/ai';

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='banner mb-14 hero'>
            <div className="w-full h-[74vh] flex items-center ">
                <div className='text-white w-[50%] mx-10 z-10'>
                    <h1 className='text-xl mb-1'>It is by riding a bicycle that you learn the contours of a country best, since you heave to sweat up the hills and can coast down them.</h1>
                    <button onClick={() => navigate('/menageinventory')} className='rounded p-3 leading-none text-white text-xl hover:bg-[#f32105] hover:text-white bg-[#ff634e] mt-4 flex gap-2 '><span>Manage Inventory</span><AiOutlineArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;