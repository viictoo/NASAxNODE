// express middleware
const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const path = require('path')
const cors =  require('cors');
const express = require("express")

const planetsRouter = require("./routes/planets/planets.router")
const launchesRouter = require("./routes/launches/launches.router")


let accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, '..', 'log')
})


const app = express()

// security related middleware
app.use(cors({
  origin: "http://localhost:3000"
}));

// logging
// app.use(morgan('combined'))
app.use(morgan('combined', { stream: accessLogStream
}))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/planets', planetsRouter)
app.use('/launches', launchesRouter)
app .get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})
module.exports = app