import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from "../../image/main logo.png";
import CustomLink from '../CustomLink/CustomLink';
import { signOut } from 'firebase/auth';
import { BsTextLeft } from 'react-icons/bs';
import userPhoto from '../../image/userPhoto.jpg'


const Navbar = ({ children }) => {
    const [user] = useAuthState(auth);
    const { pathname } = useLocation()
    return (
        <nav>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col shadow-lg">
                    {/* <!-- Navbar --> */}
                    <div className='bg-white shadow-lg shadow-primary/20'>
                        <div className="w-full navbar container mx-auto ">
                            {pathname.includes('inventory') &&
                                <label for="my-drawer" className="drawer-button"> <span className='text-2xl lg:hidden cursor-pointer text-neutral'><BsTextLeft /></span>
                                </label>
                            }
                            <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">



                                <div className="flex-shrink-0 flex items-center">
                                    <Link to='/'><img
                                        className="block lg:hidden h-8 w-auto"
                                        src={logo}
                                        alt="Bike Pro"
                                    /></Link>
                                    <Link to='/'>
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src={logo}
                                            alt="Bike Pro"
                                        />
                                    </Link>
                                </div>

                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <CustomLink
                                            to="/home"
                                            className='block px-4 py-2 text-sm text-gray-700'
                                        >
                                            Home
                                        </CustomLink>
                                        <CustomLink
                                            to="/allProducts"
                                            className='block px-4 py-2 text-sm text-gray-700'
                                        >
                                            All Products
                                        </CustomLink>

                                        <CustomLink
                                            to='/menageProducts'
                                            className='block px-4 py-2 text-sm text-gray-700'
                                        >
                                            Menage Products
                                        </CustomLink>
                                        <CustomLink
                                            to='/addProduct'
                                            className='block px-4 py-2 text-sm text-gray-700'
                                        >
                                            Add Product
                                        </CustomLink>

                                        <CustomLink
                                            to="/myStock"
                                            className='block px-4 py-2 text-sm text-gray-700'
                                        >
                                            My Product
                                        </CustomLink>

                                    </div>
                                </div>
                            </div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal">
                                    <div className='flex flex-col-reverse items-center md:flex-row gap-0 md:gap-2 md:items-center mt-6 md:mt-0 '>
                                        {
                                            user ?
                                                <p>{user?.displayName}</p>
                                                :
                                                <>
                                                    <CustomLink className='block px-4 py-2 text-sm text-gray-700' to='/signIn'>
                                                        Sign In
                                                    </CustomLink>
                                                    <CustomLink className='block px-4 py-2 text-sm text-gray-700' to='/signUp'>
                                                        Sign Up
                                                    </CustomLink>
                                                </>
                                        }
                                        {
                                            user ?
                                                <>
                                                    <div className="dropdown dropdown-click dropdown-end">

                                                        {

                                                            user?.photoURL
                                                                ?
                                                                <label tabIndex="0" className="m-1 avatar">
                                                                    <div className="w-8 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                                                        <img
                                                                            className="cursor-pointer rounded-full"
                                                                            src={user?.photoURL}
                                                                            alt=""
                                                                        />
                                                                    </div>

                                                                </label>
                                                                :
                                                                <label tabIndex="0" className="m-1 avatar">
                                                                    <div className="w-8 flex justify-center items-center rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                                                        <img
                                                                            className="cursor-pointer rounded-full"
                                                                            src={userPhoto}
                                                                            alt=""
                                                                        />
                                                                    </div>

                                                                </label>

                                                        }

                                                        <div tabIndex="0" className="dropdown-content menu ">
                                                            <div>
                                                                <p
                                                                    onClick={() => signOut(auth)}
                                                                    className=' cursor-pointer py-2 flex justify-center text-right text-sm text-white shadow bg-error rounded-box w-32'
                                                                >
                                                                    <span>Sign out</span>
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </>

                                                :
                                                ''
                                        }

                                    </div>
                                </ul>
                            </div>
                            <div className="flex-none lg:hidden">
                                <label for="my-drawer-3" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <CustomLink
                            to="/home"
                            className='block px-4 py-2 text-sm text-gray-700'
                        >
                            Home
                        </CustomLink>
                        <CustomLink
                            to="/allProducts"
                            className='block px-4 py-2 text-sm text-gray-700'
                        >
                            All Stocks
                        </CustomLink>

                        <CustomLink
                            to="/inventory"
                            className='block px-4 py-2 text-sm text-gray-700'
                        >
                            Menage Stocks
                        </CustomLink>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;