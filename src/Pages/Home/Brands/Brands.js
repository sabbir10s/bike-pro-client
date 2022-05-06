import React from 'react';
import logo1 from '../../../image/brands logo/1.webp'
import logo2 from '../../../image/brands logo/2.webp'
import logo3 from '../../../image/brands logo/3.webp'
import logo4 from '../../../image/brands logo/4.webp'
import logo6 from '../../../image/brands logo/6.webp'
import logo7 from '../../../image/brands logo/7.webp'

const Brands = () => {
    return (
        <div className='p-10 mt-10 h-[70vh] bg-slate-200'>
            <div className='mb-10'>
                <h1 className='text-center text-4xl text-[#ff634e] font-medium mb-1 tracking-wider'>PARTNER</h1>
                <div className='h-[3px] w-[200px] mx-auto my-2 bg-[#ff634e]'></div>
                <h1 className='text-center text-xl text-gray-500 tracking-wider'>Awesome Brand Partner</h1>
            </div>
            <div className='grid grid-cols-3 gap-10 justify-items-center'>
                <img src={logo6} alt="" />
                <img src={logo7} alt="" />
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />


            </div>
        </div>
    );
};

export default Brands;