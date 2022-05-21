import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const Menuitems = <>
        <li><Link to="/" className='font-semibold text-secondary capitalize'>Home</Link></li>
        <li><Link to="/" className='font-semibold text-secondary'>Tools</Link></li>
        <li><Link to="/" className='capitalize font-semibold text-secondary'>business summary</Link></li>
        <li><Link to="/" className='capitalize font-semibold text-secondary'>reviews</Link></li>

    </>
    return (
        <>
            <div class="navbar bg-primary px-10">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {Menuitems}
                        </ul>
                    </div>

                    <Link to="/" class=" text-secondary normal-case text-2xl font-bold">Mobile Kit</Link>
                </div>

                <div class="navbar-end">
                    <div class=" hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            {Menuitems}

                        </ul>
                    </div>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>

                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;