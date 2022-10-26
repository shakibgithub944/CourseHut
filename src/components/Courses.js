import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BeakerIcon, StarIcon } from '@heroicons/react/24/solid'


const Courses = () => {

    const allData = useLoaderData();

    return (
        <div className=' md:grid grid-cols-[300px_minmax(900px,_1fr)_100px]'>
            <div className='mr-4'>
                <div className="flex flex-col h-screen p-3 w-60 dark:bg-gray-900 dark:text-gray-100">
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
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center py-4">
                                <button type="submit" className="p-2 focus:outline-none focus:ring">
                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-400">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
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
                                <div className=" p-4 shadow-md ">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <img src={course.image} alt="" className="w-full h-60" />
                                            <div className="flex items-center text-xs">
                                                <span>{course.classTime} Hours</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold dark:text-violet-400">{course.title}</h3>
                                            <p className="leading-snug dark:text-gray-400">{course.description.slice(0, 100) + '....'}</p>
                                            <div className='flex'>
                                                <p className='mr-2'>Ratigs: <span>{course.rating.rate}</span></p>
                                                <p><StarIcon className='h-5'></StarIcon></p>
                                                <p><StarIcon className='h-5'></StarIcon></p>
                                                <p><StarIcon className='h-5'></StarIcon></p>
                                            </div>
                                            <p className=''>Price: $<span className='font-bold'>{course.price}</span></p>
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