import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../auth/firebaseconfig';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const signout = () => {
        signOut(auth);
        localStorage.removeItem("accesstoken");

    }

    const Menuitems = <>
        <li><Link to="/" className='font-semibold text-secondary capitalize'>Home</Link></li>
        <li><Link to="/blog" className='font-semibold text-secondary capitalize'>Blog</Link></li>
        <li><Link to="/portfolio" className='font-semibold text-secondary capitalize'>Portfolio</Link></li>

        {!user &&
            <>
                <li><Link to="/signin" className='capitalize font-semibold text-secondary'>Login</Link></li>
                <li><Link to="/signup" className='capitalize font-semibold text-secondary'>registration</Link></li>

            </>}

        {user &&
            <>
                <li><Link to="/dashboard" className='capitalize font-semibold text-secondary'>Dashboard</Link></li>
            </>
        }

    </>
    return (
        <>
            <div className="navbar bg-primary px-2 sticky top-0 z-30">
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu bg-primary menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {Menuitems}
                        </ul>
                    </div>

                    <Link to="/" className=" text-secondary normal-case text-2xl font-bold">Mobile Kit</Link>
                </div>

                <div className="navbar-end">
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {Menuitems}

                        </ul>
                    </div>
                    {user &&
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt='' src={user?.photoURL ? user.photoURL : "https://i.ibb.co/tHX2Mmt/User-Avatar-in-Suit-PNG.png"} />
                                    </div>
                                </label>
                                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to="/dashboard" className='justify-between'>
                                            Profile
                                            <span className="badge">{user?.displayName}</span>
                                        </Link>

                                    </li>

                                    <li><a onClick={signout}>Logout</a></li>
                                </ul>
                            </div>
                            <label htmlFor="sidebar" className="btn btn-primary drawer-button lg:hidden">  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                        </>

                    }

                </div >
            </div >
        </>
    );
};

export default Header;