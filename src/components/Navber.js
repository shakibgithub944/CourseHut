import React, { useState } from 'react';
import logo from '../asset/logo.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContexts';
import { toast } from 'react-hot-toast';


const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.warning('Your are Sign Out')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="Company"
                    title="Company Name"
                    className="inline-flex items-center"
                >
                    <img src={logo} className='h-12' alt="" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                        CourseHut
                    </span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <Link
                            to="/"
                            aria-label="Product pricing"
                            title="Home"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Course"
                            aria-label="Our product"
                            title="Course"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Blog"
                            aria-label="Our product"
                            title="Blog"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Faq"
                            aria-label="Product pricing"
                            title="FAQ"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            About us
                        </Link>
                    </li>
                </ul>


                <div className='flex items-center hidden space-x-8 lg:flex'>
                    {/* {
                        user?.displayName ? <span className='font-bold'>{user.displayName}</span> : ''
                    } */}

                    {
                        user?.photoURL ? <img title={user.displayName} src={user.photoURL} className='ml-0 h-8 w-8 rounded-full' alt="" /> : ''
                    }
                    {
                        user?.displayName ? <p onClick={handleSignOut} className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">SignOut</p>
                            :
                            <div className='flex'>
                                <div className='mr-4'>
                                    <Link
                                        to="/Login"
                                        aria-label="Product pricing"
                                        title="Login"
                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Login
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/Register"
                                        aria-label="Product pricing"
                                        title="Register"
                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                    }

                </div>

                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer">
                            {/* <span>Dark</span> */}
                            <span className="relative">
                                <input id="Toggle1" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                            </span>
                            {/* <span>Light</span> */}
                        </label>
                    </li>
                </ul>

                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <img src={logo} className='h-12' alt="" />
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                                                CourseHut
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="Product pricing"
                                                title="Home"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/Course"
                                                aria-label="Our product"
                                                title="Course"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Courses
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/Blog"
                                                aria-label="Our product"
                                                title="Blog"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/Faq"
                                                aria-label="Product pricing"
                                                title="FAQ"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="About us"
                                                title="About us"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                About us
                                            </Link>
                                        </li>

                                        <li>

                                            {
                                                user?.photoURL ? <img title={user.displayName} src={user.photoURL} className='ml-0 h-8 w-8 rounded-full' alt="" /> : ''
                                            }
                                            {
                                                user?.displayName ? <p onClick={handleSignOut} className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">SignOut</p>
                                                    :
                                                    <div className='flex'>
                                                        <div className='mr-4'>
                                                            <Link
                                                                to="/Login"
                                                                aria-label="Product pricing"
                                                                title="Login"
                                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                            >
                                                                Login
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <Link
                                                                to="/Register"
                                                                aria-label="Product pricing"
                                                                title="Register"
                                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                            >
                                                                Register
                                                            </Link>
                                                        </div>
                                                    </div>
                                            }
                                        </li>
                                        <li>
                                            <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer">
                                                {/* <span>Dark</span> */}
                                                <span className="relative">
                                                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                                                    <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                                                </span>
                                                {/* <span>Light</span> */}
                                            </label>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navber;