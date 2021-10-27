import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    let { id } = useParams()
    const [serviceInfo, setServiceInfo] = useState([])
    const [serviceDetail, setServiceDetail] = useState({})

    useEffect(() => {
        fetch('/servicefakadata.json')
            .then(res => res.json())
            .then(data => setServiceInfo(data))
    }, [])
    useEffect(() => {
        const foundServiceDetais = serviceInfo.find(service => service.Id == id)
        setServiceDetail(foundServiceDetais)
    }, [serviceInfo])

    return (
        <div className="row service-container">
            <div className="col-md-4 service-photo">
                <img src={serviceDetail?.Img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body service-body">
                    <h5 className="card-title">{serviceDetail?.Name}</h5>
                    <p className="card-text">{serviceDetail?.Description}</p>
                    <p className="card-text">Room : {serviceDetail?.Room}</p>
                    <p className="card-text">Consultant : {serviceDetail?.Consultant}</p>



                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;