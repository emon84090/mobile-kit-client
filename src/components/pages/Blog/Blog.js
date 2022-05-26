import React from 'react';
import ReactStars from "react-rating-stars-component";

const Blog = () => {

    return (
        <>
            <ReactStars
                count={5}

                size={24}
                value={3}
                activeColor="#ffd700"
            />,
        </>
    );
};

export default Blog;