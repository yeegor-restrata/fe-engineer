const { createFeatureCollection } = require("../util/feature");

const createPersonFeature = (
  name,
  surname,
  status,
  position
) => ({
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [position.lng, position.lat],
  },
  properties: {
    name,
    surname,
    status
  }
})

const statuses = {
  SAFE: 'SAFE',
  NOT_SAFE: 'NOT_SAFE',
  UNKNOWN: 'UNKNOWN'
}

module.exports = (req, res, next) => {
  const featureCollection = createFeatureCollection([
    createPersonFeature('John', 'Johansson', statuses.NOT_SAFE, {
      "lat": 34.0522,
      "lng": -118.2437
    }),

    createPersonFeature('Anderson', 'Silva', statuses.SAFE, {
      "lat": 43.0962,
      "lng": -79.0377
    }),

    createPersonFeature('Alexander', 'Gustafsson', statuses.SAFE, {
      "lat": 59.3293,
      "lng": 18.0686
     }),

    createPersonFeature('Alex', 'Pereira', statuses.UNKNOWN, {
      "lat": -33.8688,
      "lng": 151.2093
    }),

    createPersonFeature('Bill', 'Jobs', statuses.SAFE, {
      "lat": 47.6400,
      "lng": -122.1290
    }),

    createPersonFeature('Steve', 'Gates', statuses.UNKNOWN, {
      "lat": 37.33182,
      "lng": -122.03118
    }),

    createPersonFeature('John', 'Cena', statuses.SAFE, {
      "lat": 40.7505,
      "lng": -73.9934
    }),

    createPersonFeature('Charles', 'Darwin', statuses.SAFE, {
      "lat": 52.7111,
      "lng": -2.7593
    }),

    createPersonFeature('Francis', 'Ngannou', statuses.SAFE, {
      "lat": 6.2825,
      "lng": 10.1496
     }),

    createPersonFeature('Peter', 'Quill', statuses.NOT_SAFE, {
      "lat": 48.8583701,
      "lng": 2.2922926
    }),
  ]);

  res.json(featureCollection);
}