import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            <h1 className='text-center  text-5xl font-bold'>{details.title}</h1>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="flex flex-col lg:flex-row">
                    <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                        <img src={details.image} className='h-96' alt="" />
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-base text-gray-700 mb-3">{details.description}</p>
                        <p className="text-base mb-3 font-bold"> Class Time: {details.classTime} Hours</p>

                        <div className='flex'>
                            <p className='mr-2 mb-3'>Ratigs: <span>{details.rating.rate}</span></p>
                            <p><StarIcon className='h-5'></StarIcon></p>
                            <p><StarIcon className='h-5'></StarIcon></p>
                            <p><StarIcon className='h-5'></StarIcon></p>
                        </div>
                        <p className=''>Price: $<span className='font-bold'>{details.price}</span></p>
                        <Link to={`/Course/${details.id}/CheckOut`}>
                            <button className="btn btn-outline btn-info mt-5">Get Primium Access</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;