import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import auth from '../../auth/firebaseconfig';
import Spinner from '../../shared/Spinner';
import Deleteproductmodal from './Deleteproductmodal';

const Mangeproduct = () => {
    const [deletemodal, setDelete] = useState(false);
    const [deleteid, setDelid] = useState('');
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`https://floating-eyrie-91956.herokuapp.com/allproduct`, {
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
    if (products.message === "forbidden access" || products.message === "unauthorized access") {
        signOut(auth)
    }


    return (
        <>
            {deletemodal && <Deleteproductmodal refetch={refetch} deleteid={deleteid} setDelete={setDelete}></Deleteproductmodal>}

            <div className="table-all-content p-4">
                <h2 className='my-5 text-2xl font-semibold text-primary'>All Product</h2>
                <div className="overflow-x-auto ">
                    <table className="table table-zebra w-full">

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
                                <td><div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={val.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{val.name}</td>
                                <td>{val.discription.slice(0, 40)}....</td>
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