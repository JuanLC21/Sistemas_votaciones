import express from 'express'
import { getAll, getOne, create, remove } from '../controllers/voter.controller.js'

const voterRouter = express.Router();

voterRouter
    .post('/voters', create)
    .get('/voters', getAll)
    .get('/voters/:id', getOne)
    .delete('/voters/:id', remove)

export default voterRouter