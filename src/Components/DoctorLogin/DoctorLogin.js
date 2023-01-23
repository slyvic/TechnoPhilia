import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AuthContext from '../../Store/auth-context'
import { useNavigate } from 'react-router-dom';

import './DoctorLogin.css'


const DoctorLogin = () => {
  const authCtx = useContext(AuthContext);

  const [rno, setRno] = useState('')
  const [pwd, setPwd] = useState('')
  const [data, setData] = useState(null)

  const navigate = useNavigate()

  const rnoChangeHandler = (e) => {
    setRno(e.target.value)
  }

  const pwdChangeHandler = (e) => {
    setPwd(e.target.value)
  }

  useEffect(() => {
    const sendData = async () => {
      const res = await fetch('http://localhost:8000/doctor/login',
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
        navigate(`/doctor/${dataRes.regnNo}`)
      }
    }

    if (data !== null)
      sendData()

  }, [data])


  const submitHandler = (e) => {
    e.preventDefault()
    setData({
      password: pwd,
      registrationNumber: rno,
    })
  }

  return <>
    <header className='header-login'>
      <div className="container">
        <Link to='/' className="logo"><span>H</span>ealth<span>C</span>are</Link>
      </div>
    </header>
    <div className="container login-page bg-img-doctor">
      <div className='title'>
        <h1>Doctor Login</h1>
      </div>
      <div className="signin-signup">
        <form className="sign-in-form" onSubmit={submitHandler}>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text"
              value={rno}
              minLength={5}
              maxLength={5}
              placeholder="Enter 5 digit Registration Number"
              onChange={rnoChangeHandler}
              required />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password"
              minLength={8}
              placeholder="Password"
              onChange={pwdChangeHandler}
              required />
          </div>
          <button className="button-form">Login As Doctor</button>
          <Link to="/signup/doctor" className='signup-link'>Don't have an account ? Click to sign up</Link>
        </form>
      </div>
    </div>
  </>;
};

export default DoctorLogin;
