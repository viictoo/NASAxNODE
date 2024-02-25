// flexible server for req resp and websockets

const http = require("http")

const app = require("./app")

// destructuring data
const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000

// use express as middleware for builtin
const server = http.createServer(app)

async function startServer() {
    await loadPlanetsData();
    server.listen(PORT, () => {
      console.log(`Listening on Port ${PORT}`);
    })
}

startServer();
