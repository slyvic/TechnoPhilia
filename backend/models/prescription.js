const mongoose = require('mongoose')

const PrescriptionSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    dateOfVisit: {
        type: Date,
        required: true
    },
    sugarLevel: {
        type: String,
        required: true
    },
    bloodLevel: {
        type: String,
        required: true
    },
    purposeOfVisit: {
        type: String,
        required: true
    },
    testsPrescribed: {
        type: String
    },
    medicinesPrescribed: {
        type: String
    },
    dietPlan: {
        type: String,
    }
})

const Prescription = new mongoose.model('prescription', PrescriptionSchema)

module.exports = Prescription



