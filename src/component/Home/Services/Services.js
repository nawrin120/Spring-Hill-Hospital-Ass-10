import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('servicefakadata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services'>
            <h2 className='services-header'>SPECIALIZED UNIT</h2>
            <div>
                {
                    services.map(service => <Service
                        key={service.Id}
                        service={service}
                    ></Service>)
                }

            </div>

        </div>
    );
};

export default Services;

