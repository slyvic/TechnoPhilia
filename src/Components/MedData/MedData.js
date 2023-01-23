import React, { useContext } from 'react';
import './MedData.css'
import AuthContext from '../../Store/auth-context';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { GiHypodermicTest, GiMedicalThermometer } from 'react-icons/gi'

const MedData = () => {
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()
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

        <div className='signin-signup-doctor-meddata'>
            <div className="signin-signup-doctor full-width">
                <h1 className='text-centered color-dark'>Prescription</h1>
                <form className="sign-in-form-doctor wrap">
                    <div className="input-field">
                        <input type="text"
                            placeholder="Enter HealthId of patient"
                            required />
                    </div>
                    <div className="input-field">
                        <input type="text"
                            placeholder="Enter date"
                            required />
                    </div>
                    <div className="input-field">
                        <input type="text"
                            placeholder="Enter blood pressure"
                            required />
                    </div>
                    <div className="input-field">
                        <input type="text"
                            placeholder="Enter sugar level"
                            required />
                    </div>
                    <div className="input-field">
                        <input type="text"
                            placeholder="Enter temperature"
                            required />
                    </div>
                    <div className="input-field">
                        <input type="text"
                            placeholder="Enter medical condition"
                            required />
                    </div>
                    <div className="input-field">
                        <input type="text"
                            placeholder="Enter diagnosis"
                            required />
                    </div>
                    <div className="input-field">
                        <input type="text"
                            placeholder="Enter test prescribed"
                            required />
                    </div>
                    <div className="input-field">
                        <input type="text"
                            placeholder="Enter medicines prescribed"
                            required />
                    </div>
                    <div className="input-field">
                        <input type="text"
                            placeholder="Enter comments"
                            required />
                    </div>
                    <div className='med-data-button'> <button className="button-form">Add Record</button></div>

                </form>
            </div>
        </div>

        <h1 className='text-centered'>Previous Medical Data</h1>

        <section className="about">

            <div className="content">
                <h3>Doctor Nandini Agarwal</h3>
                <p>Vomiting and uneasy stomach</p>
                <p>TESTS ADVISED: -CSC Scan-</p>
                <p>Medicine Prescribed: Diet plan given</p>
                <div className="icons-container">
                    <div className="icons">
                        <i className="fas fa-hand-holding-usd"><BsFillCalendar2DateFill /></i>
                        <span>Date: 24th December 2021</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-hand-holding-usd"><GiHypodermicTest /></i>
                        <span>Sugar Level: 82</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-headset"><GiMedicalThermometer /></i>
                        <span>Temperature: 98.7</span>
                    </div>
                </div>
            </div>

            <div className="content">
                <h3>Doctor Abhisek Agarwal</h3>
                <p>Mild fever</p>
                <p>TESTS ADVISED: -na-</p>
                <p>Medicine Prescribed: Crocin 360</p>
                <div className="icons-container">
                    <div className="icons">
                        <i className="fas fa-hand-holding-usd"><BsFillCalendar2DateFill /></i>
                        <span>Date: 30th March 2021</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-hand-holding-usd"><GiHypodermicTest /></i>
                        <span>Sugar Level: 80</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-headset"><GiMedicalThermometer /></i>
                        <span>Temperature: 99.6</span>
                    </div>
                </div>
            </div>
            <div className="content">
                <h3>Doctor Abhisek Agarwal</h3>
                <p>The patient visited with pain in the joints and severse body pain</p>
                <p>TESTS ADVISED: -na-</p>
                <p>Medicine Prescribed: Dolo 360</p>
                <div className="icons-container">
                    <div className="icons">
                        <i className="fas fa-hand-holding-usd"><BsFillCalendar2DateFill /></i>
                        <span>Date: 24th March 2021</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-hand-holding-usd"><GiHypodermicTest /></i>
                        <span>Sugar Level: 80</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-headset"><GiMedicalThermometer /></i>
                        <span>Temperature: 98.6</span>
                    </div>
                </div>
            </div>

        </section>
    </>;
};

export default MedData;
