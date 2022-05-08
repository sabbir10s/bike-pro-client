import React from 'react';
import logo from '../../../src/image/logo-bikepro_.png'
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (

        <footer className="footer-distributed  bg-[#2a2a2a] w-full px-10 py-20 ">

            <div class="footer-left w-[30%] inline-block">
                <img src={logo} className="w-[120px]" alt="" />

                <p class="text-white flex flex-col-reverse">

                    <Link to="/blogs">Blogs</Link>
                    <Link to="/myProduct">My product</Link>
                    <Link to="/allProducts">All Products</Link>
                    <Link to="/home">Home</Link>
                </p>

                <div className="mt-5 text-white justify-center lg:justify-start flex gap-5">
                    <button className='hover:text-[#ff634e] text-3xl'><BsFacebook /></button>
                    <button className='hover:text-[#ff634e] text-3xl'><FaTwitter /></button>
                    <button className='hover:text-[#ff634e] text-3xl'><AiFillInstagram /></button>
                </div>
            </div>

            <div class="footer-center w-[35%] text-white">
                <div>
                    <p className='text-[#ff634e] font-medium'>PHONE</p>
                    <h1>+(62)21-2002-2012</h1>
                </div>

                <div className='mt-3'>
                    <p className='text-[#ff634e] font-medium'>EMAIL US</p>
                    <h1>support@domain.tld</h1>
                </div>
                <div className='mt-3'>
                    <p className='text-[#ff634e] font-medium'>ADDRESS</p>
                    <h1>1202, Mohakhali, Dhaka</h1>
                </div>
            </div>
            <div class="footer-right w-[30%] text-gray-300">
                <p class="footer-company-about">
                    <span>About Us</span>
                    <strong>Bike Pro</strong> is a Dhaka based, online specialty retailer of bicycles and the accessories that go with them.You might have noticed that our prices are some of the best in America – that’s because we sell Polygon Bikes direct from the manufacturer, cutting out the middleman and passing on the savings to you – where they belong.
                </p>
            </div>

            <p className="text-gray-300 text-center mt-10">Copyright © 2022 <strong>BikePro</strong> All rights reserved</p>
        </footer>
    );
};

export default Footer;