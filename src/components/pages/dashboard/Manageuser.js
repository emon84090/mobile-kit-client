import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../shared/Spinner';

const Manageuser = () => {
    const { data: users, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/users`, {
        headers: {
            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then((res) => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <>
            <h2 className='text-2xl font-semibold ml-10 text-primary mt-10'>All Users</h2>

            <div className="users-table-conten p-4">
                <div class="overflow-x-auto w-full">
                    <table class="table w-full text-center">

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
                            {users.map((val, index) => <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src={val.photo ? val.photo : 'https://i.ibb.co/tHX2Mmt/User-Avatar-in-Suit-PNG.png'} alt="user avater" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">{val.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {val.email}

                                </td>
                                <td>user</td>
                                <th>
                                    <button class="btn btn-primary btn-md">Make admin</button>
                                    <button class="btn btn-error text-white btn-md ml-3">Delete</button>
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