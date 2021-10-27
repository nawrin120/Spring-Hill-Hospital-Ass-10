import React from 'react';
import './Review.css'

const Review = () => {
    return (
        <div className='review-container'>
            <h2>Patient's Review</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4'>

                <div className="col">
                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">Arisha Tabbassum</h5>
                            <p className="card-text">Such a great office and doctor. The wait times are relatively short (usually 15 minutes maximum). The doctor and nurse practitioner are so understanding. We’ve never had an issue with either of them.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">Ahmed Ramim</h5>
                            <p className="card-text">I have been with Dr.Rafid Hasan now for three years. Dr.Rafid Hasan is always professional and compassionate. He relates well to people and takes time to listen . He is good at building trust with his patients</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">Shaxuda Humaiun</h5>
                            <p className="card-text">Dr. Nousin Tabassum is one of the kindest professionals I’ve ever met, he listens, asks the right questions, takes his time and is honest. I hate that I have to move and find another doctor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;