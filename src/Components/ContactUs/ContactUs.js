import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

import './ContactUs.css'

const ContactUs = () => {

    const [state, handleSubmit] = useForm("xgedojqp")
    return <>
        <header className='header-contact-us'>
            <div className="container">
                <Link to='/' className="logo"><span>H</span>ealth<span>V</span>ault</Link>
                <nav className='nav'>
                    <ul>
                        <li><Link to="/facilities">Connect With Us</Link></li>
                    </ul>
                </nav>
            </div>  
        </header>
        <section className="contact" id="contact">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <h3>get in touch</h3>
                    <div className="inputBox">
                        <input type="text" name='name' placeholder="name" required />
                        <input type="email" name="email" placeholder="email" required />
                    </div>
                    <div className="inputBox">
                        <input type="text" name='health-id' placeholder="health-id" required />
                        <input type="text" name='subject' placeholder="subject" required />
                    </div>
                    <textarea name="message" placeholder="message" id="" cols="30" rows="10" required></textarea>
                    <input type="submit" value="send message" className="btn" disabled={state.submitting} />

                    {state.succeeded && <div className="alert alert-success" role="alert">Success!!</div>}

                </form>

                

                <iframe className='map' title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.489025243892!2d88.41085255060929!3d22.560806185116146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743203255595%3A0x9c37b30c00660fab!2sJadavpur%20University%20Salt%20Lake%20Campus!5e0!3m2!1sen!2sin!4v1643133089372!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>

            </div>



        </section>

    </>;
};

export default ContactUs;
