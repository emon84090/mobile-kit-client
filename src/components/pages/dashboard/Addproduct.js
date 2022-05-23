import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import switalert from '../../shared/Alert';
const imageStoragekey = "1ef7c42bf0d139581c4d426179da13b1";

const Addproduct = () => {
    const [uloading, setUloading] = useState(false);
    const navigate = useNavigate();
    const addproduct = async (e) => {
        e.preventDefault();
        setUloading(true);
        const image = e.target.pimage.files[0];
        const formData = new FormData();
        formData.append('image', image);

        try {
            const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${imageStoragekey}`, formData);
            if (data.success) {
                const img = data.data.url;
                const formdata = {
                    name: e.target.pname.value,
                    discription: e.target.pdis.value,
                    quantity: e.target.pqty.value,
                    minumumqty: e.target.pminimumqty.value,
                    maximumqty: e.target.pmaxmimumqty.value,
                    price: e.target.pprice.value,
                    image: img

                }

                try {
                    const result = await axios.post('http://localhost:5000/addproduct', formdata);
                    if (result.data.insertedId) {
                        switalert("product addedd success", "success");
                        navigate('/dashboard/manageproduct');

                    }

                } catch (err) {

                    switalert("product addedd faild", "error")
                }

            }
            setUloading(false)
        } catch (err) {
            switalert("image upload faild", "error");
            setUloading(false)
        }


    }
    return (
        <>
            <div className="addproduct min-h-screen w-full">
                <h2 className='text-2xl font-semibold ml-10 text-primary mt-10'>Add Product</h2>

                <div class="card max-w-md mx-auto w-full shadow-xl py-5">
                    <div class="card-body w-full py-5">
                        <form onSubmit={addproduct}>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text font-semibold">Enter name</span>

                                </label>
                                <input type="text" placeholder="Type here" class="input input-bordered w-full" required name='pname' />

                            </div>
                            <div class="form-control w-full mt-1">
                                <label class="label">
                                    <span class="label-text font-semibold">Enter discription</span>

                                </label>
                                <input type="text" placeholder="Type here" class="input input-bordered w-full" required name='pdis' />

                            </div>
                            <div class="form-control w-full mt-1">
                                <label class="label">
                                    <span class="label-text font-semibold">Enter quantity</span>

                                </label>
                                <input type="text" placeholder="Type here" class="input input-bordered w-full" required name='pqty' />

                            </div>
                            <div class="form-control w-full mt-1">
                                <label class="label">
                                    <span class="label-text font-semibold">minimum quantity</span>

                                </label>
                                <input type="number" placeholder="Type here" class="input input-bordered w-full" required name='pminimumqty' />

                            </div>
                            <div class="form-control w-full mt-1">
                                <label class="label">
                                    <span class="label-text font-semibold">maximum quantity</span>

                                </label>
                                <input type="number" placeholder="Type here" class="input input-bordered w-full" required name='pmaxmimumqty' />

                            </div>
                            <div class="form-control w-full mt-1">
                                <label class="label">
                                    <span class="label-text font-semibold">price</span>

                                </label>
                                <input type="number" placeholder="Type here" class="input input-bordered w-full" required name='pprice' />

                            </div>
                            <div class="form-control w-full mt-1 ">
                                <label class="label">
                                    <span class="label-text font-semibold">image</span>

                                </label>
                                <input type="file" placeholder="Type here" class=" w-full flex items-center" required name='pimage' />

                            </div>
                            <button type='submit' className='mt-4 btn btn-primary w-full text-white font-semibold'>{uloading ? <i className='bx bx-loader-alt font-semibold animate-spin text-xl'></i> : 'submit'}</button>
                        </form>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Addproduct;