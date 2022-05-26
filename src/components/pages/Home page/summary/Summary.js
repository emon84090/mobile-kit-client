import React from 'react';

const Summary = () => {
    return (
        <>

            <div class="container my-24 px-6 mx-auto">


                <section class="mb-32 text-gray-800 text-center">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-0 items-center">
                        <div class="mb-12 lg:mb-0 relative card-body justify-center">
                            <div className="icons text-center">
                                <img className='w-16 mx-auto' src="https://www.cdn.mobileemart.com/default/images/user.png" alt="" srcset="" />
                            </div>
                            <h5 class="text-lg font-medium text-primary  mb-4">500+</h5>
                            <h6 class="font-medium text-gray-500">Users</h6>
                            <hr class="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                        </div>

                        <div class="mb-12 lg:mb-0 relative">
                            <div className="icons">
                                <i class='bx bxs-star text-5xl text-primary mb-2'></i>
                            </div>

                            <h5 class="text-lg font-medium text-primary  mb-4">10k+</h5>
                            <h6 class="font-medium text-gray-500">Review</h6>
                            <hr class="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                        </div>



                        <div class="relative">
                            <div className="icons">
                                <i class='bx bxs-mobile text-5xl text-primary mb-2'></i>
                            </div>

                            <h5 class="text-lg font-medium text-primary  mb-4">5k+</h5>
                            <h6 class="font-medium text-gray-500">Tools</h6>
                        </div>
                    </div>
                </section>


            </div>

        </>
    );
};

export default Summary;