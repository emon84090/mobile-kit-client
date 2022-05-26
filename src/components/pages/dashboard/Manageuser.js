import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import auth from '../../auth/firebaseconfig';
import switalert from '../../shared/Alert';
import Spinner from '../../shared/Spinner';
import Deleteusermodal from './Deleteusermodal';

const Manageuser = () => {
    const [deletemodal, setDelete] = useState(false);
    const [deletemail, setDelemail] = useState('');


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://floating-eyrie-91956.herokuapp.com/users`, {
        headers: {
            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then((res) => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }



    if (users.message === "forbidden access" || users.message === "unauthorized access") {
        signOut(auth)
    }





    const makeadmin = async (email) => {
        try {
            const data = await fetch(`https://floating-eyrie-91956.herokuapp.com/user/admin/${email}`, {
                method: "PUT",
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accesstoken')}`
                }
            });

            const jsondata = await data.json();

            if (jsondata.modifiedCount > 0) {
                switalert("admin added done", "success");
            } else {
                switalert("admin added faild", "error");
            }

            refetch();
        } catch (err) {
            switalert(`${err.message}`, "error");
        }

    }

    const removeadmin = async (email) => {
        try {
            const data = await fetch(`https://floating-eyrie-91956.herokuapp.com/user/adminremove/${email}`, {
                method: "PUT",
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accesstoken')}`
                }
            });

            const jsondata = await data.json();

            if (jsondata.modifiedCount > 0) {
                switalert("admin removed done", "success");
            } else {
                switalert("admin removed faild", "error");
            }

            refetch();
        } catch (err) {
            switalert(`${err.message}`, "error");
        }
    }


    const deleteac = (email) => {
        setDelete(true);
        setDelemail(email)
    }

    return (
        <>
            <h2 className='text-2xl font-semibold ml-10 text-primary mt-10'>All Users</h2>

            <div className="users-table-conten p-4">
                {deletemodal && <Deleteusermodal deletemail={deletemail} refetch={refetch} setDelete={setDelete}></Deleteusermodal>}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full text-center">

                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Status</th>
                                <th colSpan="2">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((val, index) => <tr key={val._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={val.photo ? val.photo : 'https://i.ibb.co/tHX2Mmt/User-Avatar-in-Suit-PNG.png'} alt="user avater" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{val.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {val.email}

                                </td>
                                <td><span className='font-bold capitalize text-sm'>{val.role ? val.role : 'user'}</span></td>
                                <th>
                                    {val.role === "admin" ? <button onClick={() => removeadmin(val.email)} className="btn btn-primary btn-md">Remove admin</button>
                                        :
                                        <button onClick={() => makeadmin(val.email)} className="btn btn-primary btn-md">Make admin</button>
                                    }

                                    <button onClick={() => deleteac(val.email)} className="btn btn-error text-white btn-md ml-3">Delete</button>
                                </th>
                            </tr>)}



                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default Manageuser;