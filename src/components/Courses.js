import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BeakerIcon, StarIcon } from '@heroicons/react/24/solid'


const Courses = () => {

    const allData = useLoaderData();

    return (
        <div className=' md:grid grid-cols-[300px_minmax(900px,_1fr)_100px]'>
            <div className='mr-4'>
                <div className=" m-5 flex flex-col md:h-screen p-3 md:w-60 dark:bg-gray-900 dark:text-gray-100">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <button className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-100">
                                    <rect width="352" height="32" x="80" y="96"></rect>
                                    <rect width="352" height="32" x="80" y="240"></rect>
                                    <rect width="352" height="32" x="80" y="384"></rect>
                                </svg>
                            </button>
                            <h2 className='pr-12'>Our Courses</h2>
                        </div>
                        <div className="">
                             <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-ring dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                {
                                    allData.map(courseTitle => <div
                                        key={courseTitle.id}
                                    >
                                        <Link to={`/Course/${courseTitle.id}`}><li className='p-2'>{courseTitle.title}</li></Link>

                                    </div>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:grid grid-cols-3 gap-5'>

                {
                    allData.map(course =>
                        <div key={course.id}
                            className=''
                        >
                            <Link to={`/Course/${course.id}`}>
                                <div className=" m-5 p-4 shadow-md ">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <img src={course.image} alt="" className="w-full h-60" />
                                            <div className="flex items-center text-xs">
                                                <span>{course.classTime} Hours</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold text-blue-900">{course.title}</h3>
                                            <p className="leading-snug dark:text-gray-400">{course.description.slice(0, 100) + '....'}</p>
                                            <div className='flex'>
                                                <p className='mr-2'>Ratigs: <span>{course.rating.rate}</span></p>
                                                <p><StarIcon className='h-5'></StarIcon></p>
                                                <p><StarIcon className='h-5'></StarIcon></p>
                                                <p><StarIcon className='h-5'></StarIcon></p>
                                            </div>
                                            <p className=''>Price: $<span className='font-bold'>{course.price}</span></p>
                                            <button className="btn btn-block bg-gray-900">More Details</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default Courses;