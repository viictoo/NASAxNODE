const { getAllPlanets } = require("../../models/planets.model")

// return: ensure only one response is sent
function httpGetAllPlanets(req, res) {
  // return res.status(200).json(getAllPlanets?())
  return res.status(200).json(getAllPlanets())
  // return res.status(200).json('ok')
}

module.exports = {
  httpGetAllPlanets
}