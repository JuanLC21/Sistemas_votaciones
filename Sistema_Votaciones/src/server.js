import express from 'express'
import voterRouter from './routes/voter.route.js'
import candidateRouter from './routes/candidate.route.js'
import voteRouter from './routes/vote.route.js'
import databaseConnection from './config/database.js'

const app = express()
const PORT = 3000

async function startServer() {
    try {
        await databaseConnection()
        app.use(express.json())
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); 
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE'); 
            res.header('Access-Control-Allow-Headers', 'Content-Type'); 
            next();
        })
        app.use('/', voterRouter)
        app.use('/', candidateRouter)
        app.use('/', voteRouter)
        app.listen(PORT, console.log(`server on port ${PORT}`))
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
startServer()