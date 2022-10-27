import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold">Join  Our Digital Learning Platform.</h1>
                        <p className="py-6"> You must choose from the list and achieve a satisfying career. All of the courses are industry-relevant and the contents give you digital ideas to implement during work.</p>
                        <Link to='/Course'><button className="btn ">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;