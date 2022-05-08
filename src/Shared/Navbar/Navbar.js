import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import logo from "../../image/main logo.png";
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'
import CustomLink from '../CustomLink/CustomLink'
import { HiUserCircle } from 'react-icons/hi';
import { signOut } from 'firebase/auth';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    const [user] = useAuthState(auth);
    return (
        <Disclosure as="nav" className="bg-white py-5">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to='/'><img
                                        className="block lg:hidden h-8 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    /></Link>
                                    <Link to='/'>
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src={logo}
                                            alt="Workflow"
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
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div className='flex flex-col-reverse items-center md:flex-row gap-0 md:gap-2 md:items-center mt-6 md:mt-0 '>
                                        {
                                            user ?
                                                <p>{user?.displayName}</p>
                                                :
                                                <div className='flex items-center gap-1'><span>Sign In</span> <span className='hidden md:block'><HiOutlineArrowNarrowRight /></span></div>
                                        }
                                        {
                                            user ?
                                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src={user?.photoURL}
                                                        alt=""
                                                    />
                                                </Menu.Button>
                                                :
                                                <Menu.Button className="text-4xl flex rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <HiUserCircle />
                                                </Menu.Button>
                                        }
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {
                                                user ?
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <CustomLink
                                                                to="/addproduct"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Add New Product
                                                            </CustomLink>
                                                        )}
                                                    </Menu.Item>
                                                    :
                                                    ""
                                            }
                                            {
                                                user ?
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <CustomLink
                                                                to="/myProduct"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                My Product
                                                            </CustomLink>
                                                        )}
                                                    </Menu.Item>
                                                    :
                                                    ""
                                            }
                                            {
                                                user ?
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() => signOut(auth)}
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Sign out
                                                            </button>

                                                        )}
                                                    </Menu.Item>
                                                    :
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to='/signIn'
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Sign In
                                                            </Link>

                                                        )}
                                                    </Menu.Item>
                                            }
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>


                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
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
                            {
                                user ?
                                    <CustomLink
                                        to="/menageProduct"
                                        className='block px-4 py-2 text-sm text-gray-700'
                                    >
                                        Menage Product
                                    </CustomLink>
                                    :
                                    ""
                            }
                        </div>
                    </Disclosure.Panel>

                </>
            )}
        </Disclosure>
    )
}
