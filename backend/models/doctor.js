const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator =require('express-validator')

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique:true
    },
    registrationNumber: {
        type: String,
        required: true,
        unique:true
    },
    cityofPractice: {
        type: String,
        required: true,
    },
    clinics: {
        type: String,
    },
    speciality: {
        type: String,
    },
    gradYear: {
        type: String,
    },
    college: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

DoctorSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

DoctorSchema.methods.generateAuthToken = async function () {
    try {
        if (this.tokens.length > 1)
            this.tokens.splice(0, 1)
        const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET_KEY)
        this.tokens.push({ token: token })
        return token
    }
    catch (e) {
        return e
    }
}

const Doctor = new mongoose.model('doctor', DoctorSchema)

module.exports = Doctor