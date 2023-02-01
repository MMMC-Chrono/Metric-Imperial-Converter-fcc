'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get((req, res) => {
    let { input } = req.query;

    if (!input) {
      return res.send("invalid input");
    }

    let initNum = convertHandler.getNum(input)
    let initUnit = convertHandler.getUnit(input)
    let returnNum = convertHandler.convert(initNum, initUnit)
    let returnUnit = convertHandler.getReturnUnit(initUnit)
    let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)

    return initNum === 'invalid number' && initUnit === 'invalid unit'? res.send('invalid number and unit') :
           initNum === 'invalid number' ? res.send('invalid number') :
           initUnit === 'invalid unit' ? res.send('invalid unit') :
           res.json({ initNum, initUnit, returnNum, returnUnit, string });

  })

};
