var supertestChai = require('supertest-chai');
var request = supertestChai.request;
var chai = require('chai');
chai.should();
chai.use(supertestChai.httpAsserts);
var server = require('../server/server');
var db = require('../server/db');
var Listing = require('../server/db/models/listing');

var supertest = require('supertest');
var should = chai.should();

db.options.logging = false;

describe('Search Functionality', function() {
  let listing1 = {
    name: 'wow, this is crazy',
    description: 'here\'s my number, so call me maybe'
  };

  let listing2 = {
    name: 'Donovan is cool',
    description: 'Casper is crazy'
  };

  beforeEach(function() {
    return db.sync()
    .then(() => Listing.truncate())
    .then(() => Listing.create(listing1))
    .then(() => Listing.create(listing2));
  });

  it('should fetch listings', function(done) {
    request(server)
      .get('/listings')
      .end(function(err, res){
        res.body.length.should.equal(2);
        done();
      });
  });

  it('should return item searched for by name', function(done) {
    request(server)
    .get('/listings?q=wow')
    .end(function(err, res){
      res.body[0].name.should.equal('wow, this is crazy');
      done();
    });
  });

  it('should return item searched for by description', function(done) {
    request(server)
      .get('/listings?q=call+me')
      .end(function(err, res){
        res.body[0].description.should.equal('here\'s my number, so call me maybe');
        done();
      });
  });

  it('should search both name and description', function(done) {
    request(server)
      .get('/listings?q=crazy')
      .end(function(err, res){
        res.body.length.should.equal(2);
        done();
      });
  });
});
