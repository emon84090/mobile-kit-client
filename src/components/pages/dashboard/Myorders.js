import { async } from '@firebase/util';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../auth/firebaseconfig';
import switalert from '../../shared/Alert';
import Spinner from '../../shared/Spinner';
import Cancelordermodal from './Cancelordermodal';

const Myorders = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [deletemodal, setDelete] = useState(false);
    const [deletemail, setDelemail] = useState('');

    const { data: myorder, isLoading, refetch } = useQuery('myorder', () => fetch(`http://localhost:5000/order/${user.email}`, {
        headers: {
            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then((res) => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }


    const cancelorder = (id) => {
        setDelete(true);
        setDelemail(id)
    }
    return (
        <>
            <h2 className='text-2xl font-semibold ml-10 text-primary mt-10'>My Order :{myorder.length}</h2>

            <div className="users-table-conten p-4">
                {deletemodal && <Cancelordermodal cancleid={deletemail} refetch={refetch} setDelete={setDelete}></Cancelordermodal>}
                <div class="overflow-x-auto w-full">
                    <table class="table w-full text-center">

                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>quantity</th>

                                <th>total price</th>
                                <th>status/transection id</th>
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
                                <td><span className={`badge ${val.status === "unpaid" ? 'badge-error' : 'badge-success'}`}>{val.status}</span> {val.transectionid && val.transectionid}</td>
                                <th>
                                    {val.status === "unpaid" &&
                                        <>
                                            <Link to={`/dashboard/payment/${val._id}`}><button class="btn btn-success btn-sm text-white ml-3">payment</button></Link>
                                            <button onClick={() => cancelorder(val._id)} class="btn btn-error btn-sm text-white ml-3">Cancel</button>
                                        </>

                                    }
                                    {val.status === "pending" && <button className='btn btn-sm btn-success text-white btn-disabled'>pending</button>
                                    }
                                    {val.status === "shiped" && <button className='btn btn-sm btn-success text-white btn-disabled'>shiped</button>
                                    }

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