import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { AuthContext } from '../UserContext/UserContexts';
import { useState } from 'react';

const Home = () => {
    const { logIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(Result => {
                const user = Result.user;
                console.log(user);
                form.reset();
                toast.success('Successfully Registered');
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(Result => {
                const user = Result.user;
                console.log(user);
                toast.success('Successfully Registered');
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })

    }
    const handleGitHubSignIn = () => {
        gitHubSignIn()
            .then(Result => {
                const user = Result.user;
                console.log(user);
                toast.success('Successfully Registered');
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })

    }

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