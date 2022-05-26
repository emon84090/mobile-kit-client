import React from 'react';
import Spinner from '../../shared/Spinner';
import About from './About/About';
import Banner from './banner/Banner';
import Download from './download/Download';
import Reviews from './reviews/Reviews';
import Summary from './summary/Summary';
import Tools from './tool/Tools';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Tools></Tools>
            <About></About>
            <Summary></Summary>

            <Reviews></Reviews>
            <Download></Download>
        </>
    );
};

export default Home;