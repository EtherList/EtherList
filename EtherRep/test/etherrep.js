let Promise = require('bluebird');

function repeat(action, nTimes) {
  let p = action();
  for (let i = 1; i < nTimes; i++) {
    p.then(action);
  }
  return p;
}

Promise.prototype.repeat = function(action, nTimes) {
  let p = this;
  for (let i = 0; i < nTimes; i++) {
    p = p.then(action);
  }
  return p;
};

contract('Formerly EtherRep', function(accounts) {
  let rep;

  beforeEach(function() {
    rep = EtherRep.deployed();
  });

  xit('defaults to zero reputation', function() {
    return rep.getReputation.call(accounts[0]).then(reputation => {
      assert.equal(reputation.valueOf(), 0, "default reputation wasn't 0");
    });
  });

  xit('defaults to zero ratings', function() {
    return rep.getNumRatings.call(accounts[0])
      .then(numRatings => {
        assert.equal(numRatings.valueOf(), 0, "defualt number of ratings wasn't 0");
      });
  });

  xit('gets the number of ratings', function() {
    return rep.increaseRep(accounts[0])
      .then(() => rep.decreaseRep(accounts[0])
        .then(rep.getNumRatings.call.bind(rep, accounts[0]))
        .then(numRatings => {
          assert.equal(numRatings.valueOf(), 2, 'number of ratings should be 2')
        }));
  });

  xit('increases reputation', function() {
    return rep.getReputation.call(accounts[0])
      .then(curReputation => {
        return rep.increaseRep(accounts[0])
          .then(rep.getReputation.call.bind(rep, accounts[0]))
          .then(newReputation => assert.equal(newReputation.valueOf(), Number(curReputation + 10), 'did not increase reputation'));
      });
  });

  xit('decreases reputation by 10', function() {
    return repeat(() => rep.increaseRep(accounts[1]), 3)
      .then(() => rep.decreaseRep(accounts[1]))
      .then(rep.getReputation.call.bind(rep, accounts[1]))
      .then(reputation => assert.equal(reputation.valueOf(), 20, 'did not decrease reputation by 10'));
  });

  xit('decreases reputation by percentage', function() {
    return repeat(() => rep.increaseRep(accounts[2]), 20)
      .then(() => rep.decreaseRep(accounts[2]))
      .then(rep.getReputation.call.bind(rep, accounts[2]))
      .then(newReputation => assert.equal(newReputation.valueOf(), 180, 'did not decrease reputation by percentage'));
  });
});
