import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../auth/firebaseconfig';
import switalert from '../../shared/Alert';
import Spinner from '../../shared/Spinner';

const Myorders = () => {
    const [user, loading, error] = useAuthState(auth);

    const { data: myorder, isLoading, refetch } = useQuery('myorder', () => fetch(`http://localhost:5000/order/${user.email}`, {
        headers: {
            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then((res) => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }


    const cancelorder = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/cancelorder/${id}`, {
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accesstoken')}`
                }
            });
            if (data.deletedCount) {
                switalert('order cancle success', "success");

            } else {
                switalert('order cancle  faild', "error");

            }

            refetch();
        } catch (err) {
            switalert('order cancle  faild', "error");

        }
    }

    return (
        <>
            <h2 className='text-2xl font-semibold ml-10 text-primary mt-10'>My Order :{myorder.length}</h2>

            <div className="users-table-conten p-4">

                <div class="overflow-x-auto w-full">
                    <table class="table w-full text-center">

                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>quantity</th>

                                <th>total price</th>
                                <th>status</th>
                                <th colSpan="2">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myorder.map((val, index) => <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {val.item_name}
                                </td>
                                <td>
                                    {val.address}
                                </td>
                                <td><span className='font-bold'>{val.qty}</span></td>

                                <td><span className='font-bold'>{val.qty * val.price}$</span></td>
                                <td><span className='badge badge-error'>{val.status}</span></td>
                                <th>
                                    <button class="btn btn-success btn-sm text-white ml-3">payment</button>
                                    <button onClick={() => cancelorder(val._id)} class="btn btn-error btn-sm text-white ml-3">Cancel</button>
                                </th>
                            </tr>)}



                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default Myorders;