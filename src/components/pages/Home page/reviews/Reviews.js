import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";


import { Navigation, Autoplay } from "swiper";
import { useQuery } from "react-query";
import Spinner from "../../../shared/Spinner";
const Reviews = () => {

    const { data: review, isLoading, refetch } = useQuery('review', () => fetch(`http://localhost:5000/review`, {
        headers: {
            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then((res) => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }
    console.log(review);
    return (
        <>
            <div className="review-all-content px-2 md:px-12 py-32 mt-10 bg-rose-100">
                <Swiper navigation={true} autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                    modules={[Navigation, Autoplay]} className="mySwiper">
                    {review?.map((val) => <SwiperSlide>
                        <div class="max-w-3xl py-6 mx-auto p-4 text-gray-800 bg-white rounded-lg shadow-2xl">
                            <div class="mb-2">
                                <div class="h-3 text-3xl text-left text-rose-600">“</div>
                                <p class="px-4 text-center text-gray-600">
                                    {val.reviews}”
                                </p>
                                <div class="h-3 text-3xl text-right text-rose-600">”</div>
                                <div class="text-center">
                                    <div class="avatar">
                                        <div class="w-16 rounded-full">
                                            <img src={val.userimage} />
                                        </div>
                                    </div>
                                    <h5 class="font-bold text-rose-600">{val.name}</h5>

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