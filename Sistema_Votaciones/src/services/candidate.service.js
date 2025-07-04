import { Data1 } from "../models/candidate.model.js"

export async function allData () {
    return await Data1.find()
}
export async function createData (candidateData) {
    const newData = new Data1(candidateData)
    return await newData.save()
}
export async function readData (query) {
    return await Data1.findById(query)
}
export async function deleteData (query) {
    return await Data1.deleteOne({_id: query})
}