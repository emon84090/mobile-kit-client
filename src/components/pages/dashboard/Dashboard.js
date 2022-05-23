import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side ">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto bg-gray-100 shadow-xl w-80  text-base-content">

                        <li><Link to="/dashboard/addproduct">Add a product</Link></li>
                        <li><Link to="/dashboard/manageproduct">manage product</Link></li>
                        <li><Link to="/dashboard/manageusers">manage users</Link></li>

                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;