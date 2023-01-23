import React from 'react';
import './DoctorTimeline.css'

const DoctorTimeline = () => {


    return <div className="row">
        <div className="col-md-12">
            <div className="timeline">
                <h3 className="titleX">Mr. Shyam Dasgupta</h3>
                <p className="description">
                    time:4:30pm<br />
                    kolkata chetla clinic
                </p>
                <div className="timeline-year ">1-2-2022</div>
            </div>
            <div className="timeline">
                <h3 className="titleX">Mrs. Ranu Kumari</h3>
                <p className="description">
                    time:5pm<br />
                    kolkata chetla clinic
                </p>
                <div className="timeline-year ">1-2-2022</div>
            </div>
            <div className="timeline">
                <h3 className="titleX">Mr Rajesh Mundhra</h3>
                <p className="description">
                    time:7pm<br />
                    kolkata chetla clinic
                </p>
                <div className="timeline-year ">1-2-2022</div>
            </div>
            <div className="timeline">
                <h3 className="titleX">Mr Chirah Gupta</h3>
                <p className="description">
                    time:4pm<br />
                    kolkata chetla clinic
                </p>
                <div className="timeline-year ">2-2-2022</div>
            </div>
        </div>
    </div>;
};

export default DoctorTimeline;
