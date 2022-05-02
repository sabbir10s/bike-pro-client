import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from "../../image/main logo.png";
import { signOut } from 'firebase/auth';
import { HiUserCircle } from 'react-icons/hi';

const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white p-6">
            <div className="flex items-center flex-shrink-0 px-2 mr-6">
                <Link to='/'><img src={logo} className="w-[100px]" alt="" /></Link>
            </div>

            {/*====== For Mobile===== */}
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            {/* ========================*/}

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">

                    <Link to="/home" className="block mt-4 font-medium lg:inline-block lg:mt-0 text-[#1b3e41] hover:text-[#ff634e] text-lg mr-4"> Home</Link>

                    <Link to="/inventory" className="block mt-4 font-medium lg:inline-block lg:mt-0 text-[#1b3e41] hover:text-[#ff634e] text-lg mr-4">Inventory</Link>

                </div>
                <div>
                    {
                        user ?
                            <div className='flex items-center'>
                                <span class="block text-lg mt-4 lg:inline-block lg:mt-0 text-[#1b3e41] mr-4"><img className='rounded-full w-[30px]' src={user?.photoURL} alt="" /></span>
                                <Link onClick={() => signOut(auth)} to='/signin' className='inline-block rounded px-4 py-2 leading-none text-white bg-[#1b3e41] hover:text-white hover:bg-[#ff634e] mt-4 lg:mt-0'>Sign Out</Link>
                            </div>
                            :
                            <div className='flex items-center'>
                                <span class="block mt-4 lg:inline-block lg:mt-0 text-[#1b3e41] mr-4 text-3xl"><HiUserCircle /></span>
                                <Link to='/signin' className='inline-block rounded px-4 py-2 leading-none text-white bg-[#ff634e] hover:text-white hover:bg-[#1b3e41] mt-4 lg:mt-0'>Sign In</Link>
                            </div>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;