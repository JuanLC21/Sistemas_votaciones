import mongoose from "mongoose"

const candidateSchema = new mongoose.Schema({
    voter_id: { type: String, required: true, unique: true }, 
    candidate_id: { type: String, required: true, unique: true }
})

export const Data2 = mongoose.model('Data2', candidateSchema)