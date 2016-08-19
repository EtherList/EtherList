var supertestChai = require('supertest-chai');
var request = supertestChai.request;
var chai = require('chai');
var expect = chai.expect;
chai.use(supertestChai.httpAsserts);
var User = require('../server/db/models/user');
var server = require('../server/server');
var db = require('../server/db');

var supertest = require('supertest');
var should = chai.should();

db.options.logging = false;

describe('/profile', function() {
  let addUser = (name) => () => User.create({name, privateKey: 'uh oh', facebookId: 'none'});

  beforeEach(function() {
    return db.sync({force:true})
    .then(addUser('casper'))
    .then(addUser('nat'))
  });

  it('returns the profile for given user id', function(done) {
    request(server)
    .get('/profile?userId=1')
    .end(function(err, res) {
      expect(res.body.id).to.equal(1);
      expect(res.body.name).to.equal('casper');
      expect(res.body.privateKey).to.be.null;
      done();
    });
  });
});
