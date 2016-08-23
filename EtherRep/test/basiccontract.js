contract('BasicContract', function(accounts) {
  let rep;
  let bc;
  let filter;
  let alice = accounts[0];
  let bob   = accounts[1];
  let contractAddr = null;

  before(function() {
    rep = EtherRep.deployed();
    filter = rep.DeployBasicContract({});
    filter.watch((error, log) => {
      if (error) {
        console.error('err=', error);
      } else {
        contractAddr = log.args.contractt;
      }
    });
  })

  beforeEach(function() {
    contractAddr = null;
    rep.deployBasicContract(alice, bob);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        bc = BasicContract.at(contractAddr);
        resolve(null)
      }, 1000);
    })
  });

  after(function() {
    filter.stopWatching();
  })

  xit('completes when both parties mark it completed', function() {
    return bc.markCompleted({from: alice})
    .then(() => bc.markCompleted({from: bob}))
    .then(() => bc.isCompleted.call())
    .then(assert.isTrue);
  });

  xit('is not completed if only one party has marked it complete', function() {
    return bc.markCompleted({from: alice})
    .then(bc.isCompleted.call.bind(bc))
    .then(assert.isFalse);
  });

  xit('is not completed if one party tries to complete it twice', function() {
    return bc.markCompleted({from: alice})
    .then(bc.markCompleted.bind(bc, {from: alice}))
    .then(bc.isCompleted.call.bind(bc))
    .then(assert.isFalse);
  });

  xit('should chill out', function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 10);
    });
  });

});
