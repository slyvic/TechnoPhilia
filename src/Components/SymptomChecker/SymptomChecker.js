import React from 'react';
import { Link } from 'react-router-dom';
import './SymptomChecker.css'

const SymptomChecker = () => {
    return <>
        <header className="header">
            <Link to='/' className="logo"><span>H</span>ealth<span>V</span>ault</Link>
            <nav className='nav'>
                <ul>
                    <li><Link to="/sypmtoms">AI POWERED SYMPTOM CHECKER</Link></li>
                </ul>
            </nav>
        </header>
        <div id="map" className='dark'>
            <iframe title='chatbox' src='https://dodxtx.shinyapps.io/EMSC/'> </iframe>
        </div>
    </>;
};

export default SymptomChecker;
