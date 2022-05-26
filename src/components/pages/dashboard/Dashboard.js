import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../auth/firebaseconfig';
import useAdmin from '../../auth/useAdmin';


const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    {/* <label htmlFor="sidebar" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto bg-gray-100 shadow-xl w-80  text-base-content">
                        <li><Link to="/dashboard">Profile</Link></li>
                        {
                            admin && <>
                                <li><Link to="/dashboard/addproduct">Add a product</Link></li>
                                <li><Link to="/dashboard/manageproduct">manage product</Link></li>
                                <li><Link to="/dashboard/makeadmin">Make admin</Link></li>
                                <li><Link to="/dashboard/manageorder">Manage Order</Link></li>
                            </>
                        }
                        {!admin && <>
                            <li><Link to="/dashboard/myorders">Myorders</Link></li>
                            <li><Link to="/dashboard/addreview">Addreview</Link></li>
                        </>}

                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;