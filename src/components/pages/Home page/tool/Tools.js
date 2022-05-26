import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Spinner from '../../../shared/Spinner';

const Tools = () => {
    const { data: products, isLoading, refetch } = useQuery('allproducts', () => fetch(`http://localhost:5000/allproduct`, {
        headers: {
            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then((res) => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <>
            <h2 className='text-3xl font-bold mt-10 text-center'>Find Your best choice</h2>

            <div className="container mx-auto">
                <div className="tools-all-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        products?.map((val) => <div key={val._id} class="card card-compact  shadow-xl">
                            <figure><img src={val.image} className='max-h-64' alt="Shoes" /></figure>
                            <div class="card-body">
                                <div className="card-heading flex justify-between">
                                    <h2 class="card-title">{val.name}</h2>
                                    <div class="badge badge-primary">available quantity {val.quantity}</div>
                                </div>

                                <p className='text-sm font-semibold text-neutral capitalize'>minimum order quantity: {val.minumumqty} pis</p>
                                <p className='text-sm font-semibold text-neutral capitalize'>maximum order quantity: {val.maximumqty} pis</p>
                                <p className='text-md font-semibold text-gray-500 my-3'>{val.discription}</p>

                                <p className='text-lg font-bold text-neutral capitalize'>price: {val.price}$</p>



                                <div class="card-actions justify-start mt-1">
                                    <Link className='w-full' to={`/productbuy/${val._id}`}>
                                        <button class="btn btn-outline btn-primary w-full">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div >


        </>
    );
};

export default Tools;