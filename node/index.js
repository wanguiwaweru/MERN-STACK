require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()

const mongoose = require('mongoose')
const PORT = process.env.PORT || 5010;

app.use(express.json())
app.use(cors())

const customersRouter = require('./routes/customers')
app.use('/customers', customersRouter)

mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))



