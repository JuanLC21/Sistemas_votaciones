import mongoose from "mongoose"

const candidateSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    party: { type: String },
    votes: { type: Number, default: 0 }
})

export const Data1 = mongoose.model('Data1', candidateSchema)