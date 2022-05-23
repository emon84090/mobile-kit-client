import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../shared/Spinner';
import Deleteproductmodal from './Deleteproductmodal';

const Mangeproduct = () => {
    const [deletemodal, setDelete] = useState(false);
    const [deleteid, setDelid] = useState('');
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/allproduct`, {
        headers: {
            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then((res) => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const deletefun = (id) => {
        setDelete(true);
        setDelid(id)
    }


    return (
        <>
            {deletemodal && <Deleteproductmodal refetch={refetch} deleteid={deleteid} setDelete={setDelete}></Deleteproductmodal>}

            <div className="table-all-content p-4">
                <h2 className='my-5 text-2xl font-semibold text-primary'>All Product</h2>
                <div class="overflow-x-auto ">
                    <table class="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Discription</th>
                                <th>price</th>
                                <th>avilable qty</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((val, index) => <tr key={val._id}>
                                <th>{index + 1}</th>
                                <td><div class="avatar">
                                    <div class="w-16 rounded-full">
                                        <img src={val.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{val.name}</td>
                                <td>{val.discription}</td>
                                <td>{val.price}$</td>
                                <td>{val.quantity}$</td>
                                <td><button onClick={() => deletefun(val._id)} className='btn btn-error btn-sm text-white font-semibold'>Delete</button></td>
                            </tr>)}



                        </tbody>
                    </table>
                </div>

            </div>

        </>
    );
};

export default Mangeproduct;