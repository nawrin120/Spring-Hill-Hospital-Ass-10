import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carosel.css'

const Carosel = () => {
    return (
        <>
            <Carousel className='carosel-container' >
                <Carousel.Item className='caro-photo'>
                    <img
                        className="d-block"
                        src='photos/carosel/caromain.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h3>Welcome to Spring Hill Care</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='caro-photo'>
                    <img
                        className="d-block"
                        src='photos/carosel/caro-2.jpg'
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                        <h3> Spring Hill Care Operation Theatur</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='caro-photo'>
                    <img
                        className="d-block"
                        src='photos/carosel/caro-3.jpg'
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                        <h3>Spring Hill Word Sector</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Carosel;