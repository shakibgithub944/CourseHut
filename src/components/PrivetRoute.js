import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContexts';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-gray-400"></div>
    }
    if (!user) {
        return <Navigate to='/Login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivetRoute;