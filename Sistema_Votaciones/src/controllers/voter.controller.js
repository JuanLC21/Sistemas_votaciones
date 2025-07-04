import { allData, createData, readData, deleteData } from '../services/voter.service.js'
//CREATE    
export const create = async (req, res) => {
    try {
        const voter = await createData(req.body)
        res.status(201).json(voter)
    } catch (error) {
        console.error(error)
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Duplicate input: a voter with this value already exists.' })
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
        const voters = await allData()
        res.status(200).json(voters)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
//READ
export const getOne = async (req, res) => {
    try {
        const voter = await readData(req.params.id)
        if (!voter) {
            return res.status(404).json({ error: 'voter not found' })
        }
        res.status(200).json(voter)
    } catch (error) {
        console.error(error)
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid voter ID' })
        }
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
//DELETE
export const remove = async (req, res) => {
    try {
        const result = await deleteData(req.params.id)

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'voter not found.' })
        }
        res.status(200).json({ message: 'voter deleted successfully' })
    } catch (error) {
        console.error(error)
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid voter ID' })
        }
        res.status(500).json({ error: 'Internal Server Error' })
  }
}