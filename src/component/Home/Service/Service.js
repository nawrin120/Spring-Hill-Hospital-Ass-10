import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { Id, Name, Description, Img, Consultant } = props.service
    return (
        <div className="row service-container">
            <div className="col-md-4 service-photo">
                <img src={Img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body service-body">
                    <h5 className="card-title">{Name}</h5>
                    <p className="card-text">{Description}</p>
                    <p className="card-text">{Consultant}</p>
                    <Link to={`/serviceDetails/${Id}`}><button>More Details</button></Link>


                </div>
            </div>

        </div>
    );
};

export default Service;