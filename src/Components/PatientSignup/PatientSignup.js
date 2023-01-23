import React, { useState, useEffect, useContext } from 'react';
import './PatientSignup.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/personal1.svg'
import logo2 from '../../images/med.svg'
import AuthContext from '../../Store/auth-context';

const PatientSignup = () => {
  const authCtx = useContext(AuthContext);

  const [name, setName] = useState('')
  const [fname, setfName] = useState('')
  const [address, setAddress] = useState('')
  const [dob, setDob] = useState('')
  const [pwd, setPwd] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [ano, setano] = useState('')
  const [bloodgrp, setbloodgrp] = useState('')
  const [mark, setmark] = useState('')
  const [height, setheight] = useState('')
  const [weight, setweight] = useState('')
  const [history, sethistory] = useState('')
  const [data, setData] = useState(null)

  const navigate = useNavigate()
  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }
  const fnameChangeHandler = (e) => {
    setfName(e.target.value)
  }
  const addressChangeHandler = (e) => {
    setAddress(e.target.value)
  }
  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }
  const anoChangeHandler = (e) => {
    setano(e.target.value)
  }
  const numberChangeHandler = (e) => {
    setNumber(e.target.value)
  }
  const dobChangeHandler = (e) => {
    setDob(e.target.value)
  }
  const genderChangeHandler = (e) => {
    setGender(e.target.value)
  }
  const markChangeHandler = (e) => {
    setmark(e.target.value)
  }
  const bloodgrpChangeHandler = (e) => {
    setbloodgrp(e.target.value)
  }
  const historyChangeHandler = (e) => {
    sethistory(e.target.value)
  }
  const pwdChangeHandler = (e) => {
    setPwd(e.target.value)
  }

  const heightChangeHandler = (e) => {
    setheight(e.target.value)
  }

  const weightChangeHandler = (e) => {
    setweight(e.target.value)
  }

  useEffect(() => {
    const sendData = async () => {
      console.log(data)
      const res = await fetch('http://localhost:8000/patient/signup',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })

      const datares = await res.json();

      if (datares.code === 11000) {
        alert(`${JSON.stringify(datares.keyValue)} aldready exists!!`)
      }

      if (res.status === 201) {
        authCtx.login(datares.token);
        navigate(`/patient/${datares.hid}`)
      }
    }

    if (data !== null)
      sendData()

  }, [data])

  const submitHandler = (e) => {
    e.preventDefault()
    setData({
      name: name,
      address: address,
      dob: dob,
      gender: gender,
      password: pwd,
      email: email,
      phoneNumber: number,
      gaurdianDetails: fname,
      aadharNumber: ano,
      bloodGroup: bloodgrp,
      identifcationMark: mark,
      height: height,
      weight: weight,
      familyHistory: history,
    })
  }

  return <>
    <div className="page-content">
      <div className='text-centered-login'>SignUp As Patient!</div>
      <div className="form-v1-content">
        <form className="form-register" onSubmit={submitHandler}>

          <section className='form-section1'>
            <div className="inner">
              <div className="wizard-header">
                <h3 className="heading">Personal Information</h3>
                <p className='text-centered-p' >Please enter your infomation and proceed to the next step so we can build your account.</p>
                <img src={logo} alt='Personal Data' />
              </div>
              <div className='details'>
                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>Full Name</legend>
                      <input type="text"
                        className="form-control"
                        value={name}
                        onChange={nameChangeHandler}
                        placeholder="Full Name"
                        required />
                    </fieldset>
                  </div>

                  <div className="form-holder">
                    <fieldset>
                      <legend>Father/Spouse Name</legend>
                      <input type="text"
                        className="form-control"
                        value={fname}
                        onChange={fnameChangeHandler}
                        placeholder="Full Name"
                        required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder form-holder-2">
                    <fieldset>
                      <legend>Email</legend>
                      <input type="text"
                        value={email}
                        className="form-control"
                        pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                        placeholder="example@email.com"
                        onChange={emailChangeHandler}
                        required />
                    </fieldset>
                  </div>

                  <div className="form-holder form-holder-2">
                    <fieldset>
                      <legend>Phone Number</legend>
                      <input type="text"
                        className="form-control"
                        value={number}
                        minLength={10}
                        maxLength={10}
                        onChange={numberChangeHandler}
                        placeholder="+91 123-456-7890"
                        required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>Aadhar Number</legend>
                      <input type="text"
                        className="form-control"
                        onChange={anoChangeHandler}
                        value={ano}
                        minLength={12}
                        maxLength={12}
                        placeholder="Enter 12 digit Aadhar Number"
                        required />
                    </fieldset>
                  </div>

                  <div className="form-holder">
                    <fieldset>
                      <legend>Date Of Birth</legend>
                      <input type="date"
                        className="form-control"
                        value={dob}
                        onChange={dobChangeHandler}
                        required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>Address</legend>
                      <input type="text"
                        className="form-control"
                        value={address}
                        onChange={addressChangeHandler}
                        placeholder="Address"
                        required />
                    </fieldset>
                  </div>

                  <div className="form-holder">
                    <fieldset>
                      <legend>Gender</legend>
                      <input type="text"
                        className="form-control"
                        value={gender}
                        onChange={genderChangeHandler}
                        placeholder='Male/Female/Binary'
                        required />
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='form-section2'>
            <div className="inner2">
              <div className='details'>
                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>Height</legend>
                      <input type="number"
                        value={height}
                        onChange={heightChangeHandler}
                        className="form-control"
                        placeholder="Height in cm"
                        required />
                    </fieldset>
                  </div>

                  <div className="form-holder">
                    <fieldset>
                      <legend>Weight</legend>
                      <input type="number"
                        value={weight}
                        onChange={weightChangeHandler}
                        className="form-control"
                        placeholder="Weight in kg"
                        required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder form-holder-2">
                    <fieldset>
                      <legend>Identification Mark</legend>
                      <input type="text"
                        value={mark}
                        onChange={markChangeHandler}
                        className="form-control"
                        placeholder="Please mention any birthmark/scar"
                      />
                    </fieldset>
                  </div>
                  <div className="form-holder">
                    <fieldset>
                      <legend>Family Medical History</legend>
                      <input type="text"
                        value={history}
                        onChange={historyChangeHandler}
                        className="form-control"
                        placeholder="Family Medical History(if any)"
                      />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>Blood Group</legend>
                      <input type="text"
                        value={bloodgrp}
                        onChange={bloodgrpChangeHandler}
                        className="form-control"
                        placeholder="Enter your blood group"
                        required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder">
                    <fieldset>
                      <legend>Password</legend>
                      <input type="password"
                        className="form-control"
                        value={pwd}
                        minLength={8}
                        placeholder="enter a password"
                        onChange={pwdChangeHandler}
                        required />
                    </fieldset>
                  </div>
                </div>
                <div className="form-row btn-patient-row">
                  <input type='submit' className='btn btn-patient' />
                  <Link to="/signup/doctor" className='signup-link'>SignUp As doctor</Link>
                </div>
              </div>
              <div className="wizard-header">
                <h3 className="heading heading-light">Medical Data</h3>
                <p className='text-centered-p' >Please enter your medical Information.</p>
                <img src={logo2} alt='Medical Data' />
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  </>;
};

export default PatientSignup;
