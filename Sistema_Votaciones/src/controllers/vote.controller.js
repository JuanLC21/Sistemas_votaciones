import { allData, createData, readData } from '../services/vote.service.js'

//CREATE    
export const create = async (req, res) => {
    try {
        const vote = await createData(req.body)
        res.status(201).json(vote)
    } catch (error) {
        console.error(error)
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Duplicate input: vote with this value already exists.' })
        }
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid input data' })
        }
        res.status(500).json({ error: 'Internal Server Error' })
    }
};

//ALL
export const getAll = async (req, res) => {
    try {
        const votes = await allData()
        res.status(200).json(votes)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
//READ
export const getOne = async (req, res) => {
    try {
        const vote = await readData(req.params.id)
        if (!vote) {
            return res.status(404).json({ error: 'vote not found' })
        }
        res.status(200).json(vote)
    } catch (error) {
        console.error(error)
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid vote ID' })
        }
        res.status(500).json({ error: 'Internal Server Error' })
    }
}