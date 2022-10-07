import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from "../../image/main logo.png";
import { signOut } from 'firebase/auth';
import userPhoto from '../../image/userPhoto.jpg'


const Navbar = () => {
    const [user] = useAuthState(auth);
    return (
        <nav>
            <div className='bg-white border-b border-base-300/50'>
                <div className="w-full">
                    <div className="grid grid-cols-3 lg:grid-cols-2 items-center px-3 py-2">
                        <div className="lg:hidden">
                            <label for="my-drawer" className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path trokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <Link to='/'><img
                                className="block h-8 w-auto"
                                src={logo}
                                alt="Bike Pro"
                            /></Link>
                        </div>
                        <div className='flex justify-end'>
                            {
                                user && <div className="dropdown dropdown-click dropdown-end">

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
                                                className=' cursor-pointer py-2 flex justify-center text-right text-sm text-white shadow bg-primary rounded-box w-32'
                                            >
                                                <span>Sign out</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;