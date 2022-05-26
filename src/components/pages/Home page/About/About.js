import React from 'react';

const About = () => {
    return (
        <>
            <section className='about-all-content py-32'>

                <div className="container mx-auto">
                    <div className="about-content grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="card card-side bg-base-100 shadow-xl py-10 mt-2">

                            <div className="card-body flex-row items-center py-10">
                                <div className="icon">
                                    <i className='bx bx-home text-primary text-4xl mr-3'></i>
                                </div>
                                <div className="card-text">
                                    <h2 className="card-title">Big Inventory</h2>
                                    <p>More 25200 product available in our inventory, and ready to shipping to you.</p>
                                </div>

                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl mt-2">

                            <div className="card-body flex-row items-center py-10">
                                <div className="icon">
                                    <i className='bx bx-headphone text-primary text-4xl mr-3'></i>
                                </div>
                                <div className="card-text">
                                    <h2 className="card-title">Customer Service 24/7</h2>
                                    <p>Many option to get contact with us, always back to our customers</p>
                                </div>

                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl mt-2">

                            <div className="card-body flex-row items-center py-10">
                                <div className="icon">
                                    <i className='bx bx-car text-primary text-4xl mr-3'></i>
                                </div>
                                <div className="card-text">
                                    <h2 className="card-title">Express Shipping</h2>
                                    <p>We work with top companies express shipping, like DHL, FedEx and more</p>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    );
};

export default About;