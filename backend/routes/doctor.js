const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const express = require('express')
const router = new express.Router()
const Doctor = require('../models/doctor')
const auth = require('../middleware/auth')

router.post('/doctor/signup', async (req, res) => {
    try {
        var doctor = new Doctor(req.body)
        const token = await doctor.generateAuthToken()
        const saved_Doctor = await doctor.save()

        res.status(201).json({token,'rno':saved_Doctor.registrationNumber})
    }
    catch (e) {
        res.status(404).json(e)
    }

})

router.post('/doctor/login', async (req, res) => {
    try {
        const password = req.body.password
        const registrationNumber = req.body.registrationNumber

        console.log(password,registrationNumber)

        const doctor = await Doctor.findOne({ registrationNumber })
        if (!doctor)
            res.status(400).json({ "Error": "Invalid Credentials" })
        else {
            const isPasswordValid = await bcrypt.compare(password, doctor.password)
            console.log(isPasswordValid)

            if (isPasswordValid) {
                console.log(doctor.tokens)
                const token = await doctor.generateAuthToken()
                const saved_Doctor = await doctor.save()
                console.log(saved_Doctor)

                res.status(200).json({ token, 'regnNo': saved_Doctor.registrationNumber })
            }
            else {
                res.status(400).json({ "Error": 'Incorrect Credentials' })
            }

        }
    }
    catch (e) {
        res.status(400).json(e)
    }


})

router.get('/doctor/logout', auth, async (req, res) => {
    try {

        const registrationNumber = req.registrationNumber

        const doctor = await Doctor.findOne({ registrationNumber })
        if (!doctor)
            res.status(404).json({ "Error": "Doctor not found" })
        else {

            doctor.tokens = []
            await Doctor.save()

            res.status(200).json({ "Message": "Logged Out succesfully!!" })

        }
    }
    catch (e) {
        res.status(404).json(e)
    }
})

router.get('/doctor/:rno', auth, async (req, res) => {
    try {
        const regNo = req.params.rno

        const doctor = await Doctor.findOne({ registrationNumber: regNo })
        if (!doctor)
            res.status(404).json({ "Error": "Invalid Credentials" })
        else {
            res.status(200).json({
                'name': doctor.name,
                'registrationNumber': doctor.registrationNumber,
                'address': doctor.address,
                'dob': doctor.dob,
                'email': doctor.email,
                'number': doctor.phoneNumber,
                'college': doctor.college
            })

        }
    }
    catch (e) {
        res.status(404).json(e)
    }


})


module.exports = router
