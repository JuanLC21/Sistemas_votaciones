import mongoose from 'mongoose'

async function databaseConnection() {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log('¡Database connection success!')
    } catch (err) {
        console.error('Database connection failed')
        console.log(err.message)
        process.exit(1)
    }
}
export default databaseConnection