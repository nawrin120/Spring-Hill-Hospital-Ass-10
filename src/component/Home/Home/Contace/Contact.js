import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <h2>Contact Us</h2>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                <div className="col">
                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">SPRING HILL CARE</h5>
                            <p className="card-text"><i className="fas fa-map-marker-alt"></i> Shonirakhra,Opposite of Modhumita convension center-Dhaka</p>
                            <p className="card-text"><i className="fas fa-tty"></i> 02394755</p>
                            <p className="card-text"><i className="fas fa-phone-volume">01703478348</i></p>
                            <p className="card-text"><i className="fas fa-phone-volume">01703478358</i></p>
                            <p className="card-text"><i className="fas fa-phone-volume">01703478368</i></p>
                            <p className="card-text"><i className="fas fa-envelope-square">xyz123@gmail.com</i></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <img src="photos/carosel/caromain.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Contact;