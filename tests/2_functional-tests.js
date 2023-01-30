const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test("GET request to /api/convert", function(done) {
        chai
            .request(server)
            .get('/api/convert')
            .end(function(err, res) {
                assert.equal(res.status, 200)
                assert.equal(res.body, {
                    
                })
            })
    })
});
