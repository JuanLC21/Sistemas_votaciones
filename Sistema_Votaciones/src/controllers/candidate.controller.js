import { allData, createData, readData, deleteData } from '../services/candidate.service.js'

//CREATE    
export const create = async (req, res) => {
    try {
        const candidate = await createData(req.body)
        res.status(201).json(candidate)
    } catch (error) {
        console.error(error)
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Duplicate input: a candidate with this value already exists.' })
        }
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid input data' })
        }
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
//ALL
export const getAll = async (req, res) => {
    try {
        const candidates = await allData()
        res.status(200).json(candidates)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
//READ
export const getOne = async (req, res) => {
    try {
        const candidate = await readData(req.params.id)
        if (!candidate) {
            return res.status(404).json({ error: 'Candidate not found' })
        }
        res.status(200).json(candidate)
    } catch (error) {
        console.error(error)
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid candidate ID' })
        }
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
//DELETE
export const remove = async (req, res) => {
    try {
        const result = await deleteData(req.params.id)

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Candidate not found.' })
        }
        res.status(200).json({ message: 'Candidate deleted successfully' })
    } catch (error) {
        console.error(error)
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid candidate ID' })
        }
        res.status(500).json({ error: 'Internal Server Error' })
  }
}