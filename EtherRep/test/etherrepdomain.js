var wait = () => {
  return new Promise(resolve => {
    setTimeout(() => { resolve(); }, 500)
  });
}

contract('EtherRepDomain', function(accounts) {
  //Define variables and dependencies
  let Promise = require('bluebird');
  let repDomain;
  let erEnabled;
  let el;
  let elEnabled;
  let rep;
  let repDb;
  let perms;
  let permsDb;
  let cp;
  let AddedContract;
  let SetAddress;
  let resultAC = null;
  let resultSA = null;
  let addressSA = null;
  let resultRC = null;
  let nameRC = null;
  let resultR = null;

  //Set event listeners for all tests in file
  before(function() {
    //Deploy contracts in migrations/2_deploy_contracts.js
    repDomain = EtherRepDomain.deployed();
    erEnabled = EtherRepEnabled.deployed();
    el = EtherList.deployed();
    elEnabled = EtherListEnabled.deployed();
    rep = Bank.deployed();
    repDb = RepDb.deployed();
    perms = Permissions.deployed();
    permsDb = PermissionsDb.deployed();
    cp = ContractProvider.deployed();

    //set listeners for contracts' emitted events
    SetAddress = erEnabled.SetERAddress({});
    AddedContract = repDomain.AddedContract({});
    RemovedContract = repDomain.RemovedContract({});
    Removed = repDomain.Removed({});

    //Initialize listeners
    SetAddress.watch((error, log) => {
      if (error) {
        console.error('err=', error);
      } else {
        resultSA = log.args.result;
        addressSA = log.args.addr;
      }
    });

    AddedContract.watch((error, log) => {
      if (error) {
        console.error('err=', error);
      } else {
        resultAC = log.args.result;
        addressAC = log.args.addr;
      }
    });

    RemovedContract.watch((error, log) => {
      if (error) {
        console.error('err=', error);
      } else {
        resultRC = log.args.result;
        nameRC = log.args.name;
      }
    });

    Removed.watch((error, log) => {
      if (error) {
        console.error('err=', error);
      } else {
        resultR = log.args.result;
      }
    })

  });

  //Clear info in listeners before each test
  beforeEach(function() {
    //Clear info stored to listeners
    resultAC = null;
    addressAC = null;
    resultSA = null;
    addressSA = null;
    resultRC = null;
    nameRC = null;
    resultR = null;
    
    //Call any new contracts if necessary
    
    //Use setTimeout to grab info from new c after 1 second

  });

  //After all test in file ran, stop listening for events
  after(function() {
    //clear listeners
    AddedContract.stopWatching();
    SetAddress.stopWatching();
    RemovedContract.stopWatching();
    Removed.stopWatching();
  })

  it('can set EtherRepEnabled EREP variable', function() {
  return erEnabled.setEtherRepAddress(repDomain.address)
    .then(transactionId => {
      assert.equal(resultSA, erEnabled.EREP, "EtherRep was unable to set EREP of EtherRepEnabled");
      assert.equal(addressSA, erEnabled.EREP, "EtherRep was unable to set EREP of EtherRepEnabled");
    });
  });

  it('adds contract FundManager', function() {
    return repDomain.addContract('FundManager', el.address)
    .then(wait)
    .then(() => {
      assert.equal(resultAC, true, "unable to add contract FundManager");
      assert.equal(addressAC, el.address, "unable to add contract FundManager");
    });
  });

  it('can add contract Bank', function() {
    return repDomain.addContract('Bank', repDomain.address)
    .then(wait)
    .then(() => {
      assert.equal(resultAC, true, "unable to add contract Bank");
      assert.equal(addressAC, repDomain.address, "unable to add contract Bank");
    });
  });

  //TODO: convert binary back to string or vice versa for testing
  it('can remove contract Bank', function() {
    return repDomain.removeContract('Bank')
    .then(wait)
    .then(() => {
      assert.equal(resultRC, true, "unable to remove contract Bank");
      assert.equal(nameRC, '0x42616e6b00000000000000000000000000000000000000000000000000000000', "unable to remove contract Bank");
    });
  });

  it('disallows other contracts that called EtherRepEnabled to join EtherRepDomain', function() {
    return repDb.setEtherRepAddress(repDb.address)
    .then(wait)
    .then(repDomain.addContract('repDb', repDb.address))
    .then(wait)
    .then(() => {
      //assert.equal(repDb.EREP, repDb.address, "repDb should be able to set EREP itself");
      assert.equal(resultAC, false, "should not add contract w/ different EREP to join EtherRepDomain");
      assert.equal(addressAC, repDb.address, "EtherRepDomain should have called the function");
    });
  });


  it('can remove itself', function() {
    return repDomain.remove()
    .then(wait)
    .then(() => {
      assert.equal(resultR, true, "unable to remove contract Bank");
    });
  });

});