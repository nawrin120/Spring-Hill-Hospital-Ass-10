import React from 'react';
import Carosel from '../Carosel/Carosel';
import QuickInfo from '../QuickInfo/QuickInfo';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Contact from './Contace/Contact';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <QuickInfo></QuickInfo>
            <Services></Services>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;