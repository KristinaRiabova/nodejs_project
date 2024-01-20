const ducksData = require('../data/ducks.json');
const hensData = require('../data/hens.json');
const geeseData = require('../data/geese.json');

const dataHandlers = {
  getAllObjects: (req, res) => {
    const allObjects = [...ducksData, ...hensData, ...geeseData];
    res.json(allObjects);
  },

  getObjectsByType: (req, res) => {
    const { type } = req.params;
    let objects;

    if (type === 'ducks') objects = ducksData;
    else if (type === 'hens') objects = hensData;
    else if (type === 'geese') objects = geeseData;
    else {
      res.status(404).send('Invalid object type');
      return;
    }

    res.json(objects);
  },

  getObjectById: (req, res) => {
    const { type, id } = req.params;
    let objects;

    if (type === 'ducks') objects = ducksData;
    else if (type === 'hens') objects = hensData;
    else if (type === 'geese') objects = geeseData;
    else {
      res.status(404).send('Invalid object type');
      return;
    }

    const foundObject = objects.find(obj => obj.id == id);

    if (foundObject) {
      res.json(foundObject);
    } else {
      res.status(404).send('Object not found');
    }
  },
};

module.exports = dataHandlers;
