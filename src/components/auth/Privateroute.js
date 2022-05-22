import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../shared/Spinner';
import auth from './firebaseconfig';


const Privateroute = ({ children }) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Spinner></Spinner>

    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children;
};

export default Privateroute;