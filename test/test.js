var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server.js');
var should = chai.should();

chai.use(chaiHttp);


describe('Environment Setup',
  it('should connect to server', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(404);
        done();
      });
  }));
