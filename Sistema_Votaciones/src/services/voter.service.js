import { Data } from "../models/voter.model.js"

export async function allData () {
    return await Data.find()
}
export async function createData (voterData) {
    const newData = new Data(voterData)
    return await newData.save()
}
export async function readData (query) {
    return await Data.findById(query)
}
export async function deleteData (query) {
    return await Data.deleteOne({_id: query})
}
