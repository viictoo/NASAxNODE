// bridge the model and router for launches
// get requests and responses
const { addNewLaunch, getAllLaunches } = require('../../models/launches.model')


function httpAddNewLaunch(req, res) {
  // receive iterable object and convert it to an array
  const launch = req.body;

  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
    return res.status(400).json({error: 'Bad Request'})
  }

  // validation

  // moment api for adding, subtracting and adding timezones to dates
  // pass dates as strings in json
  // unix timestamp or date object
  launch.launchDate = new Date(launch.launchDate)
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({error: "Invalid Date"})
  }
  addNewLaunch(launch)
  return res.status(201).json(launch)
}

function httpGetAllLaunches(req, res) {
  // receive iterable object and convert it to an array
  return res.status(200).json(getAllLaunches())
}

function httpAbortLaunch(req, res) {
  const launchId = req.params.id

  // if launchId exists
  if launchId{
    return res.status(404).json({
      error: 'Launch Not Found'
    })
  }
  // receive iterable object and convert it to an array
  return res.status(200).json('aborted')
}

module.exports = {
  httpAddNewLaunch,
  httpGetAllLaunches,
  httpAbortLaunch
}