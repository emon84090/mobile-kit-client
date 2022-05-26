import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../auth/firebaseconfig';
import switalert from '../../shared/Alert';

const Addreview = () => {
    const [user, loading, error] = useAuthState(auth);

    const reviewform = async (e) => {
        e.preventDefault();
        const image = user.photoURL ? user.photoURL : 'https://i.ibb.co/tHX2Mmt/User-Avatar-in-Suit-PNG.png';

        const formdata = {
            name: e.target.username.value,
            reviews: e.target.review.value,
            reviewcount: e.target.reviewcount.value,
            userimage: image
        }

        try {
            const { data } = await axios.post(`http://localhost:5000/review`, formdata, {
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accesstoken')}`
                }
            })
            if (data.insertedId) {
                switalert('review add success', 'success');
                e.target.reset();
            }
        } catch (err) {
            switalert('review add faild', 'error');
        }






    }

    return (
        <>
            <h2 className='text-2xl font-semibold ml-10 text-primary mt-10'>Add Review</h2>

            <div className="review-all-content flex justify-center items-center">
                <div class="card w-full max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <form onSubmit={reviewform}>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Name</span>

                                </label>
                                <input name='username' value={user?.displayName} type="text" placeholder="Type here" class="input input-bordered w-full input-disabled" />

                            </div>

                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">review star</span>

                                </label>
                                <select name='reviewcount' class="select w-full border border-gray-200" required>

                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option selected value="5">5</option>

                                </select>

                            </div>

                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text"> Review</span>

                                </label>
                                <textarea class="textarea w-full  border border-gray-300" placeholder="Bio" name='review' required></textarea>

                            </div>
                            <button type='submit' className='btn btn-primary mt-3'>add</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Addreview;