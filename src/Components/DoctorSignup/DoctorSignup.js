import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../../Store/auth-context'
import logo from '../../images/doctor-signup.svg'
import logo2 from '../../images/doctor-signup-2.svg'
import { Link, useNavigate } from 'react-router-dom'

const DoctorSignup = () => {
  const authCtx = useContext(AuthContext);

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [rno, setRno] = useState('')
  const [dob, setDob] = useState('')
  const [pwd, setPwd] = useState('')
  const [gender, setGender] = useState('')
  const [college, setCollege] = useState('')
  const [gradyr, setGradyr] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [clinics, setClinics] = useState('')
  const [city, setcity] = useState('')
  const [data, setData] = useState(null)

  const navigate = useNavigate()
  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const addressChangeHandler = (e) => {
    setAddress(e.target.value)
  }

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const numberChangeHandler = (e) => {
    setNumber(e.target.value)
  }

  const rnoChangeHandler = (e) => {
    setRno(e.target.value)
  }
  const dobChangeHandler = (e) => {
    setDob(e.target.value)
  }
  const genderChangeHandler = (e) => {
    setGender(e.target.value)
  }
  const collegeChangeHandler = (e) => {
    setCollege(e.target.value)
  }
  const gradyrChangeHandler = (e) => {
    setGradyr(e.target.value)
  }
  const specialityChangeHandler = (e) => {
    setSpeciality(e.target.value)
  }
  const clinicChangeHandler = (e) => {
    setClinics(e.target.value)
  }
  const cityChangeHandler = (e) => {
    setcity(e.target.value)
  }

  const pwdChangeHandler = (e) => {
    setPwd(e.target.value)
  }

  useEffect(() => {
    const sendData = async () => {
      console.log(data)
      const res = await fetch('http://localhost:8000/doctor/signup',
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

      console.log(datares)

      if (res.status === 201) {
        authCtx.login(datares.token);
        navigate(`/doctor/${datares.rno}`)
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
      password: pwd,
      email: email,
      gender: gender,
      phoneNumber: number,
      registrationNumber: rno,
      clinics: clinics,
      dob: dob,
      college: college,
      gradYr: gradyr,
      speciality: speciality,
      cityofPractice: city
    })
  }

  return <>
    <div className="page-content">
      <div className='text-centered-login'>SignUp As Doctor!</div>
      <div className="form-v1-content">
        <form className="form-register" onSubmit={submitHandler}>
          <section className='form-section1'>
            <div className="inner">
              <div className="wizard-header">
                <h3 className="heading">Personal Information</h3>
                <p className='text-centered-p' >Please enter your infomation and proceed to the next step so we can build your account.</p>
                <img src={logo} alt='Personal Details' />
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
                      <legend>Address</legend>
                      <input type="text"
                        className="form-control"
                        value={address}
                        onChange={addressChangeHandler}
                        placeholder="Address"
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
                      <legend>Registration Number</legend>
                      <input type="text"
                        className="form-control"
                        onChange={rnoChangeHandler}
                        value={rno}
                        minLength={5}
                        maxLength={5}
                        placeholder="Enter 5 digit Medical Registration Number"
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
                      <legend>password</legend>
                      <input type="password"
                        className="form-control"
                        value={pwd}
                        minLength={8}
                        placeholder="enter a password"
                        onChange={pwdChangeHandler}
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
                      <legend>College of Graduation</legend>
                      <input type="text"
                        className="form-control"
                        value={college}
                        onChange={collegeChangeHandler}
                        placeholder="College from where you graduated"
                        required />
                    </fieldset>
                  </div>

                  <div className="form-holder">
                    <fieldset>
                      <legend>Year of graduation</legend>
                      <input className="form-control"
                        value={gradyr}
                        type="number"
                        min="1900" max="2022" step="1"
                        placeholder="year of graduation"
                        onChange={gradyrChangeHandler}
                        required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-holder form-holder-2">
                    <fieldset>
                      <legend>Speciality(if any)</legend>
                      <input type="text"
                        className="form-control"
                        value={speciality}
                        onChange={specialityChangeHandler}
                        placeholder="mention the field of speciality"
                      />
                    </fieldset>
                  </div>
                  <div className="form-holder">
                    <fieldset>
                      <legend>Clinics/Hospitals</legend>
                      <input type="text"
                        className="form-control"
                        value={clinics}
                        onChange={clinicChangeHandler}
                        placeholder="Enter all the clinics and/or hospitals visiting"
                      />
                    </fieldset>
                  </div>
                  <div className="form-holder">
                    <fieldset>
                      <legend>City Of Practice</legend>
                      <input type="text"
                        className="form-control"
                        value={city}
                        placeholder="enter the city of practice"
                        onChange={cityChangeHandler}
                        required />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row btn-patient-row">
                  <input type='submit' className='btn btn-patient' />
                  <Link to="/signup/patient" className='signup-link'>SignUp as Patient</Link>
                </div>
              </div>
              <div className="wizard-header">
                <h3 className="heading heading-light">Educational Qualifications</h3>
                <img src={logo2} alt='Educational Details' />
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  </>;
};

export default DoctorSignup;
