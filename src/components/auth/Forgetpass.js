
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../auth/firebaseconfig';
import switalert from '../shared/Alert';



const Forgetpass = ({ setmodal }) => {

    const [sending, setSending] = useState(false);

    const forgetform = async (e) => {
        e.preventDefault();
        setSending(true);
        const femail = e.target.forgetemail.value;
        sendPasswordResetEmail(auth, femail)
            .then(() => {
                switalert("send your email,we send a password rest link", "success");
                setSending(false);
                setmodal(false);

            })
            .catch((error) => {
                switalert(error.message, "error");
                setSending(false);

            });

    }
    return (
        <>

            <div class=" overflow-y-auto h-full top-0 bg-gray-100 overflow-x-hidden fixed  z-50 w-full md:inset-0 flex justify-center items-center md:h-full">
                <div class="relative p-4 w-full max-w-md h-full md:h-auto">

                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <button onClick={() => setmodal(false)} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div class="py-6 px-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Reset Password</h3>
                            <form class="space-y-6" onSubmit={forgetform}>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className=' text-accent'>Email</span>
                                    </label>
                                    <input name='forgetemail' type="email" placeholder="email" className="input text-gray-500 border-gray-300 input-bordered w-full "
                                        required />

                                </div>

                                <button type='submit' className='mt-2 btn btn-primary w-full text-white font-semibold'>{sending ? <i className='bx bx-loader-alt font-semibold animate-spin text-xl'></i> : 'reset'}</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Forgetpass;