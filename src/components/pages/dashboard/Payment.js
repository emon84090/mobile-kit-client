import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import Checkoutform from './Checkoutform';
import switalert from '../../shared/Alert';

const stripePromise = loadStripe('pk_test_51L0fKtJ9YTsnQW1SafvFlrf1wZKLqZVeifViJOEEbVypUU6drsifaKwTd78RB9dUeJ7Vh0WYk6nxg3gGVagc9Qbr00aQpbUiuq');

const Payment = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    useEffect(() => {

        const getData = async () => {
            if (id) {

                try {
                    const data = await fetch(`https://floating-eyrie-91956.herokuapp.com/payment?id=${id}`, {
                        method: "GET",
                        headers: {
                            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
                        }
                    });
                    const jsondata = await data.json();
                    setData(jsondata)

                } catch (err) {
                    switalert("something went wrong", "error")

                }

            }
        }
        getData();
    }, [id])

    console.log(data);
    return (
        <>

            <div className="payment-all-content mt-5 flex flex-col justify-center items-center">
                <div className="card w-full max-w-md bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-accent font-bold">Pay For: <span className='text-primary'>{data?.item_name}</span></h2>
                        <p className='text-accent'>quantity: <span className='font-semibold'>{data?.qty} pis</span></p>
                        <p className='text-accent font-bold capitalize'>please pay: {data?.price * data?.qty}$</p>
                    </div>
                </div>
                <div className="card w-full max-w-md bg-base-100 shadow-xl mt-5">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <Checkoutform data={data} />
                        </Elements>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Payment;