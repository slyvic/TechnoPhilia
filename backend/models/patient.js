const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    healthId: {
        type: String,
        unique: true
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    dob: {
        type: Date,
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
        unique: true
    },
    gaurdianDetails: {
        type: String,
        required: true,
    },
    aadharNumber: {
        type: String,
        required: true,
        unique: true
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    identifcationMark: {
        type: String,
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    familyHistory: {
        type: String,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

PatientSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

PatientSchema.pre("save", async function (next) {
    if (!this.isModified('aadharNumber')) return next()

    this.aadharNumber = await bcrypt.hash(this.aadharNumber, 10)
    next()
})

PatientSchema.methods.generateAuthToken = async function () {
    try {
        if (this.tokens.length > 1)
            this.tokens.splice(0, 1)
        const token = jwt.sign({ healthId: this.healthId }, process.env.JWT_SECRET_KEY)
        this.tokens.push({ token: token })
        return token
    }
    catch (e) {
        return e
    }
}

const Patient = new mongoose.model('patient', PatientSchema)

module.exports = Patient