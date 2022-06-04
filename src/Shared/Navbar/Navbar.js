import React, { useReducer } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from "../../image/main logo.png";
import CustomLink from '../CustomLink/CustomLink';
import { signOut } from 'firebase/auth';
import { HiUserCircle } from 'react-icons/hi';

import userPhoto from '../../image/userPhoto.jpg'


const Navbar = ({ children }) => {
    const [user] = useAuthState(auth);
    return (
        <nav>
            <div class="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar container mx-auto">

                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
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
                                        to="/menageProduct"
                                        className='block px-4 py-2 text-sm text-gray-700'
                                    >
                                        Menage Products
                                    </CustomLink>
                                    <CustomLink
                                        to="/blogs"
                                        className='block px-4 py-2 text-sm text-gray-700'
                                    >
                                        Blogs
                                    </CustomLink>
                                </div>
                            </div>
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                <div className='flex flex-col-reverse items-center md:flex-row gap-0 md:gap-2 md:items-center mt-6 md:mt-0 '>
                                    {
                                        user ?
                                            <p>{user?.displayName}</p>
                                            :
                                            <CustomLink
                                                className='block px-4 py-2 text-sm text-gray-700'
                                                to='/signIn'
                                            >
                                                Sign In
                                            </CustomLink>
                                    }
                                    {
                                        user ?
                                            <>
                                                <div class="dropdown dropdown-click dropdown-end">

                                                    {

                                                        user?.photoURL
                                                            ?
                                                            <label tabIndex="0" class="m-1 avatar">
                                                                <div class="w-8 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                                                    <img
                                                                        className="cursor-pointer rounded-full"
                                                                        src={user?.photoURL}
                                                                        alt=""
                                                                    />
                                                                </div>

                                                            </label>
                                                            :
                                                            <label tabIndex="0" class="m-1 avatar">
                                                                <div class="w-8 flex justify-center items-center rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                                                    <img
                                                                        className="cursor-pointer rounded-full"
                                                                        src={userPhoto}
                                                                        alt=""
                                                                    />
                                                                </div>

                                                            </label>

                                                    }

                                                    <div tabIndex="0" class="dropdown-content menu ">
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
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;