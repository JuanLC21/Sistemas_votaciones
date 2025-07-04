import express from 'express'
import { getAll, getOne, create, remove } from '../controllers/candidate.controller.js'

const candidateRouter = express.Router();

candidateRouter
    .post('/candidates', create)
    .get('/candidates', getAll)
    .get('/candidates/:id', getOne)
    .delete('/candidates/:id', remove)

export default candidateRouter