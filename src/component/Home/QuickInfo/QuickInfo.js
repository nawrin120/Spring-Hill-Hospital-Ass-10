import React from 'react';
import { Link } from 'react-router-dom';
import './QuickInfo.css'

const QuickInfo = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 icon-container">
            <div className="col info-container">
                <div className="card">
                    <div className="icon">
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title info-title">Offline Appointment</h5>
                        <p className="card-text">Saturday-thursday : 7am to 11am</p>
                        <p>Room : 1001-Frist Floor</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="icon">
                        <i className="fas fa-calendar-check"></i>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title info-title">Online Appointment</h5>
                        <p className="card-text">Get appointment from your desire
                            doctor.</p>
                        <Link to='/doctors'><button>Appointment</button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default QuickInfo;