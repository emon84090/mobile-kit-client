import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../auth/firebaseconfig';
import Spinner from '../shared/Spinner';

import useAdmin from './useAdmin';

const Requareadmin = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [admin, aloading] = useAdmin(user);

    if (loading || aloading) {
        return <Spinner></Spinner>
    }


    if (!user || !admin) {
        signOut(auth)
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children;
};

export default Requareadmin;