import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import switalert from '../../shared/Alert';

const Checkoutform = ({ data }) => {
    const [clientsecret, setClientsecret] = useState();
    const [transection, setTransection] = useState('');
    const [paymentloading, setPaymentloading] = useState(false);
    const price = (data?.price * data?.qty);
    const id = data?._id;
    const navigate = useNavigate();

    useEffect(() => {
        if (price) {
            const getdata = async () => {
                try {
                    const data = await fetch(`http://localhost:5000/create-payment-intent`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
                        },
                        body: JSON.stringify({ price })
                    });

                    const jsondata = await data.json();
                    setClientsecret(jsondata.clientSecret)

                } catch (err) {
                    console.log(err);
                }

            }
            getdata();

        }

    }, [price])



    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        setPaymentloading(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            alert(error?.message);
            setPaymentloading(false)

        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }


        const { paymentIntent, intentErrors } = await stripe.confirmCardPayment(
            clientsecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: data?.name,
                        email: data?.email,
                        phone: data?.phone,
                        address: data?.address
                    },
                },
            },

        );
        if (intentErrors) {
            alert(intentErrors.message);
            setPaymentloading(false)
        }



        if (paymentIntent?.id) {
            const payment = {

                transectionId: paymentIntent?.id

            }

            setTransection(paymentIntent?.id);

            try {
                const data = await axios.patch(`http://localhost:5000/order/${id}`, payment, {
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `bearer ${localStorage.getItem('accesstoken')}`
                    },
                })

                switalert("payment success", "success");
                setPaymentloading(false);
                navigate('/dashboard/myorders');
            } catch (err) {

                switalert("payment updated faild", "error")
                setPaymentloading(false)
            }


        }


    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm btn-success text-white mt-5' type="submit" disabled={!stripe || !clientsecret}>
                {paymentloading ? <i className='bx bx-loader-alt font-semibold animate-spin text-xl'></i> : 'pay'
                }
            </button>
            <div className="tid mt-3">
                {transection && <span className='text-green-500 text-sm'>your payment is successfull your transection id {transection}</span>}
            </div>

        </form>
    );
};

export default Checkoutform;