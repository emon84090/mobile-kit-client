import React from 'react';
import Spinner from '../../shared/Spinner';
import Banner from './banner/Banner';
import Reviews from './reviews/Reviews';
import Summary from './summary/Summary';
import Tools from './tool/Tools';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Reviews></Reviews>
        </>
    );
};

export default Home;