import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen bg-rose-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="hero-img overflow-hidden">
                        <img alt='servicveimage' src="https://i.ibb.co/3fzpcfb/bc641c15456840ca89b408d9c60747e7.jpg" className="max-w-lg rounded-lg h-96 object-cover transition-all w-full hover:scale-125  shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Mobile Kit</h1>
                        <p className="py-6">This is the place where all your repairs begin! An account allows you to view our selection, benefit from discounts, and more.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;