const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test("Testing valid whole number input", () => {
        assert.strictEqual(
          convertHandler.getNum('9kg'),
          9,
          "Correctly read valid whole number input"
        );
      });

    test("Testing valid decimal number input", () => {
      assert.strictEqual(
        convertHandler.getNum('9.2kg'),
        9.2,
        "Correctly read valid decimal number input"
      );
    });

    test("Testing valid fractional input", () => {
      assert.strictEqual(
        convertHandler.getNum('9/3kg'),
        3,
        "Correctly read valid fractional input"
      );
    });

    test("Testing valid fractional input with a decimal", () => {
      assert.strictEqual(
        convertHandler.getNum('1/0.5kg'),
        2,
        "Correctly read valid fractional input with a decimal"
      );
    });

    test("Testing double fractional input", () => {
      assert.strictEqual(
        convertHandler.getNum('1/2/3kg'),
        'invalid number',
        "Correctly return an error on a double-fraction"
      );
    });

    test("Testing  when no numerical input is provided", () => {
      assert.strictEqual(
        convertHandler.getNum('kg'),
        1,
        "Correctly return 1 when no numerical input is provided"
      );
    });

    test("Testing valid input unit", () => {

      assert.strictEqual(
        convertHandler.getUnit('9gal'),
        'gal',
        'Correctly read gal'
      )

      assert.strictEqual(
        convertHandler.getUnit('9L'),
        'L',
        'Correctly read L'
      )

      assert.strictEqual(
        convertHandler.getUnit('mi'),
        'mi',
        'Correctly read mi'
      )

      assert.strictEqual(
        convertHandler.getUnit('9km'),
        'km',
        'Correctly read km'
      )

      assert.strictEqual(
        convertHandler.getUnit('9lbs'),
        'lbs',
        'Correctly read lbs'
      )

      assert.strictEqual(
        convertHandler.getUnit('9kg'),
        'kg',
        'Correctly read kg'
      )

    })

    test("Testing invalid input unit", () => {

      assert.strictEqual(
        convertHandler.getUnit('2NoUnit'),
        'invalid unit',
        'Correctly return an error for invalid input unit'
      )

    })

    test("Test the correct return unit for each valid input unit", () => {

      assert.strictEqual(
        convertHandler.getReturnUnit('gal'),
        'L',
        "Correct return unit"
      )

      assert.strictEqual(
        convertHandler.getReturnUnit('L'),
        'gal',
        "Correct return unit"
      )

      assert.strictEqual(
        convertHandler.getReturnUnit('mi'),
        'km',
        "Correct return unit"
      )

      assert.strictEqual(
        convertHandler.getReturnUnit('km'),
        'mi',
        "Correct return unit"
      )

      assert.strictEqual(
        convertHandler.getReturnUnit('lbs'),
        'kg',
        "Correct return unit"
      )

      assert.strictEqual(
        convertHandler.getReturnUnit('kg'),
        'lbs',
        "Correct return unit"
      )

    })

    test('Testing spelled-out string unit', () => {
      assert.strictEqual(
        convertHandler.spellOutUnit('Gal'),
        'gal',
        'Correctly return spelled-out string unit'
      )

      assert.strictEqual(
        convertHandler.spellOutUnit('l'),
        'L',
        'Correctly return spelled-out string unit'
      )

      assert.strictEqual(
        convertHandler.spellOutUnit('KM'),
        'km',
        'Correctly return spelled-out string unit'
      )

      assert.strictEqual(
        convertHandler.spellOutUnit('Mi'),
        'mi',
        'Correctly return spelled-out string unit'
      )

      assert.strictEqual(
        convertHandler.spellOutUnit('lBs'),
        'lbs',
        'Correctly return spelled-out string unit'
      )

      assert.strictEqual(
        convertHandler.spellOutUnit('kG'),
        'kg',
        'Correctly return spelled-out string unit'
      )
    })

    test("Convert gal to L", () => {
      assert.strictEqual(
        convertHandler.convert('9', 'gal'),
        34.06869,
        'Correctly converted gal to L'
      )
    })

    test("Convert L to gal", () => {
      assert.strictEqual(
        convertHandler.convert('9', 'L'),
        2.37755,
        'Correctly converted L to gal'
      )
    })

    test("Convert mi to km", () => {
      assert.strictEqual(
        convertHandler.convert('9', 'mi'),
        14.48406,
        'Correctly converted mi to km'
      )
    })

    test("Convert km to mi", () => {
      assert.strictEqual(
        convertHandler.convert('9', 'km'),
        5.59235,
        'Correctly converted km to mi'
      )
    })

    test("Convert lbs to kg", () => {
      assert.strictEqual(
        convertHandler.convert('9', 'lbs'),
        4.08233,
        'Correctly converted lbs to kg'
      )
    })

    test("Convert kg to lbs", () => {
      assert.strictEqual(
        convertHandler.convert('9', 'kg'),
        19.84162,
        'Correctly converted kg to lbs'
      )
    })
    
});
console.log('Mocha working')