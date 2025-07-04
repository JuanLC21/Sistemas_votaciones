import { Data2 } from "../models/vote.model.js"
import { Data } from "../models/voter.model.js"

export async function allData () {
    return await Data2.find()
}
export async function createData (voteData) { 
    const newData = new Data2(voteData)
    const testData = await Data2.find({voter_id: newData.candidate_id})
    const testData1 = await Data2.find({candidate_id: newData.voter_id})

    if (testData.length === 0 && testData1.length === 0) {
        await Data.findByIdAndUpdate(newData.voter_id, {has_voted: true})
        return await newData.save()
    } else { console.log('ID already asigned')}
}
export async function readData (query) {
    return await Data2.findById(query)
}