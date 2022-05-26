import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";


import { Navigation, Autoplay } from "swiper";
import { useQuery } from "react-query";
import Spinner from "../../../shared/Spinner";
import ReactStars from "react-rating-stars-component";
const Reviews = () => {

    const { data: review, isLoading, refetch } = useQuery('review', () => fetch(`https://floating-eyrie-91956.herokuapp.com/review`, {
        headers: {
            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then((res) => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <>

            <div className="review-all-content  px-2 md:px-12 py-10  bg-rose-100">
                <h2 className="text-center card-title justify-center mb-10">What Think Our Customer?</h2>
                <Swiper navigation={true} autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                    modules={[Navigation, Autoplay]} className="mySwiper">
                    {review?.map((val) => <SwiperSlide key={val._id}>
                        <div className="max-w-3xl py-6 mx-auto p-4 text-gray-800 bg-white rounded-lg shadow-2xl">
                            <div className="mb-2">
                                <div className="h-3 text-3xl text-left text-rose-600">“</div>
                                <p className="px-4 text-center text-gray-600">
                                    {val.reviews}”
                                </p>
                                <div className="h-3 text-3xl text-right text-rose-600">”</div>
                                <div className="text-center">
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img alt="userimage" src={val.userimage} />
                                        </div>
                                    </div>
                                    <h5 className="font-bold text-rose-600">{val.name}</h5>
                                    <div className="stars flex mt-2 justify-center items-center">
                                        <ReactStars
                                            count={5}

                                            size={24}
                                            value={Number(val.reviewcount)}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)}



                </Swiper>
            </div>

        </>
    );
};

export default Reviews;