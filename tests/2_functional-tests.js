const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test("GET request to /api/convert", function(done) {
        chai
            .request(server)
            .get('/api/convert?input=10L')
            .end(function(err, res) {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body, {
                    initNum: 10,
                    initUnit: "L",
                    returnNum: 2.64172,
                    returnUnit: "gal",
                    string: "10 liters converts to 2.64172 gallons"
                });
                done();
                console.log(res.body)
            });
    })
});
