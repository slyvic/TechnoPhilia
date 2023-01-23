import React, { useContext, useState, useEffect } from 'react';
import DoctorTimeline from './DoctorTimeline';
import AuthContext from '../../Store/auth-context';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DoctorMainImg from '../../images/doctor-main.svg'
import Search from '../../images/search.svg'
import './DoctorMain.css'

const DoctorMain = () => {
  const params = useParams();
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  const [hid, sethid] = useState('')
  const [pwd, setPwd] = useState('')


  const hidChangeHandler = (e) => {
    sethid(e.target.value)
  }

  const pwdChangeHandler = (e) => {
    setPwd(e.target.value)
  }

  const [pData, setpData] = useState()

  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/doctor/${params.rno}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authCtx.token}`
          }
        })

      const doctor = await res.json();
      setData({
        'name': doctor.name,
        'registrationNumber': doctor.registrationNumber,
        'address': doctor.address,
        'dob': doctor.dob,
        'email': doctor.email,
        'college': doctor.college
      })
    }
    fetchData()
  }, [])


  const submitHandler = (e) => {
    e.preventDefault()
    setpData({
      password: pwd,
      healthId: hid
    })
    navigate(`/med-data/${hid}`)
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
          <h1>Welcome <span > Dr. {data.name}</span> </h1>
          <h3>{data.registrationNumber}
            <br /> {data.college}
            <br /> {data.address}
            <br />{data.dob}
            <br /> {data.email}
          </h3>
        </div>
        <div className="scene">
          <img src={DoctorMainImg} alt='' />
        </div>
      </div>


      <div className='doctor-main'>
        <div className="form-container-doctor">
          <div className="banner">
            <img src={Search} />
          </div>
          <div className="signin-signup-doctor">
            <h1 className='text-centered'>Search for patient details</h1>
            <form className="sign-in-form-doctor" onSubmit={submitHandler}>
              <div className="input-field">
                <input type="text"
                  value={hid}
                  placeholder="Enter HealthId"
                  onChange={hidChangeHandler}
                  required />
              </div>
              <div className="input-field">
                <input type="password"
                  type="password"
                  value={pwd}
                  minLength={8}
                  placeholder="Password"
                  onChange={pwdChangeHandler}
                  required />
              </div>
              <button className="button-form">Search Records</button>
            </form>
          </div>
        </div>
        <div className='test'>
          <h1 className='text-centered'>Upcoming Appointments</h1>
          <DoctorTimeline />
        </div>
      </div>
    </div>
  </>;
};

export default DoctorMain;
