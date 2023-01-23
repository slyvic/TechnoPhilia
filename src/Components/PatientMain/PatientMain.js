import React, { useEffect, useContext, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Store/auth-context';
import HealthCard from './HealthCard'
import Vaccine from '../../images/vaccine.svg'
import Calendar from '../../images/calendar.svg'
import Data from '../../images/data.svg'

import Fade from 'react-reveal/Fade'

import './PatientMain.css'

const PatientMain = () => {
    const params = useParams();
    const authCtx = useContext(AuthContext);
    const [cardData, setCardData] = useState('')
    const [data, setData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:8000/patient/${params.hid}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authCtx.token}`
                    }
                })

            const patient = await res.json();
            setData({
                'name': patient.name,
                'healthId': patient.healthId,
                'address': patient.address,
                'dob': patient.dob.toString().substring(0, 10),
                'email': patient.email,
                'number': patient.phoneNumber,
                'bloodGrp': patient.bloodGroup,
                'height': patient.height,
                'weight': patient.weight
            })
            setCardData({
                'name': patient.name,
                'healthId': patient.healthId,
                'address': patient.address,
                'dob': patient.dob.toString().substring(0, 10),
                'email': patient.email,
                'number': patient.phoneNumber,
                'bloodGrp': patient.bloodGroup,
                'height': patient.height,
                'weight': patient.weight
            })
        }

        fetchData()
    }, [])

    const healthDataHandler = () => {
    }

    const vaccineDataHandler = () => {

    }

    const appointmentDataHandler = () => {

    }

    const logoutHandler = () => {
        authCtx.logout()
        navigate('/')
    }

    return <>
        <header>

            <div className="container">
                <Link to='/' className="logo"><span>H</span>ealth<span>V</span>ault</Link>
                <div className='logout' onClick={logoutHandler}>Logout</div>
            </div>

        </header>

        <div className='patient-main'>
            <div className="landing">
                <div className="landingText">
                    <h1>Welcome <span > {data.name}</span> </h1>
                    <h3>Using the Health Vault, you can:
                        <br /> order prescriptions
                        <br /> book and cancel appointments
                        <br />view your medical record
                        <br /> and much more....
                    </h3>
                </div>
                <HealthCard data={cardData} />
            </div>

            <Fade bottom>
                <div className="infoSection">
                    <div className="infoCards">
                        <div className="card one" onClick={vaccineDataHandler} >
                            <img src={Vaccine} className="cardImg" alt="" />
                            <div className="cardContent">
                                <h2>Vaccination Records</h2>
                                <p>All your vaccination and other injection records in a single place.</p>
                            </div>
                        </div>
                        <div className="card two" onClick={appointmentDataHandler}>
                            <img src={Calendar} className="cardImg" alt="" />
                            <div className="cardContent">
                                <h2>Book an appointment</h2>
                                <p>Search for nearby doctors and book appointments hassle free.</p>
                            </div>
                        </div>
                        <div className="card three" onClick={healthDataHandler}>
                            <img src={Data} className="cardImg" alt="" />
                            <div className="cardContent">
                                <h2>Health Data</h2>
                                <p>All your previous prescriptions and health data in a single place.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>

    </>;
};

export default PatientMain;
