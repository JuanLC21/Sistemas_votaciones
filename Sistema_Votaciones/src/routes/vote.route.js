import express from 'express'
import { create, getAll, getOne } from '../controllers/vote.controller.js'

const voteRouter = express.Router()

voteRouter
    .post('/votes', create)
    .get('/votes', getAll)
    .get('/votes/:id', getOne)

export default voteRouter