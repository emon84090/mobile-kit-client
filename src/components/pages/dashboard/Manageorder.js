import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../shared/Spinner';
import Deleteordermodal from './Deleteordermodal';

const Manageorder = () => {
    const [deletemodal, setDelete] = useState(false);
    const [deleteid, setDeleid] = useState('');

    const { data: order, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/allorder`, {
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



    return (
        <>
            <div className="user-table-all p-4">
                {deletemodal && <Deleteordermodal deleteid={deleteid} refetch={refetch} setDelete={setDelete}></Deleteordermodal>}
                <div class="overflow-x-auto w-full">
                    <table class="table w-full text-center">

                        <thead>
                            <tr>
                                <th>id</th>
                                <th>product name</th>
                                <th> name</th>
                                {/* <th> email</th> */}
                                <th> address</th>
                                <th>quantity</th>
                                <th>total price</th>

                                <th>status</th>
                                <th colSpan="2">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order?.map((val, index) => <tr>
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
                                    <td> <span className='badge badge-sm badge-warning'>{val.status}</span></td>
                                    <th>
                                        <button class="btn btn-success btn-xs">approve</button>
                                        <button onClick={() => deleteorder(val._id)} class="btn btn-error btn-xs ml-2">delete</button>
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