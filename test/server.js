var supertestChai = require('supertest-chai');
var request = supertestChai.request;
var chai = require('chai');
chai.should();
chai.use(supertestChai.httpAsserts);
var server = require('../server/index.js');

var supertest = require('supertest');
var should = chai.should();

describe('Environment Setup', function() {
  it('should connect to server', function(done) {
    request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});
