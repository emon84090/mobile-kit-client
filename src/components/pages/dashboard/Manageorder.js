import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import auth from '../../auth/firebaseconfig';
import switalert from '../../shared/Alert';
import Spinner from '../../shared/Spinner';
import Deleteordermodal from './Deleteordermodal';

const Manageorder = () => {
    const [deletemodal, setDelete] = useState(false);
    const [deleteid, setDeleid] = useState('');

    const { data: order, isLoading, refetch } = useQuery('orders', () => fetch(`https://floating-eyrie-91956.herokuapp.com/allorder`, {
        headers: {
            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then((res) => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const deleteorder = (id) => {
        setDelete(true);
        setDeleid(id)
    }

    if (order.message === "forbidden access" || order.message === "unauthorized access") {
        signOut(auth)
    }

    const approveorder = async (id) => {
        try {
            const { data } = await axios.put(`https://floating-eyrie-91956.herokuapp.com/approveorder/${id}`, {
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accesstoken')}`
                }
            });
            console.log(data);
            if (data.modifiedCount) {
                switalert('order shipped success', "success");

            } else {
                switalert('order shipped faild', "error");

            }
            refetch();
        } catch (err) {
            switalert('order shipped faild', "error");

        }
    }


    return (
        <>
            <div className="user-table-all p-4">
                {deletemodal && <Deleteordermodal deleteid={deleteid} refetch={refetch} setDelete={setDelete}></Deleteordermodal>}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full text-center">

                        <thead>
                            <tr>
                                <th>id</th>
                                <th>product name</th>
                                <th> name</th>
                                {/* <th> email</th> */}
                                <th> address</th>
                                <th>quantity</th>
                                <th>total price</th>

                                <th>status/transection id</th>
                                <th colSpan="2">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order?.map((val, index) => <tr key={val._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {val.item_name}

                                    </td>
                                    <td> {val.name}</td>
                                    {/* <td> {val.email}</td> */}
                                    <td> {val.address}</td>
                                    <td> <span className='font-bold'>{val.qty}</span></td>
                                    <td> <span className='font-bold'>{val.price * val.qty}$</span></td>
                                    <td> <span className={`badge ${val.status === "unpaid" ? 'badge-error' : 'badge-success'}`}>{val.status}</span> {val.transectionid && val.transectionid}</td>
                                    <th>
                                        {val.status === "unpaid" && <button onClick={() => deleteorder(val._id)} className="btn btn-error btn-xs ml-2">delete</button>}
                                        {val.status === "pending" && <button onClick={() => approveorder(val._id)} className="btn btn-success btn-xs">approve</button>}

                                        {val.status === "shiped" && <button className="btn btn-success btn-xs btn-disabled">shiped</button>}


                                    </th>
                                </tr>
                                )
                            }

                        </tbody>



                    </table>
                </div>
            </div>

        </>
    );
};

export default Manageorder;