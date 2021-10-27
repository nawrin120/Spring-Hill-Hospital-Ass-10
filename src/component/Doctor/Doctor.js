import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const { Name, img, Sp } = props.doctor
    return (
        <div>
            <div className="col">
                <div className="card h-100 single-dr">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{Name}</h5>
                        <p className="card-text">Specilist In : {Sp}</p>
                        <button>Appoinment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;