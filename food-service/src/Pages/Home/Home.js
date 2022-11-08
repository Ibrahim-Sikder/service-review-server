import React from 'react';
import Choose from '../ChooseSection/Choose';
import Carousel from './Carousel/Carousel';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Choose></Choose>
        </div>
    );
};

export default Home;