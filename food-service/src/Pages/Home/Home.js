import React from 'react';
import useTitle from '../../hooks/UseTitle';
import Choose from '../ChooseSection/Choose';
import Knowledge from '../Knowledge/Knowledge';
import PriceSection from '../PriceSection/PriceSection';
import Carousel from './Carousel/Carousel';
import ServiceHome from './ServiceHome/ServiceHome';

const Home = () => {
    useTitle('Home')
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