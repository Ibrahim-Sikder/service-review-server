import React from 'react';
import Choose from '../ChooseSection/Choose';
import Knowledge from '../Knowledge/Knowledge';
import PriceSection from '../PriceSection/PriceSection';
import Carousel from './Carousel/Carousel';
import ServiceHome from './ServiceHome/ServiceHome';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ServiceHome></ServiceHome>
            <Knowledge></Knowledge>
            <Choose></Choose>
            <PriceSection></PriceSection>
        </div>
    );
};

export default Home;