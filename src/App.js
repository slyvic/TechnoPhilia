import { Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react'

import Home from './Components/Home/Home'
import PatientLogin from './Components/PatientLogin/PatientLogin'
import PatientMain from './Components/PatientMain/PatientMain'
import DoctorLogin from './Components/DoctorLogin/DoctorLogin'
import DoctorMain from './Components/DoctorMain/DoctorMain'
import Facilities from './Components/Home/Facilities'
import PatientSignup from './Components/PatientSignup/PatientSignup'
import DoctorSignup from './Components/DoctorSignup/DoctorSignup'
import SymptomChecker from './Components/SymptomChecker/SymptomChecker'
import ContactUs from './Components/ContactUs/ContactUs'
import MedData from './Components/MedData/MedData'

import AuthContext from './Store/auth-context';

import './App.css'
import React from 'react'



export const App = () => {
    const authCtx = useContext(AuthContext);

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login/patient' element={<PatientLogin />}></Route>
            <Route path='/login/doctor' element={<DoctorLogin />}> </Route>
            <Route path='/doctor/:rno' element={authCtx.isLoggedIn ? <DoctorMain /> : <Navigate to='/login/doctor' />}></Route>
            <Route path='/patient/:hid' element={authCtx.isLoggedIn ? <PatientMain /> : <Navigate to='/login/patient' />}></Route>
            <Route path='/facilities' element={<Facilities />}></Route>
            <Route path="/signup/patient" element={<PatientSignup />}></Route>
            <Route path='/signup/doctor' element={<DoctorSignup />}></Route>
            <Route path='/symptoms' element={<SymptomChecker />}></Route>
            <Route path='/contact-us' element={<ContactUs />}></Route>
            <Route path='/med-data/:id' element={<MedData />}></Route>
        </Routes >
    )
}


