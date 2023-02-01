const { units, long_form } = require('../convertions')

function ConvertHandler() {
  this.getNum = function(input) {

    let num = /[0-9./]+/.exec(input)

    if (!num) {
      return 1
    } else if (num[0].indexOf('/')!== -1) {
        let splitted = num[0].split('/')
        return splitted.length > 2? 'invalid number': splitted[0]/splitted[1]
    } else {
        let result = +num[0] 
        return result
    }
    return 'invalid number'

  };
  
  this.getUnit = function(input) {

    let unit = /[a-zA-z]+/i.exec(input)
    let result = unit[0]

    result = result === 'l'? result.toUpperCase() :
             result ==='L'? result :
             result.toLowerCase();

    if (units.hasOwnProperty(result)) {
      return result
    }

    return 'invalid unit'

  };
  
  this.getReturnUnit = function(initUnit) {
    return units[initUnit]
  };

  this.spellOutUnit = function(unit) {

    let input = /[a-zA-z]+/i.exec(unit)
    let input_unit = input[0]
    input_unit = input_unit === 'l'? input_unit.toUpperCase() :
                 input_unit ==='L'? input_unit :
                 input_unit.toLowerCase();

    if (units.hasOwnProperty(input_unit)) {
      return input_unit;
    }
    return 'invalid unit';

  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let cal = {
      gal: galToL,
      L: 1/galToL,
      mi: miToKm,
      km: 1/miToKm,
      lbs: lbsToKg,
      kg: 1/lbsToKg
    }
    let validate_unit = this.spellOutUnit(initUnit)
    let result = (+initNum * cal[validate_unit]).toFixed(5)
    return +result
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${long_form[initUnit]} converts to ${returnNum} ${long_form[returnUnit]}`
  };
  
}

module.exports = ConvertHandler;
