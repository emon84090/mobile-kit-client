import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../auth/firebaseconfig';
import switalert from '../../shared/Alert';
import Spinner from '../../shared/Spinner';


const Myprofile = () => {
    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { data: users, isLoading, refetch } = useQuery('singleuser', () => fetch(`http://localhost:5000/users/${user.email}`, {
        headers: {
            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then((res) => res.json()))


    if (isLoading) {
        return <Spinner></Spinner>
    }



    const onSubmit = async (data) => {

        const newdata = {
            phone: data.phone,
            location: data.location,
            linkedin: data.linkedin
        }

        if (user) {
            try {
                const result = await axios.put(`http://localhost:5000/profiledata/${user.email}`, newdata, {
                    headers: {
                        'authorization': `bearer ${localStorage.getItem('accesstoken')}`
                    }
                });

                switalert("profile updated success", "success");


            } catch (err) {

                switalert("profile updated faild", "error")
            }
        }


    }

    return (
        <>
            <h2 className='text-2xl font-semibold m-4 text-rose-500'>Update profile</h2>
            <div className="profile-all-content flex flex-col justify-center min-h-screen items-center">

                <div class="avatar mt-5   z-50">
                    <div class="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={users?.photo} alt="" />
                    </div>
                </div>
                <div class="card bg-rose-100 max-w-lg w-full mx-auto  shadow-xl">
                    <div class="card-body">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text font-semibold">Full Name</span>

                                </label>
                                <input readOnly defaultValue={user.displayName} {...register("name")} type="text" placeholder="Type here" class="input disabled:bg-gray-100  input-bordered w-full" />

                            </div>

                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text font-semibold">Email</span>

                                </label>
                                <input readOnly defaultValue={user.email} {...register("email")} type="text" placeholder="Type here" class="input disabled:bg-gray-100  input-bordered w-full" />

                            </div>

                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text font-semibold">Phone Number</span>

                                </label>
                                <input defaultValue={users?.newdata?.phone}   {...register("phone", { required: true })} type="text" placeholder="Type here" class="input   input-bordered w-full" />
                                {errors.phone?.type === 'required' && <span className='mt-1 font-semibold text-sm text-error'>Phone number is required</span>}
                            </div>

                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text font-semibold">Location</span>

                                </label>
                                <input defaultValue={users?.newdata?.location}    {...register("location", { required: true })} type="text" placeholder="Type here" class="input   input-bordered w-full" />
                                {errors.location?.type === 'required' && <span className='mt-1 font-semibold text-sm text-error'>location is required</span>}
                            </div>

                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text font-semibold">Linkedin Profile</span>

                                </label>
                                <input defaultValue={users?.newdata?.linkedin}    {...register("linkedin", { required: true })} type="text" placeholder="Type here" class="input   input-bordered w-full" />
                                {errors.linkedin?.type === 'required' && <span className='mt-1 font-semibold text-sm text-error'>linkedin link is required</span>}
                            </div>

                            <button type='submit' className='mt-3 btn btn-primary'>update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Myprofile;