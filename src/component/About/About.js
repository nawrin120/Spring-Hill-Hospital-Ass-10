import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-header'>
                <img src="photos/doctor.png" alt="" />
                <h1>Everyone deserves to be Healthy, we enable it!</h1>
            </div>
            <div className="row letter">
                <div className="col-12 col-lg-7 ceo-massege">
                    <h3>A letter from our CEO</h3>
                    <p>They say, every great idea is inspired by a personal need. For us at Lyfboat, it was no different…</p>
                    <p>I consider myself a child of the global age. I was born and raised in Zambia to Indian parents. I studied in the US, and then worked at various multinational companies before moving to India to start my own IT consulting firm. With such a diverse background, I am fortunate to have friends, family and a network in all parts of the world.</p>
                    <p>My global network didn’t matter however, when my father fell seriously ill and had to travel from Zambia to India for medical care. Suddenly, my world was turned upside down. When mortality stares you in the face, you feel fear that you have never imagined before. The only thing that mattered, was that my father got better. I wanted to find the best and most trusted care for my father. I talked to multiple people, who offered varied opinions and suggestions, but I was on information overload trying to keep track of all the feedback and was still not convinced of the ‘right’ choice. Thankfully, my elder sister, who is a doctor and works with several doctors and hospitals in India, helped assess our options and make the right decision for my father’s care; opinions are always plenty, but picking the right one can be the difference between a life saved and a life lost</p>
                </div>

                <div className="col-12 col-lg-5 about-img">
                    <img src="photos/ceo.jpg" alt="" />
                </div>
            </div>
            <div className="col-12 mission-vission">
                <h3>Our Mission</h3>
                <p>To enable quality, affordable healthcare for everyone, everywhere.</p>
            </div>
            <div className="col-12 mission-vission">
                <h3>Our Vission</h3>
                <p>Smarter healthcare that is easily accessible to everyone & cheaper healthcare via price transparency across all healthcare services.</p>
            </div>
            <div className="col-12 mission-vission">
                <h3>Our Objective</h3>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div>
                            <h4>Respect</h4>
                            <p>To honour the dignity, individuality and rights of everyone, while safe guarding patients and preserving their rights to privacy, confidentiality and information.</p>
                        </div>
                        <div>
                            <h4>Teamwork</h4>
                            <p>We foster an atmosphere of trust, collaboration, openness and cooperation amongst all the employees working towards a common goal of.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div>
                            <h4>Quality</h4>
                            <p>We strive to exceed the expectations of all of our clients by committing to deliver quality services and enhance value by educating them about their health and empowering them to be partners in self-care.</p>
                        </div>
                        <div>
                            <h4>Community Relationships</h4>
                            <p>We acknowledge our vital and dynamic role in the world-wide communities and aim at fostering growth and development to serve patient needs.</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;