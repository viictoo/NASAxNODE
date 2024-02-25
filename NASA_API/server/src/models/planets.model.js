const { parse } = require('csv-parse')
const fs = require('fs');
const { resolve } = require('path');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6;
}

/*
const promise = new Promise();
promise.then((result) => {
})
const result = await promise

*/

function loadPlanetsData () {
return new Promise((resolve, reject) => {
  fs.createReadStream('./data/kepler_data.csv')
  //  readable.pipe(writable)
  .pipe(parse({
    comment: '#',
    columns: true,
  }))
  .on('data', (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on('error', (error) => {
    // console.log(error);
    reject(err);
  })
  .on('end', () => {
    console.log(habitablePlanets.map((planet) => {
      return planet['kepler_name']
    }));
    console.log(`${habitablePlanets.length} habitable planets found`);
    resolve();
  })
});
}

function getAllPlanets () {
  return habitablePlanets
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};