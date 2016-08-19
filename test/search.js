var supertestChai = require('supertest-chai');
var request = supertestChai.request;
var chai = require('chai');
chai.should();
chai.use(supertestChai.httpAsserts);
var server = require('../server/server');
var db = require('../server/db');
var Listing = require('../server/db/models/listing');
var User = require('../server/db/models/user');

var supertest = require('supertest');
var should = chai.should();

db.options.logging = false;

describe('Search Functionality', function() {
  let addUser = (name) => () => User.create({name, facebookId: 'none'});
  let userAddsListing = (listing) => (user) => Listing.create(Object.assign({}, listing, { userId: user.id }));

  let listing1 = {
    name: 'wow, this is crazy',
    description: 'here\'s my number, so call me maybe',
    completed: false
  };

  let listing2 = {
    name: 'Donovan is cool',
    description: 'Casper is crazy',
    completed: true
  };

  beforeEach(function() {
    return db.sync({force:true})
    .then(addUser('casper'))
    .then(userAddsListing(listing1))
    .then(addUser('nat'))
    .then(userAddsListing(listing2));
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

  it('should return item searched for by user id', function(done) {
    request(server)
    .get('/listings?userId=2')
    .end(function(err, res){
      res.body[0].id.should.equal(2);
      done();
    });
  });
});
