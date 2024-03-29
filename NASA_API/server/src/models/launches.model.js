// map: preserve order of items

// const { httpGetAllLaunches } = require("../routes/launches/launches.controller");

// data access function
const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket:  'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442',
  customer: ['ME', 'NASA', 'SPACEX'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch)

function getAllLaunches() {
  return Array.from(launches.values())
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber, Object.assign(launch, {
      customer: ['me', 'NASA'],
      upcoming: true,
      success: true,
      flightNumber: latestFlightNumber})
      )
  // return launch
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
}