import mongoose from "mongoose"

const voterSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true },
    has_voted: { type: Boolean, default: false },
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'Data1' }
})

export const Data = mongoose.model('Data', voterSchema)