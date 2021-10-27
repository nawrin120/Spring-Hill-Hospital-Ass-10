import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctordata.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className='drs-conatainer'>
            <h2>Know About SPRING HILL CARE'S Doctors</h2>
            <p>Let the young know they will never find a more interesting, more instructive book than the patient himself.</p>

            <p>“The best doctor is the one you run to and can’t find.”</p>

            <p>“Doctor: Your devotion and care brings healing, comfort, and hope.”</p>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>


        </div>
    );
};

export default Doctors;