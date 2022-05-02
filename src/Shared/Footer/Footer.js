import React from 'react';
import logo from '../../../src/image/logo-bikepro_.png'
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='bg-[#2a2a2a] mt-10 py-10'>
            <div className='mx-10'>
                <img src={logo} className="w-[120px]" alt="" />
                <div className='h-[0.5px] bg-gray-400 mb-1'></div>
            </div>
            <div className='text-white  grid grid-cols-2 items-center mx-10'>
                <div className='flex gap-5'>
                    <button className='hover:text-[#ff634e] text-3xl'><BsFacebook /></button>
                    <button className='hover:text-[#ff634e] text-3xl'><FaTwitter /></button>
                    <button className='hover:text-[#ff634e] text-3xl'><AiFillInstagram /></button>
                </div>
                <div className='flex gap-10'>
                    <div>
                        <p className='text-[#ff634e] text-lg font-medium'>PHONE</p>
                        <h1 className='text-xl'>+(62)21-2002-2012</h1>
                    </div>
                    <div>
                        <p className='text-[#ff634e] text-lg font-medium'>EMAIL US</p>
                        <h1 className='text-xl'>support@domain.tld</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;