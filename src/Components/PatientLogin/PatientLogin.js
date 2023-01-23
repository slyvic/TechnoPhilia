import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from '../../Store/auth-context';

import './PatientLogin.css'

const PatientLogin = () => {
  const authCtx = useContext(AuthContext);

  const [hid, sethid] = useState('')
  const [pwd, setPwd] = useState('')
  const [data, setData] = useState(null)

  const navigate = useNavigate()

  const hidChangeHandler = (e) => {
    sethid(e.target.value)
  }

  const pwdChangeHandler = (e) => {
    setPwd(e.target.value)
  }

  useEffect(() => {
    const sendData = async () => {
    
      const res = await fetch('http://localhost:8000/patient/login',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })

      const dataRes = await res.json();

      if (res.status === 400) {
        alert(`${JSON.stringify(dataRes.Error)}`)
      }

      if (res.status === 200) {
        authCtx.login(dataRes.token);
        navigate(`/patient/${dataRes.hid}`)
      }
    }

    if (data !== null)
      sendData()

  }, [data])


  const submitHandler = (e) => {
    e.preventDefault()
    setData({
      password: pwd,
      healthId: hid
    })
  }


  return <>
    <header className='header-login'>
      <div className="container">
        <Link to='/' className="logo"><span>H</span>ealth<span>V</span>ault</Link>
      </div>
    </header>
    <div className="container login-page bg-img-patient">
      <div className='title'>
        <h1>Patient Login</h1>
      </div>
      <div className="signin-signup">
        <form className="sign-in-form" onSubmit={submitHandler}>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text"
              value={hid}
              placeholder="Enter HealthId"
              onChange={hidChangeHandler}
              required />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password"
              type="password"
              value={pwd}
              minLength={8}
              placeholder="Password"
              onChange={pwdChangeHandler}
              required />
          </div>
          <button className="button-form">Login As Patient</button>
          <Link to="/signup/patient" className='signup-link'>Don't have an account ? Click to sign up</Link>
        </form>
      </div>

    </div></>;
};

export default PatientLogin;
