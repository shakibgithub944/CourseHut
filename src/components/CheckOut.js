import React from 'react';
import { useLoaderData } from 'react-router-dom';
const CheckOut = () => {
    const details = useLoaderData();
    return (
        <div >
            <h1 className='text-center font-bold text-3xl'>{details.title}</h1>
            <h1 className='text-center '>Payment Getway is Under Proccess.....</h1>
        </div>
    );
};

export default CheckOut;