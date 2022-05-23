import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import switalert from '../shared/Alert';
import auth from './firebaseconfig';
import Forgetpass from './Forgetpass';
import useToken from './useToken';


const Signin = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [token] = useToken(user || guser);

    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (token) {
        switalert("login success", "success")
        navigate(from, { replace: true });
    }

    let signinerror;

    if (error || gerror) {
        signinerror = <p>{error?.message || gerror?.message}</p>
    }


    const [modal, setmodal] = useState(false);



    const submitform = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

    }

    return (
        <>
            <section className='min-h-screen flex justify-center items-center'>
                {modal && <Forgetpass setmodal={setmodal}></Forgetpass>}
                <div className="card max-w-md w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center text-accent font-bold">Login</h2>

                        <form onSubmit={submitform}>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className=' text-accent'>Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input text-gray-500 border-gray-300 input-bordered w-full "
                                    required />

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className=' text-accent'>Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Type here" className="input text-gray-500 border-gray-300 input-bordered w-full "
                                    required />


                            </div>
                            {signinerror && <p className='text-red-500 mt-2 text-center text-sm'>{signinerror}</p>}
                            <div className="input-field">

                                <button type='submit' className='mt-2 btn btn-primary w-full text-white font-semibold'>{loading ? <i className='bx bx-loader-alt font-semibold animate-spin text-xl'></i> : 'Login'}</button>
                            </div>

                        </form>

                        <p className='text-gray-500 '>New to Mobile kit  <Link className='text-primary underline' to="/signup">Registration now</Link></p>
                        <p onClick={() => setmodal(true)} className='text-primary capitalize underline cursor-pointer'>reset password</p>
                        {/* <label for="my-modal" class="btn modal-button">open modal</label> */}

                        <div className="flex flex-col w-full  ">

                            <div className="divider after:bg-gray-200 before:bg-gray-200">OR</div>
                        </div>

                        <div className="social-login-system w-full">
                            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent w-full">sign in with google</button>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default Signin;