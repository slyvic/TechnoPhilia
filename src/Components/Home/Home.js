import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

import './Home.css'
import Header from './Header'
import logo from '../../images/logo.png'

const Home = () => {
    return <>
        <Header />
        <section className="home" id="home">

            <div className="container">

                <div className="row min-vh-100 align-items-center text-center text-md-left">

                    <div className="col-md-6 pr-md-5">
                        <img src={logo} width="100%" alt="https://storyset.com/team" />
                    </div>

                    <div className="col-md-6 pl-md-5 content">
                        <br></br>
                        <h1><span>stay</span> safe, <span>stay</span> healthy.</h1>
                        <br></br>
                        <h4>To strengthen the accessibility and equity of health services in a holistic healthcare programme approach and support the existing health systems in a ‘citizen-centric’ approach.</h4>
                        <div id='buttons'>
                            <Link to='/login/doctor'><button className="button">Login As Doctor</button></Link>
                            <Link to='/login/patient'><button className="button">Login As Patient</button></Link>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    </>;
};

export default Home;
