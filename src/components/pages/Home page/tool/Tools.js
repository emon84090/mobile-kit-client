import React from 'react';

const Tools = () => {
    return (
        <>
            <h2 className='text-3xl font-bold text-center'>Find Your best choice</h2>

            <div className="container mx-auto">
                <div className="tools-all-content grid grid-cols-3 gap-3">
                    <div class="card card-compact  shadow-xl">
                        <figure><img src="https://i.ibb.co/dm3sxdJ/white-cell-phone-charger-white-isolated-background-with-usb-cabe.jpg" className='max-h-64' alt="Shoes" /></figure>
                        <div class="card-body">
                            <div className="card-heading flex justify-between">
                                <h2 class="card-title">Charger</h2>
                                <div class="badge badge-primary">available quantity 60</div>
                            </div>

                            <p className='text-sm font-semibold text-neutral capitalize'>minimum order quantity: 2 pis</p>
                            <p className='text-lg font-bold text-neutral capitalize'>price:10$</p>
                            <p className='text-md text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quaerat, facere cumque in itaque illum quis, a mollitia, odit iure laudantium.</p>

                            <div class="card-actions justify-start">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Tools;