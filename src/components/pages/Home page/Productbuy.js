import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../auth/firebaseconfig';
import switalert from '../../shared/Alert';
import Spinner from '../../shared/Spinner';

const Productbuy = () => {
    const { id } = useParams();
    const [user, loading, error] = useAuthState(auth);
    const [qty, setQty] = useState();
    const [disabled, setDisabled] = useState(false);




    const { data: product, isLoading, refetch } = useQuery('singleproducts', () => fetch(`http://localhost:5000/allproduct/${id}`, {
        headers: {
            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then((res) => res.json()))



    if (isLoading) {
        return <Spinner></Spinner>
    }

    const quantityhandle = (e) => {
        const value = Number(e.target.value);
        if (value < Number(product.minumumqty)) {
            setDisabled(true);
            return switalert(`minimum qty ${product.minumumqty}`, "error");

        } else if (value > Number(product.maximumqty)) {
            setDisabled(true);
            return switalert(`minimum qty ${product.maximumqty}`, "error");

        } else {
            setQty(e.target.value);
            setDisabled(false);
        }


    }

    return (
        <>
            <div className="singleproduct-all py-10 min-h-screen flex justify-center items-center">

                <div class="flex flex-col  bg-white dark:bg-gray-800  rounded-lg shadow-xl">
                    <div class="flex-none   relative">
                        <img src={product.image} alt="charger" class=" rounded-lg inset-0 w-full max-h-48  object-contain" />
                    </div>
                    <form class="flex-auto p-6">
                        <div class="flex flex-wrap">
                            <h1 class="flex-auto text-xl capitalize font-semibold dark:text-gray-50">
                                {product.name}
                            </h1>

                            <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">
                                {product.price}$
                            </div>

                            <div class="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                                <h1 class="flex-auto text-xl text-primary mb-3 capitalize font-semibold ">
                                    avilable qty: {product.quantity}
                                </h1>

                                minimum quantity <span className='font-bold text-gray-600'>{product.minumumqty}</span>
                            </div>
                            <div class="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                                maximum quantity <span className='font-bold text-gray-600'>{product.maximumqty}</span>
                            </div>
                        </div>

                        <input disabled value={user.displayName} type="text" placeholder="name" class="input border border-gray-300 mt-3 w-full" />
                        <input disabled value={user.email} type="text" placeholder="email" class="input border border-gray-300 mt-3 w-full" />
                        <input onChange={quantityhandle} defaultValue={product.minumumqty} type="number" placeholder="Quantity" class="input border border-gray-300 mt-3 w-full" />


                        <div class="flex mb-4 text-sm font-medium mt-5">
                            <button disabled={disabled} type="submit" class="py-2 px-4 capitalize bg-rose-600 disabled:cursor-not-allowed disabled:bg-rose-400 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                place order
                            </button>
                        </div>
                        <p class="text-sm text-gray-500 dark:text-gray-300">
                            Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>

            </div>

        </>
    );
};

export default Productbuy;