import React from 'react';

const Download = () => {
    return (
        <>
            <div className="hero py-20 bg-gray-800">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-3xl text-white font-bold">Mobile Kit for any mobile phone in your pocket</h1>
                        <p className="py-6 text-white font-semibold">Download our app and use Spare-Parts-Mobile.com wherever you are.</p>

                        <div className="link-image text-center flex-col items-center flex mt-4 justify-center">
                            <div className="google-store mt-3">
                                <img src="https://i.ibb.co/4Jhp5cM/Google-Play.png" alt="" />
                            </div>
                            <div className="apps-store mt-3">
                                <img src="https://i.ibb.co/R6RWDTK/Apple-Store.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Download;